import { useEffect, useState } from 'react';
import { contact, profile } from '../data/portfolio';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
const watched = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'approach', 'contact'];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === 'approach' ? 'projects' : e.target.id === 'education' ? 'experience' : e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    watched.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#home" onClick={close}>
          <span className="brand-mark" aria-hidden="true">NM</span>
          {profile.name}
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="primary-nav" aria-label="Primary" className={open ? 'nav open' : 'nav'}>
          <ul>
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={active === l.id ? 'active' : undefined}
                  aria-current={active === l.id ? 'true' : undefined}
                  onClick={close}
                >
                  {l.label}
                </a>
              </li>
            ))}
            {contact.resumePath && (
              <li>
                <a className="btn btn-small" href={contact.resumePath} download onClick={close}>
                  Download Resume
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
