// src/app/components/Header.js
'use client'

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Karka 808</Link>
      </div>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link href="/beats">Beats</Link>
        <Link href="/kits">Kits</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="header-buttons">
        <button className="sign-in-button">Sign In</button>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Unicode character for a hamburger menu */}
      </div>
    </header>
  );
}
