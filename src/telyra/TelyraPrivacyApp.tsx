import { useState } from 'react'
import type { Language } from './data/telyraData'
import { TelyraNavbar } from './components/TelyraNavbar'
import { TelyraFooter } from './components/TelyraFooter'
import './styles/telyra.css'

export function TelyraPrivacyApp() {
  const [lang, setLang] = useState<Language>('tr')

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'tr' ? 'en' : 'tr'))
  }

  const isTr = lang === 'tr'

  return (
    <div className="telyra-page">
      <div className="telyra-aura telyra-aura-1" />
      <div className="telyra-aura telyra-aura-2" />

      <TelyraNavbar lang={lang} onToggleLang={toggleLanguage} />

      <main className="telyra-container" style={{ padding: '60px 24px 80px', maxWidth: '880px' }}>
        <div style={{ marginBottom: '32px' }}>
          <a
            href="/telyra/"
            style={{
              color: 'var(--telyra-cyan)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            ← {isTr ? 'TELYRA Ana Sayfasına Dön' : 'Back to TELYRA Home'}
          </a>
        </div>

        <h1
          style={{
            fontFamily: 'var(--telyra-font-display)',
            fontSize: 'clamp(2rem, 5vw, 2.85rem)',
            fontWeight: 800,
            marginBottom: '16px',
            lineHeight: '1.2',
          }}
        >
          {isTr ? 'TELYRA Gizlilik Politikası ve Yasal Bildirimler' : 'TELYRA Privacy Policy & Legal Disclaimers'}
        </h1>

        <p style={{ color: 'var(--telyra-text-muted)', fontFamily: 'var(--telyra-font-mono)', fontSize: '0.85rem' }}>
          {isTr
            ? 'Son Güncelleme: 21 Ekim 2026 • Sürüm 1.0.0 • 6698 Sayılı KVKK ve (AB) 2016/679 GDPR Uyumlu'
            : 'Last Updated: October 21, 2026 • Version 1.0.0 • GDPR & KVKK Regulatory Compliance'}
        </p>

        <article
          style={{
            background: 'var(--telyra-surface)',
            border: '1px solid var(--telyra-glass-border)',
            borderRadius: '18px',
            padding: '36px',
            marginTop: '28px',
            lineHeight: '1.8',
            color: '#c9d2e3',
          }}
        >
          {/* Section 1 */}
          <section style={{ marginBottom: '36px' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>
              {isTr ? '1. Giriş, Kapsam ve Veri Sorumlusu Beyanı' : '1. Introduction, Scope & Data Controller Declaration'}
            </h2>
            <p>
              {isTr
                ? 'TELYRA, Android TV, Google TV, Fire TV ve Android mobil işletim sistemleri için geliştirilmiş bağımsız, saf yerel bir IPTV ve medya akış oynatıcısı yazılım aracıdır. Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve 2016/679 sayılı Avrupa Birliği Genel Veri Koruma Tüzüğü (“GDPR”) uyarınca veri sorumlusu sıfatıyla TELYRA geliştiricileri tarafından kullanıcı mahremiyetini ve yasal hakları güvence altına almak üzere hazırlanmıştır.'
                : 'TELYRA is an independent, pure native IPTV and media stream player utility engineered for Android TV, Google TV, Fire TV, and Android mobile operating systems. This document constitutes the formal Privacy Policy and Legal Disclaimers executed by the developers of TELYRA acting as a data controller under Regulation (EU) 2016/679 ("GDPR") and Turkish Law No. 6698 on the Protection of Personal Data ("KVKK").'}
            </p>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: '36px' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>
              {isTr ? '2. Kişisel Veri İşlememe ve Sıfır Telemetri Taahhüdü' : '2. Commitment to Zero Data Collection & Non-Processing'}
            </h2>
            <p>
              {isTr
                ? 'TELYRA, "Tasarım Yoluyla Gizlilik" (Privacy by Design) ilkesini temel almaktadır. TELYRA hiçbir ad, soyad, e-posta adresi, IP adresi, reklam kimliği (Advertising ID), cihaz seri numarası, coğrafi konum, izleme geçmişi, oturum süresi veya oynatılan medya URL verisini TOPLAMAZ, İŞLEMEZ, PROFİLLEMEZ VE MERKEZİ SUNUCULARA İLETMEZ.'
                : 'TELYRA is engineered in accordance with the principle of "Privacy by Design". TELYRA does NOT collect, process, log, profile, monetize, or transmit to any remote servers any names, emails, IP addresses, advertising identifiers, device serials, geolocation coordinates, viewing histories, session logs, or media stream URLs.'}
            </p>
            <ul style={{ paddingLeft: '24px', marginTop: '12px' }}>
              <li>
                <strong>{isTr ? "Reklam SDK'sı Bulunmaz:" : "Zero Advertising SDKs:"}</strong>{' '}
                {isTr
                  ? 'Uygulama içerisinde Google AdMob, Unity Ads veya benzeri üçüncü taraf reklam gelir kütüphaneleri yer almaz.'
                  : 'The application contains no Google AdMob, Unity Ads, or any commercial advertising networks.'}
              </li>
              <li>
                <strong>{isTr ? 'Telemetri ve Davranışsal Takip Bulunmaz:' : 'Zero Telemetry & Tracking:'}</strong>{' '}
                {isTr
                  ? 'Firebase Analytics, Mixpanel, Crashlytics veya benzeri kullanıcı davranışı izleme kodları bulunmaz.'
                  : 'Contains no Firebase Analytics, Mixpanel, Crashlytics, or user behavioral monitoring beacons.'}
              </li>
              <li>
                <strong>{isTr ? 'Zorunlu Hesap Açma Yoktur:' : 'No Cloud Account Requirement:'}</strong>{' '}
                {isTr
                  ? "TELYRA'nın temel işlevlerini kullanmak için bulut hesabı açma, e-posta onaylama veya profil oluşturma zorunluluğu yoktur."
                  : 'Full core application functionality operates locally without cloud registration, mandatory sign-in, or profile syncing.'}
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section style={{ marginBottom: '36px' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>
              {isTr ? '3. Donanım Seviyesinde İzole Şifreleme ve Yerel Anahtar Mimarisi' : '3. Hardware-Isolated Local Encryption & Key Security Architecture'}
            </h2>
            <p>
              {isTr
                ? 'Kullanıcı tarafından uygulamaya eklenen Xtream Codes kimlik bilgileri (kullanıcı adı, şifre, sunucu adresi), M3U çalma listesi bağlantıları ve yerel ayarlar hiçbir koşulda harici bir sunucuya veya bulut ortamına aktarılmaz.'
                : 'All user-configured Xtream Codes credentials (usernames, passwords, server URLs), M3U playlist URLs, and local preferences remain strictly confined to the local physical device.'}
            </p>
            <p style={{ marginTop: '10px' }}>
              {isTr
                ? 'Bu kimlik bilgileri, doğrudan cihaz üzerindeki donanımsal güvenlik modülü (AndroidKeyStore TEE - Trusted Execution Environment / StrongBox) aracılığıyla AES-256 GCM algoritması ile yerel depolama alanında şifrelenir. Ana şifreleme anahtarları donanım seviyesinde izole edilmiştir; bellekten dışarı aktarılamaz, ağ üzerinden dinlenemez veya diğer uygulamalarca okunamaz.'
                : 'Credentials are encrypted locally on-device via AES-256 GCM backed by the AndroidKeyStore hardware module (Trusted Execution Environment - TEE / StrongBox). Master encryption keys are isolated at the silicon layer and cannot be extracted, intercepted over the network, or inspected by third-party applications.'}
            </p>
          </section>

          {/* Section 4 */}
          <section style={{ marginBottom: '36px' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>
              {isTr ? '4. TELYRA Pro Lisans Doğrulama ve Anonim Donanım Karma Değeri' : '4. TELYRA Pro License Verification & Anonymous Hardware Hashing'}
            </h2>
            <p>
              {isTr
                ? 'TELYRA Pro sürümünün lisans geçerliliğini ve izin verilen cihaz kotalarını denetlemek amacıyla lisans sunucumuzla (Cloudflare Anycast altyapısı) güvenli kriptografik sorgulama gerçekleştirilir.'
                : 'To verify active Pro license standing and enforce authorized device seat allowances, the application communicates with our edge verification infrastructure (Cloudflare Anycast).'}
            </p>
            <ul style={{ paddingLeft: '24px', marginTop: '12px' }}>
              <li>
                {isTr
                  ? 'Lisans sorgularında kullanıcının adı, e-posta adresi, IP kütüğü veya kişisel cihaz bilgileri saklanmaz ve işlenmez.'
                  : 'License verification inquiries collect and store zero customer names, email addresses, IP logs, or personal identifiers.'}
              </li>
              <li>
                {isTr
                  ? 'Sorgulama esnasında yalnızca cihazın donanımsal parametrelerinden tek yönlü matematiksel özet (one-way SHA-256 cryptographic hash) algoritmasıyla üretilen anonim bir donanım karma değeri kullanılır.'
                  : 'Verification queries transmit strictly a one-way anonymous cryptographic hardware hash derived irreversibly from system characteristics.'}
              </li>
              <li>
                {isTr
                  ? 'Bu tek yönlü karma değer üzerinden kullanıcı kimliğine veya fiziki cihaza geri dönüşümlü erişim sağlanması teknik olarak olanaksızdır.'
                  : 'It is computationally impossible to reverse this one-way hash to discover the identity of the end user or physical device.'}
              </li>
            </ul>
          </section>

          {/* Section 5 - Mandatory IPTV Disclaimer */}
          <section style={{ marginBottom: '36px' }}>
            <h2 style={{ color: '#ff4d6d', fontSize: '1.35rem', marginBottom: '12px' }}>
              {isTr ? '5. Zorunlu IPTV ve Medya İçeriği Sorumluluk Reddi (İçerik Sağlamama İlkesi)' : '5. Mandatory IPTV & Media Playback Disclaimer (Content Neutrality)'}
            </h2>
            <div
              style={{
                background: 'rgba(255, 51, 102, 0.08)',
                border: '1px solid rgba(255, 51, 102, 0.25)',
                borderRadius: '12px',
                padding: '24px',
                color: '#ffc2d1',
              }}
            >
              <strong style={{ fontSize: '1.02rem', display: 'block', marginBottom: '10px' }}>
                {isTr
                  ? 'TELYRA HİÇBİR SES, VİDEO, TELEVİZYON YAYINI, IPTV AKIŞI VEYA ÇALMA LİSTESİ SAĞLAMAZ, BARINDIRMAZ, İLETMEZ VE SATMAZ.'
                  : 'TELYRA DOES NOT SUPPLY, HOST, AGGREGATE, REBROADCAST, OR SELL ANY AUDIO, VIDEO, TELEVISION CHANNELS, IPTV STREAMS, OR SUBSCRIPTION PLAYLISTS.'}
              </strong>
              <p>
                {isTr
                  ? 'TELYRA münhasıran kullanıcının cihazına aktardığı veya uzaktan tanımladığı yasal video akışlarını oynatmaya yarayan bağımsız bir istemci yazılım aracıdır. Kullanıcılar ekledikleri tüm medya içeriklerinin yasal yayın haklarına, telif izinlerine veya yetkili yayıncı aboneliklerine sahip olduklarını gayrikabili rücu kabul, beyan ve taahhüt ederler.'
                  : 'TELYRA is strictly an independent client-side media playback utility designed to decode and render user-supplied digital streams. Users expressly represent, warrant, and agree that they possess all required broadcast licenses, subscriptions, or intellectual property rights for every media source or playlist URL loaded into the software.'}
              </p>
              <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
                <li>
                  {isTr
                    ? 'TELYRA geliştiricileri; telif hakkı ihlali içeren, korsan veya yetkisiz IPTV yayınlarının oynatılmasından dolayı 5846 sayılı Fikir ve Sanat Eserleri Kanunu ve ilgili uluslararası fikri mülkiyet mevzuatı tahtında hiçbir hukuki, cezai, idari veya mali sorumluluk kabul etmez.'
                    : 'Under no circumstances shall TELYRA or its developers be held liable under applicable copyright laws, the Digital Millennium Copyright Act (DMCA), European Directive 2001/29/EC, or equivalent international statutes for any unlawful, unauthorized, or infringing playback initiated by users.'}
                </li>
                <li>
                  {isTr
                    ? 'TELYRA Pro lisansı satın alımı yalnızca yazılımın gelişmiş oynatıcı fonksiyonlarını kapsamakta olup, kullanıcılara hiçbir dijital medya veya yayın akış içeriği erişim taahhüdü sağlamaz.'
                    : 'The acquisition of a TELYRA Pro license constitutes solely a software usage license for player features and does not include or provide access to any digital media or audiovisual content.'}
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 - Trademarks & Fair Use */}
          <section style={{ marginBottom: '36px' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>
              {isTr ? '6. Üçüncü Taraf Ticari Markalar ve Yasal Adil Kullanım (Fair Use) Beyanı' : '6. Third-Party Trademarks & Nominative Fair Use Statement'}
            </h2>
            <p>
              {isTr
                ? 'Bu web sitesinde, belgelerde ve uygulama arayüzünde adı geçen "Android TV", "Google TV", "Fire TV", "Nvidia Shield", "TiviMate", "Amlogic", "MediaTek" ve ilgili diğer ticari unvanlar, logolar ve ürün adları ilgili hak sahiplerinin münhasır mülkiyetindedir.'
                : 'All third-party trademarks, registered brand marks, platform designations, and logos referenced across this website, documentation, and application—including Android TV, Google TV, Fire TV, Nvidia Shield, TiviMate, Amlogic, and MediaTek—are the exclusive intellectual property of their respective owners.'}
            </p>
            <ul style={{ paddingLeft: '24px', marginTop: '12px' }}>
              <li>
                {isTr
                  ? 'Söz konusu üçüncü taraf markalarına yapılan tüm atıflar, yalnızca yazılımın donanım platformları, işletim sistemleri ve medya formatlarıyla uyumluluğunu tüketiciye açıklamak ve teknik kabiliyetleri nesnel olarak kıyaslamak amacıyla 6769 sayılı Sınai Mülkiyet Kanunu ve "Yasal Adil Kullanım" (Nominative Fair Use) ilkeleri uyarınca yapılmıştır.'
                  : 'All references to these third-party trademarks are made strictly under the doctrine of nominative fair use for descriptive purposes: specifically to inform consumers of hardware compatibility, operating system interoperability, and objective technical benchmark metrics.'}
              </li>
              <li>
                {isTr
                  ? "TELYRA'nın Google LLC, Amazon.com Inc., NVIDIA Corporation, Armobsoft FZE veya adı geçen diğer hiçbir kurum ve ticari marka sahibiyle doğrudan veya dolaylı ticari ortaklığı, sponsorluğu, resmi bağı, ortak girişimi veya onayı bulunmamaktadır."
                  : 'TELYRA is an entirely independent software project and has no commercial affiliation, endorsement, sponsorship, formal partnership, or authorization from Google LLC, Amazon.com Inc., NVIDIA Corporation, Armobsoft FZE, or any other referenced entity.'}
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section style={{ marginBottom: '36px' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>
              {isTr ? '7. İsteğe Bağlı Harici Servis İstekleri' : '7. Optional External Metadata Providers'}
            </h2>
            <p>
              {isTr
                ? 'Film ve dizi afişlerini veya altyazı bilgilerini zenginleştirmek amacıyla kullanıcı isterse TMDB (The Movie Database) veya OpenSubtitles API servislerini isteğe bağlı olarak etkinleştirebilir. Bu sorgular doğrudan kullanıcının cihazından ilgili servislerin genel uç noktalarına iletilir. TELYRA herhangi bir aracı proxy sunucusu işletmez ve bu trafiği kaydetmez.'
                : 'If the user explicitly enables extended movie posters or subtitle retrieval, queries are transmitted directly from the client device to the public endpoints of TMDB (The Movie Database) or OpenSubtitles. TELYRA operates zero proxy servers and conducts zero interception or logging of these queries.'}
            </p>
          </section>

          {/* Section 8 */}
          <section style={{ marginBottom: '36px' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>
              {isTr ? '8. Android Uygulama İzinleri ve İşletimsel Şeffaflık' : '8. Android Application Permissions & Operational Transparency'}
            </h2>
            <p>
              {isTr
                ? 'TELYRA, yalnızca temel medya oynatma ve kullanıcı tarafından başlatılan görevlerin yerine getirilmesi için gereken asgari düzeydeki sistem izinlerini talep eder:'
                : 'TELYRA requests strictly the minimum set of permissions necessary for local playback and user-scheduled operations:'}
            </p>
            <ul style={{ paddingLeft: '24px', marginTop: '12px' }}>
              <li>
                <code style={{ color: 'var(--telyra-cyan)' }}>android.permission.INTERNET</code>:{' '}
                {isTr
                  ? 'Kullanıcının girdiği uzaktaki medya akışlarını oynatmak ve lisans durumunu doğrulamak için zorunludur.'
                  : 'Required to fetch user-configured media streams across the network and verify license status.'}
              </li>
              <li>
                <code style={{ color: 'var(--telyra-cyan)' }}>android.permission.POST_NOTIFICATIONS</code>:{' '}
                {isTr
                  ? 'Kullanıcının zamanladığı kayıt başlangıç ve bitiş durumlarını bildirmek amacıyla kullanılır.'
                  : 'Utilized to deliver alerts regarding the initiation or completion of scheduled recordings.'}
              </li>
              <li>
                <code style={{ color: 'var(--telyra-cyan)' }}>android.permission.FOREGROUND_SERVICE_DATA_SYNC</code>:{' '}
                {isTr
                  ? 'Tek bağlantılı aktif akış kopyalama (Byte-Tap DVR) işleminin televizyon ekranı uyku modundayken sistem tarafından sonlandırılmasını önlemek için kullanılır.'
                  : 'Essential to maintain active socket recording (Single-Connection Byte-Tap DVR) when the TV panel enters low-power standby mode.'}
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section style={{ marginBottom: '36px' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>
              {isTr ? '9. Tüketici Koruma Standartları ve İlgili Kişi Hakları (KVKK & GDPR)' : '9. Consumer Protection Standards & Data Subject Rights'}
            </h2>
            <p>
              {isTr
                ? '6502 sayılı Tüketicinin Korunması Hakkında Kanun, 6698 sayılı KVKK Madde 11 ve GDPR Madde 15-22 hükümleri uyarınca:'
                : 'In compliance with applicable consumer protection frameworks, GDPR Articles 15-22, and KVKK Article 11:'}
            </p>
            <ul style={{ paddingLeft: '24px', marginTop: '12px' }}>
              <li>
                {isTr
                  ? 'TELYRA merkezi sunucularında hiçbir kişisel veri tutmadığı için silinecek, taşınacak veya düzeltilecek merkezi bir veri kaydı bulunmamaktadır.'
                  : 'Because TELYRA does not process or retain personal data on central servers, there are no centralized user databases subject to access, rectification, portability, or erasure requests.'}
              </li>
              <li>
                {isTr
                  ? 'Kullanıcılar cihazlarının "Ayarlar > Uygulamalar > TELYRA > Depolama > Verileri Temizle" menüsünü kullanarak veya uygulamayı kaldırarak yerel şifrelenmiş tüm verileri ve anahtarları anında ve geri döndürülemez şekilde yok edebilirler.'
                  : 'Users maintain autonomous control over local data: clearing application storage via device settings or uninstalling TELYRA instantaneously and irrevocably purges all locally encrypted credentials, caches, and configuration parameters.'}
              </li>
            </ul>
          </section>

          {/* Section 10 */}
          <section>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>
              {isTr ? '10. Politika Güncellemeleri, Yürürlük ve İletişim' : '10. Policy Amendments, Governing Law & Legal Contact'}
            </h2>
            <p>
              {isTr
                ? 'Bu politika metni mevzuat değişikliklerine veya teknik mimari geliştirmelerine uyum sağlamak amacıyla güncellenebilir. Güncel metin daima bu resmi web adresinde yayımlanır. Hukuki bildirimler, telif hakkı başvuruları veya teknik sorularınız için resmi GitHub repository üzerinden iletişime geçebilirsiniz:'
                : 'This policy may be updated periodically to reflect legislative modifications or architectural enhancements. The authoritative version is permanently published at this official URL. For legal inquiries, copyright notices, or technical documentation, contact through our official GitHub repository:'}
            </p>
            <p style={{ marginTop: '12px' }}>
              <a
                href="https://github.com/b4lol/TELYRA"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--telyra-cyan)' }}
              >
                https://github.com/b4lol/TELYRA
              </a>
            </p>
          </section>
        </article>
      </main>

      <TelyraFooter lang={lang} />
    </div>
  )
}

export default TelyraPrivacyApp
