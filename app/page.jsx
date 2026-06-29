// HOME PAGE — save as: app/page.jsx (replace everything)
import Link from "next/link";

export const metadata = {
  title: "Yara Ibrahim Anwar Ahmed",
  description: "PhD researcher and engineer building machine-learning systems for healthcare.",
};

export default function Home() {
  return (
    <main className="portfolio">
      <div className="wrap">
        {/* ---------------- HERO ---------------- */}
        <header>
          <h1>Yara</h1>
          <p className="role">PhD Researcher · Co-founder &amp; CTO · Paris</p>
          <p className="intro">
            I build machine-learning systems for healthcare — from{" "}
            <span className="swipe">voice biomarkers that detect disease</span> to
            medical-imaging tools clinicians can actually use.
          </p>
          <nav className="links">
            <a href="mailto:yara.ibrahim_anwar_ahmed@sorbonne-universite.fr">Email</a>
            <a href="https://www.linkedin.com/in/yara-ibrahim-anwar-ahmed/">LinkedIn</a>
          </nav>
        </header>

        {/* ---------------- SELECTED WORK ---------------- */}
        <section className="section">
          <p className="eyebrow">Selected Work</p>

          <div className="work-grid">
            {/* Plunia */}
            <article className="project">
              <Link href="/plunia" className="media-link">
                <div className="project-media"><span className="media-label">[ add image ]</span></div>
              </Link>
              <Link href="/plunia" className="project-title-link">Plunia</Link>
              <p className="project-meta">Co-founder &amp; CTO · 2025–present</p>
              <p className="project-desc">At Plunia, we build InteractOR, a mixed reality software for healthcare.</p>
              <p className="project-links"><Link href="/plunia">View →</Link></p>
            </article>

            {/* PhD */}
            <article className="project">
              <Link href="/phd" className="media-link">
                <div className="project-media"><span className="media-label">[ spectrogram ]</span></div>
              </Link>
              <Link href="/phd" className="project-title-link">Voice biomarkers for neurological disorders.</Link>
              <p className="project-meta">PhD research · 2024–present</p>
              <p className="project-desc">
                Detecting minimal hepatic encephalopathy from voice alone — full audio pipeline, 80% accuracy.
              </p>
              <p className="project-links"><Link href="/phd">View →</Link></p>
            </article>

            {/* Computer Vision internship */}
            <article className="project">
              <Link href="/vision" className="media-link">
                <div className="project-media"><span className="media-label">[ add image ]</span></div>
              </Link>
              <Link href="/vision" className="project-title-link">Bile-duct MRI segmentation</Link>
              <p className="project-meta">Research internship · 2024</p>
              <p className="project-desc">
                Hybrid Residual U-Net at 0.98 Dice, a 689-image dataset, and a 3D Slicer extension.
              </p>
              <p className="project-links"><Link href="/vision">View →</Link></p>
            </article>
          </div>
        </section>

        {/* ---------------- FOOTER ---------------- */}
        <footer className="footer">
          <span>
            Reach me at{" "}
            <a href="mailto:yara.ibrahim_anwar_ahmed@sorbonne-universite.fr">email</a> or on{" "}
            <a href="https://www.linkedin.com/in/yara-ibrahim-anwar-ahmed/">LinkedIn</a>.
          </span>
          <span className="sign">Yara</span>
        </footer>
      </div>
    </main>
  );
}
