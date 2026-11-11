// サイト全体のコンテンツ。メンバーやお知らせはここを編集する。

export const site = {
  name: "Ai×Game開発部",
  tagline: "つくって、競って、実績にする",
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
      { href: "/community/rules", label: "会則" },
    ],
  },
];

export type Member = {
  name: string;
  role: string;
  bio: string;
  photo?: string; // public/ 以下の画像パス。例: "/images/team/taro.jpg"
  github?: string; // ユーザー名
  x?: string; // ユーザー名
  website?: string;
};

// 会則6条の役職。TODO: 実際のメンバー情報に差し替える（サンプル）
// 会則5条「名簿の非公開」に注意：掲載は本人の同意を得た人だけにする
export const officers: Member[] = [
  { name: "代表の名前", role: "代表", bio: "サークル全体の運営と対外的な窓口を担当しています。", github: "SAK-Game-Development-Department" },
  { name: "副代表の名前", role: "副代表", bio: "総会の運営やメンバーのサポートを担当しています。" },
  { name: "開発責任者の名前", role: "開発責任者", bio: "サークルの開発プロジェクトと共有リポジトリを管理しています。" },
];

export const leaders: Member[] = [
  { name: "リーダーの名前", role: "ゲーム開発リーダー", bio: "ゲームジャムやコンテストへの出場チームを取りまとめています。" },
  { name: "リーダーの名前", role: "AIリーダー", bio: "機械学習の勉強会と論文執筆を取りまとめています。" },
  { name: "リーダーの名前", role: "情報セキュリティリーダー", bio: "CTFへの参加と勉強会を取りまとめています。" },
  { name: "リーダーの名前", role: "組み込みリーダー", bio: "マイコンやハードウェアを使った制作を取りまとめています。" },
];

export type Post = { date: string; title: string; summary: string };

// TODO: 実際のお知らせに差し替える（サンプル）
export const posts: Post[] = [
  { date: "2026-11-01", title: "公式サイトを公開しました", summary: "サークルの活動や作品を紹介する公式サイトを公開しました。" },
  { date: "2026-10-15", title: "学内ゲームジャムを開催しました", summary: "48時間で「つながり」をテーマにゲームを制作しました。" },
  { date: "2026-04-10", title: "新入部員を募集しています", summary: "プログラミング未経験でも大歓迎です。まずは見学に来てください。" },
];
