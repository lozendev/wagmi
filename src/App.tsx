import React, { useState } from 'react';
import { Send, ArrowUpRight, ArrowUp } from 'lucide-react';
import './index.css';

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const CA = 'Adding after launch';

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyCA = () => {
    navigator.clipboard.writeText(CA).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <div className="wrap">
      <header>
        <div className="brand">
          <img src="/logo512.png" alt="WAGMI logo" />
          WAGMI
        </div>
        <nav className="flex items-center gap-3">
          <a className="btn btn-ghost" style={{ padding: '10px 14px' }} href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <XIcon size={20} />
          </a>
          <a className="btn btn-ghost" style={{ padding: '10px 14px' }} href="https://www.t.me" target="_blank" rel="noopener noreferrer">
            <Send size={20} />
          </a>
        </nav>
      </header>

      <section className="hero" style={{ borderTop: 'none' }}>
        <div className="pfp-stack">
          <img className="pfp" src="/wagmih.png" alt="WAGMI Hero" />
        </div>
        <h1 className="display" style={{ fontSize: 'clamp(92px, 16vw, 152px)', lineHeight: '1', margin: '0 0 10px 0' }}>
          <span className="serious">WAGMI</span>
        </h1>
        <p className="tagline">We’re All Gonna Make It.</p>
        <p className="tagline-sub" style={{ maxWidth: '600px', margin: '20px auto 0' }}>
          No more cope. No more paper hands. Just <span className="hl-full">belief</span>.<br />
          The coin for <b>diamond hands</b> and <b>delusional optimists</b>.
        </p>

        <div className="cta">
          <a className="btn btn-ghost" href="https://www.pump.fun" target="_blank" rel="noopener noreferrer">💰 grab some wagmi</a>
          <a className="btn btn-ghost" href="https://www.dexscreener.com" target="_blank" rel="noopener noreferrer">
            <ArrowUp color="#ccff00" size={20} strokeWidth={3} /> view green candles
          </a>
        </div>

        <div className="ca-box">
          <span className="label">Contract</span>
          <code id="ca">{CA}</code>
          <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={copyCA}>
            {copied ? 'wagmi' : 'Copy CA'}
          </button>
        </div>
        <p className="ca-note">The official currency of those who refused to sell the bag.</p>
      </section>

      <section id="burn">
        <div className="burn-hero">
          <div className="flame">🧐</div>
          <div className="burn-amount display" style={{ fontSize: 'clamp(40px, 8vw, 64px)' }}>
            know your meme
          </div>

          <div className="section-sub" style={{ margin: '32px auto 24px', maxWidth: '600px', fontSize: '18px', fontWeight: 'bold' }}>
            We don’t need a complicated story.<br />
            We don’t need utility theater.<br />
            We just believe.<br />
            <br />
            Through the dumps, the FUD, and the endless cope…<br />
            We stayed.<br />
            <br />
            This is for the ones who never sold.<br />
            This is WAGMI.
          </div>

          <a className="social-card" href="https://knowyourmeme.com/memes/wagmi-ngmi" target="_blank" rel="noopener noreferrer" style={{ maxWidth: '400px', margin: '30px auto 0', textAlign: 'left' }}>
            <div className="flex items-center gap-3">
              <div className="icon">😎</div>
              <div><div className="t">Know Your Meme</div><div className="d">the immortal catchphrase</div></div>
            </div>
            <ArrowUpRight size={20} color="#6b6b76" />
          </a>
        </div>
      </section>

      <section id="community" style={{ textAlign: 'center' }}>
        <h2 className="display">🔜 the movement</h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>The bags are heavy. The hands are diamond. Come sit with us.</p>
        <div className="social-grid" style={{ textAlign: 'left' }}>
          <a className="social-card" href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-3">
              <div className="icon"><XIcon size={24} /></div>
              <div><div className="t">X</div><div className="d">@wagmindahood - for the lolz</div></div>
            </div>
            <ArrowUpRight size={20} color="#6b6b76" />
          </a>
          <a className="social-card" href="https://www.t.me" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-3">
              <div className="icon"><Send size={24} /></div>
              <div><div className="t">Telegram</div><div className="d">t.me/wagmindahood - autists and believers</div></div>
            </div>
            <ArrowUpRight size={20} color="#6b6b76" />
          </a>
        </div>
      </section>

      <footer>
        <div className="stamp">© 2026 <span style={{ color: '#ccff00' }}>$WAGMI</span> — We’re all gonna make it (probably).</div>
        <p className="disclaimer">
          Built by believers, held by degenerates.<br />
          If you’re reading this, you’re already early (or extremely late). DYOR.
        </p>
      </footer>
    </div>
  );
}
