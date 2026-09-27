import { stories } from '../data/stories.js';

const questions = [
  { id: 'first-time', question: 'First time in Davao?', answer: 'Start here' },
  { id: 'family', question: 'With the family?', answer: 'Find a day out' },
  { id: 'tonight', question: 'Going out tonight?', answer: 'See evening stops' },
  { id: 'food', question: 'Looking for food?', answer: 'Find a table' },
  { id: 'stay', question: 'Need a place to stay?', answer: 'Compare city bases' }
];

export function renderHero(container, appState) {
  if (!container) return;
  container.innerHTML = `
    <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="hero-photo" role="img" aria-label="Davao City skyline from Shrine Hills"></div>
      <div class="hero-shade"></div>
      <div class="shell hero-inner">
        <div class="hero-copy">
          <p class="hero-location">A local guide to Davao City</p>
          <h1 id="hero-title">Where to,<br>Davao?</h1>
          <p class="hero-intro">The places worth telling a visitor about, gathered in one easy guide. Choose what kind of day you want, then let Maps take you there.</p>
          <a class="hero-link" href="#questions">Find your Davao stop <span aria-hidden="true">↓</span></a>
          <p class="hero-byline">Created by Lance C. Lastimosa</p>
        </div>
        <div class="hero-side-note"><span>Madayaw</span><small>A Dabawenyo welcome</small></div>
      </div>
    </section>
    <section class="questions" id="questions" aria-labelledby="questions-title">
      <div class="shell">
        <div class="questions-heading"><p class="section-kicker">The questions we hear</p><h2 id="questions-title">What sounds like your day?</h2></div>
        <div class="question-list">
          ${questions.map(q => `<button type="button" class="question" data-intent="${q.id}"><span>${q.question}</span><small>${q.answer}</small><span class="question-arrow" aria-hidden="true">↗</span></button>`).join('')}
        </div>
      </div>
    </section>
  `;
  container.querySelectorAll('[data-intent]').forEach(button => button.addEventListener('click', () => {
    appState.setIntent(button.dataset.intent);
    document.getElementById('places')?.scrollIntoView({ behavior: 'smooth' });
  }));
}

export function renderStory(container) {
  if (!container) return;
  const story = stories[0];
  container.innerHTML = `<section class="story" id="kadayawan" aria-labelledby="story-title">
    <div class="story-image"><img src="${story.image.path}" alt="${story.image.alt}" loading="lazy"><span>Kadayawan festival scene</span></div>
    <div class="story-copy"><p class="section-kicker">A city with a story</p><h2 id="story-title">${story.title}</h2><p>${story.body}</p><a href="${story.sources[0].url}" target="_blank" rel="noopener noreferrer">Read the city account <span aria-hidden="true">↗</span></a></div>
  </section>`;
}
