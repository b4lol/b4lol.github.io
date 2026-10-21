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
      label: '// 10-FOOT OTURMA ODASI SİNEMATİK ARAYÜZÜ',
      title: 'Donanım Seviyesinde 60 FPS Canlı Deneyim',
      subtitle: 'Kumanda ergonomisi ve 10-foot TV arayüzü ile test edilmiş gerçek ekran görüntüleri ve canlı telemetri simülasyonu.',
      toggleTv: 'Android TV (10-Foot UI)',
      toggleMobile: 'Mobil (Handheld UI)',
      fastZappingLabel: 'HIZLI ZAPPING:',
      hudViewLabel: 'HUD GÖRÜNÜMÜ:',
      remoteHint: '💡 İpucu: Klavye Yön Tuşları (Sol / Sağ: Kanal Değiştir, Yukarı: HUD Modu, Aşağı: Sekme) ile de kontrol edebilirsiniz.',
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
        recLive: '● REC / CANLI',
        showHud: '⚡ HUD Telemetriyi Aç',
        program: 'Program:',
        resolution: 'Çözünürlük & Panel:',
        decoder: 'Video Dekoder (VPU):',
        framerate: 'Kare Hızı & Düşen:',
        shader: 'Görüntü İşleme (CAS):',
        bitrate: 'Bitrate & Soket Halka:',
        audio: 'Ses Passthrough:',
        afr: 'HDMI 2.1 AFR Modu:',
        switchProfile: '[Profil ⟳]',
        compactBtn: '_ Kompakt',
        closeBtn: '✕',
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
      rows: [
        {
          metric: 'Arayüz Mimarisi & Bellek',
          telyra: 'Saf Java 17 Yerel Görünümler (<45MB Heap, 60 FPS Kilitli)',
          telyraHighlight: true,
          tivimate: 'Kapalı Kaynak Yerel Görünümler (~120MB Heap)',
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
          telyra: 'Tek Bağlantılı Byte-Tap (0 ek bağlantı, %0 ban riski)',
          telyraHighlight: true,
          tivimate: 'İkincil akış açar (Tek hatlı üyeliklerde ban riski)',
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
          standard: 'Düz metin SharedPreferences / SQLite (Açıkta kalan şifreler)',
        },
        {
          metric: 'Gizlilik & Telemetri',
          telyra: '%100 Sıfır Takip, Sıfır Analitik SDK, Sıfır Reklam',
          telyraHighlight: true,
          tivimate: 'Lisans doğrulama pingi',
          standard: 'Reklam ağları, üçüncü taraf izleme kodları',
        },
        {
          metric: 'Maliyet & Lisanslama',
          telyra: 'Ücretsiz & Şeffaf Topluluk Yazılımı',
          telyraHighlight: true,
          tivimate: 'Yıllık Abonelik veya ~35$ Ömür Boyu Lisans',
          standard: 'Reklam destekli veya şüpheli yinelenen panel ücretleri',
        },
      ],
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
          fileName: 'telyra-tv-v1.0.0.apk',
          fileSize: '83 MB',
          downloadUrl: 'https://github.com/b4lol/TELYRA/releases/download/v1.0.0/app-tv-release.apk',
          sha256: 'a1e94d8f7b2c0193e481b37d45920a67e8913b82946c1092e094f83b276d418c',
          releaseDate: '2026-10-21',
          minSdk: 'Android 7.0+ (Nougat / API 24)',
        },
        {
          id: 'app-mobile',
          title: 'TELYRA Android Mobil & Tablet İçin',
          targetDevice: 'Android Akıllı Telefonlar ve Tabletler (Dokunmatik Arayüz)',
          version: 'v1.0.0',
          fileName: 'telyra-mobile-v1.0.0.apk',
          fileSize: '85 MB',
          downloadUrl: 'https://github.com/b4lol/TELYRA/releases/download/v1.0.0/app-mobile-release.apk',
          sha256: 'b4820d91ef47a8293c40192e76f53a19b8401e9204c81a293847e0129a74c091',
          releaseDate: '2026-10-21',
          minSdk: 'Android 7.0+ (Nougat / API 24)',
        },
      ],
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
      modal: {
        title: 'TELYRA — Gizlilik Politikası ve Şartlar',
        effectiveDateLabel: 'Yürürlük Tarihi:',
        effectiveDate: '21 Ekim 2026',
        sections: [
          {
            title: '1. Sıfır Veri Toplama Politikası',
            content: 'TELYRA hiçbir kullanıcı verisi toplamaz, kaydetmez veya üçüncü taraflarla paylaşmaz. Uygulamada reklam SDK\'ları, Firebase Analytics veya harici telemetri bulunmaz. Girilen M3U veya Xtream Codes kimlik bilgileri yalnızca AndroidKeyStore AES-256 GCM ile yerel cihazınızda saklanır.',
          },
          {
            title: '2. Yasal Sorumluluk Reddi (Disclaimer)',
            content: 'TELYRA bağımsız bir açık kaynaklı medya oynatıcıdır. Hiçbir yayın, video, IPTV akışı veya çalma listesi barındırmaz ve satmaz. Kullanıcılar yalnızca yasal erişim iznine sahip oldukları yayınları oynatmakla yükümlüdür.',
            isWarning: true,
          },
          {
            title: '3. Uygulama İzinleri',
            content: 'Uygulama yalnızca canlı yayınları oynatmak için INTERNET iznini, zamanlanmış kayıt bildirimleri için POST_NOTIFICATIONS iznini ve kayıtların güvenle tamamlanabilmesi için FOREGROUND_SERVICE_DATA_SYNC iznini kullanır.',
          },
        ],
      },
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
      label: '// 10-FOOT LIVING ROOM CINEMATIC UI',
      title: 'Hardware-Grade 60 FPS Living Room Experience',
      subtitle: 'Actual screenshots and real-time telemetry simulation designed specifically for 10-foot remote control ergonomics.',
      toggleTv: 'Android TV (10-Foot UI)',
      toggleMobile: 'Mobile (Handheld UI)',
      fastZappingLabel: 'FAST ZAPPING:',
      hudViewLabel: 'HUD TELEMETRY:',
      remoteHint: '💡 Tip: Use Keyboard Arrow Keys (Left / Right: Zap Channel, Up: HUD Modes, Down: Tabs) for interactive testing.',
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
        recLive: '● REC / LIVE',
        showHud: '⚡ Show Telemetry OSD',
        program: 'Program:',
        resolution: 'Resolution & Refresh:',
        decoder: 'Video Decoder (VPU):',
        framerate: 'Frame Rate & Drops:',
        shader: 'Shader Engine (CAS):',
        bitrate: 'Bitrate & Linux Buffer:',
        audio: 'Audio Passthrough:',
        afr: 'HDMI 2.1 AFR Mode:',
        switchProfile: '[Profile ⟳]',
        compactBtn: '_ Compact',
        closeBtn: '✕',
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
      rows: [
        {
          metric: 'Architecture & Heap Memory',
          telyra: 'Pure Java 17 Native Views (<45MB Heap, 60fps locked)',
          telyraHighlight: true,
          tivimate: 'Closed-source Native Views (~120MB Heap)',
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
      ],
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
          targetDevice: 'Android Smartphones & Tablets (Touch UI)',
          version: 'v1.0.0',
          fileName: 'telyra-mobile-v1.0.0.apk',
          fileSize: '85 MB',
          downloadUrl: 'https://github.com/b4lol/TELYRA/releases/download/v1.0.0/app-mobile-release.apk',
          sha256: 'b4820d91ef47a8293c40192e76f53a19b8401e9204c81a293847e0129a74c091',
          releaseDate: '2026-10-21',
          minSdk: 'Android 7.0+ (Nougat / API 24)',
        },
      ],
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
      modal: {
        title: 'TELYRA — Privacy Policy & Terms',
        effectiveDateLabel: 'Effective Date:',
        effectiveDate: 'October 21, 2026',
        sections: [
          {
            title: '1. Zero Data Collection Policy',
            content: 'TELYRA does NOT collect, store, or transmit any user data or telemetry to remote servers. There are no advertising SDKs or third-party trackers. All entered playlist credentials remain encrypted on your local device using AndroidKeyStore AES-256 GCM.',
          },
          {
            title: '2. Legal Notice & Disclaimer',
            content: 'TELYRA is strictly a standalone open-source media player application. It does NOT host, supply, or sell any streaming media, television channels, or playlists. Users are solely responsible for ensuring they have lawful access to the content they stream.',
            isWarning: true,
          },
          {
            title: '3. Application Permissions',
            content: 'The app requests only essential permissions: INTERNET for streaming, POST_NOTIFICATIONS for recording alerts, and FOREGROUND_SERVICE_DATA_SYNC for running user-initiated scheduled DVR tasks.',
          },
        ],
      },
    },
    footer: {
      aboutTelyra: 'TELYRA is a high-performance, privacy-focused open source media player engineered for Android TV and mobile.',
      builtBy: 'Designed & Built by Hüseyin "b4lol".',
      allRights: 'All rights reserved.',
    },
  },
}
