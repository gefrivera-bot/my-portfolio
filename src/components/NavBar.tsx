const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function NavBar() {
  return (
    <nav className="nav-shell">
      <div className="nav-brand">Gerard Ethan Francis Rivera</div>
      <div className="nav-links">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`}>
            {link.label}
          </a>
        ))}
      </div>
      <a className="nav-action" href="#contact">
        RESUME
      </a>
    </nav>
  );
}
