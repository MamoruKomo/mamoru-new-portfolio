import type { ReactNode } from 'react';
import { profile } from './data/profile';

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

function App() {
	return (
		<main className="site-shell">
			<header className="header" aria-label="サイトヘッダー">
				<a className="brand" href="#top" aria-label="ページ上部へ戻る">
					<span className="brand-mark">{profile.ticker}</span>
					<span>{profile.name}</span>
				</a>
				<nav className="nav" aria-label="ページ内ナビゲーション">
					<a href="#market">Market</a>
					<a href="#work">Works</a>
					<a href="#contact">Contact</a>
				</nav>
			</header>

			<div className="ticker-tape" aria-label="ポートフォリオ銘柄ティッカー">
				{profile.tickers.map((ticker) => (
					<div className="ticker-item" key={ticker.symbol}>
						<strong>{ticker.symbol}</strong>
						<span>{ticker.name}</span>
						<em>{ticker.change}</em>
					</div>
				))}
			</div>

			<section className="hero" id="top" aria-labelledby="hero-title">
				<div className="hero-copy">
					<p className="eyebrow">Portfolio Market Brief / 2026</p>
					<h1 id="hero-title">{profile.name}</h1>
					<p className="role">{profile.role}</p>
					<p className="lead">{profile.summary}</p>
					<div className="stock-chart" aria-label="成長イメージチャート">
						<span style={{ height: '38%' }} />
						<span style={{ height: '58%' }} />
						<span style={{ height: '46%' }} />
						<span style={{ height: '72%' }} />
						<span style={{ height: '64%' }} />
						<span style={{ height: '86%' }} />
						<span style={{ height: '78%' }} />
						<span style={{ height: '94%' }} />
					</div>
					<div className="metric-row" aria-label="プロフィール指標">
						{profile.metrics.map((metric) => (
							<div className="metric" key={metric.label}>
								<span>{metric.label}</span>
								<strong>{metric.value}</strong>
							</div>
						))}
					</div>
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

				<aside className="profile-panel" aria-label="プロフィール要約">
					<div className="photo-frame" aria-label="顔写真スペース">
						{profile.photoUrl ? <img src={profile.photoUrl} alt={`${profile.name}の顔写真`} /> : <span>{initials}</span>}
					</div>
					<div className="panel-topline">
						<p className="panel-label">Executive Summary</p>
						<span>01</span>
					</div>
					<dl className="profile-list">
						<div>
							<dt>Ticker</dt>
							<dd>{profile.ticker}</dd>
						</div>
						<div>
							<dt>Status</dt>
							<dd>{profile.marketStatus}</dd>
						</div>
						<div>
							<dt>Area</dt>
							<dd>{profile.keywords.join(' / ')}</dd>
						</div>
						<div>
							<dt>Deck</dt>
							<dd>Figmaスライドに集約</dd>
						</div>
					</dl>
				</aside>
			</section>

			<section className="section split" aria-labelledby="about-title">
				<div>
					<p className="section-kicker">Opening Comment</p>
					<h2 id="about-title">30秒で伝えたいこと</h2>
				</div>
				<p>
					このサイトは、すべての実績を詳しく説明する場所ではなく、面接前に全体像をつかむための入口です。
					詳細はFigmaスライドにまとめ、面接では制作背景や判断理由を資料に沿ってお話しできます。
				</p>
			</section>

			<section className="section market-section" id="market" aria-labelledby="market-title">
				<div className="section-heading">
					<p className="section-kicker">Market View</p>
					<h2 id="market-title">銘柄として見るなら</h2>
				</div>
				<div className="market-grid">
					{profile.investorNotes.map((note) => (
						<article className="market-card" key={note.title}>
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
						<h2 id="work-title">実績の入口</h2>
					</div>
					<ExternalLink href={profile.figmaUrl} variant="primary">
						詳細をFigmaで見る
					</ExternalLink>
				</div>
				<div className="card-grid">
					{profile.highlights.map((item) => (
						<article className="work-card" key={item.title}>
							<p className="tag">{item.tag}</p>
							<h3>{item.title}</h3>
							<p>{item.body}</p>
						</article>
					))}
				</div>
			</section>

			<section className="contact" id="contact" aria-labelledby="contact-title">
				<div>
					<p className="section-kicker">Contact</p>
					<h2 id="contact-title">詳しい話はスライドから</h2>
					<p>
						まずはFigmaスライドで全体像をご確認ください。GitHubやメールからも連絡できるようにしています。
					</p>
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
				<span>{profile.ticker} / {profile.name}</span>
				<span>Portfolio Market Brief</span>
			</footer>
		</main>
	);
}

export default App;
