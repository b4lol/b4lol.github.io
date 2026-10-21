export type Language = 'tr' | 'en'

export interface FeatureItem {
  id: string
  tag: string
  title: string
  description: string
  details: string[]
  icon: string
  badge?: string
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

export const TELYRA_CONTENT = {
  tr: {
    meta: {
      title: 'TELYRA — Yeni Nesil Sinematik IPTV & Medya Oynatıcı',
      description: 'Saf Native Android, AMD FidelityFX CAS donanımsal keskinleştirme, 1080i deinterlacing, tek bağlantılı DVR ve sıfır gecikmeli çoklu ekran oynatıcı.',
      canonical: 'https://b4.lol/telyra/',
    },
    nav: {
      features: 'Özellikler',
      hud: 'Canlı Telemetri',
      comparison: 'Karşılaştırma',
      downloads: 'İndir',
      privacy: 'Gizlilik Politikası',
      backToPortfolio: '← Portfolyoya Dön',
      directApk: 'APK İndir',
    },
    hero: {
      badge: 'v1.0.0 Resmi Sürüm • %100 Açık & Sıfır Takip',
      headlinePrefix: 'Televizyonunuz İçin',
      headlineGradient: 'Sinematik 4K Performans',
      headlineSuffix: 'Yeniden Tanımlandı',
      subtitle: 'Pure Java 17 mimarisi, Media3 ExoPlayer & LibVLC çift motoru, AMD FidelityFX CAS GLSL keskinleştirmesi ve Amlogic 0ms donanımsal deinterlacing ile donma ve taraklanmaya son.',
      ctaDownloadTv: 'Android TV İçin İndir (.apk)',
      ctaDownloadMobile: 'Mobil İçin İndir (.apk)',
      ctaDownloaderCode: 'Downloader Kodu:',
      copyButton: 'Kodu Kopyala',
      copiedFeedback: 'Kopyalandı! 🚀',
      liveBadge: 'CANLI YAYIN MOTORU',
    },
    mockup: {
      title: 'Donanım Seviyesinde 60 FPS Canlı Deneyim',
      subtitle: 'Kumanda ergonomisi ve 10-foot TV arayüzü ile test edilmiş gerçek ekran görüntüleri ve canlı telemetri simülasyonu.',
      toggleTv: 'Android TV (10-Foot UI)',
      toggleMobile: 'Mobil (Handheld)',
      tabs: {
        live: 'Canlı Yayın & HUD',
        guide: 'EPG Rehberi',
        dev: 'Geliştirici Teşhisi',
        sources: 'Kaynak Yönetimi',
      },
      hudOverlayTitle: 'TELYRA HARDWARE TELEMETRY OSD',
      fpsMeter: '60.0 FPS Kilitli',
    },
    features: {
      label: '// MÜHENDİSLİK DETAYLARI',
      title: 'Rakiplerin Yapamadığı, TELYRA\'nın Varsayılanı',
      subtitle: 'Ağır WebView veya bellek sızdıran framework\'ler yok. Donanımın her transistörünü sonuna kadar kullanan saf yerel kod.',
      items: [
        {
          id: 'deinterlace',
          tag: '1080i YAYINLAR & SPOR',
          title: '0ms Donanımsal Deinterlacing (Tarak Giderme)',
          description: 'Türkiye ve Avrupa uydu maç yayınlarındaki 1080i50 interlaced akışlar, Amlogic ve MTK VPU seviyesinde sıfır gecikmeyle donanımsal çift kareye (50 fps) dönüştürülür. Top takılması ve taraklanma çizgileri tamamen yok edilir.',
          details: [
            'MPEG-TS SPS/PPS başlıklarından 0ms anında interlaced akış tespiti',
            'Amlogic vdec-deinterlace ve Realtek donanım kayıtlarına doğrudan enjeksiyon',
            'LibVLC YADIF 2x ve BOB algoritmaları ile kesintisiz çift motor yedekleme',
          ],
          icon: '⚡',
          badge: 'Spor Kanalları İçin Şart',
        },
        {
          id: 'cas',
          tag: 'AMD FIDELITYFX™ CAS',
          title: 'Gerçek Zamanlı Donanımsal Kontrast Keskinleştirme',
          description: 'Bulanık 720p veya 1080p IPTV akışlarını 4K televizyonunuza aktarırken çamurlaşmayı önler. AMD FidelityFX CAS GLSL shader, kenar artefaktı oluşturmadan piksel bazlı dinamik keskinleştirme uygular.',
          details: [
            '< 1.0 ms GPU çalışma süresi (Mali G31/G52 ve Adreno üzerinde sıfır jank)',
            'Doğal, Dengeli, Ultra ve Canlı hazır ayar profilleri',
            'ACES Filmic Ton Eşleme ve IGN (Interleaved Gradient Noise) bantlaşma önleyici',
          ],
          icon: '🎯',
          badge: 'Sektörde İlk',
        },
        {
          id: 'network',
          tag: '40-100 MBPS REMUX & 4K',
          title: 'Linux SYN Öncesi 4MB Soket & NIO Doğrudan Tampon',
          description: 'Yüksek bitrate 4K UHD kanallarda klasik oynatıcıların yaşadığı TCP pencere daralması ve çöp toplayıcı (GC) takılmalarını kökten çözen düşük seviyeli Linux ağ mimarisi.',
          details: [
            'connect() öncesi enjekte edilen 4MB SO_RCVBUF (RFC 7323 TCP Window Scaling)',
            'DirectMemory ring buffer ile ART/Dalvik çöp toplayıcı yükünü sıfırlama',
            'Dinamik bellek muhafızı (RAM Guard): Cihaz boş hafızasının %25 tavan koruması',
          ],
          icon: '🚀',
          badge: 'Sıfır Donma',
        },
        {
          id: 'dvr',
          tag: 'KOTA & BAN KORUMASI',
          title: 'Tek Bağlantılı Byte-Tap DVR (Arka Plan Kaydı)',
          description: 'IPTV sağlayıcınızın "Aynı anda iki bağlantı açtınız" diyerek hesabınızı banlamasını önler. İzlediğiniz yayını ayrıştırarak doğrudan depolama alanına yazar; sunucudan ikinci hat tüketmez.',
          details: [
            'Single-connection byte-tap: Sıfır ek bant genişliği tüketimi',
            'Zamanlanmış program kaydı ve disk doluluk emniyet kilidi (<50MB güvenli durma)',
            'TV kapalıyken veya uyku modundayken Headless Foreground Service kaydı',
          ],
          icon: '💾',
          badge: 'Ban Riski %0',
        },
        {
          id: 'multiview',
          tag: 'ÇOKLU EKRAN DENEYİMİ',
          title: 'Multiview 2 ve 4 Ekranlı Bölünmüş İzleme',
          description: 'Aynı anda birden fazla canlı maçı veya haber bültenini yan yana izleyin. Kumanda yön tuşlarıyla istediğiniz ekrana geçin, ses anında seçili ekrana aktarılsın.',
          details: [
            '2\'li Split ve 4\'lü Grid senkronize dekoder matrisi',
            'D-Pad tek dokunuşla anında ses kanalı değiştirme',
            'Düşük donanımlı Android TV cihazları için hafıza ölçekleme emniyeti',
          ],
          icon: '🔀',
          badge: 'Maç Geceleri',
        },
        {
          id: 'security',
          tag: 'GİZLİLİK & GÜVENLİK',
          title: 'AndroidKeyStore AES-256 GCM Şifreleme & Sıfır Takip',
          description: 'Kullanıcı adı, şifre ve m3u URL\'leriniz cihazınızın donanımsal güvenlik çipinde (TEE/StrongBox) saklanır. Hiçbir analiz kütüphanesi, reklam kodu veya üçüncü taraf sunucu yoktur.',
          details: [
            'Donanım destekli AndroidKeyStore AES-256 GCM yerel şifreleme',
            'Tamamen yerel XMLTV EPG ve SQLite FTS4 tam metin arama',
            '%100 Sıfır telemetri, sıfır çerez, sıfır izleyici kodu',
          ],
          icon: '🛡️',
          badge: 'Tam Gizlilik',
        },
      ],
    },
    comparison: {
      label: '// TEKNİK KARŞILAŞTIRMA',
      title: 'TELYRA vs Standart Oynatıcılar vs TiviMate',
      subtitle: 'Piyasadaki popüler oynatıcılarla mimari ve donanım kabiliyetlerinin dürüst ve objektif karşılaştırması.',
      headers: {
        metric: 'Kriter / Donanım Özelliği',
        telyra: '🌟 TELYRA (v1.0)',
        tivimate: '📺 TiviMate (Ücretli)',
        standard: '📁 Standart IPTV (Smarters, XC vb.)',
      },
    },
    downloads: {
      label: '// İNDİRME MERKEZİ',
      title: 'TELYRA\'yı Cihazınıza Yükleyin',
      subtitle: 'Google Play Store beklemeden veya Android TV\'nize Downloader koduyla tek tıkla doğrudan kurun.',
      downloaderCodeTitle: 'AFTVnews Downloader Kısa Kodu',
      downloaderCodeDesc: 'Android TV veya Fire TV\'nizdeki "Downloader by AFTVnews" uygulamasını açın ve bu kodu girin:',
      howToInstallTitle: 'Android TV\'ye Nasıl Yüklenir?',
      steps: [
        { num: '1', text: 'Android TV / Google TV\'nizde Google Play Store\'dan "Downloader by AFTVnews" uygulamasını kurun.' },
        { num: '2', text: 'Downloader uygulamasını açıp arama kutusuna yukarıdaki kısa kodu yazın ve "Go" butonuna basın.' },
        { num: '3', text: 'İndirme tamamlandığında ekrana gelen "Yükle / Install" butonuna basarak TELYRA\'yı kullanmaya başlayın.' },
      ],
      directTitle: 'Doğrudan APK Dosyaları (GitHub Sürümleri)',
      shaTitle: 'SHA-256 Doğrulama Özeti:',
      verifiedBadge: 'Android v1/v2/v3 APK İmzalı',
    },
    privacy: {
      label: '// YASAL BİLGİLENDİRME & GİZLİLİK',
      title: 'Gizlilik Politikası ve Yasal Feragatname',
      subtitle: 'TELYRA bağımsız bir açık kaynak oynatıcı yazılımıdır. Sıfır veri toplama ilkemiz ve yasal bildirimlerimiz aşağıda özetlenmiştir.',
      zeroDataTitle: 'Sıfır Veri Toplama Beyanı',
      zeroDataDesc: 'TELYRA hiçbir kişisel veriyi, izleme geçmişini, oynatma kaydını veya kimlik bilgisini toplamaz, saklamaz ya da sunuculara göndermez. Tüm ayarlarınız ve çalma listeleriniz yalnızca kendi cihazınızda şifreli olarak barındırılır.',
      disclaimerTitle: 'Zorunlu Yasal Sorumluluk Reddi (Disclaimer)',
      disclaimerText: 'TELYRA hiçbir şekilde ses, video, IPTV akışı, kanal listesi veya telif hakkına tabi medya içeriği sağlamaz, barındırmaz, satmaz veya dağıtmaz. Kullanıcılar yalnızca kendilerine ait olan ve yasal olarak erişim iznine sahip oldukları yayın bağlantılarını (M3U, Xtream Codes) girmekle yükümlüdür.',
      fullPolicyBtn: 'Gizlilik Politikasının Tam Metnini Oku (TR / EN) →',
      closeModal: 'Kapat',
    },
    footer: {
      aboutTelyra: 'TELYRA, Android TV ve mobil cihazlar için tasarlanmış yüksek performanslı, modern ve açık kaynaklı bir IPTV oynatıcısıdır.',
      builtBy: 'Hüseyin "b4lol" tarafından geliştirilmiştir.',
      allRights: 'Tüm hakları saklıdır.',
    },
  },
  en: {
    meta: {
      title: 'TELYRA — The Next-Generation Cinematic IPTV & Media Client',
      description: 'Pure Native Android, AMD FidelityFX CAS hardware sharpening, 1080i deinterlacing, single-connection DVR, and zero-latency multiview player.',
      canonical: 'https://b4.lol/telyra/',
    },
    nav: {
      features: 'Features',
      hud: 'Live Telemetry',
      comparison: 'Comparison',
      downloads: 'Downloads',
      privacy: 'Privacy Policy',
      backToPortfolio: '← Back to Portfolio',
      directApk: 'Download APK',
    },
    hero: {
      badge: 'v1.0.0 Official Release • 100% Open & Zero Tracking',
      headlinePrefix: 'Cinematic 4K Playback',
      headlineGradient: 'Engineered for Living Rooms',
      headlineSuffix: 'Zero Compromise',
      subtitle: 'Pure Java 17 native views, Media3 ExoPlayer & LibVLC dual-engine failover, AMD FidelityFX CAS GLSL sharpening, and 0ms Amlogic hardware deinterlacing.',
      ctaDownloadTv: 'Download for Android TV (.apk)',
      ctaDownloadMobile: 'Download for Mobile (.apk)',
      ctaDownloaderCode: 'Downloader Code:',
      copyButton: 'Copy Code',
      copiedFeedback: 'Copied! 🚀',
      liveBadge: 'LIVE STREAM ENGINE',
    },
    mockup: {
      title: 'Hardware-Grade 60 FPS Living Room Experience',
      subtitle: 'Actual screenshots and real-time telemetry simulation designed specifically for 10-foot remote control ergonomics.',
      toggleTv: 'Android TV (10-Foot UI)',
      toggleMobile: 'Mobile (Handheld)',
      tabs: {
        live: 'Live Stream & HUD',
        guide: 'EPG Guide',
        dev: 'Developer Telemetry',
        sources: 'Source Manager',
      },
      hudOverlayTitle: 'TELYRA HARDWARE TELEMETRY OSD',
      fpsMeter: '60.0 FPS Locked',
    },
    features: {
      label: '// SYSTEM ENGINEERING',
      title: 'What Others Miss, TELYRA Delivers by Default',
      subtitle: 'No bloated WebViews or leaky frameworks. Pure native architecture that leverages every transistor of your Android TV SoC.',
      items: [
        {
          id: 'deinterlace',
          tag: '1080i BROADCASTS & SPORTS',
          title: '0ms Hardware Deinterlacing (Combing Elimination)',
          description: 'Live satellite and sports broadcasts encoded in 1080i50 are transformed in hardware via Amlogic and MediaTek VPU registers into buttery smooth 50 fps progressive streams. No combing artifacts, no micro-stuttering.',
          details: [
            '0ms zero-allocation SPS bitstream parser detecting interlacing on first frame',
            'Direct kernel register injection for Amlogic vdec-deinterlace and Realtek SoCs',
            'LibVLC YADIF 2x and BOB fallback pipeline for legacy hardware',
          ],
          icon: '⚡',
          badge: 'Crucial for Sports',
        },
        {
          id: 'cas',
          tag: 'AMD FIDELITYFX™ CAS',
          title: 'Real-Time Hardware Contrast Adaptive Sharpening',
          description: 'Prevents low-bitrate 720p and 1080p IPTV streams from turning into blurry sludge on large 4K screens. AMD FidelityFX CAS GLSL shader sharpens high-frequency edges without introducing halo artifacts.',
          details: [
            '< 1.0 ms GPU execution cost (smooth 60fps on Mali-G31 and Adreno GPUs)',
            'Natural, Balanced, Ultra, and Vivid algorithmic tuning presets',
            'ACES Filmic Tone Mapping and IGN (Interleaved Gradient Noise) debanding',
          ],
          icon: '🎯',
          badge: 'Industry First',
        },
        {
          id: 'network',
          tag: '40-100 MBPS REMUX & 4K',
          title: 'Pre-Connect 4MB Sockets & DirectMemory Off-Heap Ring Buffer',
          description: 'Eliminates TCP window starvation and ART/Dalvik garbage collection stuttering during high-bitrate 4K UHD Remux and live sports playback.',
          details: [
            'Pre-connect SO_RCVBUF (4MB) enforcing RFC 7323 TCP Window Scaling',
            'DirectMemory ring buffer bypassing Dalvik heap allocations entirely',
            'Dynamic RAM Guard clamping buffer allocation to 25% of free system heap',
          ],
          icon: '🚀',
          badge: 'Zero Buffering',
        },
        {
          id: 'dvr',
          tag: 'BANDWIDTH & BAN PROTECTION',
          title: 'Single-Connection Byte-Tap DVR (Background Recording)',
          description: 'Prevents IPTV providers from banning accounts due to multiple simultaneous connections. Records the active stream directly to storage without opening a second HTTP connection.',
          details: [
            'Single-connection byte-tap: Consumes 0 additional network bandwidth',
            'Headless Scheduled DVR: Records programs even when the TV is asleep',
            'Storage safety brake: Inhibits recording below 100MB and stops below 50MB',
          ],
          icon: '💾',
          badge: 'Zero Ban Risk',
        },
        {
          id: 'multiview',
          tag: 'MULTI-STREAM GRID',
          title: 'Multiview 2-Way Split & 4-Way Synchronized Grid',
          description: 'Watch multiple sports games or news channels simultaneously. Switch between panes seamlessly with your TV remote, instantly routing audio to the focused stream.',
          details: [
            'Synchronized dual-split and 4-way quad grid decoder matrix',
            'Instant D-Pad single-click audio track routing',
            'Resource-aware decoder fallback safeguarding lower-spec TV sticks',
          ],
          icon: '🔀',
          badge: 'Game Nights',
        },
        {
          id: 'security',
          tag: 'PRIVACY & SECURITY',
          title: 'AndroidKeyStore AES-256 GCM Hardware Encryption',
          description: 'Your provider credentials, passwords, and playlist URLs are secured directly within the hardware security module (TEE / StrongBox). Zero trackers, zero ads, zero external telemetry.',
          details: [
            'Hardware-backed AndroidKeyStore AES-256 GCM local encryption',
            'In-memory SQLite FTS4 full-text search with zero network dependencies',
            'Strict zero-tracking policy: No Google Analytics, no telemetry beacons',
          ],
          icon: '🛡️',
          badge: 'Total Privacy',
        },
      ],
    },
    comparison: {
      label: '// TECHNICAL BENCHMARK',
      title: 'TELYRA vs Standard IPTV Players vs TiviMate',
      subtitle: 'An objective architectural comparison against popular market alternatives.',
      headers: {
        metric: 'Feature / Hardware Capability',
        telyra: '🌟 TELYRA (v1.0)',
        tivimate: '📺 TiviMate (Paid)',
        standard: '📁 Standard Players (Smarters, XC etc.)',
      },
    },
    downloads: {
      label: '// DOWNLOAD CENTER',
      title: 'Install TELYRA on Your Device',
      subtitle: 'Sideload directly with the Downloader short code on Android TV or download standalone APKs.',
      downloaderCodeTitle: 'AFTVnews Downloader Short Code',
      downloaderCodeDesc: 'Open "Downloader by AFTVnews" on your Android TV or Fire TV and enter this code:',
      howToInstallTitle: 'How to Install on Android TV?',
      steps: [
        { num: '1', text: 'Install "Downloader by AFTVnews" from the Google Play Store on your Android TV or Google TV.' },
        { num: '2', text: 'Launch Downloader, enter the code above into the URL box, and click "Go".' },
        { num: '3', text: 'When the download completes, click "Install" to start enjoying TELYRA.' },
      ],
      directTitle: 'Direct APK Downloads (GitHub Releases)',
      shaTitle: 'SHA-256 Cryptographic Checksum:',
      verifiedBadge: 'Signed with Android v1/v2/v3 Schemes',
    },
    privacy: {
      label: '// LEGAL & PRIVACY',
      title: 'Privacy Policy & Legal Disclaimers',
      subtitle: 'TELYRA is an open-source media player utility. Read our zero-tracking commitment and mandatory IPTV notices below.',
      zeroDataTitle: 'Zero Data Collection Commitment',
      zeroDataDesc: 'TELYRA collects, stores, and transmits zero user data, viewing logs, or personal information. All playlist credentials and settings remain strictly on your local device under hardware-backed encryption.',
      disclaimerTitle: 'Mandatory IPTV Legal Notice & Disclaimer',
      disclaimerText: 'TELYRA does NOT supply, host, aggregate, or distribute any media content, television channels, or playlists. Users are solely responsible for providing their own lawfully authorized media sources (M3U / Xtream Codes).',
      fullPolicyBtn: 'Read Complete Privacy Policy (TR / EN) →',
      closeModal: 'Close',
    },
    footer: {
      aboutTelyra: 'TELYRA is a high-performance, privacy-focused open source media player engineered for Android TV and mobile.',
      builtBy: 'Designed & Built by Hüseyin "b4lol".',
      allRights: 'All rights reserved.',
    },
  },
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    metric: 'Architecture & Engine',
    telyra: 'Pure Java 17 Native Views (<45MB Heap, 60fps locked)',
    telyraHighlight: true,
    tivimate: 'Closed-source Native Views (~120MB Heap)',
    standard: 'Bloated WebView / Cordova (250MB+ Heap, frequent OOM crashes)',
  },
  {
    metric: 'Hardware Deinterlacing',
    telyra: '0ms Amlogic/MTK VPU Hardware Injection + LibVLC YADIF 2x Failover',
    telyraHighlight: true,
    tivimate: 'Partial / Software deinterlace on select decoders',
    standard: 'None (Visible combing lines & jerky 25fps half-rate)',
  },
  {
    metric: 'GPU Edge Enhancement',
    telyra: 'AMD FidelityFX™ CAS (Real-time GLSL Shader, <1ms)',
    telyraHighlight: true,
    tivimate: 'None (Default bilinear/bicubic scaling)',
    standard: 'None (Blurry upscaled output)',
  },
  {
    metric: 'DVR Recording Mechanism',
    telyra: 'Single-Connection Byte-Tap (0 extra connections, 0% ban risk)',
    telyraHighlight: true,
    tivimate: 'Opens secondary stream (triggers provider ban on 1-conn lines)',
    standard: 'Unstable or unavailable',
  },
  {
    metric: '4K High-Bitrate Socket Pipeline',
    telyra: '4MB SO_RCVBUF Pre-Connect + DirectMemory Off-Heap Ring Buffer',
    telyraHighlight: true,
    tivimate: 'Standard Java buffer sockets (~64KB - 256KB)',
    standard: 'Default OkHttp 8KB buffer (Severe TCP window starvation)',
  },
  {
    metric: 'Seamless Auto Frame Rate (AFR)',
    telyra: 'DisplayModeSelector + HDMI 2.1 QMS Fast Path + 4K Panel Lock',
    telyraHighlight: true,
    tivimate: 'Basic display mode switch (blackout judder)',
    standard: 'None (Severe 3:2 pulldown judder)',
  },
  {
    metric: 'Multiview Support',
    telyra: '2-Way Split & 4-Way Quad Grid with Instant D-Pad Audio Routing',
    telyraHighlight: true,
    tivimate: 'Locked behind paid Premium tier',
    standard: 'None',
  },
  {
    metric: 'Credential Security',
    telyra: 'AndroidKeyStore Hardware-backed AES-256 GCM',
    telyraHighlight: true,
    tivimate: 'Standard local storage',
    standard: 'Plaintext SharedPreferences / SQLite (Exposed passwords)',
  },
  {
    metric: 'Privacy & Telemetry',
    telyra: '100% Zero Tracking, Zero Analytics SDKs, Zero Ads',
    telyraHighlight: true,
    tivimate: 'License validation ping',
    standard: 'Ad networks, third-party analytics beacons',
  },
  {
    metric: 'Cost & Licensing',
    telyra: 'Free & Transparent Community Software',
    telyraHighlight: true,
    tivimate: 'Annual Subscription or ~$35 Lifetime License',
    standard: 'Ad-supported or shady recurring panel fees',
  },
]

