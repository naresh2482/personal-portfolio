import { confidentialityNote, currentDirection, experience } from '../data/portfolio';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="exp-title">
      <div className="container narrow">
        <Reveal>
          <p className="section-kicker">Experience</p>
          <h2 id="exp-title">Professional experience.</h2>
        </Reveal>
        <ol className="timeline">
          <Reveal as="li" className="tl-item">
            <span className="tl-dot now" aria-hidden="true" />
            <div className="tl-card now">
              <h3>{currentDirection.title}</h3>
              <p>{currentDirection.body}</p>
            </div>
          </Reveal>
          {experience.map((e) => (
            <Reveal as="li" key={e.company} className="tl-item">
              <span className="tl-dot" aria-hidden="true" />
              <div className="tl-card">
                <p className="tl-period">{e.period}</p>
                <h3>{e.role ?? e.company}</h3>
                {e.role && <p className="company">{e.company}</p>}
                {e.context && <p>{e.context}</p>}
                <ul className="list">
                  {e.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
        <p className="muted small">{confidentialityNote}</p>
      </div>
    </section>
  );
}
