import { expertise } from '../data/portfolio';
import Icon from './Icon';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="section alt" aria-labelledby="skills-title">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Expertise</p>
          <h2 id="skills-title">What I work with.</h2>
          <p className="section-sub">Grouped by depth: core professional strengths, hands-on areas I’m actively building, and everyday practices.</p>
        </Reveal>
        <ul className="bento">
          {expertise.map((c, i) => (
            <Reveal as="li" key={c.title} delay={(i % 3) * 80}
              className={`bento-card ${c.size ?? ''} tier-${c.tier.split(' ')[0].toLowerCase()}`}>
              <div className="bento-top">
                <span className="icon-chip"><Icon name={c.icon} /></span>
                <span className="tier">{c.tier}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.summary}</p>
              <ul className="tags">
                {c.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
