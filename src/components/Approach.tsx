import { approach } from '../data/portfolio';
import Reveal from './Reveal';

export default function Approach() {
  return (
    <section id="approach" className="section" aria-labelledby="approach-title">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Engineering approach</p>
          <h2 id="approach-title">How I build.</h2>
        </Reveal>
        <ol className="steps">
          {approach.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 100} className="step">
              <span className="step-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
