export type Language = 'tr' | 'en'

export interface PillarItem {
  id: string
  tag: string
  title: string
  description: string
  details: string[]
  icon: string
  metric?: string
  badge?: string
}

export interface FeatureItem extends PillarItem {}

export interface ComparisonRow {
  metric: string
  telyra: string
  telyraHighlight: boolean
  tivimate: string
  standard: string
}

export interface DownloadItem {
  id: string
  title: string
  targetDevice: string
  version: string
  fileName: string
  fileSize: string
  downloadUrl: string
  sha256: string
  releaseDate: string
  minSdk: string
}

export interface HudTelemetryPreset {
  channelName: string
  programTitle: string
  resolution: string
  framerate: string
  codec: string
  decoder: string
  colorSpace: string
  bitrate: string
  audioFormat: string
  socketBuffer: string
  bufferDuration: string
  droppedFrames: string
  afrState: string
  shaderEngine: string
  hardwareTunneling: boolean
}

export interface PrivacyModalSection {
  title: string
  content: string
  bullets?: string[]
  isWarning?: boolean
}

export interface CodecSpecRow {
  format: string
  profile: string
  decoding: string
  capabilities: string
}

export interface ChipsetSpecRow {
  name: string
  target: string
  decoder: string
  capabilities: string
}

export interface AudioSpecRow {
  format: string
  passthrough: string
  channels: string
  standards: string
}

export interface TechnicalSpecGroup {
  id: string
  title: string
  description: string
  chipsets?: ChipsetSpecRow[]
  videoCodecs?: CodecSpecRow[]
  audioCodecs?: AudioSpecRow[]
  items?: Array<{
    name: string
    detail: string
    status?: string
    highlight?: boolean
  }>
}

export interface TelyraContent {
  meta: {
    title: string
    description: string
    canonical: string
  }
  nav: {
    features: string
    hud: string
    comparison: string
    specs?: string
    license?: string
    downloads: string
    privacy: string
    backToPortfolio: string
    directApk: string
  }
  hero: {
    badge: string
    headline: string
    headlinePrefix: string
    headlineGradient: string
    headlineSuffix: string
    subtitle: string
    ctaDownloadTv: string
    ctaDownloadMobile: string
    ctaDownloaderCode: string
    copyButton: string
    copiedFeedback: string
    liveBadge: string
  }
  mockup: {
    label: string
    title: string
    subtitle: string
    toggleTv: string
    toggleMobile: string
    fastZappingLabel: string
    hudViewLabel: string
    remoteHint: string
    tvTabs: {
      home: string
      live: string
      guide: string
      movies: string
      detail: string
      hud: string
      sources: string
    }
    mobileTabs: {
      player: string
      stats: string
      live: string
      onboarding: string
    }
    hudModes: {
      off: string
      compact: string
      detailed: string
    }
    hudLabels: {
      recLive: string
      showHud: string
      program: string
      resolution: string
      decoder: string
      framerate: string
      shader: string
      bitrate: string
      audio: string
      afr: string
      switchProfile: string
      compactBtn: string
      closeBtn: string
    }
    presets: HudTelemetryPreset[]
  }
  pillars: {
    label: string
    title: string
    subtitle: string
    items: PillarItem[]
  }
  features: {
    label: string
    title: string
    subtitle: string
    items: FeatureItem[]
  }
  specs: {
    label: string
    title: string
    subtitle: string
    chipsets: {
      title: string
      description: string
      rows: ChipsetSpecRow[]
    }
    videoCodecs: {
      title: string
      description: string
      rows: CodecSpecRow[]
    }
    audioCodecs: {
      title: string
      description: string
      rows: AudioSpecRow[]
    }
    groups?: TechnicalSpecGroup[]
  }
  comparison: {
    label: string
    title: string
    subtitle: string
    headers: {
      metric: string
      telyra: string
      tivimate: string
      standard: string
    }
    rows: ComparisonRow[]
    trademarkNotice: string
  }
  downloads: {
    label: string
    title: string
    subtitle: string
    downloaderCodeTitle: string
    downloaderCodeDesc: string
    howToInstallTitle: string
    steps: { num: string; text: string }[]
    directTitle: string
    verifiedBadge: string
    labels: {
      version: string
      fileSize: string
      minSdk: string
      downloadBtnText: string
      checksum: string
      copyChecksum: string
      copiedChecksum: string
    }
    items: DownloadItem[]
  }
  privacy: {
    label: string
    title: string
    subtitle: string
    zeroDataTitle: string
    zeroDataDesc: string
    disclaimerTitle: string
    disclaimerText: string
    fullPolicyBtn: string
    closeModal: string
    modal: {
      title: string
      effectiveDateLabel: string
      effectiveDate: string
      sections: PrivacyModalSection[]
    }
  }
  footer: {
    aboutTelyra: string
    builtBy: string
    allRights: string
    disclaimerNotice: string
  }
}

const TR_PILLARS: PillarItem[] = [
  {
    id: 'pillar-performance',
    tag: 'BELLEK VE KARE HIZI YÖNETİMİ',
    title: '60 FPS Kararlı Arayüz ve Düşük Bellek Bütçesi',
    description: '<45MB JVM bellek bütçesi, Amlogic & MediaTek çipsetlerde sıfır GC takılması. Saf Kotlin ve optimize Jetpack Compose TV arayüzü ile 10-foot kumanda ergonomisi.',
    details: [
      '<45MB JVM bellek bütçesi ile düşük bellekli TV çubuklarında bellek yetersizliği (OOM) kaynaklı çökmeleri engelleme',
      'Amlogic ve MediaTek çipsetlerde ART/Dalvik çöp toplayıcı (GC) duraklamalarını önleyen nesne havuzlama mimarisi',
      '60 FPS kararlı D-Pad kumanda odaklanma animasyonları ve gecikmesiz donanım tepkisi',
      'Düşük güçlü donanımlarda arka plan yükünü asgariye indiren adaptif bellek muhafızı',
    ],
    icon: 'cpu',
    metric: '<45MB / 60 FPS',
    badge: 'Sıfır GC Takılması',
  },
  {
    id: 'pillar-sources',
    tag: 'PROTOKOL VE KAYNAK DESTEĞİ',
    title: 'Evrensel Medya Kaynakları Entegrasyonu',
    description: 'M3U/M3U8 çalma listeleri, Xtream Codes API, Stalker / MAG portal, Jellyfin, Plex ve HTTPS Stremio eklentileri tek çatı altında.',
    details: [
      'M3U ve M3U8 çalma listeleri için çok iş parçacıklı yerel ayrıştırma hattı',
      'Xtream Codes API ve Stalker / MAG portal kimlik doğrulama ve kategori senkronizasyonu',
      'Yerel ağdaki Jellyfin ve Plex medya sunucularına doğrudan bağlantı ve meta veri eşleme',
      'HTTPS tabanlı harici Stremio eklentileriyle genişletilebilir medya kataloğu',
    ],
    icon: 'grid',
    metric: '6 Protokol',
    badge: 'Geniş Format Desteği',
  },
  {
    id: 'pillar-player',
    tag: 'DONANIM İVMELİ ÇÖZÜCÜ',
    title: 'Çift Çekirdekli Oynatıcı Motoru',
    description: 'Media3 ExoPlayer & LibVLC çift motor mimarisi, H.264, HEVC, AV1 donanımsal çözücüler ve kesintisiz otomatik hata toleransı.',
    details: [
      'Google Media3 ExoPlayer ana yürütme motoru ve LibVLC ikincil donanım yedekleme mimarisi',
      'H.264/AVC, H.265/HEVC Main 10 ve modern AV1 akışlar için doğrudan VPU donanım çözücüsü',
      'Spor yayınlarındaki 1080i interlaced akışlar için donanımsal tarak giderme (deinterlacing)',
      'HDMI 2.1 Otomatik Kare Hızı (AFR) eşleme ile 24p, 50Hz ve 60Hz panel senkronizasyonu',
    ],
    icon: 'zap',
    metric: 'ExoPlayer + LibVLC',
    badge: 'Donanım Çözücü',
  },
  {
    id: 'pillar-security',
    tag: 'GÜVENLİK VE MAHREMİYET',
    title: 'Kriptografik Donanım İzolasyonu',
    description: 'AndroidKeyStore StrongBox AES-256 yerel şifreleme, sıfır telemetri, sıfır analitik takip ve sıfır reklam.',
    details: [
      'Kullanıcı kimlik bilgileri cihazın donanımsal güvenlik modülünde (TEE / StrongBox) AES-256 ile şifrelenir',
      'Kişisel veriler, izleme kütükleri veya oynatma geçmişi hiçbir harici sunucuya iletilmez',
      'Sıfır telemetri ve sıfır harici takip kütüphanesi: Reklam SDK\'ları ve kullanıcı profilleme kodları barındırmaz',
      'Yerel SQLite FTS4 tam metin indeksleme ile ağ bağlantısı gerektirmeyen anlık EPG ve kanal araması',
    ],
    icon: 'shield',
    metric: 'AES-256 StrongBox',
    badge: 'Sıfır Telemetri',
  },
]

