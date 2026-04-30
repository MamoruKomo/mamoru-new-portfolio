export type Project = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  tags: string[];
  stack: string;
  role: string;
  problem: string;
  approach: string;
  outcome: string;
};

export const portfolio = {
  name: 'Komoda Mamoru',
  title: 'UI設計とReact実装で、迷わず使える画面を作る学生',
  location: 'Tokyo, Japan',
  availability: '2026年卒 / 選考・面談に対応可能',
  summary:
    '課題を整理し、Figmaで使い方を検証し、React / TypeScriptで実装しやすい形へ落とし込むことを大切にしています。見た目だけではなく、なぜその画面にしたのかまで説明できるポートフォリオです。',
  photoUrl: '/assets/profile.svg',
  figmaUrl: 'https://www.figma.com/',
  githubUrl: 'https://github.com/your-account',
  email: 'your.email@example.com',
  focus: ['UI設計', '情報設計', 'React / TypeScript', '改善提案'],
  proof: [
    { label: 'Design', value: 'Figmaで画面遷移まで設計' },
    { label: 'Build', value: 'React実装を見据えた構成' },
    { label: 'Explain', value: '判断理由を言語化' },
  ],
  notes: [
    {
      title: '仮説を置いてから作る',
      body: '最初にユーザーの迷いを仮説化し、画面上でどの情報を優先すべきかを決めてから設計します。',
    },
    {
      title: '触れる粒度まで落とす',
      body: 'Figmaだけで終わらせず、状態やコンポーネントの分け方まで考えて実装に近づけます。',
    },
    {
      title: '改善の根拠を残す',
      body: 'Before / After、担当範囲、工夫した点を残し、面接で深掘りしやすい資料にします。',
    },
  ],
  projects: [
    {
      id: 'booking-flow',
      title: '予約導線の改善提案',
      subtitle: '入力前の不安を減らすサービスUI',
      imageUrl: '/assets/work-booking.svg',
      tags: ['#UI設計', '#UXリサーチ', '#改善提案'],
      stack: 'Figma / User Flow / Wireframe',
      role: '課題整理・導線設計・画面設計',
      problem: '予約完了までに必要な情報が分散し、初見ユーザーが次の操作を判断しづらい状態を想定しました。',
      approach: '予約前、入力中、確認前の3段階に分け、各タイミングで必要な情報だけを見せる画面構成に再設計しました。',
      outcome: 'Before / Afterで改善理由を説明できる資料にし、面接で判断過程を話しやすいケーススタディにしました。',
    },
    {
      id: 'learning-log',
      title: '学習記録アプリUI',
      subtitle: '続けやすさを重視した記録体験',
      imageUrl: '/assets/work-learning.svg',
      tags: ['#React', '#TypeScript', '#UI設計'],
      stack: 'React / TypeScript / Figma',
      role: '情報設計・UI設計・実装方針',
      problem: '記録項目が多いと入力が続かず、学習の積み上げも見えにくくなる課題を想定しました。',
      approach: '毎日の入力は最小限にし、週単位の振り返りと進捗表示を分けて継続しやすい導線にしました。',
      outcome: '画面単位をReactコンポーネントに分けやすく整理し、状態管理まで見通せる設計にしました。',
    },
    {
      id: 'portfolio-deck',
      title: 'ポートフォリオ資料設計',
      subtitle: '制作背景を説明しやすくするFigma資料',
      imageUrl: '/assets/work-deck.svg',
      tags: ['#Figma', '#資料設計', '#プレゼン'],
      stack: 'Figma Slides / Story Design',
      role: '構成・資料設計・言語化',
      problem: '制作物だけでは担当範囲や判断理由が伝わりにくく、面接で話す順番も散らばりやすい課題がありました。',
      approach: '背景、担当、工夫、学びの順に並べ、採用担当が短時間で判断しやすい資料構成にしました。',
      outcome: 'Webサイトを入口、Figmaを詳細資料として分け、会話につながるポートフォリオ導線にしました。',
    },
  ] satisfies Project[],
};

export type Portfolio = typeof portfolio;
