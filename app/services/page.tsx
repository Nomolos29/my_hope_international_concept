"use client";
import { useState } from "react";
import Link from "next/link";

/* ─── THEME PER SERVICE ─── */
const themes = {
  construction: {
    key: "construction",
    label: "Construction",
    icon: "🏗️",
    badge: "Division 01",
    heroGrad: "linear-gradient(135deg,#0d2b1f 0%,#1f5c52 50%,#2d7d6f 100%)",
    accentColor: "#2d7d6f",
    accentLight: "#3a9e8d",
    accentBg: "#edf7f5",
    glowColor: "rgba(45,125,111,0.25)",
    tagColor: "#7dd3c8",
    heroTitle: "Building Nigeria,\nOne Structure at a Time.",
    heroSub: "From residential builds to large commercial facilities — precision-engineered, code-compliant, and built to last.",
    heroBg: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=85",
    products: [
      { icon:"🏗️", title:"Building Contracting", desc:"Full-scale residential and commercial building projects, from foundation to finishing." },
      { icon:"🔨", title:"Renovation & Maintenance", desc:"Structural renovations, interior upgrades, and ongoing facility maintenance." },
      { icon:"🏢", title:"Facility Management", desc:"Comprehensive management of buildings and infrastructure for optimal performance." },
      { icon:"📐", title:"Project Planning & Design", desc:"Detailed project scoping, budgeting, and timeline management for all builds." },
      { icon:"🪟", title:"Interior Finishing", desc:"Premium interior fitout including tiling, painting, ceiling work and fixtures." },
      { icon:"🔩", title:"Structural Engineering", desc:"Expert structural assessments and engineering solutions for safe, durable builds." },
    ],
    workImages: [
      { src:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", caption:"Commercial Build — Lagos" },
      { src:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80", caption:"Foundation Works — Abuja" },
      { src:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80", caption:"Office Complex — Port Harcourt" },
      { src:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", caption:"Renovation Project — Ibadan" },
      { src:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80", caption:"Site Inspection — Ogun State" },
      { src:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80", caption:"Facility Management — Ogun State" },
    ],
  },
  energy: {
    key: "energy",
    label: "Renewable Energy",
    icon: "⚡",
    badge: "Division 02",
    heroGrad: "linear-gradient(135deg,#0a1628 0%,#0f3460 50%,#1a5276 100%)",
    accentColor: "#1a7fb5",
    accentLight: "#3a9fd4",
    accentBg: "#e8f4fd",
    glowColor: "rgba(26,127,181,0.25)",
    tagColor: "#7dd3c8",
    heroTitle: "Clean Energy for\nEvery Nigerian Home.",
    heroSub: "Solar installations, inverter systems, and electrical solutions — powering lives with reliable, cost-effective clean energy.",
    heroBg: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=85",
    products: [
      { icon:"☀️", title:"Solar System Installation", desc:"Design and installation of residential and commercial solar power systems." },
      { icon:"🔋", title:"Inverters & Battery Backup", desc:"Reliable inverter and battery backup solutions for uninterrupted power supply." },
      { icon:"💡", title:"Electrical Fittings & Lighting", desc:"Professional electrical installations, wiring, and energy-efficient lighting systems." },
      { icon:"🌿", title:"Energy Consulting", desc:"Expert advice on reducing energy costs and transitioning to clean power." },
      { icon:"🔌", title:"Off-Grid Solutions", desc:"Complete off-grid power systems for remote locations and rural communities." },
      { icon:"📊", title:"Energy Audits", desc:"Comprehensive energy audits to identify savings and optimise consumption." },
    ],
    workImages: Array.from({ length: 13 }, (_, i) => ({
      src: `/renewable/Renewable${i + 1}${i + 2 === 3 ? "s" : ""}.jpeg`,
      caption: `Renewable Energy Project ${i + 1}`,
    })),
  },
  printing: {
    key: "printing",
    label: "Printing & Branding",
    icon: "🎨",
    badge: "Division 03 · IB Super Designs",
    heroGrad: "linear-gradient(135deg,#1a0a00 0%,#5c3010 50%,#c9963a 100%)",
    accentColor: "#c9963a",
    accentLight: "#e0b060",
    accentBg: "#fdf4e7",
    glowColor: "rgba(201,150,58,0.25)",
    tagColor: "#fde68a",
    heroTitle: "Design That Speaks.\nBrands That Stick.",
    heroSub: "IB Super Designs Company — graphic design, offset printing, packaging, and complete corporate branding that makes you unforgettable.",
    heroBg: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1400&q=85",
    products: [
      { icon:"🎨", title:"Graphic Design Services", desc:"Professional logos, brand identities, layouts, and visual communication materials." },
      { icon:"🖨️", title:"Offset & Digital Printing", desc:"High-quality printing for all volumes — from small runs to large-scale production." },
      { icon:"📦", title:"Packaging Production", desc:"Custom packaging design and production for products and corporate gifts." },
      { icon:"🏷️", title:"Corporate Branding", desc:"Branded stationery, uniforms, signage, and complete corporate identity kits." },
      { icon:"📄", title:"Flyers, Posters & Brochures", desc:"Eye-catching marketing materials designed to communicate your message clearly." },
      { icon:"🎌", title:"Banners & Outdoor Media", desc:"Large-format banners, roll-ups, and outdoor advertising materials." },
    ],
    workImages: Array.from({ length: 5 }, (_, i) => ({
      src: `/printing/Printing${i + 1}.jpeg`,
      caption: `Print & Design Project ${i + 1}`,
    })),
  },
};

const reviews = [
  { name:"Adebayo Okafor", role:"Project Manager, Lagos", stars:5, text:"MYHOPE delivered our office complex on time and within budget. The quality of work exceeded our expectations. Highly professional team!", service:"construction" },
  { name:"Fatima Aliyu", role:"Business Owner, Abuja", stars:5, text:"The solar system they installed has been running flawlessly for over a year. Zero complaints. Great ROI and the team was very knowledgeable.", service:"energy" },
  { name:"Chukwuemeka Nwosu", role:"Marketing Director", stars:5, text:"IB Super Designs transformed our brand completely. The quality of print materials and the creativity they brought was outstanding.", service:"printing" },
  { name:"Grace Okonkwo", role:"NGO Director, Ibadan", stars:5, text:"From site planning to final handover, MYHOPE was professional, transparent, and delivered exactly what was promised. Would recommend.", service:"construction" },
  { name:"Ibrahim Hassan", role:"Hotel Manager, Kano", stars:5, text:"Our entire hotel is now solar-powered thanks to MYHOPE. The backup system means we never lose power. Best investment we've made.", service:"energy" },
  { name:"Blessing Eze", role:"Retail Chain Owner", stars:4, text:"The packaging and branding they created for our products helped us stand out on shelves. Sales increased significantly after the rebrand.", service:"printing" },
];

type ServiceKey = "construction" | "energy" | "printing";
type TabKey = "products" | "work" | "reviews";

export default function ProductsPage() {
  const [activeService, setActiveService] = useState<ServiceKey>("construction");
  const [activeTab, setActiveTab] = useState<TabKey>("products");

  const theme = themes[activeService];
  const serviceReviews = reviews.filter(r => r.service === activeService);

  const handleServiceChange = (key: ServiceKey) => {
    setActiveService(key);
    setActiveTab("products");
  };

  return (
    <>
      {/* ── DYNAMIC HERO ── */}
      <section style={{ position:"relative", minHeight:480, overflow:"hidden", transition:"all 0.5s ease" }}>
        {/* Background image */}
        <img
          src={theme.heroBg}
          alt={theme.label}
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", transition:"opacity 0.5s ease" }}
        />
        {/* Gradient overlay */}
        <div style={{ position:"absolute", inset:0, background:theme.heroGrad, opacity:0.88, transition:"background 0.5s ease" }} />
        {/* Grid texture */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }} />
        {/* Glow */}
        <div style={{ position:"absolute", top:-100, right:-100, width:500, height:500, borderRadius:"50%", background:`radial-gradient(circle,${theme.glowColor} 0%,transparent 70%)`, pointerEvents:"none", transition:"background 0.5s" }} />

        <div style={{ maxWidth:1200, margin:"0 auto", padding:"80px 24px 64px", position:"relative", zIndex:1 }}>
          {/* Service selector tabs */}
          <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:40 }}>
            {(Object.values(themes) as typeof theme[]).map((t) => (
              <button
                key={t.key}
                onClick={() => handleServiceChange(t.key as ServiceKey)}
                style={{
                  padding:"10px 22px", borderRadius:100, fontSize:13, fontWeight:700,
                  cursor:"pointer", border:"2px solid",
                  transition:"all 0.25s ease",
                  background: activeService === t.key ? "#fff" : "rgba(255,255,255,0.1)",
                  color: activeService === t.key ? theme.accentColor : "#fff",
                  borderColor: activeService === t.key ? "#fff" : "rgba(255,255,255,0.3)",
                  boxShadow: activeService === t.key ? "0 4px 16px rgba(0,0,0,0.2)" : "none",
                }}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>

          {/* Badge */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"5px 14px", borderRadius:100, fontSize:11, fontWeight:700, letterSpacing:1, textTransform:"uppercase", marginBottom:20, color:theme.tagColor, background:"rgba(255,255,255,0.1)", border:`1px solid ${theme.tagColor}40` }}>
            {theme.badge}
          </div>

          {/* Title */}
          <h1 style={{ fontSize:"clamp(2rem,4.5vw,3.6rem)", fontWeight:900, color:"#fff", lineHeight:1.1, letterSpacing:-1.5, marginBottom:18, maxWidth:700, whiteSpace:"pre-line", transition:"all 0.3s" }}>
            {theme.heroTitle}
          </h1>

          <p style={{ fontSize:17, color:"rgba(255,255,255,0.8)", lineHeight:1.8, maxWidth:560, marginBottom:36 }}>
            {theme.heroSub}
          </p>

          <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
            <Link href="/contact" style={{ padding:"13px 28px", background:"#fff", color:theme.accentColor, borderRadius:10, fontWeight:700, fontSize:14, textDecoration:"none", transition:"all 0.2s" }}>
              Get a Quote →
            </Link>
            <Link href="/contact" style={{ padding:"13px 28px", background:"rgba(255,255,255,0.12)", color:"#fff", borderRadius:10, fontWeight:700, fontSize:14, textDecoration:"none", border:"1.5px solid rgba(255,255,255,0.35)", transition:"all 0.2s" }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── INNER TABS ── */}
      <div style={{ background:"#fff", borderBottom:"2px solid var(--border)", position:"sticky", top:68, zIndex:40 }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px", display:"flex", gap:0 }}>
          {([
            { key:"products", label:"Products & Services" },
            { key:"work",     label:"Our Work" },
            { key:"reviews",  label:"Reviews" },
          ] as { key: TabKey; label: string }[]).map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              style={{
                padding:"18px 24px", background:"none", border:"none", cursor:"pointer",
                fontSize:14, fontWeight: activeTab === t.key ? 700 : 500,
                color: activeTab === t.key ? theme.accentColor : "var(--muted)",
                borderBottom: activeTab === t.key ? `3px solid ${theme.accentColor}` : "3px solid transparent",
                marginBottom:-2, transition:"all 0.2s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── TAB CONTENT ── */}
      <div style={{ background:"#f7faf9", minHeight:500, padding:"64px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>

          {/* PRODUCTS TAB */}
          {activeTab === "products" && (
            <>
              <div className="reveal" style={{ marginBottom:48 }}>
                <div style={{ fontSize:11, fontWeight:800, letterSpacing:2, textTransform:"uppercase", color:theme.accentColor, marginBottom:12 }}>
                  {theme.label}
                </div>
                <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.4rem)", fontWeight:900, letterSpacing:-0.5 }}>
                  What We Offer
                </h2>
                <p style={{ color:"var(--muted)", marginTop:10, maxWidth:520, lineHeight:1.75 }}>
                  Explore our full range of {theme.label.toLowerCase()} products and services. Each delivered with professionalism and a commitment to quality.
                </p>
              </div>

              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20 }}>
                {theme.products.map((p, i) => (
                  <div key={p.title} className={`reveal hover-lift delay-${(i % 4) + 1}`}
                    style={{ background:"#fff", borderRadius:16, padding:"28px 24px", border:"1px solid var(--border)", borderTop:`3px solid ${theme.accentColor}` }}>
                    <div style={{ fontSize:30, marginBottom:14 }}>{p.icon}</div>
                    <h4 style={{ fontWeight:800, fontSize:15, marginBottom:8 }}>{p.title}</h4>
                    <p style={{ fontSize:13, color:"var(--muted)", lineHeight:1.75 }}>{p.desc}</p>
                    <Link href="/contact" style={{ display:"inline-block", marginTop:16, fontSize:13, fontWeight:700, color:theme.accentColor, textDecoration:"none" }}>
                      Enquire →
                    </Link>
                  </div>
                ))}
              </div>

              {/* CTA strip */}
              <div style={{ marginTop:64, background:theme.heroGrad, borderRadius:20, padding:"40px 36px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:20 }}>
                <div>
                  <div style={{ fontSize:11, fontWeight:700, color:theme.tagColor, letterSpacing:1.5, textTransform:"uppercase", marginBottom:8 }}>Ready to get started?</div>
                  <h3 style={{ fontSize:"clamp(1.2rem,2.5vw,1.8rem)", fontWeight:900, color:"#fff" }}>Request a Quote Today</h3>
                </div>
                <Link href="/contact" style={{ padding:"14px 32px", background:"#fff", color:theme.accentColor, borderRadius:10, fontWeight:700, fontSize:15, textDecoration:"none", whiteSpace:"nowrap" }}>
                  Contact Us →
                </Link>
              </div>
            </>
          )}

          {/* OUR WORK TAB */}
          {activeTab === "work" && (
            <>
              <div className="reveal" style={{ marginBottom:48 }}>
                <div style={{ fontSize:11, fontWeight:800, letterSpacing:2, textTransform:"uppercase", color:theme.accentColor, marginBottom:12 }}>
                  Portfolio
                </div>
                <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.4rem)", fontWeight:900, letterSpacing:-0.5 }}>
                  Our {theme.label} Work
                </h2>
                <p style={{ color:"var(--muted)", marginTop:10, maxWidth:520, lineHeight:1.75 }}>
                  A selection of completed {theme.label.toLowerCase()} projects that showcase our quality and commitment.
                </p>
              </div>

              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:20 }}>
                {theme.workImages.map((img, i) => (
                  <div key={i} className={`reveal hover-lift delay-${(i % 4) + 1}`}
                    style={{ borderRadius:16, overflow:"hidden", position:"relative", aspectRatio:"4/3", background:"#e2e8f0" }}>
                    <img
                      src={img.src}
                      alt={img.caption}
                      style={{ width:"100%", height:"100%", objectFit:"cover", display:"block", transition:"transform 0.4s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)" }} />
                    <div style={{ position:"absolute", bottom:16, left:16, right:16 }}>
                      <div style={{ fontSize:13, fontWeight:700, color:"#fff" }}>{img.caption}</div>
                    </div>
                    {/* Accent dot */}
                    <div style={{ position:"absolute", top:14, right:14, width:10, height:10, borderRadius:"50%", background:theme.accentColor, boxShadow:`0 0 0 3px rgba(255,255,255,0.3)` }} />
                  </div>
                ))}
              </div>

              {theme.workImages.length === 0 && (
                <div style={{ textAlign:"center", padding:"80px 24px", color:"var(--muted)" }}>
                  <div style={{ fontSize:48, marginBottom:16 }}>🖼️</div>
                  <p style={{ fontSize:16 }}>Project photos coming soon.</p>
                </div>
              )}
            </>
          )}

          {/* REVIEWS TAB */}
          {activeTab === "reviews" && (
            <>
              <div className="reveal" style={{ marginBottom:48 }}>
                <div style={{ fontSize:11, fontWeight:800, letterSpacing:2, textTransform:"uppercase", color:theme.accentColor, marginBottom:12 }}>
                  Client Feedback
                </div>
                <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.4rem)", fontWeight:900, letterSpacing:-0.5 }}>
                  What Our Clients Say
                </h2>
                <p style={{ color:"var(--muted)", marginTop:10, maxWidth:520, lineHeight:1.75 }}>
                  Real feedback from clients across Nigeria who trusted MYHOPE with their projects.
                </p>
              </div>

              {/* Rating summary */}
              <div className="reveal" style={{ display:"flex", alignItems:"center", gap:24, background:"#fff", borderRadius:16, padding:"24px 28px", border:"1px solid var(--border)", marginBottom:36, flexWrap:"wrap" }}>
                <div style={{ textAlign:"center" }}>
                  <div style={{ fontSize:"3rem", fontWeight:900, color:theme.accentColor, lineHeight:1 }}>5.0</div>
                  <div style={{ color:"#f59e0b", fontSize:20, marginTop:4 }}>★★★★★</div>
                  <div style={{ fontSize:12, color:"var(--muted)", marginTop:4 }}>Average Rating</div>
                </div>
                <div style={{ width:1, height:60, background:"var(--border)" }} />
                <div>
                  {[5,4,3].map(star => (
                    <div key={star} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                      <span style={{ fontSize:12, color:"var(--muted)", width:12 }}>{star}</span>
                      <span style={{ color:"#f59e0b", fontSize:12 }}>★</span>
                      <div style={{ width:120, height:6, background:"#f1f5f9", borderRadius:3, overflow:"hidden" }}>
                        <div style={{ height:"100%", borderRadius:3, background:theme.accentColor, width: star === 5 ? "80%" : star === 4 ? "15%" : "5%" }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginLeft:"auto" }}>
                  <div style={{ fontSize:13, color:"var(--muted)", marginBottom:4 }}>Based on client testimonials</div>
                  <div style={{ fontSize:22, fontWeight:800, color:"var(--fg)" }}>{serviceReviews.length} Reviews</div>
                </div>
              </div>

              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:20 }}>
                {serviceReviews.map((r, i) => (
                  <div key={i} className={`reveal hover-lift delay-${(i % 3) + 1}`}
                    style={{ background:"#fff", borderRadius:16, padding:"28px 24px", border:"1px solid var(--border)", position:"relative" }}>
                    <div style={{ position:"absolute", top:0, left:0, right:0, height:3, borderRadius:"16px 16px 0 0", background:theme.accentColor }} />
                    <div style={{ color:"#f59e0b", fontSize:16, marginBottom:14 }}>{"★".repeat(r.stars)}</div>
                    <p style={{ fontSize:14, color:"var(--fg)", lineHeight:1.8, marginBottom:20, fontStyle:"italic" }}>
                      "{r.text}"
                    </p>
                    <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                      <div style={{ width:40, height:40, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:16, color:"#fff", background:theme.heroGrad, flexShrink:0 }}>
                        {r.name[0]}
                      </div>
                      <div>
                        <div style={{ fontWeight:700, fontSize:14, color:"var(--fg)" }}>{r.name}</div>
                        <div style={{ fontSize:12, color:"var(--muted)" }}>{r.role}</div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Leave a review card */}
                <div className="reveal" style={{ background:theme.accentBg, borderRadius:16, padding:"28px 24px", border:`2px dashed ${theme.accentColor}60`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", minHeight:200 }}>
                  <div style={{ fontSize:32, marginBottom:12 }}>✍️</div>
                  <h4 style={{ fontWeight:800, fontSize:15, marginBottom:8, color:"var(--fg)" }}>Share Your Experience</h4>
                  <p style={{ fontSize:13, color:"var(--muted)", lineHeight:1.7, marginBottom:16 }}>
                    Worked with us? We'd love to hear your feedback.
                  </p>
                  <Link href="/contact" style={{ padding:"10px 22px", background:theme.accentColor, color:"#fff", borderRadius:8, fontSize:13, fontWeight:700, textDecoration:"none" }}>
                    Leave a Review →
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── OTHER DIVISIONS STRIP ── */}
      <section style={{ background:"#fff", padding:"60px 24px", borderTop:"1px solid var(--border)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:36 }}>
            <div style={{ fontSize:11, fontWeight:800, letterSpacing:2, textTransform:"uppercase", color:"var(--muted)", marginBottom:8 }}>Explore More</div>
            <h3 style={{ fontSize:"clamp(1.4rem,2.5vw,2rem)", fontWeight:900 }}>Our Other Divisions</h3>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:16 }}>
            {(Object.values(themes) as typeof theme[]).filter(t => t.key !== activeService).map((t) => (
              <button key={t.key} onClick={() => handleServiceChange(t.key as ServiceKey)}
                style={{ background:"none", border:`2px solid ${t.accentColor}30`, borderRadius:16, padding:"24px 20px", cursor:"pointer", textAlign:"left", transition:"all 0.25s", position:"relative", overflow:"hidden" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = t.accentColor; (e.currentTarget as HTMLElement).style.background = t.accentBg; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${t.accentColor}30`; (e.currentTarget as HTMLElement).style.background = "none"; }}
              >
                <div style={{ fontSize:32, marginBottom:10 }}>{t.icon}</div>
                <div style={{ fontSize:11, fontWeight:700, color:t.accentColor, letterSpacing:1, textTransform:"uppercase", marginBottom:6 }}>{t.badge}</div>
                <h4 style={{ fontWeight:800, fontSize:16, color:"var(--fg)", marginBottom:6 }}>{t.label}</h4>
                <p style={{ fontSize:12, color:"var(--muted)", lineHeight:1.6 }}>{t.products[0].desc}</p>
                <div style={{ marginTop:14, fontSize:13, fontWeight:700, color:t.accentColor }}>Explore →</div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
