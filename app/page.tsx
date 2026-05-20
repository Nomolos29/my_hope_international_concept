import Link from "next/link";

const services = [
  {
    num: "01", icon: "🏗️", title: "Construction", sub: "Services",
    desc: "Building contracting, renovation, facility management — delivered with precision across Nigeria.",
    bg: "linear-gradient(135deg,#1f5c52,#2d7d6f)", tag: "Build",
  },
  {
    num: "02", icon: "⚡", title: "Renewable", sub: "Energy",
    desc: "Solar systems, inverters, electrical fittings — clean power solutions for every scale.",
    bg: "linear-gradient(135deg,#2d7d6f,#3a9e8d)", tag: "Power",
  },
  {
    num: "03", icon: "🎨", title: "Printing &", sub: "Branding",
    desc: "IB Super Designs — graphic design, offset printing, packaging, and corporate identity.",
    bg: "linear-gradient(135deg,#c9963a,#e0b060)", tag: "Design",
  },
];

const stats = [
  { value: "CAC", label: "Registered" },
  { value: "3", label: "Divisions" },
  { value: "100%", label: "Committed" },
  { value: "NG", label: "Nationwide" },
];

const ticker = ["Construction Services","Renewable Energy","Printing & Branding","IB Super Designs","CAC Registered","Nationwide Reach","Solar Installation","Corporate Branding"];

const whyUs = [
  { icon: "🏛️", title: "Legally Registered", desc: "CAC-certified and fully compliant with Nigerian corporate law.", color: "var(--primary-bg)", accent: "var(--primary)" },
  { icon: "🤝", title: "Trusted Partnerships", desc: "Built on integrity, transparency, and long-term relationships.", color: "#fdf4e7", accent: "var(--accent)" },
  { icon: "🔧", title: "End-to-End Delivery", desc: "From concept to completion — we manage every project detail.", color: "var(--primary-bg)", accent: "var(--primary)" },
  { icon: "🌱", title: "Sustainable Focus", desc: "Committed to clean energy and environmentally responsible practices.", color: "#fdf4e7", accent: "var(--accent)" },
];

