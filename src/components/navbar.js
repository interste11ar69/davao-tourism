import { categories } from '../data/locations.js';

export function renderNavbar(container, appState) {
  if (!container) return;
  container.innerHTML = `<header class="site-header"><div class="shell header-inner">
    <a class="brand" href="#top" aria-label="Madayaw Davao, back to top"><span class="brand-mark">M</span><span>Madayaw <strong>Davao</strong></span></a>
    <nav class="header-nav" aria-label="Main navigation"><a href="#questions">Find a place</a><a href="#places">All places</a><a href="#kadayawan">Kadayawan</a><a href="card.html">The card</a></nav>
  </div></header>`;
  const style = document.createElement('style');
  style.textContent = `.site-header{position:sticky;top:0;z-index:50;background:#fff;border-bottom:1px solid var(--line)}.header-inner{min-height:72px;display:flex;align-items:center;justify-content:space-between;gap:20px}.brand{display:inline-flex;align-items:center;gap:9px;font-weight:800;text-decoration:none;white-space:nowrap;color:var(--forest)}.brand strong{color:var(--leaf)}.brand-mark{display:grid;place-items:center;width:36px;height:36px;background:var(--forest);color:var(--gold);font-family:'Barlow Condensed',sans-serif;font-size:1.8rem;line-height:1}.header-nav{display:flex;align-items:center;gap:clamp(10px,2vw,30px);overflow-x:auto}.header-nav a{font-size:.84rem;font-weight:700;white-space:nowrap;text-decoration:none;padding:14px 0}.header-nav a:hover{text-decoration:underline;text-decoration-color:var(--gold);text-decoration-thickness:3px;text-underline-offset:7px}@media(max-width:650px){.header-inner{display:block;padding-block:9px}.brand{font-size:.92rem}.brand-mark{width:30px;height:30px;font-size:1.45rem}.header-nav{margin-top:5px;gap:22px}.header-nav a{font-size:.76rem;padding:4px 0 6px}}`;
  container.append(style);
}
