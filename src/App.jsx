import { useState } from "react";

const LOGO_SRC = "data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQwwwwwwwwwAAAAAQAAAAAAQwwwAAAAAwwwgAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAABAAgAQAABAgAAASAAAQAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAABQAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAABQwwwAAAwwwAAAAwAAAAAhAAAACQAACgAAACAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAABQBAAAACAAAAAAAgAAAAAACAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAABQAAAAAAAgAAAACgAgAAAACQAAAAAAAAAAAAAAAAAAAAABQAAAAAAAABQAwAAASCgAAwABBCAAAAABAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAABAQAADgAABAAASgABAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAADAAAAACiAAAAABgAAAQAAAAAAAAAAAAAAAAAAAAABQAAAAAAAABAgABAAAAAASAAAAAAChQAACgAAAAAAAAAAAAAAAAAAAABQAAAAAAAABSQAAAQCgABABAAAAAwAAAAAgAAAAAAAAAAAAAAAAAAAABQAAAAAAAABQAAAAACgAAAAAgAAAABQAAAgAAAAAAAAAAAAAAAAAAAABQAAAAAAAABQBQAAACAAAAABAABQABAgADQAAAAAAAAAAAAAAAAAAAABQAAAAAAAABQAAgAAAAAAgAAAgAgAACAAAAAAAAAAAAAAAAAAAAAAAABAAACAAAAAAAAACAAAAACAAACAAAAACAAAAAAAAAAAAAAAAAAAAAAAAwgwAggAAAAggQCwQgQAAQgDgAgAAAQAQBAAAAAAAAAAAAAAAAAAAAAAADwCigQABiCgTABShQQhygBgzhAAgBAATSgAAAAAAAAAAAAAAAAAAAAACwAigAABgihAgBgBxRCygTBiRQAATRQxwwAAAAAAAAAAAAAAAAAAAAACACDDAADDDDACAAABAAChCDABDCCDBDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8QAAv/aAAwDAQACAAMAAAAQ888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888884wwwwwwwww088884w88888www088888wwww8888888888888888888888888888888888888c8084888o0888o888o88888888888888888888888888888888888888848o8888c8888888s8888888888888888888848848888880888w8888s04888848880888888888888888888888888888o888888U8888888880c888880848888888888888888888888888888o888888U88888U8880U8888848088888w8888888888888888888888o888888U884woc88o8U88488ss888088o8888888888888888888888o888888U88888888U8888U888Y888c88o8888888888888888888888o888888U888888wk8o888UU88888k48888888888888888888888888o888888U888888o88s8888s88888U488sc888888888888888888888o888888U888888888U88488088808o8880888888888888888888888o888888U8888888s8c88o88U888c8o888U888888888888888888888o888888U8888o8888888888888888s888o888888888888888888888o888888U88888Q8888880888U8E888c88s8888888888888888888888MMM888MMMc88ssMMMMMc8888M8888MMMc8888888888888888888844w888w8440w00sw0840408s8Y4w484w8s888888888888888888888oUAw88w8os0w0s8oU88EoU8Y4I4woUs48k088888888888888888888oUQ88888oE88s48oU488UU4sUs88oY88ggQ888888888888888888888c888c888sccsMcMMM88s88cMss8scM8M88c8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888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";

const C = {
  bg: "#F4F3EF", white: "#FFFFFF", navy: "#0B1220", navyMid: "#152035",
  orange: "#FF5C1A", orangeLight: "#FFF0EA", gold: "#C4860A", goldLight: "#FEF8EA",
  green: "#1A7A4A", greenLight: "#EAF7F0", red: "#B83232", redLight: "#FDECEA",
  muted: "#8A8A9A", border: "#E2DFD8", text: "#1A1A2E", subtext: "#5A5A7A",
};

const Divider = () => <div style={{ height: 1, background: C.border, margin: "0" }} />;
const Tag = ({ children, color = C.orange, bg = C.orangeLight }) => (
  <span style={{ background: bg, color, fontSize: 10, fontWeight: 700, letterSpacing: 2, padding: "4px 10px", borderRadius: 4, textTransform: "uppercase" }}>{children}</span>
);
const Sec = ({ children, style = {} }) => (
  <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 28px", ...style }}>{children}</div>
);

