// PLUNIA PAGE — save as: app/plunia/page.jsx
// I only know your role here, so the rest is placeholders for you to fill in.
import Link from "next/link";

export const metadata = { title: "Plunia — Yara Ibrahim Anwar Ahmed" };

export default function Plunia() {
  return (
    <main className="portfolio">
      <div className="wrap">
        <Link href="/" className="back">← Yara</Link>

        <p className="eyebrow">Startup</p>
        <h1>Plunia</h1>
        <p className="lead">
          [One or two sentences on what Plunia is and the problem it solves. Plain and concrete —
          imagine an investor reading just this line.]
        </p>
        <div className="meta-row">
          <span>Co-founder &amp; CTO</span>
          <span>2024 — present</span>
          <span>[Core tech / stack]</span>
        </div>

        <div className="figure"><span className="media-label">[ product / demo image ]</span></div>
        <p className="figcaption">A product shot, demo still, or logo lockup goes here.</p>

        <div className="prose">
          <h2 className="h2">What we&apos;re building</h2>
          <p>[A short paragraph on the product and who it&apos;s for.]</p>

          <h2 className="h2">My role</h2>
          <p>
            As co-founder and CTO, I [lead the technical direction / build the core system /
            own engineering and the product&apos;s technical roadmap — fill in what&apos;s true].
          </p>

          <h2 className="h2">Where it stands</h2>
          <p>[Traction, milestones, pilots, awards — whatever you can point to.]</p>

          <div className="stats">
            <div className="stat"><div className="stat-num">[ ]</div><div className="stat-label">[ milestone ]</div></div>
            <div className="stat"><div className="stat-num">[ ]</div><div className="stat-label">[ milestone ]</div></div>
          </div>
        </div>

        <footer className="footer">
          <span><Link href="/">← Back to home</Link></span>
          <span className="sign">Yara</span>
        </footer>
      </div>
    </main>
  );
}