const EN_PILLARS: PillarItem[] = [
  {
    id: 'pillar-performance',
    tag: 'MEMORY & FRAME RATE GOVERNANCE',
    title: '60 FPS Sustained Interface & Low Memory Ceiling',
    description: '<45MB JVM heap budget with zero GC pauses across Amlogic & MediaTek chipsets. Pure Kotlin and optimized Jetpack Compose TV runtime tailored for 10-foot remote ergonomics.',
    details: [
      '<45MB JVM heap ceiling preventing Out-Of-Memory (OOM) termination on resource-constrained TV sticks',
      'Object allocation pooling eliminating ART/Dalvik garbage collection pauses on Amlogic and MediaTek SoCs',
      'Fluid 60 FPS D-Pad focus navigation animations with zero input latency',
      'Adaptive memory supervisor minimizing background overhead and unneeded composition passes',
    ],
    icon: 'cpu',
    metric: '<45MB / 60 FPS',
    badge: 'Zero GC Pause',
  },
  {
    id: 'pillar-sources',
    tag: 'PROTOCOLS & SOURCES',
    title: 'Universal Media Sources Integration',
    description: 'M3U/M3U8 playlists, Xtream Codes API, Stalker / MAG portal, Jellyfin, Plex, and HTTPS Stremio addons unified into a single client.',
    details: [
      'High-throughput asynchronous parser pipeline for M3U and M3U8 multi-channel playlists',
      'Native Xtream Codes API and Stalker / MAG portal authentication with category synchronization',
      'Direct local network connection and metadata mapping for Jellyfin and Plex media servers',
      'Extensible media catalog integration powered by HTTPS-based external Stremio addons',
    ],
    icon: 'grid',
    metric: '6 Protocols',
    badge: 'Universal Sources',
  },
  {
    id: 'pillar-player',
    tag: 'HARDWARE DECODER',
    title: 'Dual-Core Playback Engine',
    description: 'Media3 ExoPlayer & LibVLC dual-engine architecture with hardware-accelerated H.264, HEVC, AV1 decoders and seamless fallback.',
    details: [
      'Google Media3 ExoPlayer primary engine backed by LibVLC hardware fallback pipeline',
      'Direct VPU hardware decoding for H.264/AVC, H.265/HEVC Main 10, and modern AV1 streams',
      'Hardware-accelerated deinterlacing converting 1080i interlaced broadcasts into smooth 50/60 FPS progressive video',
      'HDMI 2.1 Auto Frame Rate (AFR) synchronization matching panel refresh to 24p, 50Hz, and 60Hz source cadences',
    ],
    icon: 'zap',
    metric: 'ExoPlayer + LibVLC',
    badge: 'Hardware Decoder',
  },
  {
    id: 'pillar-security',
    tag: 'SECURITY & PRIVACY',
    title: 'Cryptographic Hardware Isolation',
    description: 'AndroidKeyStore StrongBox AES-256 local encryption with zero telemetry, zero analytics beacons, and zero ads.',
    details: [
      'User credentials, passwords, and source URLs encrypted locally via AndroidKeyStore TEE / StrongBox silicon',
      'Zero personal data, IP addresses, or playback records transmitted to external servers',
      'Strict zero-telemetry policy: Zero advertising SDKs, zero behavioral trackers, and zero analytics beacons',
      'On-device SQLite FTS4 full-text search engine enabling instant EPG search with zero network dependencies',
    ],
    icon: 'shield',
    metric: 'AES-256 StrongBox',
    badge: 'Zero Telemetry',
  },
]

