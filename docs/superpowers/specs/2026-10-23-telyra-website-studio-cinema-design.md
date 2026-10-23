# TELYRA Resmi Web Sitesi "Studio Cinema" Yeniden Tasarım Şartnamesi (Design Spec)

**Tarih:** 2026-10-23  
**Durum:** Tasarım Onaylandı (Kullanıcı Seçimi: Studio Cinema - Apple TV & Infuse Düzeyi Zarafet)  
**Hedef Depo:** `/home/user/Belgeler/Projeler/portfolio` (React + Vite + SSR Prerender)

---

## 1. Intent ve "Neden?" (Why)
Kullanıcı, TELYRA'nın önceki web sitesi görünümünden ve dilinden duyduğu rahatsızlığı açıkça belirtti:
- "bu halini hiç sevmedim ve içime sinmiyor."
- "Profesyonel ve modern hissettirmiyor."
- "Uygulamayı güzelce tanıtan, uygulamayı ön plana çıkartan, gereksiz ifadelerden arındırılmış, tamamen gerçekleri yazan bir web sitesi hayal ediyorum."

Görsel eşlikçi (Visual Companion) üzerinden sunulan 3 tasarım yönü arasından kullanıcı **"Studio Cinema (Apple TV & Infuse Düzeyi Zarafet)"** yönünü seçmiştir.

Bu tasarımın amacı; TELYRA'yı neon siberpunk veya ucuz IPTV temalarından tamamen arındırıp, birinci sınıf bir tüketici elektroniği ve mühendislik ürünü (Apple TV 4K, Infuse Pro standartlarında) olarak sunmaktır. Donanım (büyük 4K OLED TV çerçevesi ve gerçek arayüz HUD'u) başroldedir. Metinler pazarlama süslerinden arındırılmış, yalnızca doğrulanabilir mühendislik gerçeklerini aktarır.

---

## 2. Hedefler, Hedef Dışı Unsurlar ve Karşıt-Hedefler (Goals, Non-Goals, Anti-Goals)

### Hedefler (Goals)
1. **Derin ve Kusursuz Görsel Zarafet:**
   - Apple TV ve Infuse seviyesinde derin OLED siyahları (`#050608`, `#090a0f`), zarif titanyum/grafit kenarlıklar, yumuşak cam morfoloji (subtle glassmorphism).
   - Neon auralar, parlayan siberpunk ızgaraları ve terminal görünümleri tamamen kaldırılacak.
2. **Donanım ve Ekranı Başrole Alan Vitrin:**
   - Sayfanın en üstünde, merkezde gerçekçi bir 4K OLED TV çerçevesi içerisinde TELYRA'nın 10-foot TV arayüzü (Canlı TV, EPG Rehberi, HUD Telemetrisi) interaktif ve yüksek çözünürlüklü olarak sergilenecek.
3. **Pazarlama Süsü Olmayan 4 Temel Mühendislik Gerçeği:**
   - **Performans:** Düşük segment TV çubuklarında (Amlogic, MediaTek) dahi <45MB bellek tavanı, 60 FPS kararlı D-Pad navigasyonu.
   - **Evrensel Entegrasyon:** 6 temel protokol ve kaynak (M3U/M3U8, Xtream Codes API, Stalker / MAG portal, yerel Jellyfin ve Plex sunucuları, HTTPS Stremio eklentileri).
   - **Oynatıcı:** Media3 ExoPlayer ve LibVLC çift motor mimarisi, donanımsal çözücüler (H.264, HEVC, AV1).
   - **Güvenlik ve Gizlilik:** AndroidKeyStore (TEE / StrongBox) AES-256 yerel şifreleme, sıfır telemetri, sıfır reklam.
4. **Şeffaf ve Güvenilir İndirme Merkezi:**
   - v1.1.0 release APK'ları (TV ve Mobil) için doğrudan dosya boyutu, minimum SDK bilgisi, tek tıkla SHA-256 kopyalama ve AFTV Downloader kısa kodu (`b4.lol/telyra/tv`).
5. **Entegre Lisans Portalı:**
   - `license.b4.lol` Cloudflare Worker API'si ile çalışan temiz ve minimal Edge Pro lisans doğrulama arayüzü.
6. **Sessiz ve Net Yasal Çerçeve:**
   - TELYRA'nın bağımsız bir medya oynatıcı olduğu, sunucu tarafında hiçbir telifli içerik barındırmadığı ve kullanıcının kendi yasal içeriklerini oynatmakla sorumlu olduğunu belirten sakin, kurumsal feragatname.
7. **Çift Dil Desteği:**
   - Türkçe (varsayılan) ve İngilizce eksiksiz, pürüzsüz dil geçişi.

