// PhD PAGE — save as: app/phd/page.jsx
import Link from "next/link";

export const metadata = { title: "Voice biomarkers for liver disease — Yara Ibrahim Anwar Ahmed" };

// Generated spectrogram — no image file needed. Tweak cols/rows to taste,
// or replace this whole block with a real <img src="/spectrogram.png" />.
function Spectrogram() {
  const cols = 64, rows = 14, cell = 11, gap = 2;
  const w = cols * (cell + gap), h = rows * (cell + gap);
  const rects = [];
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const v = Math.abs(Math.sin(c * 0.28 + r * 0.5) * Math.cos(c * 0.06 - r * 0.3));
      const op = (0.08 + v * 0.85).toFixed(2);
      rects.push(
        <rect key={`${c}-${r}`} x={c * (cell + gap)} y={r * (cell + gap)}
          width={cell} height={cell} rx="2" fill="var(--accent)" opacity={op} />
      );
    }
  }
  return (
    <svg className="spectro" viewBox={`0 0 ${w} ${h}`} role="img"
      aria-label="Stylized spectrogram of a voice sample">
      {rects}
    </svg>
  );
}

export default function PhD() {
  return (
    <main className="portfolio">
      <div className="wrap">
        <Link href="/" className="back">← Yara</Link>

        <p className="eyebrow">PhD Research</p>
        <h1>Voice biomarkers for liver disease</h1>
        <p className="lead">
          Detecting minimal hepatic encephalopathy in cirrhotic patients from voice alone —
          a paralinguistic biomarker problem on real clinical audio.
        </p>
        <div className="meta-row">
          <span>Sorbonne University · ISIR</span>
          <span>2024 — present</span>
          <span>Python · PyTorch · wav2vec · HuBERT</span>
        </div>

        <Spectrogram />

        <div className="prose">
          <h2 className="h2">The problem</h2>
          <p>
            Minimal hepatic encephalopathy is an early, subtle decline that&apos;s hard to catch
            with standard tests. Some of its signs show up in how people speak — timing, articulation,
            and other vocal cues — which makes voice a promising, low-burden way to screen for it.
          </p>

          <h2 className="h2">What I built</h2>
          <p>
            I designed automated speech-signal analysis methods that work on raw clinical recordings.
            That meant building an end-to-end pipeline — cleaning, normalization, and feature extraction —
            to turn messy clinical audio into something a model can learn from, then training a
            machine-learning baseline that reaches 80% diagnostic accuracy.
          </p>

          <div className="pipeline">
            <span className="stage">Clinical audio</span>
            <span className="arrow">→</span>
            <span className="stage">Clean &amp; normalize</span>
            <span className="arrow">→</span>
            <span className="stage">Feature extraction</span>
            <span className="arrow">→</span>
            <span className="stage">Machine Learning Classifier</span>
            <span className="arrow">→</span>
            <span className="stage">Diagnosis</span>
          </div>

          <h2 className="h2">Results</h2>
          <div className="stats">
            <div className="stat">
              <div className="stat-num">80%</div>
              <div className="stat-label">Diagnostic accuracy (baseline)</div>
            </div>
            <div className="stat">
              <div className="stat-num">Real</div>
              <div className="stat-label">Clinical patient audio</div>
            </div>
          </div>
          <p>
            The baseline uses self-supervised audio models (wav2vec, HuBERT) on top of the pipeline.
      
          </p>
        </div>

        <footer className="footer">
          <span><Link href="/">← Back to home</Link></span>
          <span className="sign">Yara</span>
        </footer>
      </div>
    </main>
  );
}
