import { readdirSync, readFileSync, statSync } from 'node:fs';
import { resolve, relative, join } from 'node:path';

// Target directory defaults to src/telyra
const defaultTargets = ['src/telyra'];
const cliArgs = process.argv.slice(2);
const targetPaths = cliArgs.length > 0 ? cliArgs : defaultTargets;

// Unicode emoji range: includes flags, symbols, pictographs, dingbats
// Excludes legal typography marks: copyright (\u00A9), registered (\u00AE), trademark (\u2122)
const EMOJI_REGEX = /(?:[\u{1F1E6}-\u{1F1FF}\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]|(?!\u00A9|\u00AE|\u2122)\p{Extended_Pictographic})/u;

const BANNED_RULES = [
  {
    id: 'banned-emoji',
    label: 'Emoji detected',
    check: (line) => {
      const match = line.match(EMOJI_REGEX);
      return match ? match[0] : null;
    },
  },
  {
    id: 'banned-open-source',
    label: 'Banned term: "open source"',
    check: (line) => {
      const match = line.match(/\bopen\s+source\b/i);
      return match ? match[0] : null;
    },
  },
  {
    id: 'banned-acik-kaynak',
    label: 'Banned term: "acik kaynak"',
    check: (line) => {
      const trLower = line.toLocaleLowerCase('tr-TR');
      if (trLower.includes('açık kaynak')) {
        return 'açık kaynak';
      }
      const match = line.match(/\baçık\s+kaynak\b/i);
      return match ? match[0] : null;
    },
  },
  {
    id: 'banned-foss',
    label: 'Banned term: "foss"',
    check: (line) => {
      const match = line.match(/\bfoss\b/i);
      return match ? match[0] : null;
    },
  },
  {
    id: 'banned-superlative-percent-100',
    label: 'Banned superlative: "%100"',
    check: (line) => {
      const match = line.match(/(?:% ?100)/i);
      return match ? match[0] : null;
    },
  },
  {
    id: 'banned-superlative-rakipsiz',
    label: 'Banned superlative: "rakipsiz"',
    check: (line) => {
      const trLower = line.toLocaleLowerCase('tr-TR');
      if (trLower.includes('rakipsiz')) {
        return 'rakipsiz';
      }
      const match = line.match(/\brakipsiz\b/i);
      return match ? match[0] : null;
    },
  },
  {
    id: 'banned-superlative-devrimsel',
    label: 'Banned superlative: "devrimsel"',
    check: (line) => {
      const trLower = line.toLocaleLowerCase('tr-TR');
      if (trLower.includes('devrimsel')) {
        return 'devrimsel';
      }
      const match = line.match(/\bdevrimsel\b/i);
      return match ? match[0] : null;
    },
  },
  {
    id: 'banned-term-model-d',
    label: 'Banned term: "model d"',
    check: (line) => {
      const match = line.match(/\bmodel\s+d\b/i);
      return match ? match[0] : null;
    },
  },
];

const IGNORED_DIRS = new Set(['node_modules', '.git', 'dist', 'dist-ssr', '.superpowers']);
const SCANNED_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.css', '.json', '.html', '.md', '.svg']);

function collectFiles(targetPath, fileList = []) {
  const fullPath = resolve(process.cwd(), targetPath);
  let stat;
  try {
    stat = statSync(fullPath);
  } catch {
    console.warn(`[WARN] Target path not found: ${targetPath}`);
    return fileList;
  }

  if (stat.isFile()) {
    fileList.push(fullPath);
    return fileList;
  }

  if (stat.isDirectory()) {
    const entries = readdirSync(fullPath, { withFileTypes: true });
    for (const entry of entries) {
      if (IGNORED_DIRS.has(entry.name)) {
        continue;
      }
      const childPath = join(fullPath, entry.name);
      if (entry.isDirectory()) {
        collectFiles(childPath, fileList);
      } else if (entry.isFile()) {
        const ext = entry.name.slice(entry.name.lastIndexOf('.')).toLowerCase();
        if (SCANNED_EXTENSIONS.has(ext)) {
          fileList.push(childPath);
        }
      }
    }
  }

  return fileList;
}

function runVerification() {
  const startTime = Date.now();
  console.log('[TELYRA VERIFICATION GATE] Starting standards verification...');
  console.log(`[TELYRA VERIFICATION GATE] Scan targets: ${targetPaths.join(', ')}`);

  const files = [];
  for (const target of targetPaths) {
    collectFiles(target, files);
  }

  console.log(`[TELYRA VERIFICATION GATE] Found ${files.length} files to scan.`);

  const violations = [];
  let totalLinesScanned = 0;

  for (const filePath of files) {
    const relativePath = relative(process.cwd(), filePath);
    // Never flag the verification gate script itself
    if (relativePath.includes('verify-telyra-standards.mjs')) {
      continue;
    }
    const content = readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    totalLinesScanned += lines.length;

    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      for (const rule of BANNED_RULES) {
        const matchResult = rule.check(line);
        if (matchResult) {
          violations.push({
            file: relativePath,
            line: lineNumber,
            ruleId: rule.id,
            ruleLabel: rule.label,
            match: matchResult,
            snippet: line.trim(),
          });
        }
      }
    });
  }

  const durationMs = Date.now() - startTime;

  if (violations.length > 0) {
    console.error(`\n[FAIL] TELYRA standards verification failed with ${violations.length} violation(s):\n`);
    for (const v of violations) {
      console.error(`  - ${v.file}:${v.line} [${v.ruleLabel}]`);
      console.error(`    Match: "${v.match}"`);
      console.error(`    Line:  ${v.snippet}\n`);
    }
    console.error(`[SUMMARY] ${files.length} files, ${totalLinesScanned} lines scanned in ${durationMs}ms.`);
    console.error('[STATUS] FAILED: Please remove all emojis, banned superlatives, and forbidden terms.');
    process.exit(1);
  }

  console.log(`\n[PASS] All ${files.length} files passed TELYRA standards check (${totalLinesScanned} lines scanned in ${durationMs}ms).`);
  console.log('[PASS] Zero emojis, zero open-source mentions, zero banned superlatives found.');
  process.exit(0);
}

runVerification();
