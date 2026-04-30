export const profile = {
	name: '薦田 葵',
	role: 'Product / Business / Hardware Builder',
	location: 'Tokushima, Japan',
	summary:
		'現場観察から課題を見つけ、プロダクト・事業・ハードウェアの形に落とし込むことを軸に活動しています。就活向けに、何を作ってきたかが短時間で伝わる入口として設計しています。',
	photoUrl: '',
	figmaUrl: 'https://www.figma.com/',
	githubUrl: 'https://github.com/',
	facebookUrl: 'https://www.facebook.com/',
	linkedinUrl: 'https://www.linkedin.com/',
	email: 'example@example.com',
	ticker: 'PF',
	marketStatus: '面談・選考に対応可能',
	keywords: ['現場ヒアリング', '事業開発', 'プロダクト設計', 'ハードウェア'],
	metrics: [
		{ label: 'Field', value: 'Care / Local' },
		{ label: 'Focus', value: 'Product & Business' },
		{ label: 'Projects', value: '3 cases' },
		{ label: 'Signal', value: 'Growth Oriented' },
	],
	socialLinks: [
		{ label: 'Facebook', href: 'https://www.facebook.com/' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/' },
		{ label: 'GitHub', href: 'https://github.com/' },
	],
	tickers: [
		{ symbol: 'PORT', name: 'Portfolio Index', change: '+12.4%' },
		{ symbol: 'UX', name: 'User Insight', change: '+8.6%' },
		{ symbol: 'TS', name: 'Type Safety', change: '+5.2%' },
		{ symbol: 'FIG', name: 'Figma Deck', change: '+18.0%' },
	],
	investorNotes: [
		{
			label: 'Theme',
			title: '現場起点で考える学生ビルダー',
			body: '介護現場や地域イベントなど、実際の利用現場から仮説を作り、形にして検証する進め方を重視しています。',
		},
		{
			label: 'Catalyst',
			title: '詳細はスライドで深掘りできる',
			body: 'このサイトでは案件の方向性を短く把握し、背景や担当範囲、学びはFigmaスライドで確認できる構成にしています。',
		},
		{
			label: 'Note',
			title: '派手さより、再現可能な強み',
			body: 'ヒアリング、試作、発表、販売といった経験を、別案件でも再現できる強みとして見てもらえるよう整理しています。',
		},
	],
	strengths: [
		{
			title: '課題の解像度を上げる',
			body: '現場ヒアリングや観察から、表面的ではない課題を言語化し、次の一手につながる整理を行います。',
		},
		{
			title: '仮説を形にして検証する',
			body: 'Figma、Web、ハードウェア試作を使い分けながら、検証に必要な粒度まで素早く具体化します。',
		},
		{
			title: '届け方まで考える',
			body: '作るだけでなく、誰にどう届けるか、どう説明するか、どう継続可能にするかまで視野に入れて設計します。',
		},
	],
	highlights: [
		{
			title: 'KiDUKi',
			tag: 'Care AR Support',
			body: '介護現場で、新人やスポットワーカーが利用者ごとの注意点をその場で確認できるAR支援ツールです。',
			role: 'Business Model / Hardware Design / Field Research',
			impact: '30以上の介護施設へヒアリングし、DCONに向けて事業化を検討中。',
			hashtags: ['介護', 'AR', '現場課題', '事業開発'],
			imageUrl: '/projects/kiduki.svg',
			imageAlt: 'KiDUKi プロジェクトのイメージ',
		},
		{
			title: '綿飴屋comora',
			tag: 'Local Business',
			body: '地域イベントで綿飴を販売する小さな事業です。商品づくりから販売、地域の方との関係づくりまで行いました。',
			role: 'Sales / Event Operation / Local Communication',
			impact: '約15回の出店経験を通じて、実販売と地域接点の作り方を学びました。',
			hashtags: ['地域', '販売', '顧客接点', '小さな事業'],
			imageUrl: '/projects/comora.svg',
			imageAlt: '綿飴屋comora プロジェクトのイメージ',
		},
		{
			title: 'StockLife Todo',
			tag: 'Investment Support App',
			body: '資産記録、投資ルール、翌日のToDoをまとめるWebアプリです。投資行動を見える化し、次の判断をしやすくします。',
			role: 'Frontend / UI Design / Personal Product',
			impact: 'HTML / CSS / JavaScript を用いて可視化と継続利用を意識したUIを制作。',
			hashtags: ['Webアプリ', '投資支援', '可視化', '個人開発'],
			imageUrl: '/projects/stocklife.svg',
			imageAlt: 'StockLife Todo プロジェクトのイメージ',
		},
	],
};

export type Profile = typeof profile;
