import { members } from "@/content/site";

export const metadata = { title: "メンバー紹介" };

export default function Page() {
  return (
    <>
      <h1>メンバー紹介</h1>
      <p className="intro">サークルの運営と制作を担うメンバーです。</p>
      <div className="mt-10 space-y-6">
        {members.map((m, i) => (
          <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-card dark:bg-card-dark">
            <div className="w-28 h-28 shrink-0 rounded-full bg-highlight dark:bg-highlight-dark text-link dark:text-link-dark grid place-items-center text-4xl font-bold">
              {m.name.slice(0, 1)}
            </div>
            <div>
              <h3 className="mt-0! mb-1!">{m.name}</h3>
              <p className="my-0! font-medium text-base!">{m.role}</p>
              <p className="mt-2! mb-3!">{m.bio}</p>
              {m.github && <a href={`https://github.com/${m.github}`}>GitHub</a>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