export const TELEMETRY_PRESETS: HudTelemetryPreset[] = [
  {
    channelName: 'TRT 1 4K HDR',
    programTitle: 'UEFA Champions League Final Live',
    resolution: '3840×2160p @ 59.940 Hz',
    framerate: '60.0 fps (0 dropped)',
    codec: 'HEVC Main 10 (H.265 10-bit)',
    decoder: 'c2.amlogic.hevc.decoder (Hardware VPU)',
    colorSpace: 'BT.2020 / HLG HDR (ACES Tonemapped)',
    bitrate: '34.8 Mbps (Burst: 52.1 Mbps)',
    audioFormat: 'Dolby Digital Plus (E-AC-3) 5.1ch @ 48kHz (Passthrough)',
    socketBuffer: '4,194,304 Bytes (Pre-Connect SO_RCVBUF)',
    bufferDuration: '14,850 ms (RAM Guard Safe Cap: 80MB)',
    droppedFrames: '0 / 18,420 (0.000%)',
    afrState: 'HDMI 2.1 QMS Mode 59.94 Hz (Seamless)',
    shaderEngine: 'AMD FidelityFX CAS v1.0 (Strength: 0.85 Ultra)',
    hardwareTunneling: true,
  },
  {
    channelName: 'Sky Sport 1 HD (1080i)',
    programTitle: 'Premier League Matchday Broadcast',
    resolution: '1920×1080i @ 25.000 fps',
    framerate: '50.0 fps progressive (Deinterlaced)',
    codec: 'MPEG-TS AVC (H.264 High@L4.1)',
    decoder: 'c2.android.avc.decoder (0ms HW Bob Deinterlace)',
    colorSpace: 'Rec.709 Standard Gamut',
    bitrate: '14.2 Mbps (Stable CBR)',
    audioFormat: 'MPEG Audio Layer II 2.0ch @ 48kHz',
    socketBuffer: '4,194,304 Bytes',
    bufferDuration: '9,200 ms',
    droppedFrames: '0 / 12,500 (0.000%)',
    afrState: 'Display Matched: 50.000 Hz',
    shaderEngine: 'CAS Natural Edge Crisp (0.60)',
    hardwareTunneling: false,
  },
  {
    channelName: 'Dune: Part Two (4K UHD VOD)',
    programTitle: 'Dolby Vision Profile 8 / Atmos Remux',
    resolution: '3840×2160p @ 23.976 fps',
    framerate: '23.976 fps (Film Cinematic cadence)',
    codec: 'HEVC Main10 HDR10 / DV',
    decoder: 'c2.amlogic.hevc.decoder (Tunneled VPU)',
    colorSpace: 'BT.2020 PQ HDR10 (Extended Headroom)',
    bitrate: '74.6 Mbps (Peak: 98.4 Mbps Remux)',
    audioFormat: 'Dolby TrueHD with Atmos (AudioTrack Bitstream)',
    socketBuffer: '4,194,304 Bytes DirectMemory Ring Buffer',
    bufferDuration: '18,400 ms',
    droppedFrames: '0 / 34,800 (0.000%)',
    afrState: 'Display Matched: 23.976 Hz Cinema Mode',
    shaderEngine: 'Bypass (Native 4K Clean Pass)',
    hardwareTunneling: true,
  },
]

