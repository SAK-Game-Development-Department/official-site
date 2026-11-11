import { site } from "@/content/site";

export const metadata = { title: "入部するには" };

export default function Page() {
  return (
    <>
      <h1>入部するには</h1>
      <p className="intro">学年・学部・経験は問いません。いつでも見学できます。</p>
      <h2>こんな人におすすめ</h2>
      <ul>
        <li>ゲームを作ってみたい人</li>
        <li>AIを使って何かを作ってみたい人</li>
        <li>絵・音楽・企画で作品づくりに関わりたい人</li>
      </ul>
      <h2>連絡先</h2>
      {/* TODO: 実際の連絡先（SNS・メール・フォーム）に差し替える */}
      <p>見学・入部の希望は、<a href={site.github}>GitHub</a> または部員に直接お声がけください。</p>
    </>
  );
}
