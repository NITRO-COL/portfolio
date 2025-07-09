

import React from "react";

const navItems = [
  { label: "Home", icon: "home", href: "#home" },
  { label: "About", icon: "user", href: "#about" },
  { label: "Projects", icon: "code", href: "#projects" },
  { label: "Contact", icon: "mail", href: "#contact" },
  { label: "LinkedIn", icon: "linkedin", href: "https://linkedin.com", external: true },
  { label: "Github", icon: "github", href: "https://github.com", external: true },
];

const icons = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
      <path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" />
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2z" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
      <path d="M10 9.5 8 12l2 2.5" />
      <path d="m14 9.5 2 2.5-2 2.5" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5">
      <path d="M100.28 448H7.4V148.9h92.88zm-46.49-341a53.79 53.79 0 1 
      1 53.79-53.8 53.79 53.79 0 0 1-53.79 53.8zM447.9 
      448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 
      0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 
      42.69-48.3 87.88-48.3 94 0 111.28 61.9 
      111.28 142.3V448z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
      <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
    </svg>
  ),
};

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 pt-6 z-50 text-neutral-100 text-base bg-gradient-to-b from-neutral-950 via-neutral-950/70 to-transparent">
  <ul className="flex gap-4 md:gap-6 w-fit mx-auto bg-neutral-950 border border-neutral-600 rounded-full px-6 py-3">

        {navItems.map(({ label, icon, href, external }) => (
          <li key={label} className="relative group cursor-pointer">
            {external ? (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {icons[icon]}
              </a>
            ) : (
              <a href={href}>{icons[icon]}</a>
            )}
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2 py-1 bg-white text-neutral-900 text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
