import Link from "next/link";

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
              { label:"Facebook", icon:"f", bg:"#1877f2" },
              { label:"Instagram", icon:"ig", bg:"#e1306c" },
              { label:"LinkedIn", icon:"in", bg:"#0a66c2" },
              { label:"Twitter", icon:"𝕏", bg:"#1a1a1a" },
            ].map((s) => (
              <a key={s.label} href="#" aria-label={s.label} style={{ width:34, height:34, borderRadius:8, background:s.bg, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:11, fontWeight:800, textDecoration:"none", opacity:0.85 }}>
                {s.icon}
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
