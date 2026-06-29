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
          Plunia is a deeptech startup that builds a mixed reality software for surgeons in minimally invasive surgery.
        </p>
        <div className="meta-row">
          <span>Co-founder &amp; CTO</span>
          <span>2025 — present</span>
          <span>Deeptech startup / Mixed reality software</span>
        </div>


        <div className="figure"><img src="/interactor.png" alt="Plunia InteractOR" /></div>
        <p className="figcaption">A screenshot of the InteractOR software.</p>

        <div className="prose">
          <h2 className="h2">What we&apos;re building</h2>
          <p> Plunia's InteractOR is a mixed reality software that allows surgeons to consult the patient's preoperative images, using instruments
            that they already master, and without having to leave the sterile field.
            You can visit the Plunia website to learn more about the startup and our product.</p>

 
          <p className="project-links">
          <a href="https://plunia.com/" target="_blank" rel="noopener noreferrer">Visit the Plunia website ↗</a>
          </p>

          <h2 className="h2">My role</h2>
          <p>
            As co-founder and CTO, I lead the technical direction of Plunia.
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
