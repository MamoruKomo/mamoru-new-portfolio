import { useEffect, useState, type ReactNode } from 'react';
import { portfolio, type Project } from './data/portfolio';

type Theme = 'light' | 'dark';

const mailHref = `mailto:${portfolio.email}`;

function getInitialTheme(): Theme {
  const storedTheme = window.localStorage.getItem('portfolio-theme');

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function ExternalLink({ href, children, variant = 'secondary' }: { href: string; children: ReactNode; variant?: 'primary' | 'secondary' }) {
  return (
    <a className={`button ${variant === 'primary' ? 'button-primary' : 'button-secondary'}`} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function CaseDetail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="case-detail">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={featured ? 'project project-featured' : 'project'}>
      <div className="project-media">
        <img src={project.imageUrl} alt={`${project.title}のプレビュー`} />
      </div>
      <div className="project-content">
        <div className="tag-list" aria-label="ジャンル">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p className="project-subtitle">{project.subtitle}</p>
        <h3>{project.title}</h3>
        <dl className="case-list">
          <CaseDetail label="Problem">{project.problem}</CaseDetail>
          <CaseDetail label="Approach">{project.approach}</CaseDetail>
          <CaseDetail label="Outcome">{project.outcome}</CaseDetail>
        </dl>
        <div className="project-footer">
          <span>{project.stack}</span>
          <strong>{project.role}</strong>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [featuredProject, ...otherProjects] = portfolio.projects;
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <main className="site-shell">
      <header className="site-header" aria-label="サイトヘッダー">
        <a className="brand" href="#top" aria-label="ページ上部へ戻る">
          <span>KM</span>
          <strong>{portfolio.name}</strong>
        </a>
        <nav className="nav" aria-label="ページ内ナビゲーション">
          <a href="#profile">Profile</a>
          <a href="#works">Works</a>
          <a href="#notes">Notes</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="theme-button" type="button" onClick={() => setTheme(nextTheme)} aria-label={`${nextTheme}モードに切り替える`}>
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Recruit Portfolio / 2026</p>
          <h1 id="hero-title">{portfolio.title}</h1>
          <p className="lead">{portfolio.summary}</p>
          <div className="focus-list" aria-label="得意領域">
            {portfolio.focus.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="hero-actions" aria-label="主要リンク">
            <ExternalLink href={portfolio.figmaUrl} variant="primary">
              Figma資料を見る
            </ExternalLink>
            <ExternalLink href={portfolio.githubUrl}>GitHub</ExternalLink>
            <a className="button button-secondary" href={mailHref}>
              メールする
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="プロフィール要約">
          <img className="profile-image" src={portfolio.photoUrl} alt={`${portfolio.name}のプロフィール画像`} />
          <div className="profile-card">
            <p>{portfolio.name}</p>
            <dl>
              <div>
                <dt>Base</dt>
                <dd>{portfolio.location}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{portfolio.availability}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      <section className="proof-strip" id="profile" aria-label="採用担当者向け要約">
        {portfolio.proof.map((item) => (
          <article key={item.label}>
            <p>{item.label}</p>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      <section className="section intro" aria-labelledby="intro-title">
        <div className="section-index">01</div>
        <div className="section-body intro-grid">
          <h2 id="intro-title">短時間で、考え方と実績を判断できる入口。</h2>
          <p>
            このサイトでは作品の見た目だけでなく、課題の捉え方、設計の工夫、結果として何を説明できる状態にしたかを見せます。
            詳細な画面遷移や制作背景はFigma資料へつなげ、面接で深掘りしやすい構成にしています。
          </p>
        </div>
      </section>

      <section className="section works" id="works" aria-labelledby="works-title">
        <div className="section-index">02</div>
        <div className="section-body">
          <div className="section-heading">
            <p className="eyebrow">Selected Works</p>
            <h2 id="works-title">課題、工夫、成果で見る制作実績。</h2>
          </div>
          {featuredProject && <ProjectCard project={featuredProject} featured />}
          <div className="project-grid">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section notes" id="notes" aria-labelledby="notes-title">
        <div className="section-index">03</div>
        <div className="section-body">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Growth Notes</p>
            <h2 id="notes-title">作り方のクセまで見えるように。</h2>
          </div>
          <div className="note-grid">
            {portfolio.notes.map((note, index) => (
              <article className="note" key={note.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">詳しい資料とコードへ。</h2>
        <p>まずはFigma資料で制作背景をご確認ください。GitHubとメールからも連絡できるようにしています。</p>
        <div className="contact-actions">
          <ExternalLink href={portfolio.figmaUrl} variant="primary">
            Figma資料
          </ExternalLink>
          <ExternalLink href={portfolio.githubUrl}>GitHub</ExternalLink>
          <a className="button button-secondary" href={mailHref}>
            {portfolio.email}
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>{portfolio.name}</span>
        <span>Recruit Portfolio</span>
      </footer>
    </main>
  );
}

export default App;
