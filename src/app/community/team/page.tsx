import Link from "next/link";
import { officers, leaders, type Member } from "@/content/site";

export const metadata = { title: "メンバー紹介" };

function TeamMember({ m }: { m: Member }) {
  const links = [
    m.github && { href: `https://github.com/${m.github}`, label: `@${m.github}`, kind: "GitHub" },
    m.x && { href: `https://x.com/${m.x}`, label: `@${m.x}`, kind: "X" },
    m.website && { href: m.website, label: new URL(m.website).hostname, kind: "Web" },
  ].filter((l) => !!l);

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 my-10">
      {m.photo ? (
        // eslint-disable-next-line @next/next/no-img-element -- 画像サイズがまちまちなので最適化なしで十分
        <img src={m.photo} alt={m.name} className="w-40 h-40 shrink-0 rounded-full object-cover shadow-inner" />
      ) : (
        <div aria-hidden="true" className="w-40 h-40 shrink-0 rounded-full bg-card dark:bg-card-dark text-link dark:text-link-dark grid place-items-center text-5xl font-bold">
          {m.name.slice(0, 1)}
        </div>
      )}
      <div className="flex-1">
        <h3 className="mt-0! mb-0! text-3xl!">{m.name}</h3>
        <p className="my-1! font-medium text-base!">{m.role}</p>
        <p className="mt-3! mb-3!">{m.bio}</p>
        {links.length > 0 && (
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-base!">
                <span className="text-secondary dark:text-secondary-dark">{l.kind} </span>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <h1>メンバー紹介</h1>
      <p className="intro">
        Ai×Game開発部は、役員と各分野のリーダーを中心に運営されています。
        運営体制について詳しくは<Link href="/community/rules#organization">会則</Link>をご覧ください。
      </p>
      <h2>役員</h2>
      {officers.map((m, i) => <TeamMember key={i} m={m} />)}
      <h2>分野リーダー</h2>
      <p>各分野の有志の取りまとめ役です。興味のある分野があれば、気軽に声をかけてください。</p>
      {leaders.map((m, i) => <TeamMember key={i} m={m} />)}
    </>
  );
}
