import Link from "next/link";
import { site } from "@/content/site";

export const metadata = { title: "サークルについて" };

export default function Page() {
  return (
    <>
      <h1>サークルについて</h1>
      <p className="intro">{site.name}は、AIとゲームをつくることを目的としたサークルです。</p>
      <h2>目的</h2>
      <p>「遊べるもの」を実際に完成させることを大切にしています。アイデアを形にし、人に遊んでもらい、フィードバックを受けて改善する。その繰り返しで技術とチーム開発の力を身につけます。</p>
      <h2>活動の柱</h2>
      <ul>
        <li><Link href="/learn/games">ゲーム開発</Link> — チームでゲームを企画・制作・公開する</li>
        <li><Link href="/learn/ai">AI開発</Link> — 機械学習やLLMをゲームに組み込む</li>
      </ul>
      <h2>普段の活動</h2>
      <ul>
        <li>週1回の定例ミーティング（進捗共有・勉強会）</li>
        <li>学期ごとのチーム制作</li>
        <li>ゲームジャムへの参加</li>
      </ul>
    </>
  );
}
