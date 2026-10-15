import { education } from '../data/portfolio';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section id="education" className="section edu" aria-labelledby="edu-title">
      <div className="container narrow">
        <Reveal>
          <p className="section-kicker">Education</p>
          <h2 id="edu-title">Education.</h2>
        </Reveal>
        <ul className="edu-grid">
          {education.map((e, i) => (
            <Reveal as="li" key={e.qualification} delay={i * 80} className="edu-card">
              <span className="edu-year">{e.year}</span>
              <h3>{e.qualification}</h3>
              <p>{e.institution}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
