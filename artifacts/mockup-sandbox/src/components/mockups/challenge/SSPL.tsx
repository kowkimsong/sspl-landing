const Trophy = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9H4a2 2 0 0 1-2-2V5h4M18 9h2a2 2 0 0 0 2-2V5h-4"/><path d="M6 5h12v7a6 6 0 0 1-12 0V5Z"/><path d="M12 18v3M9 21h6"/></svg>
);
const Users = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const Scale = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 16h6M2 16h6M12 2v2M4.2 6.8 7 9.6M19.8 6.8 17 9.6M3 16l4-8 4 8M13 16l4-8 4 8"/><path d="M3 20h18"/></svg>
);
const Heart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-.9.9-.9-.9a5.5 5.5 0 0 0-7.8 7.8l.9.9L12 21l7.7-7.7.9-.9a5.5 5.5 0 0 0 .2-7.8Z"/></svg>
);

const FEATURES = [
  {
    icon: <Users />,
    title: "Individual rankings, any partner",
    body: "Career statistics follow each player individually. Join any partner on the day — your record travels with you, unaffected by availability or changing pairs."
  },
  {
    icon: <Scale />,
    title: "Calibrated handicap system",
    body: "Men's, Women's, and Mixed Doubles each carry a calibrated points handicap. Every category competes on a genuinely level field, not a structurally skewed one."
  },
  {
    icon: <Trophy />,
    title: "Round robin leading to a Cup final",
    body: "Each district earns their place through a full round robin. The top four then meet in a knockout Cup — giving the season real stakes and a worthy finish line."
  },
  {
    icon: <Heart />,
    title: "100% of sponsorship to charity",
    body: "As the league grows in reach and reputation, its sponsorship structure is built from day one to direct all proceeds into meaningful charitable causes."
  },
];

const HOF_CATEGORIES = [
  {
    title: "Career Points",
    desc: "Cumulative points earned across all seasons and competition formats."
  },
  {
    title: "Win Rate",
    desc: "Sustained excellence in performance — consistency over time, not just a single hot season."
  },
  {
    title: "Seasons Participated",
    desc: "Honouring loyalty and commitment. Showing up, season after season, is an achievement in itself."
  },
  {
    title: "Championships Won",
    desc: "Recognition for players who have lifted the Cup and delivered when it mattered most."
  },
];

const DISTRICTS = [
  "Jurong West", "Jurong East",
  "Boon Lay", "Yuhua",
  "Bukit Batok", "Bukit Gombak",
  "Chua Chu Kang", "Tengah",
];

