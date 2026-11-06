/* Da Gino al Parlamento — i18n + depth engine
   Italian is the default render (HTML). English dictionary mirrors every key. */
(function () {
  'use strict';

  var DICT = {
    it: {
      'meta.title': 'Da Gino al Parlamento: Trattoria dal Cavalier Gino, Roma',
      skip: 'Vai alla carta',
      utilNear: 'A pochi passi da Montecitorio',
      wordmarkSub: 'Trattoria dal Cavalier Gino · dal 1963',
      navSig: 'I piatti', navMenu: 'La carta', navStory: 'La storia', navVisit: 'Visita',
      heroKicker: 'Roma · Vicolo Rosini 4, dal 1963',
      heroTitleA: 'La cucina romana,', heroTitleB: 'all’ordine del giorno.',
      heroSub: 'Una trattoria storica nel cuore della Capitale, a pochi passi da Montecitorio: cucina romana con gusto e semplicità, la stessa dal 1963.',
      heroCtaCall: 'Prenota per telefono', heroCtaMenu: 'Vedi la carta',
      heroRating: '4,5 · oltre 3.200 recensioni su Google',
      cardLabel: 'Dal registro degli ospiti', cardText: 'oltre 3.200 recensioni su Google',
      heroCaption: 'Il vicolo verso Montecitorio (immagine d’atmosfera)',
      trust1: 'La stessa cucina romana, da allora',
      trust2N: 'Famiglia', trust2: 'Conduzione familiare, sala piccola',
      trust3N: 'Senza glutine', trust3: 'Opzioni senza glutine, primi e secondi',
      trust4N: 'Su prenotazione', trust4: 'I posti sono pochi: meglio telefonare',
      sigTitle: 'I piatti della casa',
      sigIntro: 'Pochi piatti, quelli romani, fatti come si sono sempre fatti. Scorri il banco: sono i piatti che gli ospiti nominano da sessant’anni.',
      dish1D: 'Pecorino romano e pepe nero sui tonnarelli: la prova del nove di ogni trattoria romana: qui la superano da sempre.',
      dish2D: 'Guanciale, uovo, pecorino e pepe. Niente panna, niente variazioni: la carbonara come la si fa a Roma.',
      dish3D: 'Nel sugo di pomodoro, con la menta e il pecorino: il quinto quarto, cucinato con pazienza.',
      dish4D: 'Crudi e cotti, secondo la stagione e il mercato: a Roma il carciofo non è un contorno, è un’istituzione.',
      dish5D: 'L’abbacchio delle feste romane, con le patate al rosmarino: uno dei secondi che gli ospiti ricordano.',
      trackHint: 'Scorri per vedere i piatti',
      menuTitle: 'La carta',
      menuIntro: 'Il menù della casa, messo agli atti: i piatti che la cucina propone ogni giorno, dalle schede e dalle recensioni del locale.',
      g1: 'Antipasti', g2: 'Primi', g3: 'Secondi', g4: 'Contorni', g5: 'Per chiudere',
      mCarcName: 'Carciofi, secondo stagione', mCarcD: 'crudi e cotti, come vuole la tradizione',
      mPuntD: 'quando è stagione',
      mContLine: 'Contorni del giorno, secondo il mercato e la stagione.',
      mFichiD: 'quando è stagione: la sorpresa finale della casa',
      mVinoName: 'Vino della casa', mVinoD: 'rosso, anche sfuso, nel quartino',
      menuNote: 'Prezzi in sala. La sala è piccola e la cucina lavora al momento: per i piatti del giorno e le disponibilità, la parola definitiva è quella della casa: telefonate.',
      storyTitle: 'Dagli atti della casa',
      storyP1: 'Nel 1963, in un vicolo di pochi metri dietro via del Corso, apre una trattoria che prende il nome dal Palazzo che ha di fronte: Montecitorio. Da allora la famiglia che l’ha aperta continua a cucinare la Roma di sempre, a pranzo e a cena, per chi lavora intorno al Parlamento e per chi arriva da lontano in cerca della città vera.',
      storyP2: 'La sala è piccola, sotto una volta dipinta, con le pareti colorate e i tavoli vicini: non aspettatevi un locale elegante o di tendenza, ma un’osteria autentica, dove il tempo sembra fermo e le porzioni sono quelle generose di una volta.',
      storyP3: 'Si mangia dentro o fuori, nei tavolini sul vicolo, con il vino della casa nel quartino. I posti sono pochi e la sala si riempie in fretta: la casa consiglia di prenotare, e la prenotazione passa dal telefono, come nel 1963.',
      storyCaption: 'Il vino della casa (immagine d’atmosfera)',
      pracTitle: 'Prima di venire',
      tile1T: 'Senza glutine', tile1D: 'Molti primi e secondi anche in versione senza glutine: gli ospiti celiaci raccontano proposte varie e attenzione vera. Ditelo quando prenotate.',
      tile2T: 'Per chi non mangia carne', tile2D: 'Carciofi, puntarelle e le paste al pecorino sono piatti di casa: la scheda del locale segnala opzioni vegetariane.',
      tile3T: 'Dentro e fuori', tile3D: 'La sala sotto la volta dipinta, oppure i tavoli nel vicolo, all’ombra: il vicolo è una stradina tranquilla del centro.',
      tile4T: 'Accessibilità', tile4D: 'La scheda del locale indica l’accesso in sedia a rotelle. Per esigenze particolari, una telefonata prima di venire è la cosa più semplice.',
      visitTitle: 'La visita',
      addrLabel: 'Indirizzo',
      visitNear: 'Tra il Pantheon e via del Corso, a pochi passi da Palazzo Montecitorio.',
      phoneLabel: 'Prenotazioni: solo per telefono',
      bookNote: 'La sala si riempie in fretta, soprattutto a pranzo: prenotate in anticipo.',
      callBtn: 'Chiama ora', dirBtn: 'Indicazioni stradali',
      hoursLabel: 'Orari: le sedute',
      dayMon: 'Lunedì', closed: 'Chiuso', dayTueSun: 'Martedì - Domenica',
      hoursNote: 'Orari secondo la scheda TripAdvisor del locale. Altri elenchi riportano giorni e orari diversi (domenica chiusa, cena dalle 20:00): per essere sicuri, confermate per telefono.',
      footDemo: 'Pagina dimostrativa non ufficiale, realizzata come concept. Immagini d’atmosfera generate; piatti, orari e informazioni dalle schede pubbliche del locale, da verificare con la casa.',
      barCall: 'Chiama', barMenu: 'Carta', barDir: 'Indicazioni'
    },
    en: {
      'meta.title': 'Da Gino al Parlamento: Trattoria dal Cavalier Gino, Rome',
      skip: 'Skip to the menu',
      utilNear: 'A few steps from Montecitorio',
      wordmarkSub: 'Trattoria dal Cavalier Gino · since 1963',
      navSig: 'The dishes', navMenu: 'The menu', navStory: 'The story', navVisit: 'Visit',
      heroKicker: 'Rome · Vicolo Rosini 4, since 1963',
      heroTitleA: 'Roman cooking,', heroTitleB: 'on the order of the day.',
      heroSub: 'A historic trattoria in the heart of the Capital, a few steps from Montecitorio: Roman cuisine with taste and simplicity, the same since 1963.',
      heroCtaCall: 'Book by phone', heroCtaMenu: 'See the menu',
      heroRating: '4.5 · over 3,200 reviews on Google',
      cardLabel: 'From the guest register', cardText: 'over 3,200 reviews on Google',
      heroCaption: 'The alley, towards Montecitorio (atmosphere image)',
      trust1: 'The same Roman cooking, ever since',
      trust2N: 'Family', trust2: 'Family-run, a small dining room',
      trust3N: 'Gluten-free', trust3: 'Gluten-free options, first and main courses',
      trust4N: 'Book ahead', trust4: 'Seats are few: best to phone',
      sigTitle: 'The house dishes',
      sigIntro: 'A few dishes, the Roman ones, made the way they have always been made. Scroll the counter: these are the dishes guests have been naming for sixty years.',
      dish1D: 'Pecorino Romano and black pepper over hand-cut tonnarelli: the litmus test of any Roman trattoria: passed here for decades.',
      dish2D: 'Guanciale, egg, pecorino and pepper. No cream, no variations: carbonara the way Rome makes it.',
      dish3D: 'In tomato sauce, with mint and pecorino: the “fifth quarter”, cooked with patience.',
      dish4D: 'Raw and cooked, by season and market: in Rome the artichoke is not a side dish, it is an institution.',
      dish5D: 'The abbacchio of Roman feasts, with rosemary potatoes: one of the main courses guests remember.',
      trackHint: 'Scroll to see the dishes',
      menuTitle: 'The menu',
      menuIntro: 'The house menu, entered into the record: the dishes the kitchen serves every day, from the restaurant’s own listings and reviews.',
      g1: 'Starters', g2: 'First courses', g3: 'Main courses', g4: 'Sides', g5: 'To finish',
      mCarcName: 'Artichokes, by season', mCarcD: 'raw and cooked, as tradition dictates',
      mPuntD: 'when in season',
      mContLine: 'Side dishes of the day, by market and season.',
      mFichiD: 'when in season: the house’s final surprise',
      mVinoName: 'House wine', mVinoD: 'red, also unbottled, by the quartino',
      menuNote: 'Prices are shown in the dining room. The room is small and the kitchen cooks to order: for the day’s dishes and availability, the house’s word is final: please phone.',
      storyTitle: 'From the house record',
      storyP1: 'In 1963, in an alley a few metres long behind Via del Corso, a trattoria opened taking its name from the Palazzo across the way: Montecitorio. Ever since, the family that opened it has kept cooking the Rome of always, at lunch and dinner, for the people who work around Parliament and for those who come from far away looking for the real city.',
      storyP2: 'The room is small, under a painted vault, with colourful walls and close-set tables: do not expect an elegant or trendy place, but an authentic osteria, where time seems to stand still and portions are the generous ones of the past.',
      storyP3: 'You eat inside or outside, at the little tables in the alley, with the house wine in a quartino. Seats are few and the room fills fast: the house recommends booking, and bookings go through the telephone: just like in 1963.',
      storyCaption: 'The house wine (atmosphere image)',
      pracTitle: 'Before you come',
      tile1T: 'Gluten-free', tile1D: 'Many first and main courses also come in a gluten-free version: coeliac guests report real variety and care. Mention it when you book.',
      tile2T: 'If you don’t eat meat', tile2D: 'Artichokes, puntarelle and the pecorino pastas are house dishes: the restaurant’s listing flags vegetarian options.',
      tile3T: 'Inside and out', tile3D: 'The room under the painted vault, or the tables in the alley, in the shade: the alley is a quiet little street in the centre.',
      tile4T: 'Accessibility', tile4D: 'The restaurant’s listing indicates wheelchair access. For particular needs, a phone call before you come is the simplest thing.',
      visitTitle: 'The visit',
      addrLabel: 'Address',
      visitNear: 'Between the Pantheon and Via del Corso, a few steps from Palazzo Montecitorio.',
      phoneLabel: 'Bookings: by phone only',
      bookNote: 'The room fills quickly, especially at lunch: book ahead.',
      callBtn: 'Call now', dirBtn: 'Get directions',
      hoursLabel: 'Hours: the sittings',
      dayMon: 'Monday', closed: 'Closed', dayTueSun: 'Tuesday - Sunday',
      hoursNote: 'Hours per the restaurant’s TripAdvisor listing. Other listings show different days and hours (closed on Sunday, dinner from 8:00 pm): to be sure, confirm by phone.',
      footDemo: 'Unofficial demo page, made as a concept. Atmosphere images are generated; dishes, hours and information come from the restaurant’s public listings and should be confirmed with the house.',
      barCall: 'Call', barMenu: 'Menu', barDir: 'Directions'
    }
  };

  var STORE_KEY = 'gino-lang';
  var current = 'it';

  function apply(lang) {
    var dict = DICT[lang];
    if (!dict) return;
    current = lang;
    document.documentElement.lang = lang;
    document.title = dict['meta.title'];
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (dict[key] !== undefined) nodes[i].textContent = dict[key];
    }
    var btns = document.querySelectorAll('.lang-btn');
    for (var j = 0; j < btns.length; j++) {
      var active = btns[j].getAttribute('data-lang') === lang;
      btns[j].classList.toggle('is-active', active);
      btns[j].setAttribute('aria-pressed', active ? 'true' : 'false');
    }
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* private mode */ }
  }

  var saved = 'it';
  try { saved = localStorage.getItem(STORE_KEY) || 'it'; } catch (e) { /* ignore */ }
  if (saved !== 'it') apply(saved);

  var langBtns = document.querySelectorAll('.lang-btn');
  for (var b = 0; b < langBtns.length; b++) {
    langBtns[b].addEventListener('click', function () { apply(this.getAttribute('data-lang')); });
  }

  /* ---------- reveals ---------- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    for (var r = 0; r < revealEls.length; r++) revealEls[r].classList.add('in');
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    for (var k = 0; k < revealEls.length; k++) io.observe(revealEls[k]);
  }

  /* ---------- depth engine (parallax / tilt / gallery curve) ---------- */
  if (reduceMotion) return;
  var finePointer = window.matchMedia('(pointer: fine)').matches;

  var progress = document.getElementById('progressRule');
  var heroImg = document.getElementById('heroImg');
  var archA = document.querySelector('.arch-a');
  var archB = document.querySelector('.arch-b');
  var tilt = document.getElementById('heroTilt');
  var scene = document.getElementById('heroScene');
  var track = document.getElementById('dishTrack');
  var dishFrames = track ? track.querySelectorAll('.dish-frame') : [];

  var targetPX = 0, targetPY = 0, curPX = 0, curPY = 0;
  var ticking = false;

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  function frame() {
    ticking = false;
    var y = window.scrollY || 0;
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    if (progress) progress.style.transform = 'scaleX(' + (max > 0 ? clamp(y / max, 0, 1) : 0) + ')';

    curPX += (targetPX - curPX) * 0.08;
    curPY += (targetPY - curPY) * 0.08;

    if (y < window.innerHeight * 1.4) {
      if (heroImg) heroImg.style.transform = 'scale(1.13) translate3d(' + (curPX * -10) + 'px,' + (clamp(y * 0.05, 0, 18) + curPY * -8) + 'px,0)';
      if (archA) archA.style.transform = 'translate3d(' + (curPX * 14) + 'px,' + (y * 0.04 + curPY * 10) + 'px,0)';
      if (archB) archB.style.transform = 'translate3d(' + (curPX * -20) + 'px,' + (y * 0.08 + curPY * -14) + 'px,0)';
      if (tilt && finePointer) tilt.style.transform = 'rotateX(' + (curPY * -4) + 'deg) rotateY(' + (curPX * 4) + 'deg)';
    }

    if (track && dishFrames.length) {
      var tr = track.getBoundingClientRect();
      if (tr.bottom > 0 && tr.top < window.innerHeight) {
        var centre = tr.left + tr.width / 2;
        for (var d = 0; d < dishFrames.length; d++) {
          var fr = dishFrames[d].getBoundingClientRect();
          var dist = (fr.left + fr.width / 2 - centre) / (tr.width / 2 || 1);
          dishFrames[d].style.transform = 'rotateY(' + clamp(dist * -11, -11, 11) + 'deg)';
        }
      }
    }
    if (Math.abs(targetPX - curPX) > 0.001 || Math.abs(targetPY - curPY) > 0.001) requestTick();
  }

  function requestTick() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }

  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick);
  if (track) track.addEventListener('scroll', requestTick, { passive: true });

  if (scene && finePointer) {
    scene.addEventListener('pointermove', function (ev) {
      var r = scene.getBoundingClientRect();
      targetPX = ((ev.clientX - r.left) / (r.width || 1) - 0.5) * 2;
      targetPY = ((ev.clientY - r.top) / (r.height || 1) - 0.5) * 2;
      requestTick();
    });
    scene.addEventListener('pointerleave', function () { targetPX = 0; targetPY = 0; requestTick(); });
  }
  requestTick();
})();