export const TELYRA_CONTENT: Record<Language, TelyraContent> = {
  tr: {
    meta: {
      title: 'TELYRA — Android TV ve Google TV İçin Bağımsız Medya İstemcisi',
      description: 'Android TV ve Google TV cihazları için donanım ivmeli, bağımsız IPTV ve medya istemcisi. Reklamsız, telemetrisiz, tavizsiz.',
      canonical: 'https://b4.lol/telyra/',
    },
    nav: {
      features: 'Mimari',
      hud: 'Telemetri',
      comparison: 'Teknik Özellikler',
      specs: 'Donanım Matrisi',
      license: 'Lisans Doğrulama',
      downloads: 'İndir',
      privacy: 'Yasal & Gizlilik',
      backToPortfolio: '← Portfolyoya Dön',
      directApk: 'APK İndir',
    },
    hero: {
      badge: 'v1.1.0 Resmi Sürüm • Donanım İvmeli • Sıfır Telemetri',
      headline: 'Televizyon deneyimi, kusursuzlaştırıldı.',
      headlinePrefix: 'Televizyon deneyimi,',
      headlineGradient: 'kusursuzlaştırıldı.',
      headlineSuffix: '',
      subtitle: 'Android TV ve Google TV cihazları için donanım ivmeli, bağımsız IPTV ve medya istemcisi. Reklamsız, telemetrisiz, tavizsiz.',
      ctaDownloadTv: 'Android TV İçin İndir (.apk)',
      ctaDownloadMobile: 'Mobil İçin İndir (.apk)',
      ctaDownloaderCode: 'Downloader Kodu:',
      copyButton: 'Kodu Kopyala',
      copiedFeedback: 'Kopyalandı',
      liveBadge: 'CANLI YAYIN MOTORU',
    },
    mockup: {
      label: '10-FOOT SİNEMATİK ARAYÜZ',
      title: 'Donanım Seviyesinde 60 FPS TV Deneyimi',
      subtitle: 'Kumanda ergonomisi ve 10-foot TV arayüzü ile test edilmiş gerçek ekran görüntüleri ve canlı telemetri simülasyonu.',
      toggleTv: 'Android TV (10-Foot UI)',
      toggleMobile: 'Mobil (Dokunmatik UI)',
      fastZappingLabel: 'HIZLI KANAL GEÇİŞİ:',
      hudViewLabel: 'CANLI TELEMETRİ HUD:',
      remoteHint: 'Kumanda / Klavye Tuşları: Sol / Sağ (Kanal Değiştir), Yukarı (HUD Görünümü), Aşağı (Sekmeler).',
      tvTabs: {
        home: 'Ana Sayfa',
        live: 'Canlı TV',
        guide: 'EPG Rehberi',
        movies: 'Filmler',
        detail: 'Film Detayı',
        hud: 'Telemetri HUD',
        sources: 'Kaynaklar',
      },
      mobileTabs: {
        player: 'Oynatıcı',
        stats: 'İstatistikler',
        live: 'Canlı Yayın',
        onboarding: 'Kurulum',
      },
      hudModes: {
        off: 'Kapalı',
        compact: 'Kompakt',
        detailed: 'Detaylı',
      },
      hudLabels: {
        recLive: '[CANLI] YAYIN',
        showHud: 'Telemetri OSD Göster',
        program: 'Yayın:',
        resolution: 'Çözünürlük ve Panel:',
        decoder: 'Video Çözücü (VPU):',
        framerate: 'Kare Hızı ve Düşen:',
        shader: 'Görüntü Filtresi:',
        bitrate: 'Bit Hızı ve Soket Tamponu:',
        audio: 'Ses Çıkışı (Passthrough):',
        afr: 'Otomatik Kare Hızı (AFR):',
        switchProfile: '[Yenile]',
        compactBtn: 'Kompakt',
        closeBtn: 'Kapat',
      },
      presets: [
        {
          channelName: 'TRT 2 RAW (Canlı)',
          programTitle: 'Koloni (21:30 - 23:15) • Sonraki: Kilit Taşı',
          resolution: '1920×1080p @ 50.000 fps',
          framerate: '50.0 fps (0 atlanan kare)',
          codec: 'AVC / H.264 High@L4.1',
          decoder: 'c2.amlogic.avc.decoder (0ms Donanım)',
          colorSpace: 'Rec.709 Standart Gamut',
          bitrate: '25.04 Mbps (Örnekleme: 1000ms)',
          audioFormat: 'MPEG Audio Layer II 2.0ch / Passthrough',
          socketBuffer: '4.194.304 Bayt (Pre-Connect SO_RCVBUF)',
          bufferDuration: '4.000 ms (Dinamik Kararlı Tampon)',
          droppedFrames: '0 / 48.200 (0.000%)',
          afrState: 'HDMI 2.1 QMS Modu 50.00 Hz (Kilitli)',
          shaderEngine: 'Obsidian Cinema + Kenar Filtresi',
          hardwareTunneling: true,
        },
        {
          channelName: 'TRT 1 4K HDR',
          programTitle: 'Evlilik Güzeldir • UEFA Şampiyonlar Ligi Karşılaşması',
          resolution: '3840×2160p @ 59.940 Hz',
          framerate: '60.0 fps (0 düşen kare)',
          codec: 'HEVC Main 10 (H.265 10-bit)',
          decoder: 'c2.amlogic.hevc.decoder (Donanımsal VPU)',
          colorSpace: 'BT.2020 / HLG HDR (ACES Ton Eşlemeli)',
          bitrate: '34.80 Mbps (Tepe: 52.1 Mbps)',
          audioFormat: 'Dolby Digital Plus (E-AC-3) 5.1ch @ 48kHz',
          socketBuffer: '4.194.304 Bayt SO_RCVBUF Ön-Enjeksiyon',
          bufferDuration: '14.850 ms (RAM Guard Korumalı)',
          droppedFrames: '0 / 18.420 (0.000%)',
          afrState: 'HDMI 2.1 59.94 Hz Eşleşti',
          shaderEngine: 'Donanım Keskinleştirme (Dinamik Filtre)',
          hardwareTunneling: true,
        },
        {
          channelName: 'Sinematik 4K Remux VOD',
          programTitle: '4K VOD Remux / Dram, Müzik (1 sa 51 dk)',
          resolution: '3840×2160p @ 23.976 fps',
          framerate: '23.976 fps (Sinematik Kadans)',
          codec: 'HEVC HDR10 Remux',
          decoder: 'c2.amlogic.hevc.decoder (Tünelli VPU)',
          colorSpace: 'BT.2020 PQ HDR10 (Geniş Renk Gamı)',
          bitrate: '74.60 Mbps (Kaynak: Yüksek Bitrate CDN)',
          audioFormat: 'Dolby TrueHD with Atmos (AudioTrack Bitstream)',
          socketBuffer: 'DirectMemory Ring Tampon (Zero-GC)',
          bufferDuration: '18.400 ms',
          droppedFrames: '0 / 34.800 (0.000%)',
          afrState: 'HDMI 24p Gerçek Sinema Modu',
          shaderEngine: 'Bypass (Saf 4K Doğrudan Geçiş)',
          hardwareTunneling: true,
        },
      ],
    },
    pillars: {
      label: 'MÜHENDİSLİK MİMARİSİ',
      title: 'Mühendisliğin Dört Temel Taşı',
      subtitle: 'Pazarlama süslerinden arındırılmış, doğrudan silikon donanım üzerinde doğrulanabilir dört temel mühendislik standardı.',
      items: TR_PILLARS,
    },
    features: {
      label: 'MÜHENDİSLİK MİMARİSİ',
      title: 'Mühendisliğin Dört Temel Taşı',
      subtitle: 'Pazarlama süslerinden arındırılmış, doğrudan silikon donanım üzerinde doğrulanabilir dört temel mühendislik standardı.',
      items: TR_PILLARS,
    },
    specs: {
      label: 'DONANIM VE FORMAT UYUMLULUĞU',
      title: 'Çipset ve Format Uyumluluk Matrisi',
      subtitle: 'TELYRA\'nın test edildiği ve donanımsal hızlandırma ile doğrulandığı işlemci çipsetleri, video çözücüleri ve ses passthrough standartları.',
      chipsets: {
        title: 'Doğrulanmış Çipset Mimarileri',
        description: 'Test laboratuvarında doğrudan silikon seviyesinde test edilmiş TV işlemcileri.',
        rows: [
          {
            name: 'Amlogic S905X4 / S928X',
            target: 'Google TV Cihazları, Android TV Kutuları',
            decoder: 'Donanımsal VPU (c2.amlogic.decoder)',
            capabilities: 'AV1, HEVC 10-bit, VP9, HDMI 2.1 QMS, Donanımsal Deinterlace',
          },
          {
            name: 'MediaTek Pentonic 700 / 1000',
            target: 'Yeni Nesil 4K/8K Akıllı Televizyonlar',
            decoder: 'Donanımsal MTK VPU',
            capabilities: '4K120 MEMC, AV1, HEVC, Dolby Vision & Atmos doğrudan geçiş',
          },
          {
            name: 'Realtek RTD1619B',
            target: 'Özel Medya Oynatıcı Donanımları',
            decoder: 'VS10 Donanım Motoru',
            capabilities: '4K60 HEVC/AV1, Gelişmiş Ton Eşleme, Düşük Gecikmeli Çözümleme',
          },
          {
            name: 'Google TV Streamer',
            target: 'Google TV Referans Cihazı',
            decoder: 'Entegre Android TV OS 14 Donanım Çözücüsü',
            capabilities: '4K60 HDR10+, Dolby Vision, Dolby Atmos Passthrough',
          },
          {
            name: 'Fire TV Cube 3. Nesil',
            target: 'Amazon Fire TV Platformu',
            decoder: 'Sekiz Çekirdekli Donanım VPU',
            capabilities: 'AV1 donanımsal çözücü, Wi-Fi 6E, HDMI Passthrough',
          },
        ],
      },
      videoCodecs: {
        title: 'Video Çözücü Standartları',
        description: 'Donanım hızlandırmalı video formatları ve profil seviyeleri.',
        rows: [
          {
            format: 'H.264 / AVC',
            profile: 'High Profile Level 5.2',
            decoding: 'Donanımsal VPU',
            capabilities: '1080p60 & 4K30 canlı yayınlar, düşük gecikmeli oynatma',
          },
          {
            format: 'H.265 / HEVC Main 10',
            profile: 'Main 10 Profile Level 5.1 / 6.1',
            decoding: 'Donanımsal VPU',
            capabilities: '4K60 10-bit HDR10, HLG, Dolby Vision profil desteği',
          },
          {
            format: 'AV1',
            profile: 'Main Profile Level 5.1',
            decoding: 'Donanımsal VPU',
            capabilities: '4K60 yeni nesil yüksek verimli video akışları',
          },
          {
            format: 'VP9 Profile 2',
            profile: 'Profile 2 (10-bit HDR)',
            decoding: 'Donanımsal VPU',
            capabilities: '4K60 YouTube ve VOD yayın akışları',
          },
          {
            format: 'MPEG-2 TS',
            profile: 'Main Profile @ High Level',
            decoding: 'Donanımsal VPU + Deinterlace',
            capabilities: 'DVB uydu ve IPTV canlı akışları, 1080i50 -> 50 fps tarak giderme',
          },
        ],
      },
      audioCodecs: {
        title: 'Ses ve Passthrough Standartları',
        description: 'AV Alıcıları ve Soundbar sistemlerine doğrudan bit akışı aktarımı.',
        rows: [
          {
            format: 'Dolby Digital Plus (E-AC-3) ile Atmos',
            passthrough: 'HDMI Bitstream Doğrudan Geçiş',
            channels: '5.1 / 7.1 Kanal + Yükseklik Nesneleri',
            standards: 'Dolby Audio, E-AC-3 JOC Atmos',
          },
          {
            format: 'Dolby TrueHD',
            passthrough: 'Kayıpsız HDMI Bitstream',
            channels: '7.1 Kanal Kayıpsız',
            standards: 'Dolby TrueHD, Atmos Metadata',
          },
          {
            format: 'DTS-HD Master Audio',
            passthrough: 'Kayıpsız HDMI Bitstream',
            channels: '7.1 Kanal Kayıpsız',
            standards: 'DTS-HD MA, DTS:X Bitstream',
          },
          {
            format: 'AAC / HE-AAC',
            passthrough: 'Yerel Donanım Çözümleme',
            channels: 'Stereo / 5.1 Çok Kanallı',
            standards: 'AAC-LC, HE-AAC v1/v2',
          },
          {
            format: 'FLAC',
            passthrough: 'Kayıpsız Yerel Çözümleme',
            channels: '24-bit / 192 kHz',
            standards: 'Yüksek Çözünürlüklü Ses',
          },
        ],
      },
      groups: [
        {
          id: 'chipsets-group',
          title: 'Doğrulanmış Çipset Mimarileri',
          description: 'Amlogic, MediaTek Pentonic, Realtek ve entegre akış donanımları.',
          items: [
            { name: 'Amlogic S905X4 / S928X', detail: 'VPU Donanım Çözücü, HDMI 2.1 QMS', status: 'Doğrulandı' },
            { name: 'MediaTek Pentonic 700 / 1000', detail: '4K120 MEMC, Dolby Vision & Atmos', status: 'Doğrulandı' },
            { name: 'Realtek RTD1619B', detail: 'VS10 Donanım Motoru, Yerel Deinterlace', status: 'Doğrulandı' },
            { name: 'Google TV Streamer', detail: 'Android TV OS 14 Donanım Çözücüleri', status: 'Doğrulandı' },
            { name: 'Fire TV Cube 3. Nesil', detail: 'Sekiz Çekirdekli VPU, AV1 Donanım', status: 'Doğrulandı' },
          ],
        },
        {
          id: 'video-codecs-group',
          title: 'Video Çözücü Standartları',
          description: 'H.264, HEVC Main 10, AV1, VP9 Profile 2 ve MPEG-2 TS.',
          items: [
            { name: 'H.264 / AVC', detail: 'High Profile Level 5.2, 1080p60 & 4K30', status: 'Donanımsal' },
            { name: 'H.265 / HEVC Main 10', detail: '10-bit HDR10, HLG, Dolby Vision', status: 'Donanımsal' },
            { name: 'AV1', detail: 'Main Profile Level 5.1, 4K60', status: 'Donanımsal' },
            { name: 'VP9 Profile 2', detail: '10-bit HDR, 4K60 akışlar', status: 'Donanımsal' },
            { name: 'MPEG-2 TS', detail: 'DVB uydu ve IPTV canlı akışları, 1080i50 deinterlace', status: 'Donanımsal' },
          ],
        },
        {
          id: 'audio-codecs-group',
          title: 'Ses Passthrough Standartları',
          description: 'Dolby Atmos, Dolby TrueHD, DTS-HD MA, AAC ve FLAC.',
          items: [
            { name: 'Dolby Digital Plus (E-AC-3) ile Atmos', detail: 'HDMI Bitstream Passthrough', status: 'Doğrudan Geçiş' },
            { name: 'Dolby TrueHD', detail: '7.1 Kanal Kayıpsız HDMI Passthrough', status: 'Doğrudan Geçiş' },
            { name: 'DTS-HD Master Audio', detail: '7.1 Kanal Kayıpsız DTS:X Passthrough', status: 'Doğrudan Geçiş' },
            { name: 'AAC / HE-AAC', detail: 'v1 & v2 Çok Kanallı Yerel Çözümleme', status: 'Yerel Donanım' },
            { name: 'FLAC', detail: '24-bit 192 kHz Kayıpsız Ses', status: 'Yerel Donanım' },
          ],
        },
      ],
    },
    comparison: {
      label: 'MİMARİ VE STANDARTLAR',
      title: 'Teknik Mimari Karşılaştırması',
      subtitle: 'TELYRA\'nın donanım odaklı mühendislik yaklaşımının standart oynatıcı mimarileriyle karşılaştırması.',
      headers: {
        metric: 'Mimari Standart',
        telyra: 'TELYRA (v1.1)',
        tivimate: 'Kapalı IPTV İstemcileri',
        standard: 'Geleneksel Hibrit Oynatıcılar',
      },
      rows: [
        {
          metric: 'Arayüz Mimarisi ve Bellek',
          telyra: 'Saf Kotlin + Jetpack Compose TV (<45MB JVM Bellek, 60 FPS)',
          telyraHighlight: true,
          tivimate: 'Geleneksel Yerel Görünümler (~120MB JVM Bellek)',
          standard: 'WebView / Hibrit Katman (250MB+ Bellek, Sık GC Duraklamaları)',
        },
        {
          metric: 'Donanımsal Tarak Giderme (Deinterlace)',
          telyra: '0ms Amlogic/MTK VPU Donanım Enjeksiyonu + LibVLC YADIF 2x',
          telyraHighlight: true,
          tivimate: 'Belirli çözücülerde kısmi yazılımsal tarak giderme',
          standard: 'Desteklenmiyor (Görünür tarak çizgileri, 25fps titreme)',
        },
        {
          metric: 'Video Çözücü Mimarisi',
          telyra: 'Media3 ExoPlayer & LibVLC Çift Çekirdekli Donanım Motoru',
          telyraHighlight: true,
          tivimate: 'Tekil ExoPlayer uygulaması',
          standard: 'Yazılımsal veya genel Android MediaPlayer',
        },
        {
          metric: 'Kayıt (DVR) Mekanizması',
          telyra: 'Aktif Akış Kopyalama (Ek bağlantı hattı gerektirmez)',
          telyraHighlight: true,
          tivimate: 'İkincil akış açar (Eşzamanlı çift bağlantı kotası gerektirir)',
          standard: 'Kararsız veya mevcut değil',
        },
        {
          metric: 'Ağ ve Soket Tamponu',
          telyra: '4MB SO_RCVBUF Bağlantı Öncesi Enjeksiyon + Doğrudan Bellek',
          telyraHighlight: true,
          tivimate: 'Standart Java soket tamponları (64KB - 256KB)',
          standard: 'Varsayılan 8KB tampon (TCP pencere daralması riski)',
        },
        {
          metric: 'Otomatik Kare Hızı (AFR)',
          telyra: 'DisplayModeSelector + HDMI 2.1 QMS + Panel Kilidi',
          telyraHighlight: true,
          tivimate: 'Temel ekran modu değişimi (kararma ve atlama)',
          standard: 'Desteklenmiyor (3:2 pulldown titremesi)',
        },
        {
          metric: 'Kimlik Bilgisi Depolama',
          telyra: 'AndroidKeyStore Donanım Destekli AES-256 StrongBox',
          telyraHighlight: true,
          tivimate: 'Standart yerel depolama',
          standard: 'Düz metin SharedPreferences / SQLite depolama',
        },
        {
          metric: 'Telemetri ve Gizlilik',
          telyra: 'Sıfır Telemetri, Sıfır Analitik SDK, Sıfır Reklam',
          telyraHighlight: true,
          tivimate: 'Lisans doğrulama iletişimi',
          standard: 'Reklam ağları, üçüncü taraf izleme kodları',
        },
      ],
      trademarkNotice: 'Ticari Marka Bildirimi: Sayfada adı geçen tüm üçüncü taraf marka, donanım ve ticari adlar kendi hak sahiplerinin mülkiyetindedir. Bu adlar yalnızca donanım ve mimari uyumluluğunu objektif olarak açıklamak amacıyla 6769 sayılı Sınai Mülkiyet Kanunu ve Adil Kullanım (Nominative Fair Use) ilkeleri kapsamında referans verilmiştir. TELYRA\'nın bahsi geçen kuruluşlarla ticari ortaklığı veya sponsorluk bağı bulunmamaktadır.',
    },
    downloads: {
      label: 'İNDİRME MERKEZİ',
      title: 'TELYRA Sürümleri ve Kurulum',
      subtitle: 'Doğrudan APK indirme bağlantıları ve Android TV için Downloader kısa kodu.',
      downloaderCodeTitle: 'AFTVnews Downloader Kısa Kodu',
      downloaderCodeDesc: 'Android TV, Google TV veya Fire TV cihazınızdaki Downloader uygulamasını açıp bu kodu girin:',
      howToInstallTitle: 'Android TV Cihazına Nasıl Kurulur?',
      steps: [
        { num: '1', text: 'Android TV veya Google TV cihazınızda Google Play Store\'dan Downloader by AFTVnews uygulamasını yükleyin.' },
        { num: '2', text: 'Downloader uygulamasını açarak arama kutusuna b4.lol/telyra/tv yazın veya kısa kodu girip Go butonuna basın.' },
        { num: '3', text: 'İndirme tamamlandığında ekrana gelen Yükle (Install) butonunu seçerek TELYRA kurulumunu tamamlayın.' },
      ],
      directTitle: 'Doğrudan APK Dosyaları (v1.1.0 Resmi Sürümleri)',
      verifiedBadge: 'Android v1/v2/v3 İmzalı ve Doğrulanmış',
      labels: {
        version: 'Sürüm:',
        fileSize: 'Boyut:',
        minSdk: 'Minimum Sistem:',
        downloadBtnText: 'İndir',
        checksum: 'SHA-256 Doğrulama Özeti:',
        copyChecksum: 'Kopyala',
        copiedChecksum: 'Kopyalandı',
      },
      items: [
        {
          id: 'app-tv',
          title: 'TELYRA Android TV / Google TV',
          targetDevice: 'Android TV, Google TV, Fire TV, Nvidia Shield (10-Foot Arayüz)',
          version: 'v1.1.0',
          fileName: 'app-tv-release.apk',
          fileSize: '85.6 MB',
          downloadUrl: 'https://github.com/b4lol/telyra-releases/releases/download/v1.1.0/app-tv-release.apk',
          sha256: '871e38bd00468fb6a71bfcc0a04fa38a5cfbc57e311e29ac1a34ff8cc40b0218',
          releaseDate: '2026-10-23',
          minSdk: 'Android 7.0 (API 24)',
        },
        {
          id: 'app-mobile',
          title: 'TELYRA Android Mobil & Tablet',
          targetDevice: 'Android Akıllı Telefonlar ve Tabletler (Dokunmatik Arayüz)',
          version: 'v1.1.0',
          fileName: 'app-mobile-release.apk',
          fileSize: '178.9 MB',
          downloadUrl: 'https://github.com/b4lol/telyra-releases/releases/download/v1.1.0/app-mobile-release.apk',
          sha256: '2093f1ad37d42329734ee4068ebbb1d7757625f3d10b11521ad232a98b098f27',
          releaseDate: '2026-10-23',
          minSdk: 'Android 7.0 (API 24)',
        },
      ],
    },
    privacy: {
      label: 'YASAL ÇERÇEVE VE GİZLİLİK',
      title: 'Gizlilik İlkeleri ve Yasal Sorumluluk Beyanı',
      subtitle: 'TELYRA, kullanıcı mahremiyetini ve yasal mevzuata tam uyumluluğu temel mühendislik standardı olarak kabul eder.',
      zeroDataTitle: 'Kişisel Veri İşlememe Taahhüdü (KVKK ve GDPR)',
      zeroDataDesc: 'TELYRA, 6698 sayılı KVKK ve AB 2016/679 GDPR kapsamında hiçbir kişisel veri, IP adresi, cihaz tanıtıcısı veya medya oynatma kütüğü toplamaz, işlemez ve harici sunucularda saklamaz.',
      disclaimerTitle: '5846 Sayılı FSEK ve AB Telif Hakları Direktifi Uyum Beyanı',
      disclaimerText: 'TELYRA münhasıran bağımsız bir medya oynatıcı yazılım istemcisidir. Sunucu tarafında hiçbir telifli içerik, video akışı veya televizyon yayını barındırmaz, iletmez veya satmaz. Oynatılan tüm kaynakların yasal haklarına uygunluğundan münhasıran kullanıcı sorumludur.',
      fullPolicyBtn: 'Gizlilik Politikası ve Yasal Bildirim Metnini İncele →',
      closeModal: 'Kapat',
      modal: {
        title: 'TELYRA — Gizlilik Politikası ve Yasal Bildirimler',
        effectiveDateLabel: 'Yürürlük Tarihi:',
        effectiveDate: '23 Ekim 2026 (Sürüm 1.1.0)',
        sections: [
          {
            title: '1. Veri Sorumlusu ve Kişisel Veri İşlememe Taahhüdü (KVKK ve GDPR)',
            content: 'TELYRA geliştiricileri, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve 2016/679 sayılı AB Genel Veri Koruma Tüzüğü (“GDPR”) kapsamında veri sorumlusu sıfatıyla kullanıcıların kişisel verilerini toplamama, profillememe ve merkezi veri tabanlarında işlememe ilkesini benimsemiştir. Uygulamada reklam SDK\'sı, harici telemetri ve davranışsal analiz kütüphanesi veya uzaktan kullanıcı profilleme mekanizmaları kesinlikle yer almaz.',
          },
          {
            title: '2. Donanım Seviyesinde İzole Şifreleme ve Yerel Anahtar Mimarisi',
            content: 'Kullanıcı tarafından uygulamaya eklenen kimlik bilgileri (Xtream Codes veya M3U bağlantıları) hiçbir koşulda harici bir sunucuya aktarılmaz. Bu bilgiler, doğrudan cihaz üzerinde bulunan AndroidKeyStore donanımsal güvenlik modülü (TEE / StrongBox) aracılığıyla AES-256 GCM algoritması ile yerel olarak şifrelenir. Şifreleme anahtarları donanım katmanında izole edilmiş olup fiziki cihaz dışına çıkartılamaz.',
          },
          {
            title: '3. Lisans Doğrulama Mimarisi ve Anonim Donanım Karma Değeri',
            content: 'TELYRA Pro lisans doğrulama sorguları sırasında kullanıcının kimliğini ortaya çıkarabilecek hiçbir ad, soyad, e-posta, IP adresi veya çalma listesi verisi saklanmaz ya da işlenmez. Lisans sunucusu sorgusunda yalnızca cihazın donanım kimliklerinden tek yönlü matematiksel özet çıkarma yöntemiyle üretilen anonim kriptografik karma (hash) değeri kullanılır. Bu karma değer üzerinden kullanıcı kimliğine veya fiziki cihaza geri dönüşümlü erişim sağlanması teknik olarak olanaksızdır.',
          },
          {
            title: '4. 5846 Sayılı FSEK ve Telif Hakları Sorumluluk Reddi (İçerik Sağlamama İlkesi)',
            content: 'TELYRA herhangi bir video, ses, televizyon kanalı yayını veya çalma listesi içeriği SAĞLAMAZ, BARINDIRMAZ, İLETMEZ VE SATMAZ. TELYRA yalnızca kullanıcının kendi inisiyatifiyle sağladığı çalma listelerini ayrıştırarak oynatan bağımsız bir yazılım aracıdır.',
            bullets: [
              'Kullanıcı, uygulamaya eklediği tüm yayın bağlantılarının ve içeriklerin telif haklarına ve yasal lisanslarına sahip olduğunu veya yetkili yayıncıdan yasal abonelik temin ettiğini gayrikabili rücu kabul, beyan ve taahhüt eder.',
              'TELYRA geliştiricileri ve hak sahipleri, kullanıcıların üçüncü taraf kaynaklardan elde ettiği yetkisiz veya telif hakkı ihlali içeren yayınların oynatılmasından hukuki, cezai veya idari olarak hiçbir surette sorumlu tutulamaz.',
              'Uygulamanın lisanslanması, kullanıcılara hiçbir şekilde medya içeriği erişim hakkı sağlama taahhüdü içermez.',
            ],
            isWarning: true,
          },
          {
            title: '5. Üçüncü Taraf Ticari Markalar ve Adil Kullanım (Fair Use) Beyanı',
            content: 'Bu platformda ve yazılım dokümantasyonunda yer verilen Android TV, Google TV, Fire TV ve benzeri marka, ticari unvan, logo ve ürün adları ilgili hak sahiplerinin tescilli mülkiyetindedir. Söz konusu markalara yapılan tüm atıflar, yalnızca yazılımın donanım, işletim sistemi veya format uyumluluğunu açıklamak amacıyla 6769 sayılı Sınai Mülkiyet Kanunu ve Adil Kullanım (Nominative Fair Use) ilkeleri uyarınca yapılmıştır. TELYRA\'nın bahsi geçen hak sahipleriyle doğrudan veya dolaylı hiçbir ticari bağı, sponsorluğu veya resmi onayı bulunmamaktadır.',
          },
          {
            title: '6. Tüketici Hakları, İlgili Kişi Hakları ve Yerel Veri İmhası',
            content: 'TELYRA tarafından merkezi bir sunucuda hiçbir kişisel veri tutulmadığı için, KVKK m. 11 ve GDPR m. 15-22 uyarınca silinmesi veya düzeltilmesi gereken merkezi bir veri kaydı bulunmamaktadır. Kullanıcılar uygulamayı kaldırdıkları anda yerel şifrelenmiş tüm anahtarlar, ayarlar ve önbellekler cihaz donanımından anında ve geri döndürülemez şekilde silinir.',
          },
        ],
      },
    },
    footer: {
      aboutTelyra: 'TELYRA, Android TV ve Google TV cihazları için donanım ivmeli, bağımsız IPTV ve medya istemcisidir.',
      builtBy: 'Hüseyin "b4lol" tarafından geliştirilmiştir.',
      allRights: 'Tüm hakları saklıdır.',
      disclaimerNotice: 'Yasal Sorumluluk Reddi: TELYRA bağımsız bir medya oynatıcı yazılımıdır; hiçbir televizyon yayını, video akışı veya IPTV içeriği barındırmaz ve satmaz. Oynatılan tüm içeriklerin yasal yayın haklarına uygunluğundan münhasıran kullanıcı sorumludur. Sitede adı geçen ticari markalar kendi hak sahiplerinin mülkiyetinde olup yalnızca donanım ve format uyumluluğu belirtme amacıyla adil kullanım kapsamında referans verilmiştir.',
    },
  },
  en: {
    meta: {
      title: 'TELYRA — Independent Media Client for Android TV & Google TV',
      description: 'Purpose-built, hardware-accelerated independent IPTV and media client for Android TV and Google TV. Zero telemetry, zero ads, zero compromise.',
      canonical: 'https://b4.lol/telyra/',
    },
    nav: {
      features: 'Architecture',
      hud: 'Telemetry',
      comparison: 'Specifications',
      specs: 'Hardware Matrix',
      license: 'License Check',
      downloads: 'Downloads',
      privacy: 'Legal & Privacy',
      backToPortfolio: '← Back to Portfolio',
      directApk: 'Download APK',
    },
    hero: {
      badge: 'v1.1.0 Official Release • Hardware Accelerated • Zero Telemetry',
      headline: 'The television experience, perfected.',
      headlinePrefix: 'The television experience,',
      headlineGradient: 'perfected.',
      headlineSuffix: '',
      subtitle: 'Purpose-built, hardware-accelerated independent IPTV and media client for Android TV and Google TV. Zero telemetry, zero ads, zero compromise.',
      ctaDownloadTv: 'Download for Android TV (.apk)',
      ctaDownloadMobile: 'Download for Mobile (.apk)',
      ctaDownloaderCode: 'Downloader Code:',
      copyButton: 'Copy Code',
      copiedFeedback: 'Copied',
      liveBadge: 'LIVE STREAM ENGINE',
    },
    mockup: {
      label: '10-FOOT CINEMATIC INTERFACE',
      title: 'Hardware-Grade 60 FPS Television Experience',
      subtitle: 'Authentic interface captures and real-time telemetry simulation engineered for 10-foot remote ergonomics.',
      toggleTv: 'Android TV (10-Foot UI)',
      toggleMobile: 'Mobile (Touch UI)',
      fastZappingLabel: 'FAST CHANNEL SWITCHING:',
      hudViewLabel: 'LIVE TELEMETRY HUD:',
      remoteHint: 'Remote / Keyboard Controls: Left / Right (Switch Channel), Up (HUD View), Down (Tabs).',
      tvTabs: {
        home: 'Home',
        live: 'Live TV',
        guide: 'EPG Guide',
        movies: 'Movies',
        detail: 'Movie Details',
        hud: 'Telemetry HUD',
        sources: 'Sources',
      },
      mobileTabs: {
        player: 'Player',
        stats: 'Stats',
        live: 'Live Stream',
        onboarding: 'Setup',
      },
      hudModes: {
        off: 'Off',
        compact: 'Compact',
        detailed: 'Detailed',
      },
      hudLabels: {
        recLive: '[LIVE] BROADCAST',
        showHud: 'Show Telemetry OSD',
        program: 'Broadcast:',
        resolution: 'Resolution & Panel:',
        decoder: 'Video Decoder (VPU):',
        framerate: 'Frame Rate & Drops:',
        shader: 'Image Filter:',
        bitrate: 'Bitrate & Socket Buffer:',
        audio: 'Audio Passthrough:',
        afr: 'Auto Frame Rate (AFR):',
        switchProfile: '[Refresh]',
        compactBtn: 'Compact',
        closeBtn: 'Close',
      },
      presets: [
        {
          channelName: 'TRT 2 RAW (Live)',
          programTitle: 'Koloni (21:30 - 23:15) • Up Next: Kilit Taşı',
          resolution: '1920×1080p @ 50.000 fps',
          framerate: '50.0 fps (0 dropped frames)',
          codec: 'AVC / H.264 High@L4.1',
          decoder: 'c2.amlogic.avc.decoder (0ms Hardware)',
          colorSpace: 'Rec.709 Standard Gamut',
          bitrate: '25.04 Mbps (Sample Rate: 1000ms)',
          audioFormat: 'MPEG Audio Layer II 2.0ch / Passthrough',
          socketBuffer: '4,194,304 Bytes (Pre-Connect SO_RCVBUF)',
          bufferDuration: '4,000 ms (Dynamic Stable Buffer)',
          droppedFrames: '0 / 48,200 (0.000%)',
          afrState: 'HDMI 2.1 QMS Mode 50.00 Hz (Locked)',
          shaderEngine: 'Obsidian Cinema + Edge Filter',
          hardwareTunneling: true,
        },
        {
          channelName: 'TRT 1 4K HDR',
          programTitle: 'UEFA Champions League Live Broadcast',
          resolution: '3840×2160p @ 59.940 Hz',
          framerate: '60.0 fps (0 dropped frames)',
          codec: 'HEVC Main 10 (H.265 10-bit)',
          decoder: 'c2.amlogic.hevc.decoder (Hardware VPU)',
          colorSpace: 'BT.2020 / HLG HDR (ACES Tone Mapped)',
          bitrate: '34.80 Mbps (Peak: 52.1 Mbps)',
          audioFormat: 'Dolby Digital Plus (E-AC-3) 5.1ch @ 48kHz',
          socketBuffer: '4,194,304 Bytes SO_RCVBUF Pre-injection',
          bufferDuration: '14,850 ms (RAM Guard Protected)',
          droppedFrames: '0 / 18,420 (0.000%)',
          afrState: 'HDMI 2.1 59.94 Hz Locked',
          shaderEngine: 'Hardware Sharpening (Dynamic Filter)',
          hardwareTunneling: true,
        },
        {
          channelName: 'Cinematic 4K Remux VOD',
          programTitle: '4K VOD Remux / Drama, Music (1h 51m)',
          resolution: '3840×2160p @ 23.976 fps',
          framerate: '23.976 fps (Cinematic Cadence)',
          codec: 'HEVC HDR10 Remux',
          decoder: 'c2.amlogic.hevc.decoder (Tunneled VPU)',
          colorSpace: 'BT.2020 PQ HDR10 (Wide Color Gamut)',
          bitrate: '74.60 Mbps (Source: High Bitrate CDN)',
          audioFormat: 'Dolby TrueHD with Atmos (AudioTrack Bitstream)',
          socketBuffer: 'DirectMemory Ring Buffer (Zero-GC)',
          bufferDuration: '18,400 ms',
          droppedFrames: '0 / 34,800 (0.000%)',
          afrState: 'HDMI 24p True Cinema Mode',
          shaderEngine: 'Bypass (Pure 4K Direct Pass)',
          hardwareTunneling: true,
        },
      ],
    },
    pillars: {
      label: 'SYSTEM ARCHITECTURE',
      title: 'The Four Engineering Pillars',
      subtitle: 'Stripped of marketing embellishments. Four verifiable engineering standards executing directly on device silicon.',
      items: EN_PILLARS,
    },
    features: {
      label: 'SYSTEM ARCHITECTURE',
      title: 'The Four Engineering Pillars',
      subtitle: 'Stripped of marketing embellishments. Four verifiable engineering standards executing directly on device silicon.',
      items: EN_PILLARS,
    },
    specs: {
      label: 'HARDWARE & FORMAT COMPATIBILITY',
      title: 'Chipset & Format Compatibility Matrix',
      subtitle: 'Processor chipsets, video decoding profiles, and audio passthrough standards tested and verified on actual hardware.',
      chipsets: {
        title: 'Verified Chipset Architectures',
        description: 'Television processors benchmarked directly on silicon in test laboratory conditions.',
        rows: [
          {
            name: 'Amlogic S905X4 / S928X',
            target: 'Google TV Streamer, Android TV Boxes',
            decoder: 'Hardware VPU (c2.amlogic.decoder)',
            capabilities: 'AV1, HEVC 10-bit, VP9, HDMI 2.1 QMS, Hardware Deinterlacing',
          },
          {
            name: 'MediaTek Pentonic 700 / 1000',
            target: 'Next-Gen 4K/8K Smart Televisions',
            decoder: 'Hardware MTK VPU',
            capabilities: '4K120 MEMC, AV1, HEVC, Dolby Vision & Atmos direct bitstream',
          },
          {
            name: 'Realtek RTD1619B',
            target: 'Dedicated Media Player Hardware',
            decoder: 'VS10 Hardware Engine',
            capabilities: '4K60 HEVC/AV1, Advanced Tone Mapping, Low Latency Decoding',
          },
          {
            name: 'Google TV Streamer',
            target: 'Google TV Reference Hardware',
            decoder: 'Integrated Android TV OS 14 Hardware Decoders',
            capabilities: '4K60 HDR10+, Dolby Vision, Dolby Atmos Passthrough',
          },
          {
            name: 'Fire TV Cube 3rd Gen',
            target: 'Amazon Fire TV Platform',
            decoder: 'Octa-Core Hardware VPU',
            capabilities: 'AV1 hardware decoder, Wi-Fi 6E, HDMI Passthrough',
          },
        ],
      },
      videoCodecs: {
        title: 'Video Decoding Standards',
        description: 'Hardware-accelerated video codecs and profile tiers.',
        rows: [
          {
            format: 'H.264 / AVC',
            profile: 'High Profile Level 5.2',
            decoding: 'Hardware VPU',
            capabilities: '1080p60 & 4K30 live broadcasts, low latency decoding',
          },
          {
            format: 'H.265 / HEVC Main 10',
            profile: 'Main 10 Profile Level 5.1 / 6.1',
            decoding: 'Hardware VPU',
            capabilities: '4K60 10-bit HDR10, HLG, Dolby Vision profile decoding',
          },
          {
            format: 'AV1',
            profile: 'Main Profile Level 5.1',
            decoding: 'Hardware VPU',
            capabilities: '4K60 next-generation high-efficiency video streams',
          },
          {
            format: 'VP9 Profile 2',
            profile: 'Profile 2 (10-bit HDR)',
            decoding: 'Hardware VPU',
            capabilities: '4K60 YouTube and high-bitrate VOD streams',
          },
          {
            format: 'MPEG-2 TS',
            profile: 'Main Profile @ High Level',
            decoding: 'Hardware VPU + Deinterlacer',
            capabilities: 'DVB satellite and IPTV live streams, 1080i50 -> 50 fps combing elimination',
          },
        ],
      },
      audioCodecs: {
        title: 'Audio & Passthrough Standards',
        description: 'Direct bitstream passthrough to AV Receivers and Soundbar systems.',
        rows: [
          {
            format: 'Dolby Digital Plus (E-AC-3) with Atmos',
            passthrough: 'HDMI Bitstream Direct Passthrough',
            channels: '5.1 / 7.1 Channels + Height Objects',
            standards: 'Dolby Audio, E-AC-3 JOC Atmos',
          },
          {
            format: 'Dolby TrueHD',
            passthrough: 'Lossless HDMI Bitstream',
            channels: '7.1 Channels Lossless',
            standards: 'Dolby TrueHD, Atmos Metadata',
          },
          {
            format: 'DTS-HD Master Audio',
            passthrough: 'Lossless HDMI Bitstream',
            channels: '7.1 Channels Lossless',
            standards: 'DTS-HD MA, DTS:X Bitstream',
          },
          {
            format: 'AAC / HE-AAC',
            passthrough: 'Native Hardware Decoding',
            channels: 'Stereo / 5.1 Multi-Channel',
            standards: 'AAC-LC, HE-AAC v1/v2',
          },
          {
            format: 'FLAC',
            passthrough: 'Lossless Native Decoding',
            channels: '24-bit / 192 kHz',
            standards: 'High-Resolution Audio',
          },
        ],
      },
      groups: [
        {
          id: 'chipsets-group',
          title: 'Verified Chipset Architectures',
          description: 'Amlogic, MediaTek Pentonic, Realtek, and integrated streaming hardware.',
          items: [
            { name: 'Amlogic S905X4 / S928X', detail: 'VPU Hardware Decoder, HDMI 2.1 QMS', status: 'Verified' },
            { name: 'MediaTek Pentonic 700 / 1000', detail: '4K120 MEMC, Dolby Vision & Atmos', status: 'Verified' },
            { name: 'Realtek RTD1619B', detail: 'VS10 Hardware Engine, Native Deinterlace', status: 'Verified' },
            { name: 'Google TV Streamer', detail: 'Android TV OS 14 Hardware Decoders', status: 'Verified' },
            { name: 'Fire TV Cube 3rd Gen', detail: 'Octa-Core VPU, AV1 Hardware', status: 'Verified' },
          ],
        },
        {
          id: 'video-codecs-group',
          title: 'Video Decoding Standards',
          description: 'H.264, HEVC Main 10, AV1, VP9 Profile 2, and MPEG-2 TS.',
          items: [
            { name: 'H.264 / AVC', detail: 'High Profile Level 5.2, 1080p60 & 4K30', status: 'Hardware VPU' },
            { name: 'H.265 / HEVC Main 10', detail: '10-bit HDR10, HLG, Dolby Vision', status: 'Hardware VPU' },
            { name: 'AV1', detail: 'Main Profile Level 5.1, 4K60', status: 'Hardware VPU' },
            { name: 'VP9 Profile 2', detail: '10-bit HDR, 4K60 streams', status: 'Hardware VPU' },
            { name: 'MPEG-2 TS', detail: 'DVB satellite and IPTV live streams, 1080i50 deinterlace', status: 'Hardware VPU' },
          ],
        },
        {
          id: 'audio-codecs-group',
          title: 'Audio Passthrough Standards',
          description: 'Dolby Atmos, Dolby TrueHD, DTS-HD MA, AAC, and FLAC.',
          items: [
            { name: 'Dolby Digital Plus (E-AC-3) with Atmos', detail: 'HDMI Bitstream Passthrough', status: 'Direct Passthrough' },
            { name: 'Dolby TrueHD', detail: '7.1 Channels Lossless HDMI Passthrough', status: 'Direct Passthrough' },
            { name: 'DTS-HD Master Audio', detail: '7.1 Channels Lossless DTS:X Passthrough', status: 'Direct Passthrough' },
            { name: 'AAC / HE-AAC', detail: 'v1 & v2 Multi-Channel Native Decoding', status: 'Native Hardware' },
            { name: 'FLAC', detail: '24-bit 192 kHz Lossless Audio', status: 'Native Hardware' },
          ],
        },
      ],
    },
    comparison: {
      label: 'SYSTEM ARCHITECTURE & STANDARDS',
      title: 'Technical Architecture Comparison',
      subtitle: 'An objective assessment of TELYRA\'s hardware-oriented engineering against traditional media player architectures.',
      headers: {
        metric: 'Engineering Dimension',
        telyra: 'TELYRA (v1.1)',
        tivimate: 'Legacy IPTV Clients',
        standard: 'Generic Hybrid Players',
      },
      rows: [
        {
          metric: 'Interface Runtime & Memory',
          telyra: 'Pure Kotlin + Jetpack Compose TV (<45MB JVM Heap, 60 FPS)',
          telyraHighlight: true,
          tivimate: 'Legacy Native Views (~120MB JVM Heap)',
          standard: 'WebView / Hybrid Layer (250MB+ Heap, frequent GC pauses)',
        },
        {
          metric: 'Hardware Deinterlacing',
          telyra: '0ms Amlogic/MTK VPU Hardware Injection + LibVLC YADIF 2x',
          telyraHighlight: true,
          tivimate: 'Partial / Software deinterlacing on select decoders',
          standard: 'None (Visible combing lines, 25fps judder)',
        },
        {
          metric: 'Player Engine Architecture',
          telyra: 'Media3 ExoPlayer & LibVLC Dual-Core Hardware Engine',
          telyraHighlight: true,
          tivimate: 'Single ExoPlayer implementation',
          standard: 'Software or generic Android MediaPlayer',
        },
        {
          metric: 'DVR Recording Architecture',
          telyra: 'Active Stream Tap (Zero secondary connection overhead)',
          telyraHighlight: true,
          tivimate: 'Opens secondary stream (Consumes multi-connection allowance)',
          standard: 'Unstable or unavailable',
        },
        {
          metric: 'Network Socket Buffer',
          telyra: '4MB SO_RCVBUF Pre-Connect Injection + DirectMemory Ring Buffer',
          telyraHighlight: true,
          tivimate: 'Standard Java socket buffers (64KB - 256KB)',
          standard: 'Default 8KB buffer (TCP window starvation risk)',
        },
        {
          metric: 'Auto Frame Rate (AFR)',
          telyra: 'DisplayModeSelector + HDMI 2.1 QMS + Panel Cadence Lock',
          telyraHighlight: true,
          tivimate: 'Basic display mode switch (blackout judder)',
          standard: 'None (3:2 pulldown judder)',
        },
        {
          metric: 'Credential Storage',
          telyra: 'AndroidKeyStore Hardware-Backed AES-256 StrongBox',
          telyraHighlight: true,
          tivimate: 'Standard local storage',
          standard: 'Plaintext SharedPreferences / SQLite storage',
        },
        {
          metric: 'Telemetry & Privacy',
          telyra: 'Zero Telemetry, Zero Analytics SDKs, Zero Ads',
          telyraHighlight: true,
          tivimate: 'License validation telemetry',
          standard: 'Ad networks, third-party analytics trackers',
        },
      ],
      trademarkNotice: 'Trademark Notice: All third-party trademarks, hardware names, and brand marks referenced on this website are the intellectual property of their respective owners. These marks are referenced strictly under nominative fair use doctrine to denote device compatibility, operating system interoperability, and objective engineering metrics. TELYRA has no commercial relationship, sponsorship, or affiliation with any referenced entities.',
    },
    downloads: {
      label: 'DOWNLOAD CENTER',
      title: 'TELYRA Releases & Installation',
      subtitle: 'Direct APK download packages and Downloader short code for Android TV.',
      downloaderCodeTitle: 'AFTVnews Downloader Short Code',
      downloaderCodeDesc: 'Launch the Downloader application on your Android TV, Google TV, or Fire TV and enter this code:',
      howToInstallTitle: 'How to Install on Android TV',
      steps: [
        { num: '1', text: 'Install Downloader by AFTVnews from the Google Play Store on your Android TV or Google TV.' },
        { num: '2', text: 'Open Downloader, type b4.lol/telyra/tv into the URL box, and click Go.' },
        { num: '3', text: 'When the download finishes, select Install to complete the TELYRA setup.' },
      ],
      directTitle: 'Direct APK Packages (v1.1.0 Official Releases)',
      verifiedBadge: 'Android v1/v2/v3 Signed & Verified',
      labels: {
        version: 'Version:',
        fileSize: 'Size:',
        minSdk: 'Minimum System:',
        downloadBtnText: 'Download',
        checksum: 'SHA-256 Checksum:',
        copyChecksum: 'Copy',
        copiedChecksum: 'Copied',
      },
      items: [
        {
          id: 'app-tv',
          title: 'TELYRA for Android TV / Google TV',
          targetDevice: 'Android TV, Google TV, Fire TV, Nvidia Shield (10-Foot UI)',
          version: 'v1.1.0',
          fileName: 'app-tv-release.apk',
          fileSize: '85.6 MB',
          downloadUrl: 'https://github.com/b4lol/telyra-releases/releases/download/v1.1.0/app-tv-release.apk',
          sha256: '871e38bd00468fb6a71bfcc0a04fa38a5cfbc57e311e29ac1a34ff8cc40b0218',
          releaseDate: '2026-10-23',
          minSdk: 'Android 7.0 (API 24)',
        },
        {
          id: 'app-mobile',
          title: 'TELYRA for Android Mobile & Tablet',
          targetDevice: 'Android Smartphones & Tablets (Touch UI)',
          version: 'v1.1.0',
          fileName: 'app-mobile-release.apk',
          fileSize: '178.9 MB',
          downloadUrl: 'https://github.com/b4lol/telyra-releases/releases/download/v1.1.0/app-mobile-release.apk',
          sha256: '2093f1ad37d42329734ee4068ebbb1d7757625f3d10b11521ad232a98b098f27',
          releaseDate: '2026-10-23',
          minSdk: 'Android 7.0 (API 24)',
        },
      ],
    },
    privacy: {
      label: 'LEGAL FRAMEWORK & PRIVACY',
      title: 'Privacy Policy & Mandatory Legal Disclaimers',
      subtitle: 'TELYRA operates under foundational engineering standards of user privacy and strict regulatory compliance.',
      zeroDataTitle: 'Commitment to Non-Processing of Personal Data (GDPR & KVKK)',
      zeroDataDesc: 'In accordance with Regulation (EU) 2016/679 (GDPR) and Law No. 6698 (KVKK), TELYRA does not collect, process, profile, or retain personal data, IP addresses, device identifiers, or playback logs on external servers.',
      disclaimerTitle: 'Mandatory Independent Player Disclaimer (EU Directive & Copyright Compliance)',
      disclaimerText: 'TELYRA is strictly an independent client-side media player utility. It does not host, provide, syndicate, rebroadcast, or sell any media streams, television broadcasts, or playlist subscriptions. Users are solely and exclusively responsible for ensuring that all imported playlists and media sources comply with applicable copyright and broadcast licensing laws.',
      fullPolicyBtn: 'Review Complete Privacy Policy & Legal Disclaimers →',
      closeModal: 'Close',
      modal: {
        title: 'TELYRA — Privacy Policy, Mandatory Disclaimers & Terms',
        effectiveDateLabel: 'Effective Date:',
        effectiveDate: 'October 23, 2026 (Version 1.1.0)',
        sections: [
          {
            title: '1. Data Controller & Non-Processing Architecture (GDPR & KVKK Compliance)',
            content: 'In accordance with Regulation (EU) 2016/679 (“GDPR”) and Law No. 6698 (“KVKK”), the developers of TELYRA operate under a zero-data architecture. TELYRA does not collect, track, profile, or process personal data on remote servers. The software contains zero advertising SDKs, zero behavioral telemetry frameworks, and zero remote user tracking beacons.',
          },
          {
            title: '2. Hardware-Isolated Local Encryption & Key Security Architecture',
            content: 'All credentials, authentication tokens, and playlist URLs entered by the user remain strictly confined to the local physical device. Credentials are encrypted locally via AndroidKeyStore AES-256 GCM backed by the hardware Trusted Execution Environment (TEE / StrongBox). Master encryption keys are isolated at the silicon level and cannot be exported or transmitted across the network.',
          },
          {
            title: '3. License Verification Architecture & Anonymous Hardware Hash Processing',
            content: 'TELYRA Pro license verification queries conducted against our edge verification infrastructure do not collect, process, or store names, email addresses, IP logs, or personal identifiers. Verification relies strictly on an irreversibly calculated one-way cryptographic hash derived from hardware properties.',
          },
          {
            title: '4. Mandatory IPTV & Media Playback Legal Disclaimer (Content Neutrality)',
            content: 'TELYRA does NOT host, supply, distribute, broadcast, index, or sell any media streams, television channels, IPTV links, or subscription playlists. TELYRA is strictly an independent client-side media player utility designed to decode and render user-supplied streams.',
            bullets: [
              'Users expressly represent and warrant that they possess legitimate broadcast licenses, lawful subscriptions, or intellectual property authorizations for every media stream or playlist configured in the application.',
              'TELYRA and its developers categorically disclaim all legal, civil, regulatory, or criminal liability resulting from the playback or redistribution of unauthorized, pirated, or copyright-infringing content through the application.',
              'Purchasing a TELYRA Pro software license grants access solely to the media playback software features and does not include or imply any access to audio, video, or broadcast media content.',
            ],
            isWarning: true,
          },
          {
            title: '5. Third-Party Trademarks & Nominative Fair Use Statement',
            content: 'All third-party trademarks, registered brand names, product titles, and logos referenced across this website and within the software documentation—including Android TV, Google TV, Fire TV, and similar marks—are the intellectual property of their respective owners. References to these marks are strictly made under nominative fair use doctrine to denote device compatibility, operating system interoperability, and objective technical benchmark comparisons.',
          },
          {
            title: '6. Consumer Protection, Data Subject Rights & Local Data Erasure',
            content: 'Because TELYRA does not process or retain personal data on central servers, there are no centralized databases subject to rectification, access, restriction, or erasure requests under GDPR Articles 15-22 or KVKK Article 11. Users maintain absolute sovereignty over their data: uninstalling TELYRA immediately and irreversibly destroys all locally encrypted credentials, caches, and configuration files from the device.',
          },
        ],
      },
    },
    footer: {
      aboutTelyra: 'TELYRA is a purpose-built, hardware-accelerated independent IPTV and media client for Android TV and Google TV.',
      builtBy: 'Designed & Built by Hüseyin "b4lol".',
      allRights: 'All rights reserved.',
      disclaimerNotice: 'Legal Disclaimer: TELYRA is strictly an independent media player client utility; it does not host, supply, or sell any streaming media, broadcasts, or IPTV playlists. Users are solely responsible for ensuring lawful broadcast access. Third-party trademarks are the property of their respective owners, referenced strictly under nominative fair use for compatibility description.',
    },
  },
}
