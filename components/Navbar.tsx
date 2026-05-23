"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href:"/", label:"Home" },
  { href:"/about", label:"About" },
  { href:"/services", label:"Services" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position:"sticky", top:0, zIndex:100,
      background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(238, 238, 238, 0.96)",
      backdropFilter:"blur(12px)",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid rgba(255,255,255,0.07)",
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.07)" : "none",
      transition:"all 0.3s ease",
    }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px", height:68, display:"flex", alignItems:"center", justifyContent:"space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:10 }}>
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={32}
            className="object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display:"flex", gap:4, alignItems:"center" }} className="desktop-nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{
              padding:"8px 16px", borderRadius:8, fontSize:14,
              fontWeight: pathname === l.href ? 700 : 500,
              color: pathname === l.href
                ? (scrolled ? "var(--primary)" : "#7dd3c8")
                : (scrolled ? "var(--fg)" : "var(--fg)"),
              // background: pathname === l.href
              //   ? (scrolled ? "var(--primary-bg)" : "rgba(255,255,255,0.09)")
              //   : "transparent",
              textDecoration:"none", transition:"all 0.2s",
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" style={{
            marginLeft:8, padding:"9px 20px",
            background:"var(--primary)", color:"#fff",
            borderRadius:8, fontSize:14, fontWeight:700,
            textDecoration:"none", transition:"all 0.2s",
          }}>
            Get in Touch
          </Link>
        </nav>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" style={{ display:"none", background:"none", border:"none", cursor:"pointer", padding:6, flexDirection:"column", gap:5 }} className="hamburger">
          {[0,1,2].map((i) => (
            <div key={i} style={{ width:24, height:2, background: scrolled ? "var(--fg)" : "#fff", borderRadius:2, transition:"all 0.2s" }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background:"#fff", borderTop:"1px solid var(--border)", padding:"16px 24px 24px" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display:"block", padding:"13px 0", fontSize:15,
              fontWeight: pathname === l.href ? 800 : 500,
              color: pathname === l.href ? "var(--primary)" : "var(--fg)",
              textDecoration:"none", borderBottom:"1px solid var(--border)",
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} style={{
            display:"block", marginTop:16, padding:"13px 0", textAlign:"center",
            background:"var(--primary)", color:"#fff", borderRadius:8,
            fontWeight:700, textDecoration:"none",
          }}>
            Get in Touch
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