export default function HomePage() {
  const tickerText = [...ticker, ...ticker].join("  ·  ");

  return (
    <>
      {/* ══ HERO ══ */}
      <section style={{ background:"var(--navy)", minHeight:"92vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden", paddingBottom:80 }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:-120, right:-80, width:560, height:560, borderRadius:"50%", background:"radial-gradient(circle,rgba(45,125,111,0.2) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:-80, left:-60, width:380, height:380, borderRadius:"50%", background:"radial-gradient(circle,rgba(201,150,58,0.12) 0%,transparent 70%)", pointerEvents:"none" }} />

        <div style={{ maxWidth:1200, margin:"0 auto", padding:"80px 24px 0", width:"100%", position:"relative", zIndex:1 }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center" }} className="grid-2col">

            {/* Left */}
            <div>
              <div className="hero-badge pill" style={{ background:"rgba(45,125,111,0.18)", color:"#7dd3c8", border:"1px solid rgba(45,125,111,0.35)", marginBottom:28 }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:"#6ee7b7", display:"inline-block" }} />
                CAC Registered · Nigeria
              </div>

              <h1 className="hero-title" style={{ fontSize:"clamp(2.4rem,5vw,4rem)", fontWeight:900, lineHeight:1.08, color:"#fff", letterSpacing:-2, marginBottom:24 }}>
                We Build.{" "}
                <span className="gradient-text">We Power.</span>
                <br />
                We <span style={{ color:"var(--accent)" }}>Design.</span>
              </h1>

              <p className="hero-sub" style={{ fontSize:17, color:"#a8b8c8", lineHeight:1.8, maxWidth:460, marginBottom:40 }}>
                MYHOPE INTERNATIONAL CONCEPTS LTD — a multi-sector Nigerian company delivering excellence in Construction, Renewable Energy, and Creative Branding.
              </p>

              <div className="hero-cta" style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
                <Link href="/services" className="btn btn-primary">Explore Services →</Link>
                <Link href="/contact" className="btn btn-outline">Get in Touch</Link>
              </div>

              <div style={{ display:"flex", gap:32, marginTop:52, paddingTop:32, borderTop:"1px solid rgba(255,255,255,0.08)" }}>
                {stats.map((s) => (
                  <div key={s.label}>
                    <div style={{ fontSize:"1.6rem", fontWeight:900, color:"#fff", lineHeight:1 }}>{s.value}</div>
                    <div style={{ fontSize:11, color:"#64748b", marginTop:3, letterSpacing:0.5 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — three professionals in active service */}
            <div className="hero-visual hide-mobile" style={{ position:"relative", height:500 }}>
              <div style={{ position:"absolute", top:0, right:0, width:"100%", height:"100%", display:"flex", gap:10, alignItems:"flex-end" }}>

                {/* Construction worker / site engineer with hard hat */}
                <div style={{ flex:1, height:"86%", borderRadius:18, overflow:"hidden", position:"relative", boxShadow:"0 24px 56px rgba(0,0,0,0.45)" }}>
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=90&fit=crop&crop=faces,top"
                    alt="Construction engineer with hard hat on site"
                    style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }}
                  />
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(26,26,46,0.9) 0%, rgba(26,26,46,0.2) 45%, transparent 100%)" }} />
                  <div style={{ position:"absolute", bottom:16, left:12, right:12 }}>
                    <div style={{ fontSize:9, fontWeight:800, color:"#7dd3c8", letterSpacing:1.2, textTransform:"uppercase", marginBottom:3 }}>Construction</div>
                    <div style={{ fontSize:13, fontWeight:800, color:"#fff", lineHeight:1.2 }}>Site Engineer</div>
                  </div>
                </div>

                {/* Graphic designer at work with tablet/screen */}
                <div style={{ flex:1, height:"100%", borderRadius:18, overflow:"hidden", position:"relative", boxShadow:"0 24px 56px rgba(0,0,0,0.45)" }}>
                  <img
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=90&fit=crop&crop=faces,top"
                    alt="Graphic designer working on creative project"
                    style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }}
                  />
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(201,150,58,0.88) 0%, rgba(26,26,46,0.05) 48%, transparent 100%)" }} />
                  <div style={{ position:"absolute", bottom:16, left:12, right:12 }}>
                    <div style={{ fontSize:9, fontWeight:800, color:"#fde68a", letterSpacing:1.2, textTransform:"uppercase", marginBottom:3 }}>Branding</div>
                    <div style={{ fontSize:13, fontWeight:800, color:"#fff", lineHeight:1.2 }}>Lead Designer</div>
                  </div>
                </div>

                {/* Solar technician installing panels */}
                <div style={{ flex:1, height:"86%", borderRadius:18, overflow:"hidden", position:"relative", boxShadow:"0 24px 56px rgba(0,0,0,0.45)" }}>
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=90&fit=crop&crop=faces,top"
                    alt="Solar technician installing solar panels"
                    style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }}
                  />
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(45,125,111,0.9) 0%, rgba(26,26,46,0.1) 48%, transparent 100%)" }} />
                  <div style={{ position:"absolute", bottom:16, left:12, right:12 }}>
                    <div style={{ fontSize:9, fontWeight:800, color:"#6ee7b7", letterSpacing:1.2, textTransform:"uppercase", marginBottom:3 }}>Solar Energy</div>
                    <div style={{ fontSize:13, fontWeight:800, color:"#fff", lineHeight:1.2 }}>Field Technician</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TICKER ══ */}
      <div style={{ background:"var(--primary)", padding:"13px 0", overflow:"hidden", whiteSpace:"nowrap" }}>
        <div className="marquee-track" style={{ display:"inline-block", fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.9)", letterSpacing:1.5, textTransform:"uppercase" }}>
          {tickerText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tickerText}
        </div>
      </div>

      {/* ══ SERVICES ══ */}
      <section style={{ padding:"96px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:56, flexWrap:"wrap", gap:20 }}>
            <div className="reveal">
              <div className="section-label" style={{ marginBottom:12 }}>What We Do</div>
              <h2 style={{ fontSize:"clamp(2rem,4vw,2.8rem)", fontWeight:900, lineHeight:1.1, letterSpacing:-1 }}>
                Three Divisions.<br />
                <span className="gradient-text">One Vision.</span>
              </h2>
            </div>
            <div className="reveal delay-2">
              <Link href="/services" className="btn btn-outline-dark">View All Services →</Link>
            </div>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }} className="grid-3col">
            {services.map((s, i) => (
              <div key={s.title} className={`reveal hover-lift delay-${i + 1}`} style={{ background:s.bg, borderRadius:22, padding:"38px 30px", color:"#fff", position:"relative", overflow:"hidden", minHeight:340, display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
                <div style={{ position:"absolute", top:-16, right:-8, fontSize:110, fontWeight:900, opacity:0.07, lineHeight:1, userSelect:"none" }}>{s.num}</div>
                <div>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:28 }}>
                    <div style={{ fontSize:42 }}>{s.icon}</div>
                    <span style={{ fontSize:10, fontWeight:800, letterSpacing:1.5, background:"rgba(255,255,255,0.18)", padding:"4px 12px", borderRadius:100, textTransform:"uppercase" }}>{s.tag}</span>
                  </div>
                  <h3 style={{ fontSize:"clamp(1.3rem,2.5vw,1.8rem)", fontWeight:900, lineHeight:1.1, marginBottom:14 }}>{s.title}<br />{s.sub}</h3>
                  <p style={{ fontSize:14, opacity:0.82, lineHeight:1.75 }}>{s.desc}</p>
                </div>
                <Link href="/services" style={{ display:"inline-flex", alignItems:"center", gap:8, marginTop:28, fontSize:13, fontWeight:700, color:"#fff", background:"rgba(255,255,255,0.15)", padding:"9px 16px", borderRadius:8, textDecoration:"none", width:"fit-content", border:"1px solid rgba(255,255,255,0.22)", transition:"background 0.2s" }}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT SPLIT ══ */}
      <section style={{ background:"#f7faf9", paddingBottom:56 }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr" }} className="grid-2col">
          {/* Left dark */}
          <div style={{ background:"var(--navy)", padding:"96px 56px 96px 40px", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:-60, right:-60, width:280, height:280, borderRadius:"50%", background:"rgba(45,125,111,0.12)", pointerEvents:"none" }} />
            <div className="reveal-left" style={{ position:"relative", zIndex:1 }}>
              <div className="section-label" style={{ color:"#7dd3c8", marginBottom:16 }}>Who We Are</div>
              <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.6rem)", fontWeight:900, color:"#fff", lineHeight:1.15, marginBottom:22, letterSpacing:-0.5 }}>
                A Nigerian Company Built on{" "}
                <span className="gradient-text">Trust & Excellence</span>
              </h2>
              <p style={{ color:"#a8b8c8", lineHeight:1.85, marginBottom:18, fontSize:15 }}>
                MYHOPE INTERNATIONAL CONCEPTS LTD is a CAC-registered multi-sector enterprise operating across Construction, Renewable Energy, and Printing & Branding through our creative arm, IB Super Designs Company.
              </p>
              <p style={{ color:"#a8b8c8", lineHeight:1.85, marginBottom:36, fontSize:15 }}>
                We serve government agencies, NGOs, private corporations, and individuals — bringing accountability and innovation to every project.
              </p>
              <Link href="/about" className="btn btn-primary">Our Story →</Link>
            </div>
          </div>

          {/* Right image + overlapping card */}
          <div style={{ position:"relative", minHeight:480, overflow:"visible" }}>
            <div style={{ position:"absolute", inset:0, overflow:"hidden", borderRadius:0 }}>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Modern office building Nigeria"
                style={{ width:"100%", height:"100%", objectFit:"cover" }}
              />
              <div style={{ position:"absolute", inset:0, background:"rgba(26,26,46,0.35)" }} />
            </div>
            <div className="reveal-right" style={{
              position:"absolute", bottom:-44, left:32,
              background:"#fff", borderRadius:16, padding:"22px 26px",
              boxShadow:"0 20px 56px rgba(0,0,0,0.14)",
              zIndex:10, minWidth:230,
            }}>
              <div style={{ fontSize:11, fontWeight:800, color:"var(--primary)", letterSpacing:1.5, marginBottom:14, textTransform:"uppercase" }}>At a Glance</div>
              {[
                { label:"CAC Registration", val:"Active ✅" },
                { label:"Core Divisions", val:"3 Sectors" },
                { label:"Service Reach", val:"Nationwide" },
              ].map((r) => (
                <div key={r.label} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"9px 0", borderBottom:"1px solid var(--border)" }}>
                  <span style={{ fontSize:13, color:"var(--muted)" }}>{r.label}</span>
                  <span style={{ fontSize:13, fontWeight:700, color:"var(--fg)" }}>{r.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section style={{ padding:"96px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="reveal" style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-label" style={{ marginBottom:12 }}>Why Choose Us</div>
            <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.6rem)", fontWeight:900, letterSpacing:-0.5 }}>Built for Contracts. Built for Trust.</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20 }} className="grid-4col">
            {whyUs.map((w, i) => (
              <div key={w.title} className={`reveal hover-lift delay-${i + 1}`} style={{ background:"#fff", borderRadius:16, padding:"26px 22px", border:"1px solid var(--border)", position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:w.accent, borderRadius:"16px 16px 0 0" }} />
                <div style={{ width:50, height:50, borderRadius:13, background:w.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, marginBottom:14 }}>{w.icon}</div>
                <h4 style={{ fontWeight:800, fontSize:15, marginBottom:7 }}>{w.title}</h4>
                <p style={{ fontSize:13, color:"var(--muted)", lineHeight:1.7 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BENTO SHOWCASE ══ */}
      <section style={{ padding:"0 24px 96px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:40, flexWrap:"wrap", gap:16 }}>
            <div className="reveal">
              <div className="section-label" style={{ marginBottom:12 }}>Our Work</div>
              <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.4rem)", fontWeight:900, letterSpacing:-0.5 }}>Projects That Speak</h2>
            </div>
            <Link href="/contact" className="btn btn-outline-dark reveal delay-2">Start a Project →</Link>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gridTemplateRows:"220px 220px", gap:14 }} className="bento-grid">
            {/* Large left — construction */}
            <div className="reveal" style={{ gridRow:"span 2", borderRadius:18, overflow:"hidden", position:"relative" }}>
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" alt="Construction site" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(26,26,46,0.7) 0%,transparent 55%)" }} />
              <div style={{ position:"absolute", bottom:20, left:20, color:"#fff" }}>
                <div style={{ fontSize:11, fontWeight:700, letterSpacing:1, opacity:0.75, marginBottom:4 }}>CONSTRUCTION</div>
                <div style={{ fontWeight:800, fontSize:16 }}>Building Projects</div>
              </div>
            </div>
            {/* Solar */}
            <div className="reveal delay-1" style={{ borderRadius:18, overflow:"hidden", position:"relative" }}>
              <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80" alt="Solar panels" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
              <div style={{ position:"absolute", inset:0, background:"rgba(26,26,46,0.4)" }} />
              <div style={{ position:"absolute", bottom:14, left:14, color:"#fff", fontWeight:700, fontSize:13 }}>Solar Energy</div>
            </div>
            {/* Branding */}
            <div className="reveal delay-2" style={{ borderRadius:18, overflow:"hidden", position:"relative" }}>
              <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80" alt="Graphic design branding" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
              <div style={{ position:"absolute", inset:0, background:"rgba(201,150,58,0.35)" }} />
              <div style={{ position:"absolute", bottom:14, left:14, color:"#fff", fontWeight:700, fontSize:13 }}>Brand Design</div>
            </div>
            {/* Print */}
            <div className="reveal delay-3" style={{ borderRadius:18, overflow:"hidden", position:"relative" }}>
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Printing production" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
              <div style={{ position:"absolute", inset:0, background:"rgba(45,125,111,0.4)" }} />
              <div style={{ position:"absolute", bottom:14, left:14, color:"#fff", fontWeight:700, fontSize:13 }}>Print Production</div>
            </div>
            {/* Stat card */}
            <div className="reveal delay-4" style={{ borderRadius:18, background:"var(--navy)", padding:"24px 22px", display:"flex", flexDirection:"column", justifyContent:"center", color:"#fff" }}>
              <div style={{ fontSize:30, fontWeight:900, color:"#7dd3c8", lineHeight:1 }}>100%</div>
              <div style={{ fontSize:13, color:"#a8b8c8", marginTop:6, lineHeight:1.5 }}>Client satisfaction commitment on every project</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ background:"var(--navy)", padding:"96px 24px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-100, right:-100, width:480, height:480, borderRadius:"50%", background:"radial-gradient(circle,rgba(45,125,111,0.18) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:-80, left:-80, width:360, height:360, borderRadius:"50%", background:"radial-gradient(circle,rgba(201,150,58,0.12) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div className="reveal" style={{ maxWidth:660, margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
          <div className="pill" style={{ background:"rgba(45,125,111,0.2)", color:"#7dd3c8", border:"1px solid rgba(45,125,111,0.35)", marginBottom:24 }}>
            Ready to Work Together?
          </div>
          <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, color:"#fff", lineHeight:1.1, letterSpacing:-1, marginBottom:18 }}>
            Let's Build Something{" "}
            <span className="gradient-text">Remarkable</span>
          </h2>
          <p style={{ color:"#a8b8c8", fontSize:16, lineHeight:1.8, marginBottom:40 }}>
            Whether it's a government contract, solar project, or a brand identity — MYHOPE is ready to deliver with professionalism and precision.
          </p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/contact" className="btn btn-primary" style={{ fontSize:15, padding:"14px 34px" }}>Get in Touch →</Link>
            <Link href="/services" className="btn btn-outline" style={{ fontSize:15, padding:"14px 34px" }}>Our Services</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .bento-grid { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
          .bento-grid > div:first-child { grid-row: span 1 !important; }
        }
        @media (max-width: 600px) {
          .bento-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
