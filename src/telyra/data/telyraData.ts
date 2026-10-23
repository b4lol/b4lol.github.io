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
    downloads: string
    privacy: string
    backToPortfolio: string
    directApk: string
  }
  hero: {
    badge: string
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
  features: {
    label: string
    title: string
    subtitle: string
    items: FeatureItem[]
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

export const TELYRA_CONTENT: Record<Language, TelyraContent> = {
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
      badge: 'v1.0.0 Resmi Sürüm • Donanımsal İvmelendirme • Sıfır Takip',
      headlinePrefix: 'Televizyonunuz İçin',
      headlineGradient: 'Sinematik 4K Performans',
      headlineSuffix: 'Yeniden Tanımlandı',
      subtitle: 'Saf Kotlin 2.1 ve Jetpack Compose TV mimarisi, Media3 ExoPlayer ve LibVLC çift motoru, AMD FidelityFX CAS GLSL keskinleştirmesi ve Amlogic donanımsal tarak giderme (deinterlacing) ile optimize edilmiş televizyon deneyimi.',
      ctaDownloadTv: 'Android TV İçin İndir (.apk)',
      ctaDownloadMobile: 'Mobil İçin İndir (.apk)',
      ctaDownloaderCode: 'Downloader Kodu:',
      copyButton: 'Kodu Kopyala',
      copiedFeedback: 'Kopyalandı!',
      liveBadge: 'CANLI YAYIN MOTORU',
    },
    mockup: {
      label: '// 10-FOOT OTURMA ODASI SİNEMATİK ARAYÜZÜ',
      title: 'Donanım Seviyesinde 60 FPS Canlı Deneyim',
      subtitle: 'Kumanda ergonomisi ve 10-foot TV arayüzü ile test edilmiş gerçek ekran görüntüleri ve canlı telemetri simülasyonu.',
      toggleTv: 'Android TV (10-Foot UI)',
      toggleMobile: 'Mobil (Handheld UI)',
      fastZappingLabel: 'HIZLI ZAPPING:',
      hudViewLabel: 'HUD GÖRÜNÜMÜ:',
      remoteHint: 'İpucu: Klavye Yön Tuşları (Sol / Sağ: Kanal Değiştir, Yukarı: HUD Modu, Aşağı: Sekme) ile de kontrol edebilirsiniz.',
      tvTabs: {
        home: 'Ana Ekran (Home)',
        live: 'Canlı TV & Kanallar',
        guide: 'EPG TV Rehberi',
        movies: 'Sinema Kataloğu',
        detail: 'Film Detayı & 4K',
        hud: 'Ultra-HUD Telemetri',
        sources: 'Kaynak Yönetimi',
      },
      mobileTabs: {
        player: 'Oynatıcı (Player)',
        stats: 'HUD Teşhis (Stats)',
        live: 'Canlı Yayın (Live)',
        onboarding: 'Kurulum (Onboarding)',
      },
      hudModes: {
        off: 'Gizle',
        compact: 'Kompakt',
        detailed: 'Detaylı',
      },
      hudLabels: {
        recLive: '[REC] CANLI',
        showHud: 'HUD Telemetriyi Aç',
        program: 'Program:',
        resolution: 'Çözünürlük & Panel:',
        decoder: 'Video Dekoder (VPU):',
        framerate: 'Kare Hızı & Düşen:',
        shader: 'Görüntü İşleme (CAS):',
        bitrate: 'Bitrate & Soket Halka:',
        audio: 'Ses Passthrough:',
        afr: 'HDMI 2.1 AFR Modu:',
        switchProfile: '[Profil Yenile]',
        compactBtn: '_ Kompakt',
        closeBtn: 'X',
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
          droppedFrames: '0 / 48.200 (%0.000)',
          afrState: 'HDMI 2.1 QMS Modu 50.00 Hz (Kilitli)',
          shaderEngine: 'Obsidian Cinema + CAS Kenar Filtresi',
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
          droppedFrames: '0 / 18.420 (%0.000)',
          afrState: 'HDMI 2.1 59.94 Hz Eşleşti',
          shaderEngine: 'AMD FidelityFX CAS v1.0 (Ultra Keskin)',
          hardwareTunneling: true,
        },
        {
          channelName: 'I Can Only Imagine 2 (2026)',
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
          droppedFrames: '0 / 34.800 (%0.000)',
          afrState: 'HDMI 24p Gerçek Sinema Modu',
          shaderEngine: 'Bypass (Saf 4K Doğrudan Geçiş)',
          hardwareTunneling: true,
        },
      ],
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
          icon: 'zap',
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
          icon: 'target',
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
          icon: 'cpu',
          badge: 'Sıfır Donma',
        },
        {
          id: 'dvr',
          tag: 'KOTA VE BAĞLANTI OPTİMİZASYONU',
          title: 'Tek Bağlantılı Byte-Tap DVR (Arka Plan Kaydı)',
          description: 'Sağlayıcı tarafında eşzamanlı çift bağlantı oluşmasını engellemek üzere tasarlanan aktif akış kopyalama mimarisi, izlediğiniz yayını soket seviyesinde yerel depolama alanına yazar ve sunucudan ikincil bir hat açılmasını gerektirmez.',
          details: [
            'Aktif akış kopyalama (Byte-Tap): İkincil bağlantı açmaksızın doğrudan soketten yerel kayıt',
            'Zamanlanmış program kaydı ve disk doluluk emniyet kilidi (<50MB güvenli durma)',
            'TV kapalıyken veya uyku modundayken Headless Foreground Service kaydı',
          ],
          icon: 'hard-drive',
          badge: 'Aktif Akış Kopyalama',
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
          icon: 'grid',
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
            'Sıfır telemetri, sıfır çerez, sıfır izleyici kodu',
          ],
          icon: 'shield',
          badge: 'Donanımsal İzolasyon',
        },
      ],
    },
    comparison: {
      label: '// TEKNİK KARŞILAŞTIRMA',
      title: 'TELYRA vs Standart Oynatıcılar vs TiviMate',
      subtitle: 'Piyasadaki popüler oynatıcılarla mimari ve donanım kabiliyetlerinin dürüst ve objektif karşılaştırması.',
      headers: {
        metric: 'Kriter / Donanım Özelliği',
        telyra: 'TELYRA Pro (v1.1)',
        tivimate: 'TiviMate (Ücretli)',
        standard: 'Standart IPTV (Smarters, XC vb.)',
      },
      rows: [
        {
          metric: 'Arayüz Mimarisi & Bellek',
          telyra: 'Saf Kotlin 2.1 + Jetpack Compose TV (<45MB Heap, 60 FPS Hedefli)',
          telyraHighlight: true,
          tivimate: 'Tescilli Yerel Görünümler (~120MB Heap)',
          standard: 'Hantal WebView / Cordova (250MB+ Heap, Sık OOM Çökmeleri)',
        },
        {
          metric: 'Donanımsal Tarak Giderme (Deinterlace)',
          telyra: '0ms Amlogic/MTK VPU Donanım Enjeksiyonu + LibVLC YADIF 2x',
          telyraHighlight: true,
          tivimate: 'Belirli dekoderlerde kısmi/yazılımsal deinterlace',
          standard: 'Yok (Görünür taraklanma çizgileri ve titrek 25fps)',
        },
        {
          metric: 'GPU Kenar Keskinleştirme',
          telyra: 'AMD FidelityFX™ CAS (Gerçek zamanlı GLSL Shader, <1ms)',
          telyraHighlight: true,
          tivimate: 'Yok (Varsayılan bulanık ölçekleme)',
          standard: 'Yok (Bulanık pikselleşme)',
        },
        {
          metric: 'DVR Kayıt Yöntemi',
          telyra: 'Aktif Akış Kopyalama / Byte-Tap (İkincil bağlantı gerektirmez)',
          telyraHighlight: true,
          tivimate: 'İkincil akış açar (Eşzamanlı çift bağlantı kotası gerektirir)',
          standard: 'Kararsız veya mevcut değil',
        },
        {
          metric: '4K Yüksek Bitrate Soket Hattı',
          telyra: '4MB SO_RCVBUF Bağlantı Öncesi + DirectMemory Ring Tampon',
          telyraHighlight: true,
          tivimate: 'Standart Java soket tamponları (~64KB - 256KB)',
          standard: 'Varsayılan OkHttp 8KB tamponu (Şiddetli TCP pencere daralması)',
        },
        {
          metric: 'Kusursuz Otomatik Kare Hızı (AFR)',
          telyra: 'DisplayModeSelector + HDMI 2.1 QMS Hızlı Yol + 4K Panel Kilidi',
          telyraHighlight: true,
          tivimate: 'Temel ekran modu değişimi (kararma ve atlama)',
          standard: 'Yok (Şiddetli 3:2 pulldown titremesi)',
        },
        {
          metric: 'Çoklu Ekran (Multiview)',
          telyra: '2\'li Split & 4\'lü Grid, Kumandayla Anında Ses Yönlendirme',
          telyraHighlight: true,
          tivimate: 'Ücretli Premium pakete kilitli',
          standard: 'Yok',
        },
        {
          metric: 'Kimlik Bilgisi Güvenliği',
          telyra: 'AndroidKeyStore Donanım Destekli AES-256 GCM',
          telyraHighlight: true,
          tivimate: 'Standart yerel depolama',
          standard: 'Düz metin SharedPreferences / SQLite (Şifresiz yerel depolama)',
        },
        {
          metric: 'Gizlilik & Telemetri',
          telyra: 'Sıfır Takip, Sıfır Analitik SDK, Sıfır Reklam',
          telyraHighlight: true,
          tivimate: 'Lisans doğrulama pingi',
          standard: 'Reklam ağları, üçüncü taraf izleme kodları',
        },
        {
          metric: 'Maliyet & Lisanslama',
          telyra: 'TELYRA Pro (Cloudflare Edge D1 Doğrulama & Çevrimdışı Mod)',
          telyraHighlight: true,
          tivimate: 'Yıllık Abonelik veya ~35$ Ömür Boyu Lisans',
          standard: 'Reklam destekli veya şüpheli yinelenen panel ücretleri',
        },
      ],
      trademarkNotice: 'Ticari Marka ve Karşılaştırma Bildirimi: Tabloda bahsi geçen TiviMate ve ilgili ticari unvanlar kendi hak sahiplerinin mülkiyetindedir. Bu markalar, yalnızca teknik mimari ve donanım kabiliyetlerinin nesnel karşılaştırmasını sunmak amacıyla 6769 sayılı Sınai Mülkiyet Kanunu ve yasal Adil Kullanım (Nominative Fair Use) ilkeleri uyarınca referans verilmiştir. TELYRA\'nın bu hak sahipleriyle doğrudan veya dolaylı hiçbir ticari bağı ya da sponsorluk ilişkisi bulunmamaktadır.',
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
      verifiedBadge: 'Android v1/v2/v3 APK İmzalı',
      labels: {
        version: 'Sürüm:',
        fileSize: 'Boyut:',
        minSdk: 'Gereksinim:',
        downloadBtnText: 'İndir',
        checksum: 'SHA-256 Doğrulama Özeti:',
        copyChecksum: 'Kopyala',
        copiedChecksum: 'Kopyalandı!',
      },
      items: [
        {
          id: 'app-tv',
          title: 'TELYRA Android TV / Google TV İçin',
          targetDevice: 'Android TV, Google TV, Fire TV Stick, Xiaomi Mi Box, Nvidia Shield',
          version: 'v1.0.0',
          fileName: 'app-tv-release.apk',
          fileSize: '86 MB',
          downloadUrl: 'https://github.com/b4lol/telyra-releases/releases/download/v1.0.0/app-tv-release.apk',
          sha256: 'e5ef32fa5169ac6f1a351bc5503ec979867b03642e06d21e9b6b4461792d6174',
          releaseDate: '2026-10-21',
          minSdk: 'Android 7.0+ (Nougat / API 24)',
        },
        {
          id: 'app-mobile',
          title: 'TELYRA Android Mobil & Tablet İçin',
          targetDevice: 'Android Akıllı Telefonlar ve Tabletler (Dokunmatik Arayüz)',
          version: 'v1.0.0',
          fileName: 'app-mobile-release.apk',
          fileSize: '185 MB',
          downloadUrl: 'https://github.com/b4lol/telyra-releases/releases/download/v1.0.0/app-mobile-release.apk',
          sha256: '3cbbd94b42a76dc80ffa6147babe03d52725cc8cbc40225489343c747a6fb397',
          releaseDate: '2026-10-21',
          minSdk: 'Android 7.0+ (Nougat / API 24)',
        },
      ],
    },
    privacy: {
      label: '// YASAL BİLGİLENDİRME VE GİZLİLİK İLKELERİ',
      title: 'Gizlilik İlkeleri ve Yasal Sorumluluk Beyanı',
      subtitle: 'TELYRA, kullanıcı mahremiyetini ve yasal mevzuata tam uyumluluğu temel mühendislik standardı olarak kabul eder. Kişisel veri işlememe taahhüdümüz, donanım seviyesinde izole şifreleme mimarimiz ve yasal sorumluluk sınırları aşağıda özetlenmiştir.',
      zeroDataTitle: 'Kişisel Veri İşlememe Taahhüdü (KVKK ve GDPR)',
      zeroDataDesc: 'TELYRA, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) kapsamında veri sorumlusu sıfatıyla hiçbir kişisel veri, IP adresi, cihaz tanıtıcısı, izleme geçmişi veya medya oynatma kütüğü toplamaz, işlemez ve merkezi sunucularda saklamaz.',
      disclaimerTitle: 'Zorunlu IPTV ve Medya İçeriği Sorumluluk Reddi',
      disclaimerText: 'TELYRA münhasıran bağımsız bir medya oynatıcı yazılım aracıdır. Hiçbir televizyon yayını, video akışı, kanal listesi veya telifli medya içeriği barındırmaz, sağlamaz, satmaz veya dağıtmaz. Oynatılan tüm kaynakların yasal haklarına ve yürürlükteki fikri mülkiyet mevzuatına uygunluğundan münhasıran kullanıcı sorumludur.',
      fullPolicyBtn: 'Gizlilik Politikası ve Yasal Bildirim Metninin Tamamını İncele (TR / EN) →',
      closeModal: 'Kapat',
      modal: {
        title: 'TELYRA — Gizlilik Politikası, Yasal Sorumluluk Reddi ve Şartlar',
        effectiveDateLabel: 'Yürürlük Tarihi:',
        effectiveDate: '21 Ekim 2026 (Sürüm 1.0.0)',
        sections: [
          {
            title: '1. Veri Sorumlusu ve Kişisel Veri İşlememe Taahhüdü (KVKK ve GDPR)',
            content: 'TELYRA geliştiricileri, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve 2016/679 sayılı AB Genel Veri Koruma Tüzüğü (“GDPR”) kapsamında veri sorumlusu sıfatıyla kullanıcıların kişisel verilerini toplamama, profillememe ve merkezi veri tabanlarında işlememe ilkesini benimsemiştir. Uygulamada reklam SDK\'sı, harici telemetri ve davranışsal analiz kütüphanesi veya uzaktan kullanıcı profilleme mekanizmaları kesinlikle yer almaz.',
          },
          {
            title: '2. Donanım Seviyesinde İzole Şifreleme ve Yerel Anahtar Mimarisi',
            content: 'Kullanıcı tarafından uygulamaya eklenen Xtream Codes veya M3U kimlik bilgileri (kullanıcı adı, şifre, sunucu URL\'si) hiçbir koşulda harici bir sunucuya aktarılmaz. Bu bilgiler, doğrudan cihaz üzerinde bulunan AndroidKeyStore donanımsal güvenlik modülü (Trusted Execution Environment - TEE / StrongBox) aracılığıyla AES-256 GCM algoritması ile yerel olarak şifrelenir. Şifreleme anahtarları donanım katmanında izole edilmiş olup fiziki cihaz dışına çıkartılamaz.',
          },
          {
            title: '3. Lisans Doğrulama Mimarisi ve Anonim Donanım Karma Değeri',
            content: 'TELYRA Pro lisans doğrulama sorguları sırasında kullanıcının kimliğini ortaya çıkarabilecek hiçbir ad, soyad, e-posta, IP adresi veya çalma listesi verisi saklanmaz ya da işlenmez. Lisans sunucusu sorgusunda yalnızca cihazın donanım kimliklerinden tek yönlü matematiksel özet çıkarma yöntemiyle üretilen anonim kriptografik karma (hash) değeri kullanılır. Bu karma değer üzerinden kullanıcı kimliğine veya fiziki cihaza geri dönüşümlü erişim sağlanması teknik olarak olanaksızdır.',
          },
          {
            title: '4. Zorunlu IPTV ve Medya İçeriği Sorumluluk Reddi (İçerik Sağlamama İlkesi)',
            content: 'TELYRA herhangi bir video, ses, televizyon kanalı yayını, IPTV akışı veya çalma listesi içeriği SAĞLAMAZ, BARINDIRMAZ, İLETMEZ VE SATMAZ. TELYRA yalnızca kullanıcının kendi inisiyatifiyle sağladığı çalma listelerini ayrıştırarak oynatan bağımsız bir yazılım aracıdır.',
            bullets: [
              'Kullanıcı, uygulamaya eklediği tüm yayın bağlantılarının ve içeriklerin telif haklarına ve yasal lisanslarına sahip olduğunu veya yetkili yayıncıdan yasal abonelik temin ettiğini gayrikabili rücu kabul, beyan ve taahhüt eder.',
              'TELYRA geliştiricileri ve hak sahipleri, kullanıcıların üçüncü taraf kaynaklardan elde ettiği korsan, yetkisiz veya telif hakkı ihlali içeren yayınların oynatılmasından hukuki, cezai veya idari olarak hiçbir surette sorumlu tutulamaz.',
              'Uygulamanın satışı veya lisanslanması, kullanıcılara hiçbir şekilde medya içeriği erişim hakkı sağlama taahhüdü içermez.',
            ],
            isWarning: true,
          },
          {
            title: '5. Üçüncü Taraf Ticari Markalar ve Adil Kullanım (Fair Use) Beyanı',
            content: 'Bu platformda ve yazılım dokümantasyonunda yer verilen Android TV, Google TV, Fire TV, Nvidia Shield, TiviMate ve benzeri marka, ticari unvan, logo ve ürün adları ilgili hak sahiplerinin tescilli mülkiyetindedir.',
            bullets: [
              'Söz konusu markalara yapılan tüm atıflar, yalnızca yazılımın donanım, işletim sistemi veya format uyumluluğunu tüketiciye açıklamak ve teknik nitelikleri nesnel olarak karşılaştırmak amacıyla 6769 sayılı Sınai Mülkiyet Kanunu ve "Adil Kullanım" (Nominative Fair Use) ilkeleri uyarınca yapılmıştır.',
              'TELYRA\'nın bahsi geçen hak sahipleriyle (Google LLC, Amazon.com Inc., NVIDIA Corporation, Armobsoft FZE vb.) doğrudan veya dolaylı hiçbir ticari bağı, ortaklığı, sponsorluğu, resmi onayı veya lisans anlaşması bulunmamaktadır.',
            ],
          },
          {
            title: '6. Tüketici Hakları, İlgili Kişi Hakları ve Yerel Veri İmhası',
            content: 'TELYRA tarafından merkezi bir sunucuda hiçbir kişisel veri tutulmadığı için, KVKK m. 11 ve GDPR m. 15-22 uyarınca silinmesi, düzeltilmesi veya taşınması gereken merkezi bir veri kaydı bulunmamaktadır. Kullanıcılar cihazlarının "Uygulama Bilgileri" menüsünden verileri temizledikleri veya uygulamayı kaldırdıkları anda yerel şifrelenmiş tüm anahtarlar, ayarlar ve önbellekler cihaz donanımından anında ve geri döndürülemez şekilde silinir.',
          },
        ],
      },
    },
    footer: {
      aboutTelyra: 'TELYRA, Android TV ve mobil cihazlar için tasarlanmış yüksek performanslı, modern ve bağımsız bir IPTV oynatıcısıdır.',
      builtBy: 'Hüseyin "b4lol" tarafından geliştirilmiştir.',
      allRights: 'Tüm hakları saklıdır.',
      disclaimerNotice: 'Yasal Sorumluluk Reddi: TELYRA bağımsız bir medya oynatıcı yazılımıdır; hiçbir televizyon yayını, video akışı veya IPTV içeriği barındırmaz ve satmaz. Oynatılan tüm içeriklerin yasal yayın haklarına uygunluğundan münhasıran kullanıcı sorumludur. Sitede adı geçen Android TV, Google TV, Fire TV, Nvidia Shield ve TiviMate ticari markaları kendi hak sahiplerinin mülkiyetinde olup yalnızca uyumluluk belirtme amacıyla adil kullanım kapsamında referans verilmiştir.',
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
      badge: 'v1.0.0 Official Release • Privacy-First Architecture • Zero Tracking',
      headlinePrefix: 'Cinematic 4K Playback',
      headlineGradient: 'Engineered for Living Rooms',
      headlineSuffix: 'Zero Compromise',
      subtitle: 'Pure Java 17 native views, Media3 ExoPlayer & LibVLC dual-engine failover, AMD FidelityFX CAS GLSL sharpening, and 0ms Amlogic hardware deinterlacing.',
      ctaDownloadTv: 'Download for Android TV (.apk)',
      ctaDownloadMobile: 'Download for Mobile (.apk)',
      ctaDownloaderCode: 'Downloader Code:',
      copyButton: 'Copy Code',
      copiedFeedback: 'Copied!',
      liveBadge: 'LIVE STREAM ENGINE',
    },
    mockup: {
      label: '// 10-FOOT LIVING ROOM CINEMATIC UI',
      title: 'Hardware-Grade 60 FPS Living Room Experience',
      subtitle: 'Actual screenshots and real-time telemetry simulation designed specifically for 10-foot remote control ergonomics.',
      toggleTv: 'Android TV (10-Foot UI)',
      toggleMobile: 'Mobile (Handheld UI)',
      fastZappingLabel: 'FAST ZAPPING:',
      hudViewLabel: 'HUD TELEMETRY:',
      remoteHint: 'Tip: Use Keyboard Arrow Keys (Left / Right: Zap Channel, Up: HUD Modes, Down: Tabs) for interactive testing.',
      tvTabs: {
        home: 'Home Dashboard',
        live: 'Live TV & Channels',
        guide: 'EPG TV Guide',
        movies: 'Cinema & Movies',
        detail: 'Movie Details & 4K',
        hud: 'Live Telemetry HUD',
        sources: 'Source Manager',
      },
      mobileTabs: {
        player: 'Player',
        stats: 'HUD Stats',
        live: 'Live Stream',
        onboarding: 'Onboarding',
      },
      hudModes: {
        off: 'Off',
        compact: 'Compact',
        detailed: 'Detailed',
      },
      hudLabels: {
        recLive: '[REC] LIVE',
        showHud: 'Show Telemetry OSD',
        program: 'Program:',
        resolution: 'Resolution & Refresh:',
        decoder: 'Video Decoder (VPU):',
        framerate: 'Frame Rate & Drops:',
        shader: 'Shader Engine (CAS):',
        bitrate: 'Bitrate & Linux Buffer:',
        audio: 'Audio Passthrough:',
        afr: 'HDMI 2.1 AFR Mode:',
        switchProfile: '[Profile Refresh]',
        compactBtn: '_ Compact',
        closeBtn: 'X',
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
          shaderEngine: 'Obsidian Cinema + CAS Edge Filter',
          hardwareTunneling: true,
        },
        {
          channelName: 'TRT 1 4K HDR',
          programTitle: 'UEFA Champions League Live Broadcast',
          resolution: '3840×2160p @ 59.940 Hz',
          framerate: '60.0 fps (0 dropped)',
          codec: 'HEVC Main 10 (H.265 10-bit)',
          decoder: 'c2.amlogic.hevc.decoder (Hardware VPU)',
          colorSpace: 'BT.2020 / HLG HDR (ACES Tone Mapped)',
          bitrate: '34.80 Mbps (Peak: 52.1 Mbps)',
          audioFormat: 'Dolby Digital Plus (E-AC-3) 5.1ch @ 48kHz',
          socketBuffer: '4,194,304 Bytes SO_RCVBUF Pre-injection',
          bufferDuration: '14,850 ms (RAM Guard Protected)',
          droppedFrames: '0 / 18,420 (0.000%)',
          afrState: 'HDMI 2.1 59.94 Hz Locked',
          shaderEngine: 'AMD FidelityFX CAS v1.0 Ultra',
          hardwareTunneling: true,
        },
        {
          channelName: 'I Can Only Imagine 2 (2026)',
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
          icon: 'zap',
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
          icon: 'target',
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
          icon: 'cpu',
          badge: 'Zero Buffering',
        },
        {
          id: 'dvr',
          tag: 'BANDWIDTH & CONCURRENCY OPTIMIZATION',
          title: 'Single-Connection Byte-Tap DVR (Background Recording)',
          description: 'Engineered to avoid concurrent multi-connection triggers by capturing the active socket stream directly to local storage, requiring zero additional HTTP connections to your provider.',
          details: [
            'Active socket byte-tap: Consumes zero secondary connection overhead',
            'Headless Scheduled DVR: Records programs even when the TV is asleep',
            'Storage safety brake: Inhibits recording below 100MB and stops below 50MB',
          ],
          icon: 'hard-drive',
          badge: 'Active Stream Tap',
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
          icon: 'grid',
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
          icon: 'shield',
          badge: 'Hardware Isolation',
        },
      ],
    },
    comparison: {
      label: '// TECHNICAL BENCHMARK',
      title: 'TELYRA vs Standard IPTV Players vs TiviMate',
      subtitle: 'An objective architectural comparison against popular market alternatives.',
      headers: {
        metric: 'Feature / Hardware Capability',
        telyra: 'TELYRA Pro (v1.1)',
        tivimate: 'TiviMate (Paid)',
        standard: 'Standard Players (Smarters, XC etc.)',
      },
      rows: [
        {
          metric: 'Architecture & Heap Memory',
          telyra: 'Pure Kotlin 2.1 + Jetpack Compose TV (<45MB Heap, 60 fps target)',
          telyraHighlight: true,
          tivimate: 'Proprietary Native Views (~120MB Heap)',
          standard: 'Bloated WebView / Cordova (250MB+ Heap, frequent OOM crashes)',
        },
        {
          metric: 'Hardware Deinterlacing',
          telyra: '0ms Amlogic/MTK VPU Hardware Injection + LibVLC YADIF 2x',
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
          telyra: 'Single-Connection Active Stream Tap (Zero secondary connection overhead)',
          telyraHighlight: true,
          tivimate: 'Opens secondary stream (Requires dual-connection concurrency allowance)',
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
          telyra: 'Zero Tracking, Zero Analytics SDKs, Zero Ads',
          telyraHighlight: true,
          tivimate: 'License validation ping',
          standard: 'Ad networks, third-party analytics beacons',
        },
        {
          metric: 'Cost & Licensing',
          telyra: 'TELYRA Pro (Cloudflare Edge D1 Verification & Offline Mode)',
          telyraHighlight: true,
          tivimate: 'Annual Subscription or ~$35 Lifetime License',
          standard: 'Ad-supported or shady recurring panel fees',
        },
      ],
      trademarkNotice: 'Trademark & Comparative Notice: TiviMate and other third-party brand names listed in this matrix are the registered trademarks of their respective owners. These marks are referenced solely for objective technical benchmarking and compatibility description under nominative fair use doctrines. TELYRA is an independent project with no endorsement, sponsorship, or affiliation with any referenced third-party entities.',
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
      verifiedBadge: 'Signed with Android v1/v2/v3 Schemes',
      labels: {
        version: 'Version:',
        fileSize: 'Size:',
        minSdk: 'Requirement:',
        downloadBtnText: 'Download',
        checksum: 'SHA-256 Checksum:',
        copyChecksum: 'Copy',
        copiedChecksum: 'Copied!',
      },
      items: [
        {
          id: 'app-tv',
          title: 'TELYRA for Android TV / Google TV',
          targetDevice: 'Android TV, Google TV, Fire TV Stick, Xiaomi Mi Box, Nvidia Shield',
          version: 'v1.0.0',
          fileName: 'app-tv-release.apk',
          fileSize: '86 MB',
          downloadUrl: 'https://github.com/b4lol/telyra-releases/releases/download/v1.0.0/app-tv-release.apk',
          sha256: 'e5ef32fa5169ac6f1a351bc5503ec979867b03642e06d21e9b6b4461792d6174',
          releaseDate: '2026-10-21',
          minSdk: 'Android 7.0+ (Nougat / API 24)',
        },
        {
          id: 'app-mobile',
          title: 'TELYRA for Android Mobile & Tablet',
          targetDevice: 'Android Smartphones & Tablets (Touch UI)',
          version: 'v1.0.0',
          fileName: 'app-mobile-release.apk',
          fileSize: '185 MB',
          downloadUrl: 'https://github.com/b4lol/telyra-releases/releases/download/v1.0.0/app-mobile-release.apk',
          sha256: '3cbbd94b42a76dc80ffa6147babe03d52725cc8cbc40225489343c747a6fb397',
          releaseDate: '2026-10-21',
          minSdk: 'Android 7.0+ (Nougat / API 24)',
        },
      ],
    },
    privacy: {
      label: '// LEGAL COMPLIANCE & PRIVACY',
      title: 'Privacy Commitment & Legal Disclaimers',
      subtitle: 'TELYRA is built upon foundational principles of user privacy, data minimization, and regulatory transparency. Review our non-processing commitment, hardware-isolated encryption architecture, and legal disclaimers below.',
      zeroDataTitle: 'Commitment to Non-Processing of Personal Data (GDPR & KVKK)',
      zeroDataDesc: 'In strict accordance with Regulation (EU) 2016/679 (GDPR) and Law No. 6698 (KVKK), TELYRA operates under a zero-data architecture as a data controller. The application does not collect, process, log, or transmit any personally identifiable information, IP addresses, viewing histories, or playback telemetry to external servers.',
      disclaimerTitle: 'Mandatory IPTV & Media Playback Disclaimer',
      disclaimerText: 'TELYRA is strictly an independent client-side media player utility. It does not provide, host, syndicate, rebroadcast, or sell any media streams, television broadcasts, or playlist subscriptions. Users are solely and exclusively responsible for ensuring that all imported playlists and media sources comply with applicable copyright and broadcast licensing laws.',
      fullPolicyBtn: 'Read Complete Privacy Policy & Legal Disclaimers (TR / EN) →',
      closeModal: 'Close',
      modal: {
        title: 'TELYRA — Privacy Policy, Mandatory Legal Disclaimers & Terms',
        effectiveDateLabel: 'Effective Date:',
        effectiveDate: 'October 21, 2026 (Version 1.0.0)',
        sections: [
          {
            title: '1. Data Controller & Commitment to Non-Processing (GDPR & KVKK Compliance)',
            content: 'In accordance with Regulation (EU) 2016/679 (“GDPR”) and Law No. 6698 on the Protection of Personal Data (“KVKK”), the developers of TELYRA act as a data controller operating under a strict zero-data architecture. TELYRA does not collect, track, profile, or process personal data on remote servers. The software contains zero advertising SDKs (e.g., Google AdMob), zero third-party behavioral telemetry frameworks (e.g., Firebase, Mixpanel), and zero remote user tracking beacons.',
          },
          {
            title: '2. Hardware-Isolated Local Encryption & Key Security Architecture',
            content: 'All credentials, authentication tokens, and playlist URLs entered by the user (Xtream Codes credentials, M3U addresses) remain strictly confined to the local physical device. Credentials are encrypted locally via AndroidKeyStore AES-256 GCM backed by the hardware Trusted Execution Environment (TEE / StrongBox). Master encryption keys are isolated at the silicon level and cannot be exported, extracted, or transmitted across the network.',
          },
          {
            title: '3. License Verification Architecture & Anonymous Hardware Hash Processing',
            content: 'TELYRA Pro license verification queries conducted against our edge verification infrastructure (Cloudflare Anycast) do not collect, process, or store names, email addresses, IP logs, or personal identifiers. Verification relies strictly on an irreversibly calculated one-way cryptographic hash derived from hardware properties. It is technically impossible to reverse-engineer this anonymous hash to discover the identity of the user or physical device.',
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
            content: 'All third-party trademarks, registered brand names, product titles, and logos referenced across this website and within the software documentation—including Android TV, Google TV, Fire TV, Nvidia Shield, and TiviMate—are the intellectual property of their respective owners.',
            bullets: [
              'References to these marks are strictly made under nominative fair use doctrine to denote device compatibility, operating system interoperability, and objective technical benchmark comparisons.',
              'TELYRA is completely independent and has no commercial affiliation, sponsorship, endorsement, partnership, or official connection with Google LLC, Amazon.com Inc., NVIDIA Corporation, Armobsoft FZE, or any other respective trademark owners.',
            ],
          },
          {
            title: '6. Consumer Protection, Data Subject Rights & Local Data Erasure',
            content: 'Because TELYRA does not process or retain personal data on central servers, there are no centralized databases subject to rectification, access, restriction, or erasure requests under GDPR Articles 15-22 or KVKK Article 11. Users maintain absolute sovereignty over their data: clearing application data or uninstalling TELYRA immediately and irreversibly destroys all locally encrypted credentials, caches, and configuration files from the device.',
          },
        ],
      },
    },
    footer: {
      aboutTelyra: 'TELYRA is a high-performance, privacy-focused media player engineered for Android TV and mobile.',
      builtBy: 'Designed & Built by Hüseyin "b4lol".',
      allRights: 'All rights reserved.',
      disclaimerNotice: 'Legal Disclaimer: TELYRA is strictly an independent media player client utility; it does not host, supply, or sell any streaming media, broadcasts, or IPTV playlists. Users are solely responsible for ensuring lawful broadcast access. Android TV, Google TV, Fire TV, Nvidia Shield, and TiviMate are trademarks of their respective owners, referenced strictly under nominative fair use for compatibility purposes.',
    },
  },
}
