import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | MYHOPE INTERNATIONAL CONCEPTS LTD",
  description: "Learn about MYHOPE INTERNATIONAL CONCEPTS LTD — our story, vision, mission, values, and team.",
};

const values = [
  { num:"01", icon:"🏆", title:"Professionalism", desc:"We uphold the highest standards in every engagement, from planning to delivery.", color:"var(--primary-bg)", accent:"var(--primary)" },
  { num:"02", icon:"💡", title:"Innovation", desc:"We embrace modern solutions and creative thinking to solve complex challenges.", color:"#fdf4e7", accent:"var(--accent)" },
  { num:"03", icon:"✅", title:"Quality", desc:"Every project is executed with precision, care, and a commitment to excellence.", color:"var(--primary-bg)", accent:"var(--primary)" },
  { num:"04", icon:"🔒", title:"Reliability", desc:"Our clients trust us to deliver on time, within budget, and beyond expectations.", color:"#fdf4e7", accent:"var(--accent)" },
];

const personnel = [
  { role:"Director / CEO", name:"Company Director", icon:"👔", bg:"linear-gradient(135deg,#1f5c52,#2d7d6f)" },
  { role:"Lead Designer", name:"IB Super Designs", icon:"🎨", bg:"linear-gradient(135deg,#c9963a,#e0b060)" },
  { role:"Production Officer", name:"Production Lead", icon:"⚙️", bg:"linear-gradient(135deg,#2d7d6f,#3a9e8d)" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background:"var(--navy)", padding:"96px 24px 112px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:-80, right:-80, width:480, height:480, borderRadius:"50%", background:"radial-gradient(circle,rgba(45,125,111,0.15) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div className="pill hero-badge" style={{ background:"rgba(45,125,111,0.18)", color:"#7dd3c8", border:"1px solid rgba(45,125,111,0.3)", marginBottom:22 }}>About Us</div>
          <h1 className="hero-title" style={{ fontSize:"clamp(2.4rem,5vw,3.8rem)", fontWeight:900, color:"#fff", lineHeight:1.08, letterSpacing:-2, maxWidth:680, marginBottom:18 }}>
            The Company Behind the Work
          </h1>
          <p className="hero-sub" style={{ color:"#a8b8c8", fontSize:17, lineHeight:1.8, maxWidth:500 }}>
            A credible, multi-sector Nigerian company built on integrity, innovation, and a commitment to national development.
          </p>
        </div>
        <div style={{ position:"absolute", bottom:-1, left:0, right:0, height:56, background:"#fff", clipPath:"polygon(0 100%,100% 0,100% 100%)" }} />
      </section>

      {/* Overview */}
      <section style={{ padding:"80px 24px 96px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }} className="grid-2col">
          <div className="reveal-left" style={{ position:"relative", height:460 }}>
            <div style={{ position:"absolute", top:0, left:0, width:"85%", height:"85%", borderRadius:20, overflow:"hidden", boxShadow:"0 20px 56px rgba(0,0,0,0.15)" }}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Professional business team"
                style={{ width:"100%", height:"100%", objectFit:"cover" }}
              />
            </div>
            <div style={{ position:"absolute", bottom:0, right:0, width:"48%", background:"var(--primary)", borderRadius:16, padding:"22px 18px", color:"#fff", boxShadow:"0 18px 44px rgba(45,125,111,0.35)" }}>
              <div style={{ fontSize:30, fontWeight:900, lineHeight:1 }}>2+</div>
              <div style={{ fontSize:13, opacity:0.85, marginTop:4 }}>Years of trusted service across Nigeria</div>
            </div>
            <div style={{ position:"absolute", top:18, right:-8, background:"#fff", borderRadius:12, padding:"11px 15px", boxShadow:"0 8px 28px rgba(0,0,0,0.1)", display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ fontSize:18 }}>✅</span>
              <div>
                <div style={{ fontSize:12, fontWeight:800, color:"var(--fg)" }}>CAC Registered</div>
                <div style={{ fontSize:10, color:"var(--muted)" }}>Fully Compliant</div>
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <div className="section-label" style={{ marginBottom:14 }}>Company Overview</div>
            <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.4rem)", fontWeight:900, lineHeight:1.15, letterSpacing:-0.5, marginBottom:22 }}>
              MYHOPE INTERNATIONAL<br />
              <span style={{ color:"var(--primary)" }}>CONCEPTS LTD</span>
            </h2>
            <p style={{ color:"var(--muted)", lineHeight:1.85, marginBottom:16, fontSize:15 }}>
              A duly registered Nigerian company under the Corporate Affairs Commission (CAC), operating as a multi-sector enterprise with active divisions in Construction, Renewable Energy, and Printing & Branding.
            </p>
            <p style={{ color:"var(--muted)", lineHeight:1.85, marginBottom:30, fontSize:15 }}>
              Our printing and branding arm, <strong style={{ color:"var(--fg)" }}>IB Super Designs Company</strong>, provides comprehensive creative services — from graphic design and offset printing to corporate branding and packaging production.
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
              {[
                { icon:"🔭", label:"Vision", text:"To be Nigeria's most trusted multi-sector company driving economic growth.", color:"var(--primary-bg)", border:"var(--primary)" },
                { icon:"🎯", label:"Mission", text:"Delivering quality, reliable, and cost-effective services that empower clients.", color:"#fdf4e7", border:"var(--accent)" },
              ].map((v) => (
                <div key={v.label} style={{ background:v.color, borderRadius:12, padding:"18px 16px", borderLeft:`3px solid ${v.border}` }}>
                  <div style={{ fontSize:20, marginBottom:7 }}>{v.icon}</div>
                  <div style={{ fontWeight:800, fontSize:13, marginBottom:5 }}>Our {v.label}</div>
                  <p style={{ fontSize:12, color:"var(--muted)", lineHeight:1.65 }}>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ background:"var(--navy)", padding:"96px 24px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }} />
        <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div className="reveal" style={{ textAlign:"center", marginBottom:56 }}>
            <div className="section-label" style={{ color:"#7dd3c8", marginBottom:12 }}>Our Foundation</div>
            <h2 style={{ fontSize:"clamp(2rem,4vw,2.8rem)", fontWeight:900, color:"#fff", letterSpacing:-1 }}>What We Stand For</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:18 }} className="grid-4col">
            {values.map((v, i) => (
              <div key={v.title} className={`reveal hover-lift delay-${i + 1}`} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:18, padding:"28px 22px", position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:-14, right:-6, fontSize:72, fontWeight:900, opacity:0.06, color:"#fff", lineHeight:1 }}>{v.num}</div>
                <div style={{ width:48, height:48, borderRadius:12, background:v.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, marginBottom:16 }}>{v.icon}</div>
                <h4 style={{ fontWeight:800, fontSize:16, color:"#fff", marginBottom:8 }}>{v.title}</h4>
                <p style={{ fontSize:13, color:"#a8b8c8", lineHeight:1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section style={{ padding:"96px 24px", background:"#f7faf9" }}>
        <div style={{ maxWidth:860, margin:"0 auto" }}>
          <div className="reveal" style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-label" style={{ marginBottom:12 }}>Our Structure</div>
            <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.4rem)", fontWeight:900, letterSpacing:-0.5 }}>How We're Organised</h2>
          </div>
          <div className="reveal">
            <div style={{ background:"var(--navy)", borderRadius:18, padding:"32px 36px", color:"#fff", textAlign:"center", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", inset:0, borderRadius:18, background:"linear-gradient(135deg,rgba(45,125,111,0.18),transparent)", pointerEvents:"none" }} />
              <div style={{ fontSize:32, marginBottom:10 }}>🏢</div>
              <div style={{ fontWeight:900, fontSize:19, letterSpacing:-0.5 }}>MYHOPE INTERNATIONAL CONCEPTS LTD</div>
              <div style={{ fontSize:13, color:"#7dd3c8", marginTop:5 }}>Parent Company · CAC Registered · Nigeria</div>
            </div>
            <div style={{ display:"flex", justifyContent:"center", height:40 }}>
              <div style={{ width:1, height:"100%", background:"var(--border)" }} />
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }} className="grid-3col">
              {[
                { icon:"🏗️", name:"Construction Services", desc:"Building, renovation & facility management", bg:"linear-gradient(135deg,#1f5c52,#2d7d6f)", tag:"Division 01" },
                { icon:"⚡", name:"Renewable Energy", desc:"Solar, inverters & electrical systems", bg:"linear-gradient(135deg,#2d7d6f,#3a9e8d)", tag:"Division 02" },
                { icon:"🎨", name:"IB Super Designs Co.", desc:"Printing, branding & graphic design", bg:"linear-gradient(135deg,#c9963a,#e0b060)", tag:"Division 03" },
              ].map((d, i) => (
                <div key={d.name} className={`reveal delay-${i + 1}`} style={{ background:d.bg, borderRadius:14, padding:"24px 20px", color:"#fff", textAlign:"center" }}>
                  <div style={{ fontSize:11, fontWeight:700, letterSpacing:1.5, opacity:0.65, marginBottom:10, textTransform:"uppercase" }}>{d.tag}</div>
                  <div style={{ fontSize:28, marginBottom:10 }}>{d.icon}</div>
                  <div style={{ fontWeight:800, fontSize:14, marginBottom:5 }}>{d.name}</div>
                  <div style={{ fontSize:12, opacity:0.75, lineHeight:1.5 }}>{d.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding:"80px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="reveal" style={{ marginBottom:44 }}>
            <div className="section-label" style={{ marginBottom:12 }}>Compliance & Credentials</div>
            <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.2rem)", fontWeight:900, letterSpacing:-0.5 }}>Certifications & Registration</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18 }} className="grid-3col">
            {[
              { icon:"📋", title:"CAC Registration", desc:"Fully registered with the Corporate Affairs Commission of Nigeria.", badge:"Active", badgeBg:"#dcfce7", badgeText:"#16a34a" },
              { icon:"🏛️", title:"Corporate Compliance", desc:"Compliant with all Nigerian business regulations and tax obligations.", badge:"Verified", badgeBg:"var(--primary-bg)", badgeText:"var(--primary)" },
              { icon:"🔐", title:"Data & Privacy", desc:"We maintain strict confidentiality and data protection standards.", badge:"Compliant", badgeBg:"#fdf4e7", badgeText:"var(--accent)" },
            ].map((c, i) => (
              <div key={c.title} className={`reveal hover-lift delay-${i + 1}`} style={{ background:"#f7faf9", borderRadius:14, padding:"26px 26px", border:"1px solid var(--border)" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
                  <div style={{ fontSize:30 }}>{c.icon}</div>
                  <span style={{ fontSize:10, fontWeight:800, background:c.badgeBg, color:c.badgeText, padding:"3px 10px", borderRadius:100 }}>{c.badge}</span>
                </div>
                <h4 style={{ fontWeight:800, fontSize:15, marginBottom:7 }}>{c.title}</h4>
                <p style={{ fontSize:13, color:"var(--muted)", lineHeight:1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Personnel */}
      <section style={{ padding:"80px 24px 96px", background:"#f7faf9" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="reveal" style={{ textAlign:"center", marginBottom:48 }}>
            <div className="section-label" style={{ marginBottom:12 }}>Our Team</div>
            <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.4rem)", fontWeight:900, letterSpacing:-0.5 }}>The People Behind MYHOPE</h2>
          </div>
          {/* <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:22, maxWidth:780, margin:"0 auto" }} className="grid-3col">
            {[
              { role:"Director / CEO", name:"Company Director", img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", alt:"Professional woman executive" },
              { role:"Lead Designer", name:"IB Super Designs", img:"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80", alt:"Graphic designer at work" },
              { role:"Production Officer", name:"Production Lead", img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", alt:"Production manager" },
            ].map((p, i) => (
              <div key={p.role} className={`reveal hover-lift delay-${i + 1}`} style={{ borderRadius:18, overflow:"hidden", background:"#fff", border:"1px solid var(--border)" }}>
                <div style={{ height:180, overflow:"hidden" }}>
                  <img src={p.img} alt={p.alt} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top" }} />
                </div>
                <div style={{ padding:"18px 18px 22px" }}>
                  <div style={{ fontSize:11, fontWeight:800, color:"var(--primary)", letterSpacing:1, textTransform:"uppercase", marginBottom:3 }}>{p.role}</div>
                  <div style={{ fontWeight:800, fontSize:15 }}>{p.name}</div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"var(--navy)", padding:"96px 24px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-100, right:-100, width:480, height:480, borderRadius:"50%", background:"radial-gradient(circle,rgba(45,125,111,0.18) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div className="reveal" style={{ maxWidth:580, margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
          <h2 style={{ fontSize:"clamp(2rem,4vw,2.8rem)", fontWeight:900, color:"#fff", letterSpacing:-1, marginBottom:18 }}>Partner With Us Today</h2>
          <p style={{ color:"#a8b8c8", fontSize:16, lineHeight:1.8, marginBottom:36 }}>
            We welcome partnerships with government agencies, NGOs, and private sector organizations. Let's build something great together.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ fontSize:15, padding:"14px 38px" }}>Contact Us →</Link>
        </div>
      </section>
    </>
  );
}
