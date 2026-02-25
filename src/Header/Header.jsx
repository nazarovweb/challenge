import React from "react";
import "./Header.css";

const hits = [
  { id: 1, title: "Pop Hits", subtitle: "Top 2026", accent: "accent1" },
  { id: 2, title: "Rap Vibe", subtitle: "Hot Beats", accent: "accent2" },
  { id: 3, title: "Dance Mix", subtitle: "Energy", accent: "accent3" },
];

export default function Header() {
  return (
    <div className="hero">
      <div className="glow">
        <div className="glowBlob blob1" />
        <div className="glowBlob blob2" />
        <div className="glowBlob blob3" />
      </div>

      <div className="container">
        <div className="grid">
          <div className="left">
            <h1 className="title">
              LIVE YOUR DAY <br />
              WITH <span className="titleAccent">MUSIC</span>
            </h1>

            <p className="desc">
              Make your day more lively with a variety of premium music. Feel
              relaxed, focus better, and enjoy your moment.
            </p>

            <div className="btnRow">
              <button className="btnPrimary">GET STARTED</button>
              <button className="btnGhost">VIEW PLANS</button>
            </div>

            <div className="hits">
              <div className="hitsTop">
                <h3 className="hitsTitle">Hit&apos;s Music</h3>

                <div className="arrows">
                  <button className="iconBtn" aria-label="prev">
                    <ChevronLeft />
                  </button>
                  <button className="iconBtn" aria-label="next">
                    <ChevronRight />
                  </button>
                </div>
              </div>

              <div className="cards">
                {hits.map((h) => (
                  <div key={h.id} className="card">
                    <div className={`cardArt ${h.accent}`} />
                    <div className="cardText">
                      <p className="cardTitle">{h.title}</p>
                      <p className="cardSub">{h.subtitle}</p>
                    </div>
                    <div className="cardGlow" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="right">
            <div className="phoneWrap">
              <div className="phoneInner">
                <div className="personWrap">
                  <div className="personCircle" />
                </div>

                <div className="badge">
                  <span className="badgeIcon">
                    <Headphones />
                  </span>
                  <div className="badgeText">
                    <p className="badgeTitle">Now Playing</p>
                    <p className="badgeSub">Premium Mix</p>
                  </div>
                </div>

                <div className="stats">
                  <StatBox label="Listeners" value="12.4k" />
                  <StatBox label="Likes" value="3.8k" />
                  <StatBox label="Plays" value="54k" />
                </div>
              </div>
            </div>

            <div className="dots" aria-hidden="true">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="dot" style={{ opacity: 0.25 + i * 0.08 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="statBox">
      <p className="statLabel">{label}</p>
      <p className="statValue">{value}</p>
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="svg">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="svg">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Headphones() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="svg">
      <path
        d="M4 13v4a2 2 0 0 0 2 2h1v-8H6a2 2 0 0 0-2 2Zm14-2v8h1a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M4 13a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}