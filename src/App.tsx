import { useEffect, useState, type ReactNode } from 'react';
import { profile } from './data/profile';

type Theme = 'light' | 'dark';

const mailHref = `mailto:${profile.email}`;
const initials = profile.name
  .split(' ')
  .map((word) => word[0])
  .join('')
  .slice(0, 2)
  .toUpperCase();

function ExternalLink({ href, children, variant = 'secondary' }: { href: string; children: ReactNode; variant?: 'primary' | 'secondary' }) {
  return (
    <a className={`button button-${variant}`} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function getInitialTheme(): Theme {
  const savedTheme = window.localStorage.getItem('portfolio-theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <main className="site-shell">
      <header className="header" aria-label="サイトヘッダー">
        <a className="brand" href="#top" aria-label="ページ上部へ戻る">
          <span className="brand-mark">{profile.ticker}</span>
          <span>{profile.name}</span>
        </a>
        <nav className="nav" aria-label="ページ内ナビゲーション">
          <a href="#about">About</a>
          <a href="#work">Works</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="theme-toggle" type="button" aria-label={`${nextTheme}モードに切り替える`} onClick={() => setTheme(nextTheme)}>
          <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
          <i aria-hidden="true" />
        </button>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio Entrance / 2026</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="lead">{profile.summary}</p>
          <div className="hero-actions" aria-label="主要リンク">
            <ExternalLink href={profile.figmaUrl} variant="primary">
              Figmaスライドを見る
            </ExternalLink>
            <ExternalLink href={profile.githubUrl}>GitHub</ExternalLink>
            <a className="button button-secondary" href={mailHref}>
              メールする
            </a>
          </div>
        </div>

        <aside className="profile-card" aria-label="プロフィール要約">
          <div className="portrait" aria-label="顔写真スペース">
            {profile.photoUrl ? <img src={profile.photoUrl} alt={`${profile.name}の顔写真`} /> : <span>{initials}</span>}
          </div>
          <div className="profile-meta">
            <p>Snapshot</p>
            <dl>
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{profile.marketStatus}</dd>
              </div>
              <div>
                <dt>Deck</dt>
                <dd>Figmaに詳細資料</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      <section className="signal-strip" aria-label="ポートフォリオシグナル">
        {profile.metrics.map((metric) => (
          <div className="signal" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </section>

      <section className="section intro" id="about" aria-labelledby="about-title">
        <div>
          <p className="section-kicker">About</p>
          <h2 id="about-title">30秒で伝えたいこと</h2>
        </div>
        <p>
          このサイトは、すべての実績を長く説明する場所ではなく、面接前に全体像をつかむための入口です。
          詳細はFigmaスライドへ集約し、制作背景や判断理由を面接で話しやすい順番に整理しています。
        </p>
      </section>

      <section className="section" aria-labelledby="perspective-title">
        <div className="section-heading">
          <p className="section-kicker">Perspective</p>
          <h2 id="perspective-title">株好きらしい見方を少しだけ</h2>
        </div>
        <div className="perspective-grid">
          {profile.investorNotes.map((note) => (
            <article className="perspective-card" key={note.title}>
              <p className="tag">{note.label}</p>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="strength-title">
        <div className="section-heading">
          <p className="section-kicker">Strengths</p>
          <h2 id="strength-title">得意な進め方</h2>
        </div>
        <div className="card-grid">
          {profile.strengths.map((strength) => (
            <article className="card" key={strength.title}>
              <h3>{strength.title}</h3>
              <p>{strength.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="section-heading with-action">
          <div>
            <p className="section-kicker">Selected Work</p>
            <h2 id="work-title">写真と # で把握できる実績一覧</h2>
          </div>
          <ExternalLink href={profile.figmaUrl} variant="primary">
            詳細をFigmaで見る
          </ExternalLink>
        </div>
        <div className="work-grid">
          {profile.highlights.map((item) => (
            <article className="work-card" key={item.title}>
              <div className="work-card-image">
                <img src={item.imageUrl} alt={item.imageAlt} />
              </div>
              <div className="work-card-body">
                <p className="tag">{item.tag}</p>
                <h3>{item.title}</h3>
                <ul className="hash-list" aria-label={`${item.title} のハッシュタグ`}>
                  {item.hashtags.map((hash) => (
                    <li key={hash}>#{hash}</li>
                  ))}
                </ul>
                <p>{item.body}</p>
                <dl className="work-meta">
                  <div>
                    <dt>Role</dt>
                    <dd>{item.role}</dd>
                  </div>
                  <div>
                    <dt>Impact</dt>
                    <dd>{item.impact}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 id="contact-title">詳しい話はスライドから</h2>
          <p>まずはFigmaスライドで全体像をご確認ください。GitHubやメールからも連絡できるようにしています。</p>
        </div>
        <div className="contact-actions">
          <ExternalLink href={profile.figmaUrl} variant="primary">
            Figmaスライド
          </ExternalLink>
          <ExternalLink href={profile.githubUrl}>GitHub</ExternalLink>
          <a className="button button-secondary" href={mailHref}>
            {profile.email}
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>{profile.name}</span>
        <span>Portfolio Entrance</span>
      </footer>
    </main>
  );
}

export default App;