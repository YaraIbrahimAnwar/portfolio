// COMPUTER VISION PAGE — save as: app/vision/page.jsx
import Link from "next/link";

export const metadata = { title: "Bile-duct MRI segmentation — Yara Ibrahim Anwar Ahmed" };

export default function Vision() {
  return (
    <main className="portfolio">
      <div className="wrap">
        <Link href="/" className="back">← Yara</Link>

        <p className="eyebrow">Research Internship</p>
        <h1>Bile-duct MRI segmentation</h1>
        <p className="lead">
          Deep learning for medical image segmentation — turning complex MRI scans into
          precise, validated contours, with a tool clinicians can run themselves.
        </p>
        <div className="meta-row">
          <span>Sorbonne University · ISIR</span>
          <span>Feb — Jul 2024</span>
          <span>PyTorch · TensorFlow · OpenCV · 3D Slicer</span>
        </div>

        {/* You HAVE real images for this one — drop them in public/ and swap them in. */}
        <div className="figure"><img src="/vision.png" alt="Bile-duct MRI segmentation result" /></div>
        <p className="figcaption">
          Predicted contour with a side-by-side of the ground truth.
        </p>

        <div className="stats">
          <div className="stat"><div className="stat-num">0.98</div><div className="stat-label">Dice coefficient</div></div>
          <div className="stat"><div className="stat-num">88%</div><div className="stat-label">Recall on held-out data</div></div>
          <div className="stat"><div className="stat-num">689</div><div className="stat-label">Annotated MRI images</div></div>
        </div>

        <div className="prose">
          <h2 className="h2">The model</h2>
          <p>
            I implemented and trained a hybrid Residual U-Net for bile-duct segmentation on MRI,
            reaching a 0.98 Dice coefficient and 88% recall on complex held-out data.
          </p>

          <h2 className="h2">The data</h2>
          <p>
            Good models need good ground truth, so I built an annotated database of 689 MRI images
            plus a denoising and preprocessing pipeline that measurably improved accuracy — up to
            0.91 Dice with a region-growing baseline before the deep model even came in.
          </p>

          <h2 className="h2">The tool</h2>
          <p>
            To make the work usable, I built an interactive 3D Slicer extension with eight core
            functions — including noise reduction and automatic contour validation on mouse release —
            which eliminated manual contour-validation steps and streamlined the whole segmentation
            workflow for the people actually using it.
          </p>

          <div className="figure"><img src="/seg_manuelle.png" alt="3D Slicer extension interface" /></div>
          <p className="figcaption">A screenshot of the extension in action works well here.</p>
        </div>

        <footer className="footer">
          <span><Link href="/">← Back to home</Link></span>
          <span className="sign">Yara</span>
        </footer>
      </div>
    </main>
  );
}
