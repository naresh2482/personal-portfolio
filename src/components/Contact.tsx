import { contact } from '../data/portfolio';
import Reveal from './Reveal';

export default function Contact() {
  const items = [
    { label: 'GitHub', href: contact.github, text: contact.github.replace('https://', ''), external: true },
    contact.linkedin && { label: 'LinkedIn', href: contact.linkedin, text: contact.linkedin.replace(/^https?:\/\//, ''), external: true },
    contact.email && { label: 'Email', href: `mailto:${contact.email}`, text: contact.email, external: false },
    contact.resumePath && { label: 'Resume', href: contact.resumePath, text: 'Download PDF', external: false },
  ].filter(Boolean) as { label: string; href: string; text: string; external: boolean }[];

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact-panel">
          <p className="section-kicker">Contact</p>
          <h2 id="contact-title">{contact.headline}</h2>
          <ul className="contact-list">
            {items.map((i) => (
              <li key={i.label}>
                <a className="btn" href={i.href}
                  {...(i.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <span className="contact-label">{i.label}</span>
                  <span>{i.text}</span>
                  {i.external && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
