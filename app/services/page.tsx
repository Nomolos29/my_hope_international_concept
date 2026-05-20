import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | MYHOPE INTERNATIONAL CONCEPTS LTD",
  description: "Construction, Renewable Energy, and Printing & Branding services by MYHOPE INTERNATIONAL CONCEPTS LTD.",
};

const construction = [
  { icon:"🏗️", title:"Building Contracting", desc:"Full-scale residential and commercial building projects, from foundation to finishing." },
  { icon:"🔨", title:"Renovation & Maintenance", desc:"Structural renovations, interior upgrades, and ongoing facility maintenance." },
  { icon:"🏢", title:"Facility Management", desc:"Comprehensive management of buildings and infrastructure for optimal performance." },
  { icon:"📐", title:"Project Planning", desc:"Detailed project scoping, budgeting, and timeline management for all builds." },
];

const energy = [
  { icon:"☀️", title:"Solar System Installation", desc:"Design and installation of residential and commercial solar power systems." },
  { icon:"🔋", title:"Inverters & Backup Systems", desc:"Reliable inverter and battery backup solutions for uninterrupted power supply." },
  { icon:"💡", title:"Electrical Fittings & Lighting", desc:"Professional electrical installations, wiring, and energy-efficient lighting systems." },
  { icon:"🌿", title:"Energy Consulting", desc:"Expert advice on reducing energy costs and transitioning to clean power." },
];

