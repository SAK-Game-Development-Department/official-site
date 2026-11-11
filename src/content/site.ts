// サイト全体のコンテンツ。メンバーやお知らせはここを編集する。

export const site = {
  name: "SAK ゲーム開発部",
  tagline: "AIとゲームをつくるサークル",
  github: "https://github.com/SAK-Game-Development-Department",
};

export const topNav = [
  { href: "/learn", label: "活動について" },
  { href: "/community", label: "コミュニティ" },
  { href: "/blog", label: "ブログ" },
];

export type SidebarSection = { title: string; items: { href: string; label: string }[] };

export const learnSidebar: SidebarSection[] = [
  {
    title: "はじめに",
    items: [
      { href: "/learn", label: "サークルについて" },
      { href: "/learn/join", label: "入部するには" },
    ],
  },
  {
    title: "活動",
    items: [
      { href: "/learn/games", label: "ゲーム開発" },
      { href: "/learn/ai", label: "AI開発" },
    ],
  },
];

export const communitySidebar: SidebarSection[] = [
  {
    title: "コミュニティ",
    items: [
      { href: "/community", label: "概要" },
      { href: "/community/team", label: "メンバー紹介" },
    ],
  },
];

export type Member = {
  name: string;
  role: string;
  bio: string;
  github?: string;
  x?: string;
};

// TODO: 実際のメンバー情報に差し替える（サンプル）
export const members: Member[] = [
  { name: "部長の名前", role: "部長 / ゲームプログラマー", bio: "Unityでアクションゲームを作っています。サークル全体の運営を担当。", github: "SAK-Game-Development-Department" },
  { name: "副部長の名前", role: "副部長 / AIエンジニア", bio: "強化学習でゲームを遊ぶエージェントを研究中。LLMを使ったNPCにも興味あり。" },
  { name: "メンバーの名前", role: "グラフィック / UI", bio: "ドット絵と3Dモデリングが得意。サークル作品のアートを担当しています。" },
  { name: "メンバーの名前", role: "サウンド", bio: "BGMと効果音を制作。ゲームジャムでは作曲担当として参加。" },
];

export type Post = { date: string; title: string; summary: string };

// TODO: 実際のお知らせに差し替える（サンプル）
export const posts: Post[] = [
  { date: "2026-11-01", title: "公式サイトを公開しました", summary: "サークルの活動や作品を紹介する公式サイトを公開しました。" },
  { date: "2026-10-15", title: "学内ゲームジャムを開催しました", summary: "48時間で「つながり」をテーマにゲームを制作しました。" },
  { date: "2026-04-10", title: "新入部員を募集しています", summary: "プログラミング未経験でも大歓迎です。まずは見学に来てください。" },
];
