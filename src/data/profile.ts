export type Project = {
  id: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  imageUrl: string;
  genres: string[];
  stack: string;
  role: string;
};

export const profile = {
  name: 'Komoda Mamoru',
  role: 'UI設計とReact実装で、使いやすい画面を形にする学生',
  location: 'Tokyo, Japan',
  summary:
    '課題の整理からFigmaでの画面設計、React / TypeScriptでの実装方針までをつなぎ、使う人が迷わない体験へ落とし込むことを大切にしています。',
  photoUrl: '/photos/profile-photo.svg',
  figmaUrl: 'https://www.figma.com/',
  githubUrl: 'https://github.com/your-account',
  email: 'your.email@example.com',
  ticker: 'PF',
  status: '面談・選考に対応可能',
  keywords: ['UI設計', 'React / TypeScript', '情報設計', '改善提案'],
  signals: [
    { label: 'Design', value: 'UI/UX' },
    { label: 'Build', value: 'React TS' },
    { label: 'Deck', value: 'Figma' },
    { label: 'Focus', value: '課題解決' },
  ],
  perspectives: [
    {
      label: 'Thesis',
      title: '小さく検証して、着実に改善する',
      body: '一度で完璧な画面を狙うより、仮説を置き、触れる形にし、気づきを次の改善へ回す進め方を重視しています。',
    },
    {
      label: 'Catalyst',
      title: '判断理由を資料に残す',
      body: 'なぜその導線にしたのか、どこを優先したのかをFigma資料に残し、面接で深掘りしやすい状態にします。',
    },
    {
      label: 'Outlook',
      title: 'UIと実装の距離を縮める',
      body: 'デザインだけで終わらせず、Reactで組み立てやすい構造や状態を意識して、現実的に作れるUIを考えます。',
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
  projects: [
    {
      id: 'service-redesign',
      title: '予約導線のサービス改善提案',
      summary: '予約完了までの迷いを減らすため、情報の優先順位と入力導線を整理したUI改善案です。',
      problem: '必要な情報が複数画面に分散し、初見ユーザーが次に何をすればよいか判断しづらい状態を想定しました。',
      approach: 'ユーザー行動を予約前・入力中・確認前に分け、各段階で必要な情報だけが見える画面構成へ再設計しました。',
      outcome: 'Figma上でBefore / Afterを比較できる資料にし、改善理由を説明しやすいケーススタディとして整理しました。',
      imageUrl: '/photos/works/service-redesign.svg',
      genres: ['#UXリサーチ', '#UI設計', '#改善提案'],
      stack: 'Figma / User Flow / Wireframe',
      role: '課題整理・導線設計・画面設計',
    },
    {
      id: 'web-app-ui',
      title: '学習記録アプリのUI設計',
      summary: '学習内容を継続して記録できるよう、入力負荷を下げて進捗が見える画面を設計しました。',
      problem: '記録項目が多いと入力が続かず、学習の積み上げを実感しにくいという課題を想定しました。',
      approach: '毎日入力する情報を最小化し、週単位の振り返りと進捗表示を分けて、継続しやすい導線にしました。',
      outcome: 'Reactコンポーネントに分けやすい画面単位で整理し、実装時の状態管理まで見通せる設計にしました。',
      imageUrl: '/photos/works/web-app-ui.svg',
      genres: ['#フロントエンド', '#TypeScript', '#UI設計'],
      stack: 'React / TypeScript / Figma',
      role: '情報設計・UI設計・実装方針',
    },
    {
      id: 'portfolio-deck',
      title: 'ポートフォリオ資料',
      summary: '制作背景、担当範囲、判断理由、学びを面接で話しやすい順番にまとめた説明資料です。',
      problem: '制作物だけでは、どこを担当し、何を考え、どこで成長したのかが伝わりにくい課題がありました。',
      approach: '各実績を背景・担当・工夫・学びの順に並べ、採用担当が短時間で判断しやすい構成にしました。',
      outcome: 'サイトを入口、Figmaを詳細資料として役割分担し、面接で深掘りしやすい導線を作りました。',
      imageUrl: '/photos/works/portfolio-deck.svg',
      genres: ['#Figma', '#プレゼンテーション'],
      stack: 'Figma Slides',
      role: '構成・資料設計',
    },
  ] satisfies Project[],
};

export type Profile = typeof profile;