export default function VahakaPitch() {
  const [openTC, setOpenTC] = useState(null);

  const tcItems = [
    { icon: "💳", t: "Payment", d: "Full monthly engagement fee of ₹1,80,000 is payable in advance. ₹1,00,000 covers the agency retainer. ₹80,000 is a flexible performance budget — allocation between paid ads and content distribution is decided monthly based on what the data and strategy supports. Neither portion is locked to a channel." },
    { icon: "🔭", t: "Scope of Advisory", d: "Yogii Kumar's role is Strategic Advisor — not operator, not co-founder, not agency lead. The engagement covers research, strategic direction, route-finding, and presenting 2–3 focused options for execution. Decisions on which option to pursue rest with Vahaka's leadership." },
    { icon: "⚙️", t: "Operations Stay with Vahaka", d: "Operations, rider management, restaurant relationships, after-service, finance, and tech decisions remain entirely Vahaka's domain. This engagement does not extend into those areas unless specifically invited — and any such extended involvement requires a separate conversation and revised terms." },
    { icon: "🤝", t: "Ideas & Suggestions", d: "All strategic recommendations are offered in the spirit of mutual respect and shared growth. No suggestion is binding. Both parties reserve the right to agree, disagree, or adapt — and that dynamic is what makes the engagement genuinely valuable." },
    { icon: "📅", t: "Weekly Rhythm", d: "The engagement runs on a weekly cadence — research, ideas, and feedback shared openly. Yogii Kumar is available for direction and review weekly, not daily. Deep operational involvement beyond this is outside scope." },
    { icon: "📐", t: "Role Boundary", d: "Thinking, research, and brand narration — Yogii Kumar. Content execution, talent management, client relationships, after-service, and distribution — Recun Media. Vahaka's internal team handles everything operational. Three lanes. Zero overlap." },
    { icon: "🔒", t: "No Number-Based Commitments", d: "This engagement deliberately avoids committing to follower counts, view targets, order volumes, or ROI percentages — and that is a feature, not a limitation. When a service provider is handed a number to chase, they chase the number. Not the brand. Not the user. Not the long-term. Decisions start optimising for the metric — content gets made for the algorithm, campaigns run for the dashboard, and the brand's real identity quietly erodes in the background. When the relationship eventually ends, the company is left not just without an agency — but sometimes without a brand, without an audience that genuinely connects, and having to rebuild from scratch. Worse, with an identity that needs repairing before the next chapter can even begin. This engagement is built around sustainable decisions, not impressive-looking reports. Good strategy makes the business stand stronger every month — not a number that looks good until it doesn't." },
  ];

  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif", color: C.text, paddingBottom: 80 }}>

      {/* HERO */}
      <div style={{ background: C.navy, color: C.white, padding: "44px 28px 40px" }}>
        <Sec>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 12 }}>
            <img src={LOGO_SRC} alt="The Recun Media" style={{ height: 40, objectFit: "contain" }} />
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", fontWeight: 600, letterSpacing: 2, background: "rgba(255,255,255,0.07)", padding: "5px 12px", borderRadius: 4 }}>PARTNER REVIEW — CONFIDENTIAL</span>
          </div>
          <p style={{ fontSize: 11, color: C.orange, fontWeight: 700, letterSpacing: 3, margin: "0 0 12px" }}>PREPARED FOR VAHAKA</p>
          <h1 style={{ fontSize: 32, fontWeight: 900, lineHeight: 1.2, margin: "0 0 20px", letterSpacing: -1 }}>
            The Problem Isn't Budget.<br />
            <span style={{ color: C.orange }}>It's the Absence of a Thinking Engine.</span>
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: 0, maxWidth: 520 }}>
            370 restaurants. 70,000 users. Monthly burn with no clear direction. The infrastructure exists. What's missing is someone whose only job is to think clearly — research the routes, pressure-test the options, and hand Vahaka the two that are worth walking.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 32 }}>
            {[{ v: "370+", l: "Restaurants Live", n: "Supply is ready" }, { v: "70,000", l: "Total Users", n: "Base exists" }, { v: "Bootstrapped", l: "Monthly Burn", n: "Clarity is urgent" }].map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 10, padding: "14px 16px" }}>
                <div style={{ fontSize: i === 2 ? 15 : 22, fontWeight: 900, color: i === 2 ? C.orange : C.white }}>{s.v}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 3 }}>{s.l}</div>
                <div style={{ fontSize: 10, color: i === 2 ? C.orange : "rgba(255,255,255,0.2)", marginTop: 4, fontWeight: 600 }}>{s.n}</div>
              </div>
            ))}
          </div>
        </Sec>
      </div>

      {/* THE REAL COST OF NO STRATEGY */}
      <Divider />
      <div style={{ background: C.white, padding: "40px 28px" }}>
        <Sec>
          <Tag children="The Real Problem" color={C.red} bg={C.redLight} />
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: "14px 0 6px", letterSpacing: -0.5 }}>Burning Money Without a Map.</h2>
          <p style={{ fontSize: 13, color: C.subtext, lineHeight: 1.8, margin: "0 0 24px", maxWidth: 540 }}>
            When there's no clear thinking at the top, the default is to try everything — run more ads, post more content, add more discounts. Each action feels justified. Together, they dilute each other and drain the runway.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
            {[
              { icon: "🔥", h: "Cash burning on unproven ideas", b: "Budget gets spent before anyone confirms the idea is even right. Research comes after the spend, not before." },
              { icon: "🌀", h: "Doing everything, deciding nothing", b: "10 things running at once means no single thing gets the focus needed to actually work." },
              { icon: "📉", h: "Acquisition without retention", b: "Spending to bring users into a funnel that hasn't been fixed yet. The cost compounds silently." },
              { icon: "🕳️", h: "Strategy confused with execution", b: "Agencies execute. But someone needs to decide what's worth executing — that's a different job entirely." },
            ].map((c, i) => (
              <div key={i} style={{ background: C.redLight, border: "1px solid #F5C6C2", borderRadius: 10, padding: "16px" }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{c.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.red, marginBottom: 5 }}>{c.h}</div>
                <div style={{ fontSize: 11, color: "#8B3A34", lineHeight: 1.6 }}>{c.b}</div>
              </div>
            ))}
          </div>
          <div style={{ background: C.navy, borderRadius: 10, padding: "18px 22px" }}>
            <div style={{ fontSize: 11, color: C.orange, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>THE REFRAME</div>
            <p style={{ fontSize: 14, color: C.white, fontWeight: 600, margin: "0 0 6px", lineHeight: 1.5 }}>
              The goal isn't to spend more wisely. It's to spend less, on fewer things, that are more likely to work.
            </p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.7 }}>
              Every rupee saved through better decisions is a rupee Vahaka can redirect toward hiring riders, expanding the team, or building loyalty with real users — not chasing new ones.
            </p>
          </div>
        </Sec>
      </div>

      {/* THE ROLE */}
      <Divider />
      <div style={{ background: C.bg, padding: "40px 28px" }}>
        <Sec>
          <Tag children="The Strategic Advisory Role" />
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: "14px 0 6px", letterSpacing: -0.5 }}>A Thinking Engine. Not Another Agency.</h2>
          <p style={{ fontSize: 13, color: C.subtext, lineHeight: 1.8, margin: "0 0 28px", maxWidth: 540 }}>
            Agencies execute. Advisors find the route. This engagement is specifically the latter — research, direction, and the clarity to know which two roads are worth walking before a single rupee is committed.
          </p>

          {/* The method */}
          <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", marginBottom: 20 }}>
            <div style={{ background: C.navy, padding: "16px 22px" }}>
              <div style={{ fontSize: 11, color: C.orange, fontWeight: 700, letterSpacing: 2 }}>THE METHOD</div>
            </div>
            <div style={{ padding: "20px 22px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { n: "01", t: "Research", d: "Understand the market, the user behaviour, the platform data. Ask the questions no one is asking.", color: C.orange },
                  { n: "02", t: "Routes", d: "Map 8–10 possible directions. Not all routes are equal — and most should be ruled out before they cost anything.", color: C.gold },
                  { n: "03", t: "Options", d: "From the research, present 2–3 focused options to Vahaka's leadership. Each with a clear rationale and risk profile.", color: C.green },
                  { n: "04", t: "One Road", d: "Leadership picks one. Recun executes. Cash is committed only to what's been decided — not scattered across experiments.", color: C.navy },
                ].map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", paddingBottom: i < 3 ? 20 : 0, marginBottom: i < 3 ? 20 : 0, borderBottom: i < 3 ? `1px dashed ${C.border}` : "none" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${s.color}15`, border: `2px solid ${s.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: s.color, fontWeight: 800, flexShrink: 0 }}>{s.n}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: C.text, marginBottom: 4 }}>{s.t}</div>
                      <div style={{ fontSize: 13, color: C.subtext, lineHeight: 1.6 }}>{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What advisory covers */}
          <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 22px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, letterSpacing: 2, marginBottom: 16 }}>ADVISORY COVERS — NOT LIMITED TO</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { icon: "💰", t: "Financial Model", d: "Where is Vahaka leaking? What pricing, commission, or fee structure plugs it?" },
                { icon: "🏗️", t: "Operational Model", d: "Which ops are necessary cost, and which are optional overhead?" },
                { icon: "📱", t: "Service Model", d: "What does the user experience need to change to create retention?" },
                { icon: "🛠️", t: "Tech Direction", d: "What features are worth building? Which ones are distraction?" },
                { icon: "🎙️", t: "Brand Narration", d: "How Vahaka speaks, what it stands for, and the identity that makes Surat feel ownership." },
                { icon: "📣", t: "Content & Campaign Logic", d: "What to run, when to run it, and how to decide if it worked." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "12px 14px", background: C.bg, borderRadius: 8 }}>
                  <div style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 3 }}>{item.t}</div>
                    <div style={{ fontSize: 11, color: C.subtext, lineHeight: 1.5 }}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Sec>
      </div>

      {/* WHO DOES WHAT */}
      <Divider />
      <div style={{ background: C.white, padding: "40px 28px" }}>
        <Sec>
          <Tag children="Engagement Structure" />
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: "14px 0 6px", letterSpacing: -0.5 }}>Three Lanes. Zero Overlap.</h2>
          <p style={{ fontSize: 13, color: C.subtext, lineHeight: 1.8, margin: "0 0 24px", maxWidth: 520 }}>
            Vahaka continues exactly as it operates today. This engagement is an addition — not a restructuring, not a takeover, not a partnership.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {[
              { label: "Yogii Kumar", role: "Strategic Advisor", color: C.orange, bg: C.navy, textColor: C.white, subtextColor: "rgba(255,255,255,0.35)", items: ["Research & route-finding", "Presenting 2–3 options", "Brand narration & identity", "Weekly strategy direction", "Campaign & content logic"], note: "Thinking, research & narration", noteColor: C.orange, noteBg: "rgba(255,92,26,0.15)" },
              { label: "Recun Media", role: "Execution Arm", color: C.subtext, bg: C.bg, textColor: C.text, subtextColor: C.muted, items: ["Content creation & distribution", "Campaign execution", "Client relationships", "After-service & support", "Monthly reporting"], note: "Operations & delivery", noteColor: C.subtext, noteBg: C.border },
              { label: "Vahaka", role: "The Business", color: C.green, bg: C.greenLight, textColor: C.text, subtextColor: C.subtext, items: ["Operations & riders", "Restaurant relationships", "Finance & tech decisions", "Internal team management", "Service quality"], note: "Runs as always — fully in control", noteColor: C.green, noteBg: "#D4F5E5" },
            ].map((col, i) => (
              <div key={i} style={{ background: col.bg, border: `1px solid ${i === 0 ? "transparent" : C.border}`, borderRadius: 12, padding: "18px 16px", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: col.color, letterSpacing: 2, marginBottom: 6 }}>{col.role}</div>
                <div style={{ fontSize: 15, fontWeight: 900, color: col.textColor, marginBottom: 2 }}>{col.label}</div>
                <div style={{ flex: 1, marginTop: 14 }}>
                  {col.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: col.color, flexShrink: 0, marginTop: 5 }} />
                      <div style={{ fontSize: 11, color: col.subtextColor, lineHeight: 1.5 }}>{item}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 14, padding: "7px 10px", background: col.noteBg, borderRadius: 6, fontSize: 10, color: col.noteColor, fontWeight: 600 }}>{col.note}</div>
              </div>
            ))}
          </div>
        </Sec>
      </div>

      {/* INVESTMENT */}
      <Divider />
      <div style={{ background: C.bg, padding: "40px 28px" }}>
        <Sec>
          <Tag children="Monthly Investment" />
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: "14px 0 6px", letterSpacing: -0.5 }}>₹1,80,000 / Month. Paid in Advance.</h2>
          <p style={{ fontSize: 13, color: C.subtext, lineHeight: 1.8, margin: "0 0 24px", maxWidth: 540 }}>
            The ₹80,000 performance budget is flexible — allocation between paid ads and content distribution is decided each month based on what the strategy supports. No channel is locked in advance.
          </p>
          <div style={{ display: "grid", gap: 12 }}>
            <div style={{ background: C.navy, borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "16px 22px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: 2, marginBottom: 4 }}>RECUN MEDIA</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: C.white }}>Agency Retainer</div>
                </div>
                <div style={{ fontSize: 26, fontWeight: 900, color: C.orange }}>₹1,00,000</div>
              </div>
              <div style={{ padding: "14px 22px 18px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>Content creation, distribution, execution, after-service, and reporting. Strategic advisory by Yogii Kumar is included — no separate billing. His time and research alone carry a standalone value of ₹1,00,000/month.</div>
              </div>
            </div>
            <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "16px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", background: C.goldLight }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: C.gold, letterSpacing: 2, marginBottom: 4 }}>FLEXIBLE PERFORMANCE BUDGET</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: C.text }}>Ads + Distribution</div>
                </div>
                <div style={{ fontSize: 26, fontWeight: 900, color: C.gold }}>₹80,000</div>
              </div>
              <div style={{ padding: "14px 22px 18px" }}>
                <div style={{ fontSize: 12, color: C.subtext, lineHeight: 1.7 }}>Allocated monthly between paid ads and content distribution network — based on what the strategy for that month supports. No channel is locked in. Actuals reported transparently.</div>
                <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
                  {["Meta Ads", "Content Distribution", "Influencer / Creator Activation", "Platform Promotions"].map((t, i) => (
                    <span key={i} style={{ fontSize: 10, color: C.gold, background: C.goldLight, border: `1px solid ${C.gold}40`, padding: "3px 8px", borderRadius: 4, fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 12, padding: "16px 22px", background: C.orangeLight, border: `2px solid ${C.orange}`, borderRadius: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: C.orange, letterSpacing: 2, marginBottom: 3 }}>TOTAL — PAID IN ADVANCE</div>
              <div style={{ fontSize: 12, color: C.subtext }}>No deliverable guarantees. Full strategic clarity.</div>
            </div>
            <div style={{ fontSize: 28, fontWeight: 900, color: C.orange }}>₹1,80,000</div>
          </div>
        </Sec>
      </div>

      {/* T&C */}
      <Divider />
      <div style={{ background: C.white, padding: "40px 28px" }}>
        <Sec>
          <Tag children="Terms of Engagement" color={C.subtext} bg={C.bg} />
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: "14px 0 6px", letterSpacing: -0.5 }}>Clarity Upfront. No Surprises.</h2>
          <p style={{ fontSize: 13, color: C.subtext, lineHeight: 1.8, margin: "0 0 20px" }}>Tap each term to read in full.</p>
          <div style={{ display: "grid", gap: 8 }}>
            {tcItems.map((item, i) => (
              <div key={i} style={{ border: `1px solid ${openTC === i ? C.orange : C.border}`, borderRadius: 10, overflow: "hidden", transition: "all 0.2s" }}>
                <div onClick={() => setOpenTC(openTC === i ? null : i)} style={{ padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", background: openTC === i ? C.orangeLight : C.white }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ fontSize: 18 }}>{item.icon}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: openTC === i ? C.orange : C.text }}>{item.t}</span>
                  </div>
                  <span style={{ fontSize: 18, color: C.muted, fontWeight: 300 }}>{openTC === i ? "−" : "+"}</span>
                </div>
                {openTC === i && (
                  <div style={{ padding: "0 18px 16px 18px", background: C.white }}>
                    <div style={{ fontSize: 13, color: C.subtext, lineHeight: 1.8, paddingTop: 4 }}>{item.d}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Sec>
      </div>

      {/* FOOTER */}
      <div style={{ background: C.navy, padding: "44px 28px" }}>
        <Sec>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 28 }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <img src={LOGO_SRC} alt="The Recun Media" style={{ height: 38, objectFit: "contain", marginBottom: 18 }} />
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.8, margin: 0, maxWidth: 300 }}>
                This proposal is prepared by The Recun Media for Vahaka's internal partner review. All strategy, pricing, and terms are proprietary to this engagement.
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: 18, fontWeight: 900, color: C.white, lineHeight: 1.4, margin: "0 0 6px" }}>
                Zomato can't name<br />Surat's best khakhra gali.
              </p>
              <p style={{ fontSize: 18, fontWeight: 900, color: C.orange, margin: "0 0 10px" }}>Vahaka can.</p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", margin: 0 }}>That's the entire brand.</p>
            </div>
          </div>
        </Sec>
      </div>

    </div>
  );
}