### Hedef Dışı Unsurlar (Non-Goals)
- Başka IPTV uygulamalarıyla (TiviMate vb.) agresif karşılaştırma tabloları yapmak hedeflenmez; ürün kendi zarafeti ve mühendisliğiyle öne çıkar.
- Karmaşık veya dikkat dağıtıcı harici kütüphaneler (Three.js, ağır canvas efektleri) eklemek hedeflenmez. CSS ve saf React bileşenleri ile sıfır CLS ve 60 FPS hedeflenir.

### Karşıt-Hedefler (Anti-Goals)
- **Sıfır Emoji Kuralı:** Kod, UI, metin, buton, yorum ve loglarda hiçbir emoji bulunmayacaktır.
- **Sıfır Açık Kaynak Kuralı:** "open source", "açık kaynak", "FOSS" ifadeleri kullanılmayacaktır.
- **Sıfır Abartı ve Boş Pazarlama Kuralı:** "Dünyanın en iyi", "rakipsiz", "%100", "devrimsel" gibi boş iddialar yasaktır. Sadece somut teknik veriler yer alacaktır.

---

## 3. Mimari ve Sayfa Akışı (Information Architecture)

1. **Zarif Üst Gezinme (Navbar):**
   - TELYRA logosu + v1.1.0 durum etiketi.
   - Bağlantılar: Deneyim (Showcase), Mimari (Engineering), İndir (Downloads), Lisans Sorgula (License), Yasal & Gizlilik (Legal).
   - Dil seçici (TR / EN) ve doğrudan APK indirme butonu.
2. **Hero & 4K Sinematik Vitrin (Merkez Parça):**
   - Sade, tipografik başlık: "Televizyon deneyimi, kusursuzlaştırıldı." / "Television experience, perfected."
   - Doğrudan indirme ve Downloader hızlı erişim rozeti.
   - 4K OLED TV Mockup: Gerçek arayüz simülasyonu, kanal listesi, canlı yayın HUD'u ve akıcı sekme geçişi (Canlı TV, Rehber, Filmler, Kaynaklar).
3. **Mühendisliğin Dört Temel Taşı (The Four Pillars):**
   - 4 temiz cam/titanyum kart:
     1. Bellek ve CPU Yönetimi (<45MB JVM budget, zero GC pause)
     2. Evrensel Kaynak Desteği (M3U, Xtream, Stalker MAG, Jellyfin, Plex, Stremio)
     3. Donanım İvmeli Çözücü Motoru (Media3 & LibVLC dual-core)
     4. Kriptografik Donanım İzolasyonu (AndroidKeyStore StrongBox AES-256)
4. **Teknik Özellikler ve Donanım Uyumluluğu:**
   - Desteklenen çipsetler ve kodekler (Amlogic S905/S928X, Realtek, MediaTek Pentonic, Google Chromecast 4K, Fire TV Stick 4K Max, Nvidia Shield).
   - Format matrisi: H.264, HEVC/H.265, AV1, VP9, MPEG-TS, Passthrough Dolby Atmos / TrueHD / DTS-HD MA.
5. **Lisans Doğrulama Portalı (Cloudflare Edge Pro):**
   - Minimalist, temiz form. `license.b4.lol/api/v1/license/check` bağlantısı ile lisans durumu, plan tipi ve son geçerlilik tarihi sorgulama.
6. **Doğrudan İndirme Merkezi (Downloads Hub):**
   - TV APK kartı: `app-tv-release.apk` (85.6 MB, SHA-256, Android 7.0+).
   - Mobil APK kartı: `app-mobile-release.apk` (178.9 MB, SHA-256, Android 7.0+).
   - Downloader uygulama rehberi (Fire TV / Android TV kullanıcıları için 3 adımlı rehber).
7. **Yasal Bildirim ve Gizlilik:**
   - 5846 sayılı FSEK, DMCA ve AB Telif Hakları Direktifine tam uyumlu şeffaf beyan.
   - Hiçbir sunucuda medya içeriği barındırılmadığı, yazılımın bağımsız bir oynatıcı aracı olduğu net ifadesi.
8. **Minimal Footer:**
   - Telif hakkı, kurumsal bağlantılar, GitHub Release bağlantısı, gizlilik sözleşmesi modal tetikleyicisi.

---

## 4. Uygulayıcıya (Builder) Bırakılan Detaylar
- CSS değişkenlerinin Apple standartlarında optimize edilmesi (`--telyra-bg: #07080b`, `--telyra-surface: #0f1015`, `--telyra-border: rgba(255, 255, 255, 0.08)`).
- TV Mockup bileşeninin kod yapısı ve ekran geçiş durumları.
- `telyraData.ts` dosyasının TR ve EN içeriklerinin sıfır-abartı kuralına göre güncellenmesi.
- `prerender.mjs` ve Vite build doğrulaması.