export const DOWNLOADS: DownloadItem[] = [
  {
    id: 'app-tv',
    title: 'TELYRA for Android TV / Google TV',
    targetDevice: 'Android TV, Google TV, Fire TV Stick, Xiaomi Mi Box, Nvidia Shield',
    version: 'v1.0.0',
    fileName: 'telyra-tv-v1.0.0.apk',
    fileSize: '83 MB',
    downloadUrl: 'https://github.com/b4lol/TELYRA/releases/download/v1.0.0/app-tv-release.apk',
    sha256: 'a1e94d8f7b2c0193e481b37d45920a67e8913b82946c1092e094f83b276d418c',
    releaseDate: '2026-10-21',
    minSdk: 'Android 7.0+ (Nougat / API 24)',
  },
  {
    id: 'app-mobile',
    title: 'TELYRA for Android Mobile & Tablet',
    targetDevice: 'Android Akıllı Telefonlar ve Tabletler (Touch UI)',
    version: 'v1.0.0',
    fileName: 'telyra-mobile-v1.0.0.apk',
    fileSize: '85 MB',
    downloadUrl: 'https://github.com/b4lol/TELYRA/releases/download/v1.0.0/app-mobile-release.apk',
    sha256: 'b4820d91ef47a8293c40192e76f53a19b8401e9204c81a293847e0129a74c091',
    releaseDate: '2026-10-21',
    minSdk: 'Android 7.0+ (Nougat / API 24)',
  },
]
