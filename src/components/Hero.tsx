import { contact, profile, highlights } from '../data/portfolio';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="dot" aria-hidden="true" />{profile.eyebrow}</p>
          <h1 id="hero-title">
            <span className="hero-name">{profile.name}</span>
            <span className="gradient-text">{profile.headline}</span>
          </h1>
          <p className="lead">{profile.intro}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#projects">Explore Projects</a>
            <a className="btn" href={contact.github} target="_blank" rel="noopener noreferrer">
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
            {contact.resumePath && (
              <a className="btn" href={contact.resumePath} download>Resume</a>
            )}
          </div>
          {profile.location && <p className="location">{profile.location}</p>}
        </div>
        <HeroVisual />
      </div>
      <div className="container">
        <ul className="stat-strip" aria-label="Experience highlights">
          {highlights.map((h) => (
            <li key={h.label}><strong>{h.value}</strong><span>{h.label}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