const printing = [
  { icon:"🎨", title:"Graphic Design Services", desc:"Professional logos, brand identities, layouts, and visual communication materials." },
  { icon:"🖨️", title:"Offset & Digital Printing", desc:"High-quality printing for all volumes — from small runs to large-scale production." },
  { icon:"📦", title:"Packaging Production", desc:"Custom packaging design and production for products and corporate gifts." },
  { icon:"🏷️", title:"Corporate Branding", desc:"Branded stationery, uniforms, signage, and complete corporate identity kits." },
  { icon:"📄", title:"Flyers, Posters & Brochures", desc:"Eye-catching marketing materials designed to communicate your message clearly." },
  { icon:"🎌", title:"Banners & Outdoor Media", desc:"Large-format banners, roll-ups, and outdoor advertising materials." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background:"var(--navy)", padding:"96px 24px 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:-80, right:-80, width:480, height:480, borderRadius:"50%", background:"radial-gradient(circle,rgba(45,125,111,0.15) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div className="pill hero-badge" style={{ background:"rgba(45,125,111,0.18)", color:"#7dd3c8", border:"1px solid rgba(45,125,111,0.3)", marginBottom:22 }}>Our Services</div>
          <h1 className="hero-title" style={{ fontSize:"clamp(2.4rem,5vw,3.8rem)", fontWeight:900, color:"#fff", lineHeight:1.08, letterSpacing:-2, maxWidth:680, marginBottom:18 }}>
            Three Sectors.<br />
            <span className="gradient-text">Endless Possibilities.</span>
          </h1>
          <p className="hero-sub" style={{ color:"#a8b8c8", fontSize:17, lineHeight:1.8, maxWidth:500, marginBottom:36 }}>
            From building structures to powering communities and crafting brands — end-to-end solutions with professionalism and precision.
          </p>
          <div className="hero-cta" style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
            {[
              { href:"#construction", label:"🏗️ Construction", bg:"rgba(45,125,111,0.2)", border:"rgba(45,125,111,0.4)" },
              { href:"#energy", label:"⚡ Renewable Energy", bg:"rgba(58,158,141,0.2)", border:"rgba(58,158,141,0.4)" },
              { href:"#printing", label:"🎨 Printing & Branding", bg:"rgba(201,150,58,0.2)", border:"rgba(201,150,58,0.4)" },
            ].map((j) => (
              <a key={j.href} href={j.href} style={{ padding:"9px 18px", background:j.bg, color:"#fff", borderRadius:8, fontSize:13, fontWeight:700, textDecoration:"none", border:`1px solid ${j.border}`, transition:"all 0.2s" }}>
                {j.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSTRUCTION ── */}
      <section id="construction" style={{ padding:"96px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center", marginBottom:64 }} className="grid-2col">
            <div className="reveal-left">
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"var(--primary-bg)", color:"var(--primary)", padding:"5px 14px", borderRadius:100, fontSize:11, fontWeight:800, letterSpacing:1.5, textTransform:"uppercase", marginBottom:18 }}>Division 01</div>
              <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, lineHeight:1.1, letterSpacing:-1, marginBottom:18 }}>
                Construction<br /><span style={{ color:"var(--primary)" }}>Services</span>
              </h2>
              <p style={{ color:"var(--muted)", lineHeight:1.85, fontSize:15, marginBottom:26 }}>
                We deliver durable, code-compliant construction projects — from residential buildings to large-scale commercial facilities across Nigeria. Every project is managed with precision, accountability, and a commitment to quality.
              </p>
              <Link href="/contact" className="btn btn-primary">Request a Quote →</Link>
            </div>
            <div className="reveal-right" style={{ position:"relative", height:340 }}>
              <div style={{ position:"absolute", inset:0, borderRadius:18, overflow:"hidden", boxShadow:"0 16px 48px rgba(0,0,0,0.18)" }}>
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Construction workers" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                <div style={{ position:"absolute", inset:0, background:"rgba(26,26,46,0.3)" }} />
              </div>
              <div style={{ position:"absolute", bottom:-18, left:-18, background:"var(--primary)", borderRadius:12, padding:"14px 18px", color:"#fff", boxShadow:"0 14px 36px rgba(45,125,111,0.4)", zIndex:2 }}>
                <div style={{ fontSize:20, fontWeight:900 }}>Build</div>
                <div style={{ fontSize:11, opacity:0.85 }}>Quality Structures</div>
              </div>
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:18 }} className="grid-4col">
            {construction.map((s, i) => (
              <div key={s.title} className={`reveal hover-lift delay-${i + 1}`} style={{ background:"#f7faf9", borderRadius:14, padding:"24px 20px", border:"1px solid var(--border)", borderTop:"3px solid var(--primary)" }}>
                <div style={{ fontSize:28, marginBottom:13 }}>{s.icon}</div>
                <h4 style={{ fontWeight:800, fontSize:14, marginBottom:7 }}>{s.title}</h4>
                <p style={{ fontSize:13, color:"var(--muted)", lineHeight:1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENERGY ── */}
      <section id="energy" style={{ padding:"96px 24px", background:"var(--navy)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }} />
        <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center", marginBottom:64 }} className="grid-2col">
            <div className="reveal-left" style={{ position:"relative", height:340 }}>
              <div style={{ position:"absolute", inset:0, borderRadius:18, overflow:"hidden", boxShadow:"0 16px 48px rgba(0,0,0,0.25)" }}>
                <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80" alt="Solar panels installation" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                <div style={{ position:"absolute", inset:0, background:"rgba(31,92,82,0.35)" }} />
              </div>
              <div style={{ position:"absolute", bottom:-18, right:-18, background:"var(--primary-light)", borderRadius:12, padding:"14px 18px", color:"#fff", boxShadow:"0 14px 36px rgba(58,158,141,0.4)", zIndex:2 }}>
                <div style={{ fontSize:20, fontWeight:900 }}>Power</div>
                <div style={{ fontSize:11, opacity:0.85 }}>Clean Energy</div>
              </div>
            </div>
            <div className="reveal-right">
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(58,158,141,0.18)", color:"#7dd3c8", padding:"5px 14px", borderRadius:100, fontSize:11, fontWeight:800, letterSpacing:1.5, textTransform:"uppercase", marginBottom:18 }}>Division 02</div>
              <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, lineHeight:1.1, letterSpacing:-1, color:"#fff", marginBottom:18 }}>
                Renewable<br /><span style={{ color:"#7dd3c8" }}>Energy Solutions</span>
              </h2>
              <p style={{ color:"#a8b8c8", lineHeight:1.85, fontSize:15, marginBottom:26 }}>
                Powering homes, businesses, and institutions with clean, reliable, and cost-effective energy systems tailored to Nigerian conditions.
              </p>
              <Link href="/contact" className="btn btn-primary">Get a Solar Quote →</Link>
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:18 }} className="grid-4col">
            {energy.map((s, i) => (
              <div key={s.title} className={`reveal hover-lift delay-${i + 1}`} style={{ background:"rgba(255,255,255,0.05)", borderRadius:14, padding:"24px 20px", border:"1px solid rgba(255,255,255,0.08)", borderTop:"3px solid var(--primary-light)" }}>
                <div style={{ fontSize:28, marginBottom:13 }}>{s.icon}</div>
                <h4 style={{ fontWeight:800, fontSize:14, marginBottom:7, color:"#fff" }}>{s.title}</h4>
                <p style={{ fontSize:13, color:"#a8b8c8", lineHeight:1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINTING ── */}
      <section id="printing" style={{ padding:"96px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center", marginBottom:64 }} className="grid-2col">
            <div className="reveal-left">
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#fdf4e7", color:"var(--accent)", padding:"5px 14px", borderRadius:100, fontSize:11, fontWeight:800, letterSpacing:1.5, textTransform:"uppercase", marginBottom:18 }}>Division 03 · IB Super Designs</div>
              <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, lineHeight:1.1, letterSpacing:-1, marginBottom:18 }}>
                Printing &<br /><span style={{ color:"var(--accent)" }}>Branding</span>
              </h2>
              <p style={{ color:"var(--muted)", lineHeight:1.85, fontSize:15, marginBottom:26 }}>
                IB Super Designs Company is our creative powerhouse — delivering world-class graphic design, professional printing, packaging, and complete corporate branding solutions.
              </p>
              <Link href="/contact" className="btn btn-gold">Start a Design Project →</Link>
            </div>
            <div className="reveal-right" style={{ position:"relative", height:340 }}>
              <div style={{ position:"absolute", inset:0, borderRadius:18, overflow:"hidden", boxShadow:"0 16px 48px rgba(0,0,0,0.18)" }}>
                <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80" alt="Graphic design branding" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                <div style={{ position:"absolute", inset:0, background:"rgba(201,150,58,0.3)" }} />
              </div>
              <div style={{ position:"absolute", bottom:-18, left:-18, background:"var(--accent)", borderRadius:12, padding:"14px 18px", color:"#fff", boxShadow:"0 14px 36px rgba(201,150,58,0.4)", zIndex:2 }}>
                <div style={{ fontSize:20, fontWeight:900 }}>Design</div>
                <div style={{ fontSize:11, opacity:0.85 }}>Brand Identity</div>
              </div>
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18 }} className="grid-3col">
            {printing.map((s, i) => (
              <div key={s.title} className={`reveal hover-lift delay-${i % 3 + 1}`} style={{ background:"#f7faf9", borderRadius:14, padding:"24px 20px", border:"1px solid var(--border)", borderTop:"3px solid var(--accent)" }}>
                <div style={{ fontSize:28, marginBottom:13 }}>{s.icon}</div>
                <h4 style={{ fontWeight:800, fontSize:14, marginBottom:7 }}>{s.title}</h4>
                <p style={{ fontSize:13, color:"var(--muted)", lineHeight:1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"var(--navy)", padding:"96px 24px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-100, right:-100, width:480, height:480, borderRadius:"50%", background:"radial-gradient(circle,rgba(45,125,111,0.18) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div className="reveal" style={{ maxWidth:620, margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
          <h2 style={{ fontSize:"clamp(2rem,4vw,2.8rem)", fontWeight:900, color:"#fff", letterSpacing:-1, marginBottom:18 }}>Need a Custom Quote?</h2>
          <p style={{ color:"#a8b8c8", fontSize:16, lineHeight:1.8, marginBottom:40 }}>
            Tell us about your project and we'll provide a detailed proposal tailored to your needs and budget.
          </p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/contact" className="btn btn-primary" style={{ fontSize:15, padding:"14px 34px" }}>Request a Quote →</Link>
            <Link href="/about" className="btn btn-outline" style={{ fontSize:15, padding:"14px 34px" }}>About Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