export function SSPL() {
  return (
    <main className="pl-shell">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');

        *{box-sizing:border-box;margin:0;padding:0}
        .pl-shell{
          --yel:#d4bc00;
          --yel-lt:#f0d800;
          --yel-vivid:#ffe000;
          --yel-pale:#fdf8d0;
          --navy:#0b1c2e;
          --navy2:#0e2240;
          --ink:#0d1f33;
          --muted:#4f6478;
          --border:#dde3ec;
          width:100%;min-height:100dvh;
          font-family:'Source Sans 3',sans-serif;
          background:#f3f6fa;
          color:var(--ink);
          overflow-x:hidden
        }
        .pl-page{max-width:480px;min-height:100dvh;margin:0 auto;background:#fff;position:relative}

        /* ── TOPBAR ── */
        .pl-topbar{
          background:var(--navy);
          padding:16px 22px;
          display:flex;align-items:center;justify-content:space-between;
          border-bottom:2px solid var(--yel-lt)
        }
        .pl-logo{display:flex;align-items:center;gap:11px}
        .pl-logo-emblem{
          width:36px;height:36px;border-radius:50%;
          background:var(--yel-lt);
          display:grid;place-items:center;
          color:var(--navy);flex-shrink:0
        }
        .pl-logo-emblem svg{width:18px;height:18px}
        .pl-logo-text{line-height:1.25}
        .pl-logo-name{font-family:'Playfair Display',serif;font-size:13px;font-weight:600;color:#fff;letter-spacing:.01em}
        .pl-logo-sub{font-size:10px;font-weight:400;color:rgba(255,255,255,.45);letter-spacing:.1em;text-transform:uppercase}
        .pl-topbar-badge{
          background:var(--yel-lt);
          border-radius:4px;
          padding:5px 11px;
          font-size:10px;font-weight:800;letter-spacing:.16em;
          color:var(--navy);text-transform:uppercase
        }

        /* ── HERO ── */
        .pl-hero{
          position:relative;overflow:hidden;
          height:340px;
          background:var(--navy2) url('${import.meta.env.BASE_URL}images/sspl-hero.jpg') center 30% / cover no-repeat
        }
        /* photo overlay: dark gradient for text legibility */
        .pl-hero:before{
          content:'';position:absolute;inset:0;
          background:linear-gradient(
            to bottom,
            rgba(11,28,46,.55) 0%,
            rgba(11,28,46,.3) 40%,
            rgba(11,28,46,.82) 80%,
            rgba(11,28,46,1) 100%
          )
        }
        .pl-hero-content{position:relative;z-index:1;padding:28px 28px 36px;display:flex;flex-direction:column;justify-content:flex-end;height:100%}
        .pl-season-badge{
          display:inline-flex;align-items:center;gap:7px;
          border:1px solid rgba(240,216,0,.5);
          background:rgba(240,216,0,.12);
          border-radius:3px;
          padding:5px 13px;
          font-size:10px;font-weight:700;letter-spacing:.2em;
          color:var(--yel-vivid);text-transform:uppercase;
          margin-bottom:16px;width:fit-content
        }
        .pl-season-dot{width:5px;height:5px;border-radius:50%;background:var(--yel-vivid);animation:blink 2s ease-in-out infinite}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}
        .pl-h1{
          font-family:'Playfair Display',serif;
          font-size:40px;line-height:1.08;
          font-weight:600;color:#fff;
          letter-spacing:-.01em;
          margin-bottom:10px
        }
        .pl-h1 em{font-style:italic;color:var(--yel-vivid)}
        .pl-rule{width:36px;height:2px;background:var(--yel-lt);margin:14px 0 16px}
        .pl-tagline{
          font-size:15px;line-height:1.65;
          color:rgba(255,255,255,.62);
          font-weight:300;max-width:320px
        }

        /* ── STATS STRIP ── */
        .pl-stats{
          display:flex;background:#fff;
          border-top:3px solid var(--yel-lt);
          border-bottom:1px solid var(--border)
        }
        .pl-stat{flex:1;padding:18px 6px;text-align:center;border-right:1px solid var(--border)}
        .pl-stat:last-child{border-right:0}
        .pl-stat-n{
          font-family:'Playfair Display',serif;
          font-size:26px;font-weight:700;
          color:var(--navy);line-height:1
        }
        .pl-stat-n sup{font-size:12px;vertical-align:super;font-family:'Source Sans 3',sans-serif;font-weight:700}
        .pl-stat-l{font-size:9px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);margin-top:5px;font-weight:700}

        /* ── SHARED SECTION ── */
        .pl-section{padding:44px 28px}
        .pl-section-navy{background:var(--navy);color:#fff}
        .pl-section-cream{background:#faf8ee}
        .pl-section-white{background:#fff}
        .pl-eyebrow{
          font-size:10px;font-weight:700;text-transform:uppercase;
          letter-spacing:.22em;color:var(--yel);margin-bottom:14px
        }
        .pl-eyebrow-pale{color:rgba(240,216,0,.65)}
        .pl-h2{
          font-family:'Playfair Display',serif;
          font-size:30px;line-height:1.12;font-weight:600;
          letter-spacing:-.01em;color:var(--navy);
          margin-bottom:10px
        }
        .pl-h2-light{color:#fff}
        .pl-divider{width:32px;height:2px;background:var(--yel-lt);margin:14px 0 20px}
        .pl-body{font-size:15px;line-height:1.7;color:var(--muted);font-weight:400}
        .pl-body-light{color:rgba(255,255,255,.55)}

        /* ── MISSION QUOTE ── */
        .pl-quote{
          border-left:3px solid var(--yel-lt);
          padding:6px 0 6px 20px;
          margin:20px 0 22px
        }
        .pl-quote p{
          font-family:'Playfair Display',serif;
          font-size:18px;font-style:italic;
          line-height:1.55;color:var(--navy);font-weight:500
        }
        .pl-quote-light p{color:rgba(255,255,255,.88)}

        /* ── FEATURES ── */
        .pl-features{display:flex;flex-direction:column;margin-top:28px}
        .pl-feature{display:flex;gap:18px;align-items:flex-start;padding:22px 0;border-bottom:1px solid rgba(255,255,255,.07)}
        .pl-feature:last-child{border-bottom:0}
        .pl-feature-num{
          font-family:'Playfair Display',serif;
          font-size:22px;font-weight:700;
          color:var(--yel-lt);opacity:.5;
          line-height:1;flex-shrink:0;min-width:28px;padding-top:2px
        }
        .pl-feature-title{font-size:15px;font-weight:700;color:#fff;margin-bottom:5px;letter-spacing:-.01em}
        .pl-feature-body{font-size:13.5px;line-height:1.65;color:rgba(255,255,255,.5);font-weight:300}

        /* ── HOF ── */
        .pl-hof{display:flex;flex-direction:column;margin-top:28px;border:1px solid var(--border);border-radius:6px;overflow:hidden}
        .pl-hof-row{
          display:flex;align-items:flex-start;gap:16px;
          background:#fff;padding:18px 20px;
          border-bottom:1px solid var(--border)
        }
        .pl-hof-row:last-child{border-bottom:0}
        .pl-hof-num{
          font-family:'Playfair Display',serif;
          font-size:13px;font-weight:700;color:var(--yel);
          flex-shrink:0;min-width:20px;padding-top:2px
        }
        .pl-hof-title{font-size:14px;font-weight:700;color:var(--navy);margin-bottom:3px;letter-spacing:-.01em}
        .pl-hof-desc{font-size:13px;line-height:1.6;color:var(--muted);font-weight:400}

        /* ── DISTRICTS ── */
        .pl-districts{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:28px}
        .pl-district{
          background:#fff;
          border:1px solid var(--border);
          border-left:3px solid var(--yel-lt);
          border-radius:4px;
          padding:13px 14px;
          font-size:13px;font-weight:600;color:var(--navy);
          line-height:1.3
        }

        /* ── BIGGER PICTURE ── */
        .pl-bigger{
          background:var(--navy);
          padding:44px 28px 52px;
          position:relative;overflow:hidden
        }
        .pl-bigger:before{
          content:'';position:absolute;
          top:-80px;right:-60px;
          width:240px;height:240px;border-radius:50%;
          background:radial-gradient(circle, rgba(240,216,0,.12) 0%, transparent 65%);
          pointer-events:none
        }
        .pl-bigger:after{
          content:'';position:absolute;
          bottom:-60px;left:-40px;
          width:180px;height:180px;border-radius:50%;
          background:radial-gradient(circle, rgba(240,216,0,.08) 0%, transparent 65%);
          pointer-events:none
        }
        .pl-bigger-content{position:relative;z-index:1}

        /* ── FOOTER ── */
        .pl-footer{
          background:var(--navy);
          border-top:2px solid var(--yel-lt);
          padding:28px 28px 40px;
          text-align:center
        }
        .pl-footer-ball{
          width:28px;height:28px;border-radius:50%;
          background:radial-gradient(circle at 38% 35%, #fffde0 0%, var(--yel-vivid) 55%, #b89800 100%);
          margin:0 auto 16px;
          position:relative
        }
        .pl-footer-ball:before{
          content:'';position:absolute;inset:0;border-radius:50%;
          background:
            radial-gradient(circle at 28% 30%, rgba(0,0,0,.1) 0 6%, transparent 6%),
            radial-gradient(circle at 65% 26%, rgba(0,0,0,.1) 0 6%, transparent 6%),
            radial-gradient(circle at 75% 58%, rgba(0,0,0,.1) 0 6%, transparent 6%),
            radial-gradient(circle at 46% 72%, rgba(0,0,0,.1) 0 6%, transparent 6%)
        }
        .pl-footer p{font-size:12px;color:rgba(255,255,255,.35);line-height:1.9;font-weight:400}
        .pl-footer strong{color:rgba(255,255,255,.65);font-weight:600}

        @media (min-width:481px){
          .pl-page{min-height:calc(100dvh - 36px);margin:18px auto;border-radius:6px;overflow:hidden;box-shadow:0 8px 60px rgba(0,0,0,.22)}
        }
      `}</style>
      <div className="pl-page">

        {/* ── TOPBAR ── */}
        <header className="pl-topbar">
          <div className="pl-logo">
            <div className="pl-logo-emblem"><Trophy /></div>
            <div className="pl-logo-text">
              <div className="pl-logo-name">Singapore Seniors Pickleball League</div>
              <div className="pl-logo-sub">Est. 2025 · Invitation Only</div>
            </div>
          </div>
          <div className="pl-topbar-badge">55+</div>
        </header>

        {/* ── HERO ── */}
        <section className="pl-hero">
          <div className="pl-hero-content">
            <div className="pl-season-badge"><span className="pl-season-dot"/> Season 1 — Now Forming</div>
            <h1 className="pl-h1">A stage <em>worth<br/>showing up for.</em></h1>
            <div className="pl-rule"/>
            <p className="pl-tagline">A competitive pickleball league designed from first principles for Singapore's senior players — honouring commitment, community, and the pursuit of genuine competition.</p>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <div className="pl-stats">
          <div className="pl-stat">
            <div className="pl-stat-n">55<sup>+</sup></div>
            <div className="pl-stat-l">Age</div>
          </div>
          <div className="pl-stat">
            <div className="pl-stat-n">8</div>
            <div className="pl-stat-l">Districts</div>
          </div>
          <div className="pl-stat">
            <div className="pl-stat-n">3</div>
            <div className="pl-stat-l">Categories</div>
          </div>
          <div className="pl-stat">
            <div className="pl-stat-n">100<sup>%</sup></div>
            <div className="pl-stat-l">To Charity</div>
          </div>
        </div>

        {/* ── MISSION ── */}
        <section className="pl-section pl-section-cream">
          <div className="pl-eyebrow">Our mission</div>
          <h2 className="pl-h2">Built differently —<br/>on purpose</h2>
          <div className="pl-divider"/>
          <div className="pl-quote">
            <p>"Give senior pickleball players a stage worth showing up for, season after season."</p>
          </div>
          <p className="pl-body">Most competitive sport infrastructure is built for younger, fixed-team athletes. The Singapore Seniors Pickleball League is built specifically around how senior players actually live — flexible availability, rotating partnerships, and a deeper draw toward sustained community than short-term individual glory.</p>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="pl-section pl-section-navy">
          <div className="pl-eyebrow pl-eyebrow-pale">Structure &amp; principles</div>
          <h2 className="pl-h2 pl-h2-light">Every rule traces<br/>back to the mission</h2>
          <div className="pl-divider"/>
          <div className="pl-features">
            {FEATURES.map((f, i) => (
              <div className="pl-feature" key={f.title}>
                <div className="pl-feature-num">0{i + 1}</div>
                <div>
                  <div className="pl-feature-title">{f.title}</div>
                  <div className="pl-feature-body">{f.body}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── HALL OF FAME ── */}
        <section className="pl-section pl-section-white">
          <div className="pl-eyebrow">Recognition</div>
          <h2 className="pl-h2">Hall of Fame</h2>
          <div className="pl-divider"/>
          <p className="pl-body">Winning is not the only thing worth celebrating. The League recognises four distinct categories — ensuring that loyalty, consistency, and sustained excellence are honoured alongside trophies.</p>
          <div className="pl-hof">
            {HOF_CATEGORIES.map((h, i) => (
              <div className="pl-hof-row" key={h.title}>
                <div className="pl-hof-num">0{i + 1}</div>
                <div>
                  <div className="pl-hof-title">{h.title}</div>
                  <div className="pl-hof-desc">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── DISTRICTS ── */}
        <section className="pl-section pl-section-cream">
          <div className="pl-eyebrow">Season 1 districts</div>
          <h2 className="pl-h2">8 districts.<br/>One league.</h2>
          <div className="pl-divider"/>
          <p className="pl-body" style={{marginBottom:0}}>Representing communities across the west of Singapore — each district competes through a full round robin before the top four advance to the season Cup.</p>
          <div className="pl-districts">
            {DISTRICTS.map(d => (
              <div className="pl-district" key={d}>{d}</div>
            ))}
          </div>
        </section>

        {/* ── BIGGER PICTURE ── */}
        <section className="pl-bigger">
          <div className="pl-bigger-content">
            <div className="pl-eyebrow pl-eyebrow-pale">The bigger picture</div>
            <h2 className="pl-h2 pl-h2-light">A platform, not just a league</h2>
            <div className="pl-divider"/>
            <div className="pl-quote pl-quote-light">
              <p>"As the league grows, so does its capacity to give back."</p>
            </div>
            <p className="pl-body pl-body-light">This league is designed to outlast its first season. The scoring framework, district structure, and sponsorship model are built to scale — to more districts, a formally recognised 65+ division, and, in time, national-level events. Sponsorship is structured from day one so that 100% of proceeds flow directly to charitable causes chosen by the community.</p>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="pl-footer">
          <div className="pl-footer-ball"/>
          <p>
            <strong>Singapore Seniors Pickleball League</strong><br/>
            Open to players aged 55 and above<br/>
            Men's · Women's · Mixed Doubles<br/>
            Season 1 is by invitation. Sponsorship enquiries welcome.
          </p>
        </footer>

      </div>
    </main>
  );
}
