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

  return (
    <div className="telyra-page">
      <div className="telyra-aura telyra-aura-1" />
      <div className="telyra-aura telyra-aura-2" />

      <TelyraNavbar lang={lang} onToggleLang={toggleLanguage} />

      <main className="telyra-container" style={{ padding: '60px 24px 80px', maxWidth: '860px' }}>
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
            ← {lang === 'tr' ? 'TELYRA Ana Sayfasına Dön' : 'Back to TELYRA Home'}
          </a>
        </div>

        <h1
          style={{
            fontFamily: 'var(--telyra-font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            marginBottom: '16px',
          }}
        >
          {lang === 'tr' ? 'TELYRA Gizlilik Politikası' : 'TELYRA Privacy Policy'}
        </h1>

        <p style={{ color: 'var(--telyra-text-muted)', fontFamily: 'var(--telyra-font-mono)', fontSize: '0.85rem' }}>
          {lang === 'tr' ? 'Son Güncelleme: 21 Ekim 2026' : 'Last Updated: October 21, 2026'}
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
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>
              {lang === 'tr' ? '1. Giriş ve Genel Bakış' : '1. Introduction & Overview'}
            </h2>
            <p>
              {lang === 'tr'
                ? 'TELYRA, Android TV, Google TV, Fire TV ve Android mobil cihazlar için geliştirilmiş bağımsız, saf yerel bir IPTV ve medya akış oynatıcısıdır. Kullanıcı gizliliği projenin temel taşıdır. Bu politika, TELYRA\'nın veri toplama, saklama ve güvenlik yaklaşımını şeffaf bir şekilde açıklar.'
                : 'TELYRA is an independent, pure native IPTV and media stream player engineered for Android TV, Google TV, Fire TV, and Android mobile devices. User privacy is a foundational tenet. This policy explains our zero-data collection approach.'}
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>
              {lang === 'tr' ? '2. Sıfır Veri Toplama Taahhüdü' : '2. Zero Data Collection Commitment'}
            </h2>
            <p>
              {lang === 'tr'
                ? 'TELYRA hiçbir kişisel veriyi, IP adresini, cihaz tanıtıcısını (advertising ID), izleme geçmişini, oynatılan medya bağlantılarını veya oturum sürelerini TOPLAMAZ, İŞLEMEZ ve DIŞ SUNUCULARA İLETMEZ.'
                : 'TELYRA does NOT collect, track, or transmit any personally identifiable information (PII), IP addresses, advertising IDs, browsing histories, playback URLs, or session durations.'}
            </p>
            <ul style={{ paddingLeft: '24px', marginTop: '12px' }}>
              <li>
                {lang === 'tr'
                  ? 'Reklam SDK\'sı yoktur (Google AdMob, Unity Ads vb. bulunmaz).'
                  : 'Zero advertising SDKs (No Google AdMob, Unity, etc.).'}
              </li>
              <li>
                {lang === 'tr'
                  ? 'Analitik veya telemetri motoru yoktur (Firebase, Mixpanel vb. bulunmaz).'
                  : 'Zero third-party telemetry engines (No Firebase, Mixpanel, etc.).'}
              </li>
              <li>
                {lang === 'tr'
                  ? 'Kullanıcı hesabı oluşturma veya kayıt olma zorunluluğu yoktur.'
                  : 'No account registration or mandatory remote sign-in.'}
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>
              {lang === 'tr' ? '3. Yerel Güvenlik ve Donanımsal Şifreleme' : '3. Local Security & Hardware Encryption'}
            </h2>
            <p>
              {lang === 'tr'
                ? 'Kullanıcının girdiği Xtream Codes veya M3U çalma listesi kimlik bilgileri (kullanıcı adı, şifre, sunucu adresi), AndroidKeyStore donanım modülü (TEE / StrongBox) üzerinden AES-256 GCM ile şifrelenir. Bu anahtarlar cihazınızın dışına hiçbir zaman çıkamaz.'
                : 'All credentials (usernames, passwords, server URLs) are encrypted on-device via AndroidKeyStore AES-256 GCM backed by the hardware Trusted Execution Environment (TEE / StrongBox). Master keys never leave your physical device.'}
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>
              {lang === 'tr' ? '4. İsteğe Bağlı Harici Servisler' : '4. Optional External Metadata Providers'}
            </h2>
            <p>
              {lang === 'tr'
                ? 'Film ve dizi afişlerini zenginleştirmek için kullanıcı isterse TMDB (The Movie Database) veya OpenSubtitles API servislerini etkinleştirebilir. Bu istekler doğrudan söz konusu servislere gider; TELYRA herhangi bir aracı proxy sunucusu işletmez.'
                : 'If enabled by the user, poster artwork and subtitles are queried directly from TMDB or OpenSubtitles APIs. TELYRA operates zero proxy servers.'}
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>
              {lang === 'tr' ? '5. Zorunlu IPTV Yasal Feragatnamesi (Disclaimer)' : '5. Mandatory IPTV Legal Disclaimer'}
            </h2>
            <div
              style={{
                background: 'rgba(255, 51, 102, 0.08)',
                border: '1px solid rgba(255, 51, 102, 0.25)',
                borderRadius: '12px',
                padding: '20px',
                color: '#ffc2d1',
              }}
            >
              <strong>
                {lang === 'tr'
                  ? 'TELYRA herhangi bir medya içeriği, televizyon kanalı veya yayın kaynağı SAĞLAMAZ, BARINDIRMAZ VEYA SATMAZ.'
                  : 'TELYRA does NOT host, supply, distribute, or sell any media streams, television broadcasts, or playlist subscriptions.'}
              </strong>
              <p style={{ marginTop: '10px' }}>
                {lang === 'tr'
                  ? 'TELYRA yalnızca kullanıcının girdiği M3U ve Xtream akışlarını oynatan bağımsız bir video oynatıcı aracıdır. Kullanıcılar ekledikleri içeriklerin yasal yayın haklarına sahip olduklarını kendileri teyit etmekle yükümlüdür.'
                  : 'TELYRA is strictly an independent client-side media player utility. Users are exclusively responsible for obtaining authorized access to their playlists from lawful broadcast providers.'}
              </p>
            </div>
          </section>

          <section>
            <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>
              {lang === 'tr' ? '6. İletişim ve Destek' : '6. Contact & Support'}
            </h2>
            <p>
              {lang === 'tr'
                ? 'Gizlilik politikamız veya teknik mimari hakkında sorularınız için repository üzerinden iletişim kurabilirsiniz:'
                : 'For questions regarding this policy or technical architecture, visit:'}
            </p>
            <p style={{ marginTop: '8px' }}>
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
