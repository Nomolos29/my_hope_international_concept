import Link from "next/link";

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background:"#111122", color:"#94a3b8" }}>
      <div style={{ height:3, background:"linear-gradient(90deg,var(--primary),var(--accent),var(--primary-light))" }} />

      <div style={{ maxWidth:1200, margin:"0 auto", padding:"60px 24px 36px", display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1.4fr", gap:44 }} className="footer-grid">

        {/* Brand */}
        <div>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:18 }}>
            <div style={{ width:38, height:38, background:"linear-gradient(135deg,var(--primary),var(--primary-dark))", borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ color:"#fff", fontWeight:900, fontSize:15 }}>MH</span>
            </div>
            <div>
              <div style={{ color:"#fff", fontWeight:900, fontSize:13, letterSpacing:0.3 }}>MYHOPE INTERNATIONAL</div>
              <div style={{ fontSize:10, color:"#475569", letterSpacing:0.8, textTransform:"uppercase" }}>Concepts Ltd</div>
            </div>
          </div>
          <p style={{ fontSize:13, lineHeight:1.8, color:"#64748b", maxWidth:250, marginBottom:22 }}>
            Building trust through quality construction, clean energy, and creative branding solutions across Nigeria.
          </p>
          <div style={{ display:"flex", gap:8 }}>
            {[
              { label:"Facebook", Icon:FacebookIcon, bg:"#1877f2" },
              { label:"Instagram", Icon:InstagramIcon, bg:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" },
              { label:"LinkedIn", Icon:LinkedInIcon, bg:"#0a66c2" },
              { label:"Twitter", Icon:TwitterIcon, bg:"#000" },
            ].map(({ label, Icon, bg }) => (
              <a key={label} href="#" aria-label={label} style={{ width:34, height:34, borderRadius:8, background:bg, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", textDecoration:"none", opacity:0.88 }}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color:"#fff", fontWeight:800, fontSize:12, marginBottom:18, letterSpacing:1.5, textTransform:"uppercase" }}>Quick Links</h4>
          <ul style={{ listStyle:"none" }}>
            {[{ href:"/", label:"Home" },{ href:"/about", label:"About Us" },{ href:"/services", label:"Services" },{ href:"/contact", label:"Contact" }].map((l) => (
              <li key={l.href} style={{ marginBottom:10 }}>
                <Link href={l.href} style={{ color:"#64748b", textDecoration:"none", fontSize:14 }}>→ {l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ color:"#fff", fontWeight:800, fontSize:12, marginBottom:18, letterSpacing:1.5, textTransform:"uppercase" }}>Services</h4>
          <ul style={{ listStyle:"none" }}>
            {["Construction","Renewable Energy","Printing & Branding","IB Super Designs"].map((s) => (
              <li key={s} style={{ marginBottom:10, color:"#64748b", fontSize:14 }}>→ {s}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color:"#fff", fontWeight:800, fontSize:12, marginBottom:18, letterSpacing:1.5, textTransform:"uppercase" }}>Contact</h4>
          <div style={{ fontSize:13, lineHeight:2.2, color:"#64748b" }}>
            <div>📍 Nigeria</div>
            <div>📞 +234 800 000 0000</div>
            <div>✉️ info@myhopeconcepts.com</div>
          </div>
          <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:8, marginTop:14, padding:"9px 16px", background:"#16a34a", color:"#fff", borderRadius:8, fontSize:13, fontWeight:700, textDecoration:"none" }}>
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      <div style={{ borderTop:"1px solid #1a1a33", maxWidth:1200, margin:"0 auto", padding:"18px 24px", display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:12 }}>
        <p style={{ fontSize:12, color:"#334155" }}>© {new Date().getFullYear()} MYHOPE INTERNATIONAL CONCEPTS LTD. All rights reserved.</p>
        <div style={{ display:"flex", gap:20 }}>
          <Link href="/privacy" style={{ fontSize:12, color:"#334155", textDecoration:"none" }}>Privacy Policy</Link>
          <Link href="/terms" style={{ fontSize:12, color:"#334155", textDecoration:"none" }}>Terms & Conditions</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 500px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
