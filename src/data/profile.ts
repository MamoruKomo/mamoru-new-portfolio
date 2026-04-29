export const profile = {
	name: 'Your Name',
	role: 'UI/UX Designer / Frontend Developer',
	location: 'Tokyo, Japan',
	summary:
		'課題整理、UI設計、プロトタイピング、実装理解をつなぎ、ユーザーに届く体験へ落とし込むことを大切にしています。',
	photoUrl: '',
	figmaUrl: 'https://www.figma.com/',
	githubUrl: 'https://github.com/your-account',
	email: 'your.email@example.com',
	ticker: 'PORT',
	marketStatus: 'Open to interviews',
	keywords: ['UI設計', 'React / TypeScript', 'プロトタイピング', '情報設計'],
	metrics: [
		{ label: 'Focus', value: 'UI/UX' },
		{ label: 'Stack', value: 'React TS' },
		{ label: 'Deck', value: 'Figma' },
		{ label: 'Signal', value: 'Growth' },
	],
	tickers: [
		{ symbol: 'PORT', name: 'Portfolio Index', change: '+12.4%' },
		{ symbol: 'UX', name: 'User Insight', change: '+8.6%' },
		{ symbol: 'TS', name: 'Type Safety', change: '+5.2%' },
		{ symbol: 'FIG', name: 'Figma Deck', change: '+18.0%' },
	],
	investorNotes: [
		{
			label: 'Investment Theme',
			title: '伸びしろ重視のグロース人材',
			body: '課題発見、UI設計、実装理解を横断しながら、学習速度と改善サイクルで中長期の成長を狙います。',
		},
		{
			label: 'Catalyst',
			title: 'Figma資料で詳細開示中',
			body: '制作背景、判断理由、担当範囲をIR補足資料のように確認できます。面接で深掘り歓迎です。',
		},
		{
			label: 'Analyst Note',
			title: '初回面談レーティング: Buy',
			body: '短期の派手さより、改善を積み上げるタイプ。詳細材料はFigmaスライドで開示中です。',
		},
	],
	strengths: [
		{
			title: '課題を短く構造化する',
			body: 'ヒアリング内容や要件を整理し、誰が何に困っているかをチームで共有しやすい形にします。',
		},
		{
			title: '触れるプロトタイプにする',
			body: 'Figmaで画面遷移や操作感を検証し、意思決定に必要な粒度まで素早く具体化します。',
		},
		{
			title: '実装まで見通して設計する',
			body: 'ReactとTypeScriptを前提に、コンポーネント化しやすく保守しやすいUIを意識します。',
		},
	],
	highlights: [
		{
			title: 'サービス改善提案',
			tag: 'UX Research / Figma',
			body: '利用シーン、課題仮説、改善案、検証観点を1つのストーリーとして整理しました。',
		},
		{
			title: 'WebアプリUI設計',
			tag: 'React / TypeScript',
			body: '主要導線を絞り、初見でも迷いにくい画面構成と状態設計を検討しました。',
		},
		{
			title: 'ポートフォリオ資料',
			tag: 'Presentation',
			body: '制作背景、担当範囲、判断理由、学びを面接で話しやすい順番にまとめています。',
		},
	],
};

export type Profile = typeof profile;
