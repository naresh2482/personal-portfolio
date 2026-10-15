import { about } from '../data/portfolio';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <p className="section-kicker">About</p>
          <h2 id="about-title">Solving the problems that live between systems.</h2>
        </Reveal>
        <div className="about-grid">
          {about.map((p, i) => (
            <Reveal key={p} delay={i * 100}><p className="about-p">{p}</p></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
