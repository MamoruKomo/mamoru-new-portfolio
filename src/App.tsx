import { useEffect, useState, type ReactNode } from 'react';
import { profile, type Project } from './data/profile';

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

function ProjectImage({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div className={large ? 'project-image project-image-large' : 'project-image'}>
      {project.imageUrl ? <img src={project.imageUrl} alt={`${project.title}のプレビュー`} /> : <span>{project.title.slice(0, 2)}</span>}
    </div>
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
  const [featuredProject, ...supportingProjects] = profile.projects;

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
          <p className="eyebrow">Portfolio Editorial / 2026</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="lead">{profile.summary}</p>
          <div className="hero-actions" aria-label="主要リンク">
            <ExternalLink href={profile.figmaUrl} variant="primary">
              Figma Deck
            </ExternalLink>
            <ExternalLink href={profile.githubUrl}>GitHub</ExternalLink>
            <a className="button button-secondary" href={mailHref}>
              Mail
            </a>
          </div>
        </div>

        <aside className="portrait-panel" aria-label="プロフィール写真">
          <div className="portrait-frame">
            {profile.photoUrl ? <img src={profile.photoUrl} alt={`${profile.name}の顔写真`} /> : <span>{initials}</span>}
          </div>
          <dl className="portrait-meta">
            <div>
              <dt>Base</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{profile.status}</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="ticker-strip" aria-label="プロフィール要約">
        {profile.signals.map((signal) => (
          <div className="ticker-item" key={signal.label}>
            <span>{signal.label}</span>
            <strong>{signal.value}</strong>
          </div>
        ))}
      </section>

      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="section-label">
          <span>01</span>
          <p>About</p>
        </div>
        <div className="section-body split-copy">
          <h2 id="about-title">面接前に、判断軸まで伝わる入口。</h2>
          <div>
            <p>
              制作物だけを並べるのではなく、課題の見方、設計の理由、実装への落とし込みまでを短く追えるポートフォリオです。
              詳細はFigma資料にまとめ、ここでは全体像と興味の起点を作ります。
            </p>
            <ul className="keyword-list" aria-label="キーワード">
              {profile.keywords.map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section work" id="work" aria-labelledby="work-title">
        <div className="section-label">
          <span>02</span>
          <p>Selected Work</p>
        </div>
        <div className="section-body">
          <div className="section-heading">
            <h2 id="work-title">写真と要点で読む実績。</h2>
            <ExternalLink href={profile.figmaUrl} variant="primary">
              Open Deck
            </ExternalLink>
          </div>

          {featuredProject && (
            <article className="featured-work">
              <ProjectImage project={featuredProject} large />
              <div className="featured-copy">
                <div className="genre-list" aria-label="ジャンル">
                  {featuredProject.genres.map((genre) => (
                    <span key={genre}>{genre}</span>
                  ))}
                </div>
                <p className="tag">{featuredProject.stack}</p>
                <h3>{featuredProject.title}</h3>
                <p>{featuredProject.summary}</p>
                <dl className="project-meta">
                  <div>
                    <dt>Role</dt>
                    <dd>{featuredProject.role}</dd>
                  </div>
                </dl>
              </div>
            </article>
          )}

          <div className="work-list">
            {supportingProjects.map((project) => (
              <article className="work-row" key={project.id}>
                <ProjectImage project={project} />
                <div className="work-row-copy">
                  <div className="genre-list" aria-label="ジャンル">
                    {project.genres.map((genre) => (
                      <span key={genre}>{genre}</span>
                    ))}
                  </div>
                  <p className="tag">{project.stack}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                <dl className="project-meta compact">
                  <div>
                    <dt>Role</dt>
                    <dd>{project.role}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section perspective" aria-labelledby="perspective-title">
        <div className="section-label">
          <span>03</span>
          <p>Perspective</p>
        </div>
        <div className="section-body">
          <h2 id="perspective-title">株好きらしい視点は、静かに効かせる。</h2>
          <div className="note-grid">
            {profile.perspectives.map((note) => (
              <article className="note" key={note.title}>
                <p className="tag">{note.label}</p>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section strengths" aria-labelledby="strength-title">
        <div className="section-label">
          <span>04</span>
          <p>Method</p>
        </div>
        <div className="section-body">
          <h2 id="strength-title">得意な進め方。</h2>
          <div className="method-list">
            {profile.strengths.map((strength, index) => (
              <article className="method" key={strength.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{strength.title}</h3>
                  <p>{strength.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">詳しい話は、資料と会話で。</h2>
        <p>Figma資料、GitHub、メールの順に見てもらえると全体像がつかみやすいです。</p>
        <div className="contact-actions">
          <ExternalLink href={profile.figmaUrl} variant="primary">
            Figma Deck
          </ExternalLink>
          <ExternalLink href={profile.githubUrl}>GitHub</ExternalLink>
          <a className="button button-secondary" href={mailHref}>
            {profile.email}
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>{profile.name}</span>
        <span>Portfolio Editorial</span>
      </footer>
    </main>
  );
}

export default App;