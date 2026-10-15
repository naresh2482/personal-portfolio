import { useState } from 'react';
import { featuredProject as p } from '../data/portfolio';
import Icon from './Icon';
import Reveal from './Reveal';

/** Renders only once the image file actually loads, so a missing screenshot leaves no empty frame. */
function Screenshot({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(false);
  return (
    <figure className="shot" hidden={!ok}>
      <div className="shot-bar" aria-hidden="true"><span /><span /><span /></div>
      <img src={src} alt={alt} onLoad={() => setOk(true)} onError={() => setOk(false)} />
    </figure>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section alt" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Featured project</p>
          <h2 id="projects-title">{p.title}</h2>
          <p className="section-sub">{p.subtitle}</p>
        </Reveal>

        <Reveal className="case">
          <div className="case-head">
            {p.release && <span className="pill">{p.release}</span>}
            <span className="muted small">{p.status}</span>
          </div>

          {p.screenshot && <Screenshot {...p.screenshot} />}

          <div className="case-grid">
            <div>
              <h3 className="label">Problem</h3>
              <p>{p.problem}</p>
            </div>
            <div>
              <h3 className="label">Solution</h3>
              <p>{p.solution}</p>
            </div>
          </div>

          <h3 className="label">Architecture flow</h3>
          <ol className="flow" aria-label="Request flow from the React UI to the local model and back">
            {p.architecture.map((stage, i) => (
              <li key={stage.layer} className={`flow-stage ${i === 2 ? 'ai' : ''}`}>
                <p className="flow-layer">{stage.layer}</p>
                <ul>
                  {stage.steps.map((s) => (
                    <li key={s.name}>
                      <strong>{s.name}</strong>
                      {s.detail && <span>{s.detail}</span>}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <h3 className="label">Engineering highlights</h3>
          <ul className="hl-grid">
            {p.highlights.map((h) => (
              <li key={h.title} className="hl">
                <span className="icon-chip"><Icon name={h.icon} /></span>
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.detail}</p>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="label">Stack</h3>
          <ul className="tags">
            {p.stack.map((s) => <li key={s}>{s}</li>)}
          </ul>

          <p className="caveat"><strong>Caveats:</strong> {p.caveats} It is not production-ready.</p>

          <div className="cta-row">
            <a className="btn btn-primary" href={p.repoUrl} target="_blank" rel="noopener noreferrer">
              View Source on GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
            {p.releaseUrl && (
              <a className="btn" href={p.releaseUrl} target="_blank" rel="noopener noreferrer">
                Releases<span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
