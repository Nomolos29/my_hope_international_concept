"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);

  const inp: React.CSSProperties = {
    width:"100%", padding:"12px 15px",
    border:"1.5px solid var(--border)", borderRadius:9,
    fontSize:14, color:"var(--fg)", background:"#fff",
    outline:"none", fontFamily:"inherit",
    transition:"border-color 0.2s",
  };

  return (
    <>
      {/* Hero */}
      <section style={{ background:"var(--navy)", padding:"96px 24px 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:-80, right:-80, width:480, height:480, borderRadius:"50%", background:"radial-gradient(circle,rgba(45,125,111,0.15) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div className="pill hero-badge" style={{ background:"rgba(45,125,111,0.18)", color:"#7dd3c8", border:"1px solid rgba(45,125,111,0.3)", marginBottom:22 }}>Contact Us</div>
          <h1 className="hero-title" style={{ fontSize:"clamp(2.4rem,5vw,3.8rem)", fontWeight:900, color:"#fff", lineHeight:1.08, letterSpacing:-2, maxWidth:620, marginBottom:18 }}>
            Let's Start a<br />
            <span className="gradient-text">Conversation</span>
          </h1>
          <p className="hero-sub" style={{ color:"#a8b8c8", fontSize:17, lineHeight:1.8, maxWidth:460 }}>
            Whether you have a project in mind, need a quote, or want to explore a partnership — we're here and ready to help.
          </p>
        </div>
      </section>

      {/* Main */}
      <section style={{ padding:"80px 24px 96px", background:"#f7faf9" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1.5fr", gap:48, alignItems:"start" }} className="grid-2col">

          {/* Left */}
          <div>
            <div style={{ display:"flex", flexDirection:"column", gap:14, marginBottom:24 }}>
              {[
                { icon:"📍", label:"Office Address", value:"Nigeria", sub:"Nationwide Operations", color:"var(--primary-bg)", accent:"var(--primary)" },
                { icon:"📞", label:"Phone Number", value:"+234 800 000 0000", sub:"Mon – Fri, 8am – 6pm", color:"#fdf4e7", accent:"var(--accent)" },
                { icon:"✉️", label:"Email Address", value:"info@myhopeconcepts.com", sub:"We reply within 24 hours", color:"var(--primary-bg)", accent:"var(--primary)" },
              ].map((c, i) => (
                <div key={c.label} className={`reveal delay-${i + 1}`} style={{ background:"#fff", borderRadius:14, padding:"18px 20px", border:"1px solid var(--border)", display:"flex", gap:14, alignItems:"center", boxShadow:"0 2px 10px rgba(0,0,0,0.04)" }}>
                  <div style={{ width:46, height:46, borderRadius:11, background:c.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0, borderLeft:`3px solid ${c.accent}` }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize:10, fontWeight:800, color:"var(--muted)", textTransform:"uppercase", letterSpacing:1, marginBottom:2 }}>{c.label}</div>
                    <div style={{ fontWeight:800, fontSize:14, color:"var(--fg)" }}>{c.value}</div>
                    <div style={{ fontSize:11, color:"var(--muted)", marginTop:1 }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="reveal delay-4" style={{ display:"flex", alignItems:"center", gap:12, padding:"16px 20px", background:"linear-gradient(135deg,#16a34a,#15803d)", color:"#fff", borderRadius:14, textDecoration:"none", marginBottom:24, boxShadow:"0 6px 20px rgba(22,163,74,0.28)", transition:"transform 0.2s" }}>
              <span style={{ fontSize:26 }}>💬</span>
              <div>
                <div style={{ fontWeight:800, fontSize:14 }}>Chat on WhatsApp</div>
                <div style={{ fontSize:12, opacity:0.85 }}>Quick response guaranteed</div>
              </div>
              <span style={{ marginLeft:"auto", fontSize:16 }}>→</span>
            </a>

            <div className="reveal delay-5">
              <div style={{ fontSize:11, fontWeight:800, color:"var(--muted)", textTransform:"uppercase", letterSpacing:1, marginBottom:12 }}>Follow Us</div>
              <div style={{ display:"flex", gap:9 }}>
                {[
                  { label:"Facebook", icon:"f", bg:"#1877f2" },
                  { label:"Instagram", icon:"ig", bg:"#e1306c" },
                  { label:"LinkedIn", icon:"in", bg:"#0a66c2" },
                  { label:"Twitter", icon:"𝕏", bg:"#1a1a1a" },
                ].map((s) => (
                  <a key={s.label} href="#" aria-label={s.label} style={{ width:42, height:42, borderRadius:9, background:s.bg, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:12, fontWeight:800, textDecoration:"none", opacity:0.88 }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal-right">
            <div style={{ background:"#fff", borderRadius:22, padding:"40px 36px", boxShadow:"0 6px 40px rgba(0,0,0,0.07)", border:"1px solid var(--border)" }}>
              {sent ? (
                <div style={{ textAlign:"center", padding:"44px 0" }}>
                  <div style={{ fontSize:60, marginBottom:14 }}>✅</div>
                  <h3 style={{ fontWeight:900, fontSize:22, marginBottom:9 }}>Message Sent!</h3>
                  <p style={{ color:"var(--muted)", lineHeight:1.75, marginBottom:26 }}>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button onClick={() => { setSent(false); setForm({ name:"", email:"", subject:"", message:"" }); }} className="btn btn-primary" style={{ margin:"0 auto" }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontWeight:900, fontSize:21, marginBottom:5 }}>Send Us a Message</h3>
                  <p style={{ color:"var(--muted)", fontSize:14, marginBottom:28 }}>Fill in the form and we'll respond promptly.</p>
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }} className="grid-form-2col">
                      <div>
                        <label style={{ display:"block", fontSize:12, fontWeight:700, marginBottom:5, color:"var(--fg)" }}>Full Name *</label>
                        <input required type="text" placeholder="Your full name" value={form.name}
                          onChange={(e) => setForm({ ...form, name:e.target.value })} style={inp}
                          onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                      </div>
                      <div>
                        <label style={{ display:"block", fontSize:12, fontWeight:700, marginBottom:5, color:"var(--fg)" }}>Email Address *</label>
                        <input required type="email" placeholder="your@email.com" value={form.email}
                          onChange={(e) => setForm({ ...form, email:e.target.value })} style={inp}
                          onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                      </div>
                    </div>
                    <div style={{ marginBottom:14 }}>
                      <label style={{ display:"block", fontSize:12, fontWeight:700, marginBottom:5, color:"var(--fg)" }}>Subject *</label>
                      <select required value={form.subject} onChange={(e) => setForm({ ...form, subject:e.target.value })}
                        style={{ ...inp, cursor:"pointer" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}>
                        <option value="">Select a subject</option>
                        <option>Construction Project Inquiry</option>
                        <option>Renewable Energy Quote</option>
                        <option>Printing & Branding Request</option>
                        <option>Partnership / Collaboration</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div style={{ marginBottom:24 }}>
                      <label style={{ display:"block", fontSize:12, fontWeight:700, marginBottom:5, color:"var(--fg)" }}>Message *</label>
                      <textarea required rows={5} placeholder="Tell us about your project or inquiry..."
                        value={form.message} onChange={(e) => setForm({ ...form, message:e.target.value })}
                        style={{ ...inp, resize:"vertical" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width:"100%", justifyContent:"center", fontSize:15, padding:"14px" }}>
                      Send Message →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
