console.log("[FutureCMS] app.js loaded");

const baseSlides = [
  {
    image: "../assets/1.png",
    eyebrow: "News Â· Event",
    title: "Neon Nights in Habbo",
    lead: "Rooftop Party mit Live-Drops, DJ-Set und offenem Badge Rail.",
    desc: "Badge-Rail offen, DJ-Set live und Mikro-Quests mit Timer â€“ schnapp dir die Neon-Drops bevor sie weg sind.",
    body: "Frank Ã¶ffnet das Rooftop fÃ¼r eine Nacht voller Neon. Sicher dir den limitierten Drop, triff die Crew auf der Terrasse, nimm an der Dance-Off-Challenge teil und schlieÃŸe alle Mikro-Quests, bevor der Timer endet. Die Badge-Rail rotiert jede 30 Minuten, also bleib dran.",
    chips: ["Event", "Live Drop", "Rooftop"],
    labels: ["Event", "Badge Drop", "Live"],
    createdAt: "12.04.2025",
    author: "c00kie",
    pill: "Event",
    heroAlt: "Rooftop Event Neon Nights",
  },
  {
    image: "../assets/4.png",
    eyebrow: "News Â· Special",
    title: "Pirate Bay Parade",
    lead: "Crew-Only Floors, Parade Route und ein exklusiver Patch fÃ¼r Mitfahrer.",
    desc: "Die Parade fÃ¤hrt einmal pro Stunde. Hol dir an jedem Dock einen Stempel und lÃ¶se danach den Patch ein.",
    body: "Setz die Segel: Der Hafen ist fÃ¼r eine Parade gesperrt. Fahre die Route ab, sammle Stempel an jedem Dock, lÃ¶se den Sonder-Patch beim Quartermaster ein und sichere dir die Tagesquest. Wer die Geheim-Route findet, schaltet zusÃ¤tzlich ein zeitlich limitiertes Banner frei.",
    chips: ["Crew Only", "Route Map", "Patch"],
    labels: ["Special", "Event", "Collectible"],
    createdAt: "03.05.2025",
    author: "c00kie",
    pill: "Special",
    heroAlt: "Pirate Parade mit Hafen",
  },
  {
    image: "../assets/5.png",
    eyebrow: "News Â· RÃ¤ume",
    title: "Bazaar & Desert Hangout",
    lead: "Neue Questlinie im Bazaar mit Builder Picks, Merchants und RÃ¤tselrÃ¤umen.",
    desc: "Builder Picks kuratieren tÃ¤glich drei Spots. LÃ¶se die RÃ¤tselrÃ¤ume, um den goldenen Teppich zu claimen.",
    body: "Der Bazaar ist live: Tausche mit den HÃ¤ndlern, hol dir die WÃ¼sten-Badges und lÃ¶se die drei RÃ¤tselrÃ¤ume, um den goldenen Teppich zu bekommen. Builder Picks kuratieren die besten Spots, Merchants rotieren ihre Angebote alle zwei Stunden und ein versteckter Tunnel fÃ¼hrt zu einer geheimen Collectible-Kammer.",
    chips: ["Top RÃ¤ume", "Questlinie", "Builder Picks"],
    labels: ["Community", "RÃ¤ume", "Quest"],
    createdAt: "18.05.2025",
    author: "c00kie",
    pill: "RÃ¤ume",
    heroAlt: "Bazaar Desert Hangout RÃ¤ume",
  },
  {
    image: "../assets/6.png",
    eyebrow: "News Â· Community",
    title: "Countryside Meetup",
    lead: "Hof-Meetup mit SammlerbÃ¶rse, Chill-Area und sicherer Trading-Zone.",
    desc: "Tausch Collectibles in der Safe-Zone, mach die Stall-Rallye und sichere dir die neue SchÃ¤rpe.",
    body: "Triff die Community am Stall, tausch Collectibles in der abgesicherten Trading-Zone und nimm an der Stall-Rallye teil, um die neue Hof-SchÃ¤rpe freizuschalten. Die Chill-Area hat ein offenes Mic, wÃ¤hrend die SammlerbÃ¶rse jede volle Stunde ein seltenes StÃ¼ck rotieren lÃ¤sst.",
    chips: ["Collectibles", "Friends", "Safe Space"],
    labels: ["Community", "Meetup", "Trading"],
    createdAt: "27.05.2025",
    author: "c00kie",
    pill: "Community",
    heroAlt: "Countryside Meetup Farm Szene",
  },
];

// Placeholder-Slide fÃ¼r Index wenn keine News vorhanden
const placeholderSlide = {
  image: '/assets/news/notavailable.svg',
  eyebrow: 'News',
  title: 'Keine News verfÃ¼gbar',
  lead: '',
  desc: '',
  body: '',
  chips: [],
  labels: [],
  createdAt: '',
  author: '',
  pill: 'News',
  heroAlt: 'Keine News',
};

let slides = [placeholderSlide];

(() => {
  const DEBUG_CLS = false;
  const tabs = document.querySelectorAll('.tab');
  const panels = {
    login: document.getElementById('panel-login'),
    register: document.getElementById('panel-register'),
    recover: document.getElementById('panel-recover'),
  };
  const frankMessageEl = document.getElementById('frank-message');
  const frankMessages = [
    "Ticket holen, rein ins Hotel.",
    "Dein Raum, deine Regelnâ€¦ naja, fast.",
    "Nicht rennen! Das ist ein gemÃ¼tliches Hotel.",
    "Badges zeigen? Immer her damit.",
    "Heute schon jemanden gegrÃ¼ÃŸt?",
    "Neue Freunde warten schon im Flur.",
    "Pro-Tipp: Nett sein bringt mehr als Taler.",
    "Wennâ€™s glitzert, ist es wahrscheinlich selten.",
    "Kaffee im Inventar? Noch nicht, aber trÃ¤umen darfst du.",
    "Ein guter Spruch im Motto wirkt Wunder.",
    "Wer baut, gewinnt. Wer trollt, fliegt.",
    "Events sind wie Kekse: eins geht immer.",
    "Manchmal ist AFK auch nur â€žich plane was GroÃŸesâ€œ.",
    "Screenshot oder es ist nie passiert.",
    "Room-Design: 10/10, Chaos: 11/10.",
    "Heute ist ein guter Tag fÃ¼r eine Quest.",
    "Freunde online? Zeit fÃ¼r Unsinnâ€¦ Ã¤h, SpaÃŸ.",
    "Teamwork: gemeinsam rein, gemeinsam raus.",
    "Du brauchst Hilfe? Frag, bevor du ragequittest.",
    "Frank sagt: Sei freundlich. Das ist OP.",
  ];
  let frankIndex = 0;
  let frankTimer = null;
  let frankPaused = false;
  const alertCenter = document.getElementById('alert-center');
  const btnTheme = document.getElementById('btn-theme');
  const themeKey = 'habbo-theme';
  const modeState = { winter: false, halloween: false, newyear: false };
  const SEASON_WS_PATH = '/ws/season';
  const SEASON_POLL_MS = 15000;
  let seasonSocket = null;
  let seasonReconnectTimer = null;
  let seasonPollTimer = null;
  const gateState = { ready: false, prerelease: false, targetAt: null, maintenance: false, maintHeadline: '', maintMessage: '', maintEta: null };
  let gateCountdownTimer = null;
  let prCountdownInterval = null;
  let prExpiryNotified = false;
  let redirecting = false;
  let snowField = null;
  let batField = null;
  let ghostField = null;
  let fireworkField = null;

  const MAINT_KEY = 'maintenance_active';
  const MAINT_HEAD_KEY = 'maintenance_headline';
  const MAINT_MSG_KEY = 'maintenance_message';
  const MAINT_ETA_KEY = 'maintenance_eta';
  const BYPASS_KEY = 'maintenance_bypass';
  const BYPASS_UNTIL_KEY = 'maintenance_bypass_until';
  // Gate + Pre-Release
  const GATE_BYPASS_KEY = 'gate_bypass';
  const boundStaffForms = new WeakSet();

  const ensureGatePendingStyles = () => {
    if (document.getElementById('gate-pending-style')) return;
    const style = document.createElement('style');
    style.id = 'gate-pending-style';
    style.textContent = `html.gate-pending body { display: none !important; }`;
    document.head.appendChild(style);
  };

  const markGatePending = () => {
    ensureGatePendingStyles();
    document.documentElement.classList.add('gate-pending');
  };

  const clearGatePending = () => {
    document.documentElement.classList.remove('gate-pending');
  };
  markGatePending();

  const notify = typeof window.notify === 'function'
    ? window.notify
    : (message, type = 'info') => {
      if (alertCenter) {
        const node = document.createElement('div');
        node.className = `alert ${type}`.trim();
        node.textContent = message || '';
        alertCenter.appendChild(node);
        setTimeout(() => node.remove(), 4000);
        return;
      }
      if (message) {
        console[type === 'error' ? 'error' : 'log'](message);
      }
    };

  // Toast system
  const ensureToastStyles = () => {
    if (document.getElementById('toast-styles')) return;
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
      #toast-container { position: fixed; top: 16px; right: 16px; z-index: 9999; display: flex; flex-direction: column; gap: 10px; pointer-events: none; }
      .toast { pointer-events: auto; max-width: 320px; padding: 12px 14px; border-radius: 10px; color: #fff; font-weight: 600; box-shadow: 0 10px 30px rgba(0,0,0,0.35); background: rgba(30,30,30,0.95); border: 1px solid rgba(255,255,255,0.06); }
      .toast.error { background: #c62828; border-color: #b71c1c; }
      .toast.success { background: #2e7d32; border-color: #1b5e20; }
    `;
    document.head.appendChild(style);
  };

  const ensureToastContainer = () => {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }
    return container;
  };

  const showToast = (message, type = '') => {
    ensureToastStyles();
    const container = ensureToastContainer();
    const node = document.createElement('div');
    node.className = `toast ${type || ''}`.trim();
    node.textContent = message || '';
    container.appendChild(node);
    setTimeout(() => node.remove(), 4000);
  };

  const getMaintenanceConfig = () => {
    const active = gateState.maintenance || localStorage.getItem(MAINT_KEY) === '1';
    return {
      active,
      headline: gateState.maintHeadline || localStorage.getItem(MAINT_HEAD_KEY) || 'Wir sind bald wieder fÃ¼r Euch da!',
      message: gateState.maintMessage || localStorage.getItem(MAINT_MSG_KEY) || 'Wir aktualisieren gerade das Hotel. Schau gleich wieder vorbei.',
      etaAt: gateState.maintEta || localStorage.getItem(MAINT_ETA_KEY) || '',
      theme: 'default',
    };
  };

  const getPreReleaseConfig = () => ({
    targetAt: gateState.targetAt || '',
    headline: 'Check-In soon',
    message: 'Wir polieren die Lobby â€“ der Start steht kurz bevor.',
    logoUrl: '../assets/habbo.svg',
  });

  const getGateMode = () => {
    if (gateState.prerelease) return 'prerelease';
    if (gateState.maintenance) return 'maintenance';
    return 'off';
  };

  const isPrereleaseExpired = () => {
    const ts = Date.parse(gateState.targetAt);
    return gateState.prerelease && Number.isFinite(ts) && Date.now() >= ts;
  };

  const getEffectiveGateMode = () => {
    if (isPrereleaseExpired()) return gateState.maintenance ? 'maintenance' : 'off';
    return getGateMode();
  };

  const isMaintenanceActive = () => getGateMode() === 'maintenance' || getMaintenanceConfig().active;

  function syncInfoHeaderNav() {
    const mode =
      (typeof getEffectiveGateMode === 'function' && getEffectiveGateMode()) ||
      (typeof getGateMode === 'function' && getGateMode()) ||
      'off';
    const maintenanceActive = mode === 'maintenance';
    document.querySelectorAll('[data-header-live]').forEach(el => {
      el.hidden = maintenanceActive;
    });
    document.querySelectorAll('[data-header-maint]').forEach(el => {
      el.hidden = !maintenanceActive;
    });
  }

  const hasValidBypass = () => {
    const token = sessionStorage.getItem(BYPASS_KEY);
    const until = Number(sessionStorage.getItem(BYPASS_UNTIL_KEY) || '0');
    if (token === '1' && until && Date.now() < until) return true;
    if (token === '1') {
      sessionStorage.removeItem(BYPASS_KEY);
      sessionStorage.removeItem(BYPASS_UNTIL_KEY);
    }
    return false;
  };

  const hasGateBypass = () => sessionStorage.getItem(GATE_BYPASS_KEY) === '1' || hasValidBypass();

  const grantBypass = (ttlMs = 60 * 60 * 1000) => {
    sessionStorage.setItem(BYPASS_KEY, '1');
    sessionStorage.setItem(BYPASS_UNTIL_KEY, String(Date.now() + ttlMs));
    sessionStorage.setItem(GATE_BYPASS_KEY, '1');
  };

  const revokeBypass = () => {
    sessionStorage.removeItem(BYPASS_KEY);
    sessionStorage.removeItem(BYPASS_UNTIL_KEY);
    sessionStorage.removeItem(GATE_BYPASS_KEY);
  };

  const normalizePageName = (value = '') => {
    const clean = (value || '').toLowerCase().split(/[?#]/)[0];
    const segments = clean.split('/').filter(Boolean);
    const segment = segments.length ? segments[segments.length - 1] : '';
    const withoutExt = segment.replace(/\.html$/, '');
    return withoutExt || 'index';
  };

  // Info-Seiten die auch bei Maintenance/Prerelease erreichbar sein sollen
  const INFO_PAGES = new Set(['impressum', 'hilfe', 'sicherheit']);

  const replaceIfDifferent = (target) => {
    const targetPage = normalizePageName(target);
    const currentPage = normalizePageName(window.location.pathname || '');
    if (redirecting) return;
    if (currentPage !== targetPage) {
      redirecting = true;
      const targetPath = targetPage === 'index' ? '/' : `/${targetPage}`;
      window.location.replace(targetPath);
    }
  };

  function checkSeasonalMode() {
    return false;
  }

  const enforceGate = () => {
    const mode = getEffectiveGateMode();
    const path = (window.location.pathname || '').toLowerCase();
    const isPrereleasePage = document.body?.classList.contains('prerelease-page');
    const isMaintenancePage = document.body?.classList.contains('maintenance-page');
    const onMaintenance = isMaintenancePage || path.endsWith('/maintenance') || path.endsWith('/maintenance.html') || path.includes('/maintenance');
    const onPrerelease = isPrereleasePage || path.endsWith('/prerelease') || path.endsWith('/prerelease.html') || path.includes('/prerelease');
    const pageName = normalizePageName(path);
    const isInfoPage = INFO_PAGES.has(pageName);

    if (hasGateBypass()) return false;

    if (!gateState.ready) return false;

    if (mode === 'prerelease') {
      if (!onPrerelease && !isInfoPage) {
        replaceIfDifferent('prerelease');
        return true;
      }
      return false;
    }

    if (mode === 'maintenance') {
      // Erlaube: Maintenance-Seite, Prerelease-Seite (falls beides aktiv), Info-Seiten
      if (!onMaintenance && !onPrerelease && !isInfoPage) {
        replaceIfDifferent('maintenance');
        return true;
      }
      return false;
    }

    // If gate is off but user is on a gate page, send back to index
    if (mode !== 'prerelease' && onPrerelease) {
      replaceIfDifferent('index');
      return true;
    }
    if (mode !== 'maintenance' && onMaintenance) {
      replaceIfDifferent('index');
      return true;
    }
    return false;
  };

  if (enforceGate()) return;

  // Logo-Klick auf Info-Seiten zur Gate-Home navigieren
  const getGateHomeTarget = () => {
    // Mit Bypass und Maintenance aktiv -> direkt zu Maintenance
    if (hasGateBypass() && gateState.maintenance) return 'maintenance';
    // Sonst nach Gate-Mode
    if (gateState.prerelease) return 'prerelease';
    if (gateState.maintenance) return 'maintenance';
    return 'index';
  };

  const wireInfoPageLogo = () => {
    const pageName = normalizePageName(window.location.pathname || '');
    if (!INFO_PAGES.has(pageName)) return;
    const logoAnchors = document.querySelectorAll('a.brand, .brand a, header a[href*="index"], header a[href="/"], header a[href="/?tab=login"]');
    logoAnchors.forEach((anchor) => {
      if (anchor.dataset.gateLogoWired === '1') return;
      anchor.dataset.gateLogoWired = '1';
      const updateHref = () => {
        const target = getGateHomeTarget();
        anchor.setAttribute('href', target === 'index' ? '/' : `/${target}`);
      };
      updateHref();
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        replaceIfDifferent(getGateHomeTarget());
      });
    });
  };

  wireInfoPageLogo();

  function getToken() {
    return localStorage.getItem('auth_token') || '';
  }

  function setToken(token) {
    if (token) {
      localStorage.setItem('auth_token', token);
    }
  }

  function clearToken() {
    localStorage.removeItem('auth_token');
  }

  async function apiFetch(path, { method = 'GET', body } = {}) {
    const headers = { 'Content-Type': 'application/json' };
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;

    const options = { method, headers };
    if (typeof body !== 'undefined') options.body = JSON.stringify(body);

    let response;
    try {
      response = await fetch(path, options);
    } catch (err) {
      throw new Error('Server nicht erreichbar');
    }

    let text = '';
    let data = null;
    try {
      text = await response.text();
      data = text ? JSON.parse(text) : {};
    } catch (err) {
      data = null;
    }

    if (!response.ok) {
      const message = (data && (data.message || data.error)) || text || `HTTP ${response.status}`;
      throw new Error(message);
    }

    return data || {};
  }

  function initClsDebug() {
    if (!DEBUG_CLS || typeof PerformanceObserver === 'undefined') return;
    let total = 0;
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.hadRecentInput) continue;
          total += entry.value;
          console.log('[CLS]', { value: entry.value, total, sources: entry.sources });
        }
      });
      observer.observe({ type: 'layout-shift', buffered: true });
    } catch (err) {
      console.warn('CLS observer failed', err);
    }
  }


  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (btnTheme) btnTheme.textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
    localStorage.setItem(themeKey, theme);
  }

  function initTheme() {
    const saved = localStorage.getItem(themeKey);
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
      return;
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }

  function showPanel(name) {
    const availablePanels = Object.entries(panels).filter(([, el]) => el);
    if (!availablePanels.length) return;
    availablePanels.forEach(([key, el]) => {
      el.classList.toggle('hidden', key !== name);
    });
    tabs.forEach(tab => tab.classList.toggle('active', tab.dataset.panel === name));
  }

  function ensureSnowField() {
    if (snowField) return snowField;
    const container = document.createElement('div');
    container.className = 'snow-field';
    container.setAttribute('aria-hidden', 'true');
    document.body.appendChild(container);
    snowField = container;
    return snowField;
  }

  function ensureBatField() {
    if (batField) return batField;
    const container = document.createElement('div');
    container.className = 'bat-field';
    container.setAttribute('aria-hidden', 'true');
    document.body.appendChild(container);
    batField = container;
    return batField;
  }

  function ensureGhostField() {
    if (ghostField) return ghostField;
    const container = document.createElement('div');
    container.className = 'ghost-field';
    container.setAttribute('aria-hidden', 'true');
    document.body.appendChild(container);
    ghostField = container;
    return ghostField;
  }

  function ensureFireworkField() {
    if (fireworkField) return fireworkField;
    const container = document.createElement('div');
    container.className = 'firework-field';
    container.setAttribute('aria-hidden', 'true');
    document.body.appendChild(container);
    fireworkField = container;
    return fireworkField;
  }

  function makeSnowflake() {
    const flake = document.createElement('div');
    flake.className = 'snowflake';
    const size = 4 + Math.random() * 6;
    const duration = 8 + Math.random() * 10;
    const delay = -Math.random() * duration;
    const drift = (Math.random() * 24 - 12).toFixed(1);
    flake.style.left = `${Math.random() * 100}%`;
    flake.style.width = `${size}px`;
    flake.style.height = `${size}px`;
    flake.style.opacity = (0.5 + Math.random() * 0.5).toFixed(2);
    flake.style.animationDuration = `${duration}s`;
    flake.style.animationDelay = `${delay}s`;
    flake.style.setProperty('--drift', `${drift}px`);
    return flake;
  }

  function makeBat() {
    const bat = document.createElement('div');
    bat.className = 'bat';
    const duration = 10 + Math.random() * 10;
    const delay = -Math.random() * duration;
    const startY = 5 + Math.random() * 75;
    const endY = Math.min(95, Math.max(5, startY + (Math.random() * 30 - 15)));
    const midY = Math.min(95, Math.max(5, (startY + endY) / 2 + (Math.random() * 18 - 9)));
    const fromLeft = Math.random() < 0.5;
    const startX = fromLeft ? (-12 + Math.random() * 6) : (112 + Math.random() * 8);
    const travel = Math.random() * 70 + 30;
    const drift = Math.random() * 20 - 10;
    const endX = fromLeft ? startX + travel : startX - travel;
    const midX = fromLeft ? startX + travel * 0.5 + drift : startX - travel * 0.5 + drift;
    const scale = 0.6 + Math.random() * 0.35;
    bat.style.animationDuration = `${duration}s`;
    bat.style.animationDelay = `${delay}s`;
    bat.style.setProperty('--y-start', `${startY}vh`);
    bat.style.setProperty('--y-mid', `${midY}vh`);
    bat.style.setProperty('--y-end', `${endY}vh`);
    bat.style.setProperty('--x-start', `${startX}vw`);
    bat.style.setProperty('--x-mid', `${midX}vw`);
    bat.style.setProperty('--x-end', `${endX}vw`);
    bat.style.setProperty('--scale', scale.toFixed(2));
    return bat;
  }

  function makeGhost() {
    const ghost = document.createElement('div');
    ghost.className = 'ghost-sprite';
    const duration = 30 + Math.random() * 18; // much slower to cap peak speed
    const delay = -Math.random() * duration;
    const x = -10 + Math.random() * 120; // allow to start slightly off-screen
    const driftA = (Math.random() * 80 - 40).toFixed(1); // vw later
    const driftB = (+driftA + (Math.random() * 120 - 60)).toFixed(1);
    const driftC = (+driftB + (Math.random() * 120 - 60)).toFixed(1);
    const driftD = (+driftC + (Math.random() * 110 - 55)).toFixed(1);
    const scale = (0.46 + Math.random() * 0.34).toFixed(2);
    const tiltStart = (Math.random() * 24 - 12).toFixed(1);
    const tiltMid = (Math.random() * 28 - 14).toFixed(1);
    const tiltMid2 = (Math.random() * 28 - 14).toFixed(1);
    const tiltEnd = (Math.random() * 30 - 15).toFixed(1);
    const y1 = (68 + Math.random() * 28).toFixed(1); // 68-96vh
    const y2 = (28 + Math.random() * 32).toFixed(1); // 28-60vh
    const y3 = (4 + Math.random() * 30).toFixed(1);  // 4-34vh
    const y4 = (-26 + Math.random() * 12).toFixed(1); // -26 to -14vh
    const bez = `cubic-bezier(${(Math.random() * 0.6 + 0.1).toFixed(2)}, ${(Math.random() * 0.6 + 0.1).toFixed(2)}, ${(Math.random() * 0.6 + 0.2).toFixed(2)}, ${(Math.random() * 0.6 + 0.2).toFixed(2)})`;
    ghost.style.animationDuration = `${duration}s`;
    ghost.style.setProperty('--dur', `${duration}s`);
    ghost.style.animationDelay = `${delay}s`;
    ghost.style.animationTimingFunction = bez;
    ghost.style.setProperty('--ease', bez);
    ghost.style.setProperty('--x', `${x}vw`);
    ghost.style.setProperty('--drift-a', `${driftA}vw`);
    ghost.style.setProperty('--drift-b', `${driftB}vw`);
    ghost.style.setProperty('--drift-c', `${driftC}vw`);
    ghost.style.setProperty('--drift-d', `${driftD}vw`);
    ghost.style.setProperty('--y0', '110vh');
    ghost.style.setProperty('--y1', `${y1}vh`);
    ghost.style.setProperty('--y2', `${y2}vh`);
    ghost.style.setProperty('--y3', `${y3}vh`);
    ghost.style.setProperty('--y4', `${y4}vh`);
    ghost.style.setProperty('--scale', scale);
    ghost.style.setProperty('--tilt-start', `${tiltStart}deg`);
    ghost.style.setProperty('--tilt-mid', `${tiltMid}deg`);
    ghost.style.setProperty('--tilt-mid2', `${tiltMid2}deg`);
    ghost.style.setProperty('--tilt-end', `${tiltEnd}deg`);
    return ghost;
  }

  function makeFirework() {
    const node = document.createElement('div');
    node.className = 'firework firework-spark';
    const duration = 3.6 + Math.random() * 2.4;
    const delay = Math.random() * 2.2; // positive to avoid mid-air desync
    const x = 5 + Math.random() * 90;
    const y = 22 + Math.random() * 46; // 22-68vh
    const hue = Math.floor(Math.random() * 360);
    const scale = (0.55 + Math.random() * 0.45).toFixed(2); // smaller base, varied up
    const rocketScale = (1 + Math.random()).toFixed(2); // 1.0 - 2.0
    node.style.animationDuration = `${duration}s`;
    node.style.setProperty('--dur', `${duration}s`);
    node.style.animationDelay = `${delay}s`;
    node.style.setProperty('--delay', `${delay}s`);
    node.style.setProperty('--x', `${x}vw`);
    node.style.setProperty('--y', `${y}vh`);
    node.style.setProperty('--hue', `${hue}`);
    node.style.setProperty('--scale', scale);
    node.style.setProperty('--rscale', rocketScale);

    const frag = document.createDocumentFragment();

    const rocket = document.createElement('span');
    rocket.className = 'rocket-sprite';
    frag.appendChild(rocket);

    const streakCount = 52 + Math.floor(Math.random() * 32); // 52-83 streaks for dense sprinkler
    for (let i = 0; i < streakCount; i++) {
      const streak = document.createElement('span');
      streak.className = 'spark-streak';
      const angle = Math.random() * 360;
      const len = 16 + Math.random() * 34; // px
      const w = 0.8 + Math.random() * 1.8; // px
      streak.style.setProperty('--angle', `${angle.toFixed(1)}deg`);
      streak.style.setProperty('--len', `${len.toFixed(1)}px`);
      streak.style.setProperty('--w', `${w.toFixed(1)}px`);
      frag.appendChild(streak);
    }
    node.appendChild(frag);
    return node;
  }

  function renderSnowflakes(count = 80) {
    const container = ensureSnowField();
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      fragment.appendChild(makeSnowflake());
    }
    container.appendChild(fragment);
  }

  function renderBats(count = 30) {
    const container = ensureBatField();
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      fragment.appendChild(makeBat());
    }
    container.appendChild(fragment);
  }

  function renderGhosts(count = 12) {
    const container = ensureGhostField();
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      fragment.appendChild(makeGhost());
    }
    container.appendChild(fragment);
  }

  function renderFireworks(count = 7) {
    const container = ensureFireworkField();
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      fragment.appendChild(makeFirework());
    }
    container.appendChild(fragment);
  }

  function setWinterMode(active) {
    modeState.winter = active;
    if (active) {
      renderSnowflakes();
    } else if (snowField) {
      snowField.innerHTML = '';
    }
  }

  function setHalloweenMode(active) {
    modeState.halloween = active;
    if (active) {
      renderBats();
      renderGhosts();
    } else {
      if (batField) batField.innerHTML = '';
      if (ghostField) ghostField.innerHTML = '';
    }
  }

  function setNewYearMode(active) {
    modeState.newyear = active;
    if (active) {
      renderFireworks();
    } else if (fireworkField) {
      fireworkField.innerHTML = '';
    }
  }

  const applySeasonModes = (next = {}) => {
    const target = { ...modeState };
    ['winter', 'halloween', 'newyear'].forEach((key) => {
      const value = next[key];
      if (typeof value === 'boolean') target[key] = value;
      if (value === 0 || value === 1) target[key] = Boolean(value);
    });

    if (target.winter !== modeState.winter) setWinterMode(target.winter);
    if (target.halloween !== modeState.halloween) setHalloweenMode(target.halloween);
    if (target.newyear !== modeState.newyear) setNewYearMode(target.newyear);
  };

  async function loadSeasonModesFromApi() {
    try {
      const res = await fetch('/api/season-modes', { cache: 'no-store' });
      if (!res.ok) throw new Error('Season modes HTTP ' + res.status);
      const data = await res.json();
      if (data?.modes) applySeasonModes(data.modes);
    } catch (err) {
      console.warn('Season modes laden fehlgeschlagen', err);
    }
  }

  const scheduleSeasonReconnect = () => {
    if (seasonReconnectTimer) return;
    seasonReconnectTimer = setTimeout(() => {
      seasonReconnectTimer = null;
      connectSeasonSocket();
    }, 3000);
  };

  const startSeasonPolling = () => {
    if (seasonPollTimer) clearInterval(seasonPollTimer);
    seasonPollTimer = setInterval(() => {
      loadSeasonModesFromApi();
      loadGateConfigFromApi();
    }, SEASON_POLL_MS);
  };

  // ============================================================================
  // ONLINE COUNTER (via Season WebSocket + Fallback Polling)
  // ============================================================================
  const ONLINE_POLL_MS = 15000;
  let onlinePollTimer = null;

  function updateOnlineCounterUI(count) {
    // Update header online counter in nav-actions
    const onlineEls = document.querySelectorAll('nav.nav-actions .online[aria-label="Online Nutzer"] span:last-child');
    onlineEls.forEach(el => {
      el.textContent = `${count} online`;
    });
  }

  async function fetchOnlineCount() {
    try {
      const res = await fetch('/api/online-count', { cache: 'no-store' });
      if (!res.ok) return;
      const data = await res.json();
      if (typeof data.online === 'number') {
        updateOnlineCounterUI(data.online);
      }
    } catch (err) {
      console.warn('[OnlineCount] Fetch error:', err.message);
    }
  }

  function startOnlinePolling() {
    if (onlinePollTimer) clearInterval(onlinePollTimer);
    onlinePollTimer = setInterval(fetchOnlineCount, ONLINE_POLL_MS);
  }

  function stopOnlinePolling() {
    if (onlinePollTimer) {
      clearInterval(onlinePollTimer);
      onlinePollTimer = null;
    }
  }

  function initOnlineCounter() {
    // Initial fetch only - live updates come via Season WebSocket
    fetchOnlineCount();
  }

  // ============================================================================

  function connectSeasonSocket() {
    if (seasonSocket && (seasonSocket.readyState === WebSocket.OPEN || seasonSocket.readyState === WebSocket.CONNECTING)) return;

    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const url = `${protocol}://${window.location.host}${SEASON_WS_PATH}`;

    try {
      seasonSocket = new WebSocket(url);
    } catch (err) {
      console.warn('Season socket konnte nicht geöffnet werden', err);
      scheduleSeasonReconnect();
      return;
    }

    seasonSocket.addEventListener('open', () => {
      console.log('[ZeusCMS] Season socket verbunden');
    });

    seasonSocket.addEventListener('message', (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data?.type === 'seasonModes' && data.modes) {
          applySeasonModes(data.modes);
        } else if (data?.type === 'gateConfig' && data.config) {
          applyGateConfig(data.config);
        } else if (data?.type === 'onlineCount' && typeof data.online === 'number') {
          updateOnlineCounterUI(data.online);
        }
      } catch (err) {
        console.warn('Seas', err);
      }
    });

    const handleSocketClose = () => {
      seasonSocket = null;
      scheduleSeasonReconnect();
    };

    seasonSocket.addEventListener('close', handleSocketClose);
    seasonSocket.addEventListener('error', handleSocketClose);
  }

    const stopGateCountdown = () => {
      if (gateCountdownTimer) {
        clearInterval(gateCountdownTimer);
        gateCountdownTimer = null;
      }
    };

    const notifyPrereleaseExpired = () => {
      const payload = { config: { prerelease: false, targetAt: null, updatedBy: 'auto-expire' } };
      try {
        fetch('/api/gate-config', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      } catch (err) {
        // ignore
      }
    };

    const handlePrereleaseExpiry = () => {
      gateState.prerelease = false;
      gateState.targetAt = null;
      stopGateCountdown();
      stopPrCountdownDom();
      if (!prExpiryNotified) {
        prExpiryNotified = true;
        notifyPrereleaseExpired();
      }
      const targetUrl = gateState.maintenance ? 'maintenance' : 'index';
      replaceIfDifferent(targetUrl);
    };

    const schedulePrereleaseCountdown = () => {
      stopGateCountdown();
      if (!gateState.prerelease || !gateState.targetAt) return;
      const target = Date.parse(gateState.targetAt);
      if (!Number.isFinite(target)) return;
      const tick = () => {
        if (Date.now() >= target) handlePrereleaseExpiry();
      };
      tick();
      gateCountdownTimer = setInterval(tick, 1000);
    };

    const stopPrCountdownDom = () => {
      if (prCountdownInterval) {
        clearInterval(prCountdownInterval);
        prCountdownInterval = null;
      }
    };

    const updatePrCountdownDom = () => {
      if (!document.body?.classList.contains('prerelease-page')) return;
      const dayEl = document.getElementById('pr-day');
      const hourEl = document.getElementById('pr-hour');
      const minEl = document.getElementById('pr-minute');
      const secEl = document.getElementById('pr-second');
      const soonEl = document.getElementById('pr-soon');
      const openText = document.getElementById('pr-open-text');

      const target = Date.parse(gateState.targetAt);
      if (!Number.isFinite(target)) {
        if (soonEl) soonEl.textContent = 'Coming soon';
        return;
      }

      const diff = Math.max(0, target - Date.now());
      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      if (dayEl) dayEl.textContent = String(days).padStart(2, '0');
      if (hourEl) hourEl.textContent = String(hours).padStart(2, '0');
      if (minEl) minEl.textContent = String(minutes).padStart(2, '0');
      if (secEl) secEl.textContent = String(seconds).padStart(2, '0');

      if (diff <= 0) {
        if (openText) openText.textContent = 'Now open!';
        handlePrereleaseExpiry();
      }
    };

    const startPrCountdownDom = () => {
      if (prCountdownInterval) return;
      updatePrCountdownDom();
      prCountdownInterval = setInterval(updatePrCountdownDom, 1000);
    };

    const applyGateConfig = (cfg = {}) => {
      const prevActive = gateState.prerelease;
      const prevTarget = gateState.targetAt;
      const incomingTarget = cfg.targetAt || null;
      const incomingTs = Date.parse(incomingTarget);
      const cfgExpired = Boolean(cfg.prerelease) && Number.isFinite(incomingTs) && Date.now() >= incomingTs;

      gateState.ready = true;
      gateState.prerelease = cfgExpired ? false : Boolean(cfg.prerelease);
      gateState.targetAt = cfgExpired ? null : incomingTarget;
      gateState.maintenance = Boolean(cfg.maintenance);
      gateState.maintHeadline = cfg.maintHeadline || '';
      gateState.maintMessage = cfg.maintMessage || '';
      gateState.maintEta = cfg.maintEta || null;

      if (cfgExpired) {
        if (!prExpiryNotified) {
          prExpiryNotified = true;
          notifyPrereleaseExpired();
        }
      } else {
        prExpiryNotified = false;
      }

      if (gateState.prerelease) {
        schedulePrereleaseCountdown();
      } else {
        stopGateCountdown();
      }

      const mode = getGateMode();
      const path = (window.location.pathname || '').toLowerCase();
      const isPrereleasePage = document.body?.classList.contains('prerelease-page');
      const isMaintenancePage = document.body?.classList.contains('maintenance-page');
      const onPrerelease = isPrereleasePage || path.endsWith('/prerelease') || path.endsWith('/prerelease.html') || path.includes('/prerelease');
      const onMaintenance = isMaintenancePage || path.endsWith('/maintenance') || path.endsWith('/maintenance.html') || path.includes('/maintenance');
      const pageName = normalizePageName(path);
      const isInfoPage = INFO_PAGES.has(pageName);
      const stateChanged = prevActive !== gateState.prerelease;
      const targetChanged = prevTarget !== gateState.targetAt;

      if (document.body?.classList.contains('prerelease-page')) {
        if (gateState.prerelease) {
          stopPrCountdownDom();
          startPrCountdownDom();
        } else {
          stopPrCountdownDom();
        }
      }

      if (document.body?.classList.contains('maintenance-page')) {
        hydrateMaintenancePage();
      }

      if (hasGateBypass()) {
        if (gateState.prerelease && stateChanged) {
          sessionStorage.removeItem(GATE_BYPASS_KEY);
        }
        if (onMaintenance && !gateState.maintenance) {
          replaceIfDifferent('index');
        } else if (onPrerelease && !gateState.prerelease) {
          const targetUrl = gateState.maintenance ? 'maintenance' : 'index';
          replaceIfDifferent(targetUrl);
        }
        clearGatePending();
        wireInfoPageLogo();
        return;
      }

      if (gateState.prerelease) {
        if (!onPrerelease && !isInfoPage) {
          replaceIfDifferent('prerelease');
          return;
        }
      } else {
        if (onPrerelease) {
          const targetUrl = gateState.maintenance ? 'maintenance' : 'index';
          replaceIfDifferent(targetUrl);
          return;
        }
        if (gateState.maintenance && !onMaintenance && !isInfoPage) {
          replaceIfDifferent('maintenance');
          return;
        }
        if (!gateState.maintenance && onMaintenance) {
          replaceIfDifferent('index');
          return;
        }
      }

      if (!gateState.prerelease && prevActive) {
        stopGateCountdown();
        stopPrCountdownDom();
      }

      if (gateState.prerelease && targetChanged && onPrerelease) {
        stopPrCountdownDom();
        startPrCountdownDom();
      }

      wireInfoPageLogo();
      clearGatePending();
      syncInfoHeaderNav();
    };

    async function loadGateConfigFromApi() {
      try {
        const res = await fetch('/api/gate-config', { cache: 'no-store' });
        if (!res.ok) throw new Error('Gate Config HTTP ' + res.status);
        const data = await res.json();
        if (data?.config) applyGateConfig(data.config);
        return data?.config || null;
      } catch (err) {
        console.warn('Gate Config laden fehlgeschlagen', err);
        return null;
      }
    }

  function highlightFooterLinks() {
    const links = document.querySelectorAll('.footer-link');
    if (!links.length) return;
    const current = normalizePageName(window.location.pathname || '');
    links.forEach(link => {
      const page = (link.dataset.page || '').toLowerCase();
      const matches = (page && page === current) || (page === 'home' && current === 'index');
      link.classList.toggle('is-active', Boolean(matches));
    });
  }

  const normalizeEmail = (value = '') => value.trim().toLowerCase();
  const normalizePassword = (value = '') => value.trim().toLowerCase();
  const extractDomain = (email = '') => email.split('@')[1] || '';
  const extractTld = (domain = '') => {
    if (!domain) return '';
    const parts = domain.split('.');
    return parts[parts.length - 1] || '';
  };
  const setHint = (el, text, state) => {
    if (!el) return;
    el.textContent = text;
    el.classList.toggle('is-error', state === 'error');
    el.classList.toggle('is-ok', state === 'ok');
  };

  const fetchSet = async (path, hintEl) => {
    try {
      const res = await fetch(path, { cache: 'force-cache' });
      if (!res.ok) throw new Error('Load failed');
      const text = await res.text();
      const lines = text.split(/\r?\n/).map(line => line.trim().toLowerCase()).filter(Boolean);
      return new Set(lines);
    } catch (err) {
      console.error('Filterliste laden fehlgeschlagen', err);
      if (hintEl) setHint(hintEl, '');
      return new Set();
    }
  };

  // ============================================================================
  // API-basierte Blacklist-Validierung (ersetzt TXT-Fetches)
  // ============================================================================

  // SHA-256 Hash via WebCrypto
  async function sha256Hex(value) {
    const encoder = new TextEncoder();
    const data = encoder.encode(value);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // Debounce Helper
  function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // API Live Email Check
  async function apiValidateEmailLive(email) {
    try {
      const res = await fetch(`/api/auth/validate-email?email=${encodeURIComponent(email)}`);
      if (!res.ok) return { ok: true, apiError: true }; // Bei API-Fehler nicht blocken
      return await res.json();
    } catch (err) {
      console.warn('[Live Email Check] API nicht erreichbar:', err.message);
      return { ok: true, apiError: true };
    }
  }

  // API Live Password Check (sendet nur SHA-256 Hash)
  async function apiValidatePasswordLive(password) {
    try {
      const normalized = normalizePassword(password);
      const hash = await sha256Hex(normalized);
      const res = await fetch(`/api/auth/validate-password?sha=${hash}`);
      if (!res.ok) return { ok: true, apiError: true };
      return await res.json();
    } catch (err) {
      console.warn('[Live PW Check] API nicht erreichbar:', err.message);
      return { ok: true, apiError: true };
    }
  }

  // Legacy-Funktionen (werden nicht mehr verwendet, aber fÃ¼r KompatibilitÃ¤t behalten)
  let pwLiveSetPromise = null;
  let pwBigSetPromise = null;
  let mailLiveSetPromise = null;
  let mailBigSetPromise = null;
  let tldSetPromise = null;

  const loadPwLiveSet = () => Promise.resolve(new Set());
  const loadPwBigSet = () => Promise.resolve(new Set());
  const loadMailLiveSet = () => Promise.resolve(new Set());
  const loadMailBigSet = () => Promise.resolve(new Set());
  const loadTldSet = () => Promise.resolve(new Set());

  // ============================================================================

  const meterLevels = [
    { label: 'Sehr schwach', width: 20, color: '#ff4757' },
    { label: 'Schwach', width: 40, color: '#ff9f43' },
    { label: 'Mittel', width: 60, color: '#f2c100' },
    { label: 'Stark', width: 80, color: '#c5e400' },
    { label: 'Sehr stark', width: 100, color: '#2ed573' },
  ];

  const COMMON_PASSWORDS = [
    "12345678","123456789","1234567890","12341234","123123123","11111111","22222222","33333333","00000000",
    "password","passwort","passwort1","hallo1234","hallo123","iloveyou","letmein","welcome","admin","qwerty",
    "abc123","monkey","football","dragon","sunshine","princess","schalke04","liverpool","sommer2024","winter2024",
    "sommer2025","frank123","habbo123","testtest","default","master","shadow","hunter2","azerty","zaq12wsx"
  ];

  const isOnlyDigits = (str) => /^\d+$/.test(str);
  const hasRepeatRun = (str) => /(.)\1{3,}/.test(str);
  const isRepeatedSubstring = (str) => {
    const len = str.length;
    for (let subLen = 1; subLen <= Math.floor(len / 2); subLen++) {
      if (len % subLen !== 0) continue;
      const part = str.slice(0, subLen);
      if (part.repeat(len / subLen) === str) return true;
    }
    return false;
  };
  const hasSequentialRun = (str) => {
    const s = str.toLowerCase();
    const isSeq = (a, b) => b - a === 1;
    const isSeqDown = (a, b) => a - b === 1;
    for (let i = 0; i <= s.length - 4; i++) {
      const codes = [s.charCodeAt(i), s.charCodeAt(i + 1), s.charCodeAt(i + 2), s.charCodeAt(i + 3)];
      const up = codes.every((c, idx) => idx === 0 || isSeq(codes[idx - 1], c));
      const down = codes.every((c, idx) => idx === 0 || isSeqDown(codes[idx - 1], c));
      if (up || down) return true;
    }
    return false;
  };

  const evaluatePasswordStrength = (password, { username, email } = {}) => {
    const result = {
      level: 0,
      label: '',
      fillPercent: 0,
      color: 'transparent',
      valid: false,
      problems: [],
    };

    const pwd = (password || '').trim();
    if (!pwd) {
      result.problems.push('Bitte Passwort eingeben.');
      return result;
    }

    // Baseline: any non-empty password starts at level 1 (Sehr schwach)
    result.level = 1;
    result.label = meterLevels[0].label;
    result.fillPercent = meterLevels[0].width;
    result.color = meterLevels[0].color;

    const lower = pwd.toLowerCase();
    const uname = (username || '').toLowerCase();
    const mailLocal = (email || '').split('@')[0]?.toLowerCase() || '';

    if (pwd.length < 8) {
      result.problems.push('Mindestens 8 Zeichen.');
      result.valid = false;
      return result;
    }

    if (COMMON_PASSWORDS.includes(lower)) {
      result.problems.push('Passwort zu schwach.');
      result.level = 1;
      result.label = meterLevels[0].label;
      result.fillPercent = meterLevels[0].width;
      result.color = meterLevels[0].color;
      result.valid = false;
      return result;
    }

    if (isOnlyDigits(pwd)) {
      result.problems.push('Passwort zu schwach.');
      result.valid = false;
      return result;
    }

    if (hasRepeatRun(pwd)) {
      result.problems.push('Passwort zu schwach.');
      result.valid = false;
      return result;
    }

    if (isRepeatedSubstring(pwd)) {
      result.problems.push('Passwort zu schwach.');
      result.valid = false;
      return result;
    }

    if (hasSequentialRun(pwd)) {
      result.problems.push('Passwort zu schwach.');
      result.valid = false;
      return result;
    }

    if (uname && uname.length >= 3 && lower.includes(uname)) {
      result.problems.push('Passwort enthÃ¤lt den Benutzernamen.');
      result.valid = false;
      return result;
    }

    if (mailLocal && mailLocal.length >= 3 && lower.includes(mailLocal)) {
      result.problems.push('Passwort enthÃ¤lt die E-Mail.');
      result.valid = false;
      return result;
    }

    let score = 0;
    if (pwd.length >= 8) score += 1;
    if (pwd.length >= 12) score += 1;
    if (pwd.length >= 16) score += 1;

    const hasLower = /[a-z]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasDigit = /\d/.test(pwd);
    const hasSymbol = /[^a-zA-Z0-9]/.test(pwd);
    const classes = [hasLower, hasUpper, hasDigit, hasSymbol].filter(Boolean).length;
    if (classes >= 3) score += 1;
    if (classes === 4) score += 1;

    const level = Math.min(5, Math.max(1, score));
    const meta = meterLevels[level - 1];
    result.level = level;
    result.label = meta.label;
    result.fillPercent = meta.width;
    result.color = meta.color;
    result.valid = level >= 3; // only "Mittel" or better is accepted
    return result;
  };

  function wireTabs() {
    tabs.forEach(tab => tab.addEventListener('click', () => showPanel(tab.dataset.panel)));
    document.querySelectorAll('[data-panel-link]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        showPanel(link.dataset.panelLink);
      });
    });
  }

  function initPanelFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const hash = (window.location.hash || '').replace('#', '').toLowerCase();
    const tab = (params.get('tab') || '').toLowerCase();
    if (tab === 'register' || hash === 'register') {
      showPanel('register');
    } else if (tab === 'login' || hash === 'login') {
      showPanel('login');
    }
  }

  function renderFrankMessage(index, { animate = true } = {}) {
    if (!frankMessageEl || !frankMessages.length) return;
    const safeIndex = index % frankMessages.length;
    const text = frankMessages[safeIndex] || frankMessages[0];
    if (!animate) {
      frankMessageEl.textContent = `â€ž${text}â€œ`;
      frankMessageEl.classList.remove('is-fading');
      return;
    }
    frankMessageEl.classList.add('is-fading');
    setTimeout(() => {
      frankMessageEl.textContent = `â€ž${text}â€œ`;
      frankMessageEl.classList.remove('is-fading');
    }, 200);
  }

  function clearFrankTimer() {
    if (frankTimer) {
      clearTimeout(frankTimer);
      frankTimer = null;
    }
  }

  function scheduleFrankRotation() {
    clearFrankTimer();
    if (frankPaused || !frankMessageEl) return;
    frankTimer = setTimeout(() => {
      frankIndex = (frankIndex + 1) % frankMessages.length;
      renderFrankMessage(frankIndex, { animate: true });
      scheduleFrankRotation();
    }, 15000);
  }

  function pauseFrankRotation() {
    frankPaused = true;
    clearFrankTimer();
  }

  function resumeFrankRotation() {
    frankPaused = false;
    scheduleFrankRotation();
  }

  function initSeasonalModes() {
    if (document.body?.classList.contains('prerelease-page')) return;
    applySeasonModes(modeState);
    loadSeasonModesFromApi();
    connectSeasonSocket();
    startSeasonPolling();
  }

  function handleLogin() {
    const form = document.getElementById('form-login');
    if (!form) return;
    form.addEventListener('submit', async e => {
      e.preventDefault();
      try {
        const body = {
          username: form.username.value.trim(),
          password: form.password.value,
          remember: form.remember.checked,
        };
        const res = await apiFetch('/api/auth/login', { method: 'POST', body });
        if (res?.token) setToken(res.token);
        showToast('Login ok', 'success');
        window.location.href = '/me.html';
      } catch (err) {
        const msg = err?.message || 'Server nicht erreichbar';
        showToast(msg, 'error');
      }
    });
  }

  function handleRegister() {
    const form = document.getElementById('form-register');
    const feedback = document.getElementById('register-feedback');
    if (!form || !feedback) return;
    const pwInput = document.getElementById('reg-password');
    const pwConfirmInput = document.getElementById('reg-password2');
    const emailInput = document.getElementById('reg-email');
    const pwFill = document.getElementById('pw-meter-fill');
    const pwMeterHint = document.getElementById('pw-meter-hint');
    const fieldPwHint = document.getElementById('reg-password-hint');
    const fieldPw2Hint = document.getElementById('reg-password2-hint');
    const fieldEmailHint = document.getElementById('reg-email-hint');

    let pwLiveBlocked = false;
    let mailLiveBlocked = false;
    let mailBlockMessage = '';
    let tldValid = false;
    let pwMatch = false;

    const validateEmailFormat = (emailRaw) => {
      const email = normalizeEmail(emailRaw || '');
      const result = { valid: false, email, domain: '', tld: '' };
      if (!email || email.includes(' ')) return result;
      const parts = email.split('@');
      if (parts.length !== 2) return result;
      const [local, domain] = parts;
      if (!local || !domain) return result;
      if (local.length < 1 || local.length > 64) return result;
      if (domain.length < 1 || domain.length > 255) return result;
      if (!domain.includes('.')) return result;
      const labels = domain.split('.');
      if (labels.some(l => !l || l.startsWith('-') || l.endsWith('-'))) return result;
      const tld = labels[labels.length - 1];
      if (!tld || tld.length < 2) return result;
      result.valid = true;
      result.domain = domain;
      result.tld = tld;
      return result;
    };

    const checkMailAgainstSet = (set, email) => {
      const mail = normalizeEmail(email);
      const domain = extractDomain(mail);
      if (mail && set.has(mail)) return true;
      if (domain && set.has(domain)) return true;
      return false;
    };

    const validatePasswordMatch = () => {
      if (!pwInput || !pwConfirmInput) return false;
      const pass = pwInput.value;
      const confirm = pwConfirmInput.value;
      pwConfirmInput.classList.remove('is-error', 'is-ok');
      setHint(fieldPw2Hint, '');
      if (!confirm) {
        pwMatch = false;
        return false;
      }
      if (pass !== confirm) {
        pwConfirmInput.classList.add('is-error');
        pwMatch = false;
        return false;
      }
      pwConfirmInput.classList.add('is-ok');
      pwMatch = true;
      return true;
    };

    const updatePwMeter = () => {
      if (!pwInput || !pwFill) return;
      const raw = pwInput.value;
      if (!raw.trim()) {
        pwFill.style.width = '0%';
        pwFill.style.backgroundColor = 'transparent';
        pwFill.style.opacity = '0';
        if (pwMeterHint) pwMeterHint.textContent = '';
        return;
      }
      const assessment = evaluatePasswordStrength(raw, { username: form.username.value, email: form.email.value });
      pwFill.style.opacity = '1';
      pwFill.style.width = `${assessment.fillPercent}%`;
      pwFill.style.backgroundColor = assessment.color;
      if (pwMeterHint) pwMeterHint.textContent = '';
    };

    const validatePasswordLive = async () => {
      if (!pwInput) return false;
      const pwd = pwInput.value;
      pwInput.classList.remove('is-error', 'is-ok');
      if (!pwd) {
        setHint(fieldPwHint, '');
        pwLiveBlocked = false;
        return false;
      }
      
      // Lokale Heuristiken zuerst
      if (pwd.length < 8) {
        setHint(fieldPwHint, '');
        pwLiveBlocked = true;
        pwInput.classList.add('is-error');
        return false;
      }
      if (isOnlyDigits(pwd)) {
        setHint(fieldPwHint, '');
        pwLiveBlocked = true;
        pwInput.classList.add('is-error');
        return false;
      }
      if (hasRepeatRun(pwd)) {
        setHint(fieldPwHint, '');
        pwLiveBlocked = true;
        pwInput.classList.add('is-error');
        return false;
      }
      if (hasSequentialRun(pwd)) {
        setHint(fieldPwHint, '');
        pwLiveBlocked = true;
        pwInput.classList.add('is-error');
        return false;
      }

      // API-Check (sendet nur SHA-256 Hash, nicht Klartext)
      const apiResult = await apiValidatePasswordLive(pwd);
      if (!apiResult.ok && !apiResult.apiError) {
        setHint(fieldPwHint, '');
        pwLiveBlocked = true;
        pwInput.classList.add('is-error');
        return false;
      }

      setHint(fieldPwHint, '');
      pwLiveBlocked = false;
      const assessment = evaluatePasswordStrength(pwd, { username: form.username.value, email: form.email.value });
      if (assessment.valid) {
        pwInput.classList.add('is-ok');
      }
      return true;
    };

    const validateEmailLive = async () => {
      if (!emailInput) return false;
      const email = normalizeEmail(emailInput.value);
      emailInput.classList.remove('is-error', 'is-ok');
      if (!email) {
        setHint(fieldEmailHint, '');
        mailLiveBlocked = false;
        mailBlockMessage = '';
        tldValid = false;
        return false;
      }
      
      // Lokale Format-PrÃ¼fung
      const fmt = validateEmailFormat(email);
      if (!fmt.valid) {
        setHint(fieldEmailHint, 'Bitte gÃ¼ltige E-Mail-Adresse eingeben.', 'error');
        mailLiveBlocked = true;
        mailBlockMessage = 'Bitte gÃ¼ltige E-Mail-Adresse eingeben.';
        tldValid = false;
        emailInput.classList.add('is-error');
        return false;
      }

      // API-Check (TLD-Whitelist + Live-Blacklist)
      const apiResult = await apiValidateEmailLive(email);
      if (!apiResult.ok && !apiResult.apiError) {
        const messages = {
          'tld_not_allowed': 'E-Mail-Domain nicht erlaubt.',
          'disposable_email': 'E-Mail-Anbieter nicht erlaubt.',
          'invalid_format': 'Bitte gÃ¼ltige E-Mail-Adresse eingeben.',
        };
        const msg = messages[apiResult.reason] || 'E-Mail nicht erlaubt.';
        setHint(fieldEmailHint, msg, 'error');
        mailLiveBlocked = true;
        mailBlockMessage = msg;
        tldValid = apiResult.reason !== 'tld_not_allowed';
        emailInput.classList.add('is-error');
        return false;
      }

      tldValid = true;
      setHint(fieldEmailHint, '');
      mailLiveBlocked = false;
      mailBlockMessage = '';
      emailInput.classList.add('is-ok');
      return true;
    };

    // Debounced Input-Handler fÃ¼r Live-Checks
    const debouncedPwValidate = debounce(() => validatePasswordLive(), 300);
    const debouncedEmailValidate = debounce(() => validateEmailLive(), 300);

    if (pwInput) pwInput.addEventListener('input', () => { updatePwMeter(); debouncedPwValidate(); validatePasswordMatch(); updatePopoverIfOpen(); });
    if (pwConfirmInput) pwConfirmInput.addEventListener('input', validatePasswordMatch);
    if (emailInput) emailInput.addEventListener('input', () => { debouncedEmailValidate(); updatePopoverIfOpen(); });
    updatePwMeter();

    // ========================================================================
    // INFO-POPOVER fÃ¼r E-Mail und Passwort Anforderungen
    // ========================================================================
    
    let popover = document.getElementById('reg-info-popover');
    let popoverType = null; // 'email' oder 'password'
    
    // Popover erstellen falls nicht vorhanden
    if (!popover) {
      popover = document.createElement('div');
      popover.id = 'reg-info-popover';
      popover.className = 'info-popover';
      popover.hidden = true;
      document.body.appendChild(popover);
    }
    
    // Popover schlieÃŸen
    function closePopover() {
      popover.hidden = true;
      popoverType = null;
    }
    
    // Popover positionieren neben dem Icon
    function positionPopover(anchorBtn) {
      const rect = anchorBtn.getBoundingClientRect();
      const popW = 300;
      const popH = popover.offsetHeight || 200;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      
      let left = rect.right + 10;
      let top = rect.top;
      
      // Overflow rechts -> links positionieren
      if (left + popW > vw - 10) {
        left = rect.left - popW - 10;
      }
      // Falls auch links kein Platz -> unter dem Icon
      if (left < 10) {
        left = Math.max(10, rect.left);
        top = rect.bottom + 8;
      }
      // Overflow unten
      if (top + popH > vh - 10) {
        top = Math.max(10, vh - popH - 10);
      }
      
      popover.style.left = `${left}px`;
      popover.style.top = `${top}px`;
    }
    
    // E-Mail Anforderungen Status ermitteln
    function getEmailRequirements() {
      const email = normalizeEmail(emailInput?.value || '').trim();
      
      // Bei leerem Feld: alle neutral (null = pending)
      if (!email) {
        return {
          format_ok: null,
          tld_ok: null,
          provider_ok: null
        };
      }
      
      const fmt = validateEmailFormat(email);
      
      return {
        format_ok: fmt.valid,
        tld_ok: tldValid,
        provider_ok: !mailLiveBlocked
      };
    }
    
    // Passwort Anforderungen Status ermitteln
    function getPasswordRequirements() {
      const pwd = (pwInput?.value || '').trim();
      
      // Bei leerem Feld: alle neutral (null = pending)
      if (!pwd) {
        return {
          len_ok: null,
          strong_ok: null,
          not_only_numbers: null,
          no_sequences: null,
          no_repeats: null,
          no_personal: null
        };
      }
      
      const lower = pwd.toLowerCase();
      const uname = (form.username?.value || '').toLowerCase();
      const mailLocal = (emailInput?.value || '').split('@')[0]?.toLowerCase() || '';
      
      const len_ok = pwd.length >= 8;
      const not_only_numbers = !isOnlyDigits(pwd);
      const no_sequences = !hasSequentialRun(pwd);
      const no_repeats = !hasRepeatRun(pwd) && !isRepeatedSubstring(pwd);
      const no_personal = !(
        (uname && uname.length >= 3 && lower.includes(uname)) ||
        (mailLocal && mailLocal.length >= 3 && lower.includes(mailLocal))
      );
      
      // StÃ¤rke aus evaluatePasswordStrength
      const assessment = evaluatePasswordStrength(pwd, { username: form.username?.value, email: emailInput?.value });
      const strong_ok = assessment.level >= 3;
      
      return {
        len_ok,
        strong_ok,
        not_only_numbers,
        no_sequences,
        no_repeats,
        no_personal
      };
    }
    
    // Helper: Requirement-Item Klasse bestimmen (null = pending, true = ok, false = bad)
    function reqClass(val) {
      if (val === null) return 'is-pending';
      return val ? 'is-ok' : 'is-bad';
    }
    function reqChecked(val) {
      return val === true ? 'checked' : '';
    }
    
    // Popover Inhalt rendern
    function renderPopoverContent(type) {
      if (type === 'email') {
        const reqs = getEmailRequirements();
        popover.innerHTML = `
          <div class="info-popover-title">E-Mail Anforderungen</div>
          <ul class="req-list">
            <li class="req-item ${reqClass(reqs.format_ok)}">
              <input type="checkbox" disabled ${reqChecked(reqs.format_ok)}>
              <span>GÃ¼ltiges Format (name@domain.tld)</span>
            </li>
            <li class="req-item ${reqClass(reqs.tld_ok)}">
              <input type="checkbox" disabled ${reqChecked(reqs.tld_ok)}>
              <span>GÃ¼ltige Domain-Endung</span>
            </li>
            <li class="req-item ${reqClass(reqs.provider_ok)}">
              <input type="checkbox" disabled ${reqChecked(reqs.provider_ok)}>
              <span>Kein Wegwerf-Mailanbieter</span>
            </li>
          </ul>
          <div class="info-popover-note">Weitere PrÃ¼fungen erfolgen beim Absenden.</div>
        `;
      } else if (type === 'password') {
        const reqs = getPasswordRequirements();
        popover.innerHTML = `
          <div class="info-popover-title">Passwort Anforderungen</div>
          <ul class="req-list">
            <li class="req-item ${reqClass(reqs.len_ok)}">
              <input type="checkbox" disabled ${reqChecked(reqs.len_ok)}>
              <span>Mindestens 8 Zeichen</span>
            </li>
            <li class="req-item ${reqClass(reqs.strong_ok)}">
              <input type="checkbox" disabled ${reqChecked(reqs.strong_ok)}>
              <span>Stark genug</span>
            </li>
            <li class="req-item ${reqClass(reqs.not_only_numbers)}">
              <input type="checkbox" disabled ${reqChecked(reqs.not_only_numbers)}>
              <span>Nicht nur Zahlen</span>
            </li>
            <li class="req-item ${reqClass(reqs.no_sequences)}">
              <input type="checkbox" disabled ${reqChecked(reqs.no_sequences)}>
              <span>Keine Sequenzen (z.B. 1234/abcd)</span>
            </li>
            <li class="req-item ${reqClass(reqs.no_repeats)}">
              <input type="checkbox" disabled ${reqChecked(reqs.no_repeats)}>
              <span>Keine Wiederholungen (z.B. aaaa)</span>
            </li>
            <li class="req-item ${reqClass(reqs.no_personal)}">
              <input type="checkbox" disabled ${reqChecked(reqs.no_personal)}>
              <span>EnthÃ¤lt nicht Username oder E-Mail</span>
            </li>
          </ul>
        `;
      }
    }
    
    // Popover updaten falls offen
    function updatePopoverIfOpen() {
      if (!popover.hidden && popoverType) {
        renderPopoverContent(popoverType);
      }
    }
    
    // Popover Ã¶ffnen/schlieÃŸen Toggle
    function togglePopover(type, anchorBtn) {
      if (!popover.hidden && popoverType === type) {
        closePopover();
        return;
      }
      popoverType = type;
      renderPopoverContent(type);
      popover.hidden = false;
      positionPopover(anchorBtn);
    }
    
    // Info-Button Click Handler
    const emailInfoBtn = document.getElementById('reg-email-info-btn');
    const pwInfoBtn = document.getElementById('reg-password-info-btn');
    
    if (emailInfoBtn) {
      emailInfoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        togglePopover('email', emailInfoBtn);
      });
    }
    
    if (pwInfoBtn) {
      pwInfoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        togglePopover('password', pwInfoBtn);
      });
    }
    
    // Klick auÃŸerhalb schlieÃŸt Popover
    document.addEventListener('click', (e) => {
      if (popover.hidden) return;
      if (popover.contains(e.target)) return;
      if (e.target === emailInfoBtn || e.target === pwInfoBtn) return;
      closePopover();
    });
    
    // ESC schlieÃŸt Popover
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !popover.hidden) {
        closePopover();
      }
    });
    
    // ========================================================================

    form.addEventListener('submit', async e => {
      e.preventDefault();
      feedback.textContent = '';
      
      // FÃ¼hre Live-Validierung noch einmal durch (nicht debounced)
      await validatePasswordLive();
      await validateEmailLive();
      validatePasswordMatch();
      
      // Passwort-Match prÃ¼fen
      if (form.password.value !== form.password2.value || !pwMatch) {
        pwConfirmInput.classList.remove('is-ok');
        pwConfirmInput.classList.add('is-error');
        setHint(fieldPw2Hint, '');
        return;
      }
      
      // Live-Blocked checks
      if (pwLiveBlocked) {
        return;
      }
      if (mailLiveBlocked) {
        return;
      }
      
      // Lokale Format-PrÃ¼fung
      const email = form.email.value.trim();
      const fmt = validateEmailFormat(email);
      if (!fmt.valid) {
        return;
      }
      
      // Passwort-StÃ¤rke prÃ¼fen
      const pwAssessment = evaluatePasswordStrength(form.password.value, { username: form.username.value, email: form.email.value });
      if (!pwAssessment.valid) {
        updatePwMeter();
        return;
      }
      
      // Big-List PrÃ¼fungen passieren jetzt server-seitig
      // Bei 400er Fehler wird die Meldung angezeigt
      
      try {
        const body = {
          username: form.username.value.trim(),
          email,
          password: form.password.value,
          recaptchaToken: 'mock',
        };
        await apiFetch('/api/auth/register', { method: 'POST', body });
        showToast('Registrierung ok.', 'success');
        showPanel('login');
      } catch (err) {
        const msg = err?.message || 'Registrierung fehlgeschlagen.';
        feedback.textContent = msg;
        notify(msg, 'error');
      }
    });
  }

  function handleRecover() {
    const form = document.getElementById('form-recover');
    const feedback = document.getElementById('recover-feedback');
    if (!form || !feedback) return;
    form.addEventListener('submit', async e => {
      e.preventDefault();
      feedback.textContent = 'Sende Reset...';
      try {
        const res = await fakeFetch('/api/auth/recover', { identifier: form.identifier.value.trim() });
        feedback.textContent = res.message;
        notify('Recovery Mail angefragt.', 'success');
      } catch (err) {
        feedback.textContent = err.message;
        notify(err.message, 'error');
      }
    });
  }

  function handleJoin() {
    const btn = document.getElementById('btn-join');
    const feedback = document.getElementById('join-feedback');
    if (!btn || !feedback) return;
    btn.addEventListener('click', async () => {
      feedback.textContent = 'Erzeuge Ticket...';
      try {
        const res = await fakeFetch('/api/sso/ticket', { bindIp: true });
        feedback.textContent = `Ticket: ${res.ticket} (120s)`;
        notify('Ticket erzeugt. Client starten.', 'success');
      } catch (err) {
        feedback.textContent = err.message;
        notify(err.message, 'error');
      }
    });
  }

  function handleStaffLogin() {
    const forms = Array.from(document.querySelectorAll('[data-staff-login-form], #staff-login-form'));
    if (!forms.length) return;

    forms.forEach(form => {
      const feedback = form.querySelector('[data-staff-feedback]') || document.getElementById('staff-login-feedback');
      form.addEventListener('submit', async e => {
        e.preventDefault();
        if (feedback) feedback.textContent = '';
        const userInput = form.querySelector('input[name="staff-username"]');
        const passInput = form.querySelector('input[name="staff-password"]');
        const user = (userInput?.value || '').trim();
        const pass = passInput?.value || '';
        try {
          const res = await apiFetch('/api/auth/login', { method: 'POST', body: { username: user, password: pass } });
          if (res?.token) setToken(res.token);
          grantBypass();
          showToast('Staff Login ok', 'success');
          window.location.replace('/');
        } catch (err) {
          if (feedback) feedback.textContent = err?.message || 'Login fehlgeschlagen';
          showToast(err?.message || 'Login fehlgeschlagen', 'error');
        }
      });
    });
  }

  function hydrateMaintenancePage() {
    const head = document.getElementById('maint-headline');
    const msg = document.getElementById('maint-message');
    const etaEl = document.getElementById('maint-eta');
    const statusCard = document.getElementById('maint-status-card');
    const staffCard = document.querySelector('.staff-card');
    const cfg = getMaintenanceConfig();
    if (head) head.textContent = cfg.headline;
    if (msg) msg.textContent = cfg.message;
    if (etaEl && cfg.etaAt) {
      const target = Date.parse(cfg.etaAt);
      if (!Number.isNaN(target)) {
        const date = new Date(target);
        const weekday = date.toLocaleDateString('de-DE', { weekday: 'long' });
        const day = String(date.getDate()).padStart(2, '0');
        const month = date.toLocaleDateString('de-DE', { month: 'long' });
        const year = date.getFullYear();
        const time = date.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', hour12: false });
        etaEl.textContent = `${weekday}, den ${day}. ${month} ${year} um ${time} Uhr`;
      }
    }

    // Match status card height to staff login card without changing staff layout.
    if (statusCard && staffCard && 'ResizeObserver' in window) {
      const syncHeight = () => {
        statusCard.style.minHeight = '';
        const statusH = statusCard.getBoundingClientRect().height;
        const staffH = staffCard.getBoundingClientRect().height;
        if (staffH > statusH) statusCard.style.minHeight = `${staffH}px`;
      };
      const ro = new ResizeObserver(syncHeight);
      ro.observe(staffCard);
      window.addEventListener('resize', syncHeight);
      syncHeight();
    }

    const staffForm = document.getElementById('staff-login-form');
    const staffFeedback = document.getElementById('staff-login-feedback');
    if (staffForm && !boundStaffForms.has(staffForm)) {
      boundStaffForms.add(staffForm);
      staffForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (staffFeedback) {
          staffFeedback.textContent = '';
          staffFeedback.classList.remove('staff-error');
        }
        const username = (staffForm.querySelector('[name="staff-username"]')?.value || '').trim();
        const password = staffForm.querySelector('[name="staff-password"]')?.value || '';
        if (!username || !password) {
          showToast('Bitte Username und Passwort eingeben.', 'error');
          return;
        }
        try {
          const resp = await fetch('/api/staff-login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ username, password, context: 'maintenance' }),
          });
          let data = null;
          try { data = await resp.json(); } catch (err) { data = null; }
          if (!resp.ok) {
            const msg = (data && data.message)
              || (resp.status === 401 ? 'Username oder Passwort falsch.'
              : resp.status === 403 ? 'Kein Zugriff (Rang 2+ erforderlich).'
              : 'Staff Login fehlgeschlagen.');
            showToast(msg, 'error');
            return;
          }
          if (data?.token) setToken(data.token);
          grantBypass();
          if (data?.redirect) {
            window.location.replace(data.redirect);
            return;
          }
        } catch (err) {
          showToast('Staff Login fehlgeschlagen.', 'error');
        }
      });
    }
  }

  const pollenState = {
    rafId: null,
    particles: [],
    pointer: { x: null, y: null },
    resizeTimer: null,
    boundEvents: false,
    container: null,
  };

  function initPreReleasePollen() {
    const container = document.getElementById('pollen-container');
    const isPre = document.body?.classList.contains('prerelease-page');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isPre || !container || prefersReduced) return;

    pollenState.container = container;

    if (pollenState.rafId) {
      cancelAnimationFrame(pollenState.rafId);
      pollenState.rafId = null;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    pollenState.pointer = { x: width / 2, y: height / 2 };
    container.innerHTML = '';
    const isMobile = window.innerWidth < 720;
    const count = isMobile ? 140 : 380;
    const particles = [];

    for (let i = 0; i < count; i++) {
      const node = document.createElement('div');
      node.className = 'pollen';
      const size = 5 + Math.random() * 5;
      const baseX = Math.random() * width;
      const baseY = Math.random() * height;
      const range = 12 + Math.random() * 24;
      const speed = 0.0012 + Math.random() * 0.0016;
      const angle = Math.random() * Math.PI * 2;
      const phase = Math.random() * Math.PI * 2;
      const phaseSpeed = 0.0009 + Math.random() * 0.0014;
      const repel = 10 + Math.random() * 16;

      node.style.width = `${size}px`;
      node.style.height = `${size}px`;
      node.style.opacity = (0.45 + Math.random() * 0.35).toFixed(2);
      container.appendChild(node);

      particles.push({ node, baseX, baseY, range, speed, angle, phase, phaseSpeed, repel });
    }

    pollenState.particles = particles;

    const step = () => {
      const pointer = pollenState.pointer;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const repelRadius = 120;

      for (const p of pollenState.particles) {
        p.angle += p.speed;
        const driftX = Math.cos(p.angle) * p.range;
        const driftY = Math.sin(p.angle * 1.07) * p.range * 0.82;

        let x = p.baseX + driftX;
        let y = p.baseY + driftY;

        if (pointer?.x !== null && pointer?.y !== null) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 > 0 && dist2 < repelRadius * repelRadius) {
            const dist = Math.sqrt(dist2) || 1;
            const push = (repelRadius - dist) / repelRadius * p.repel;
            x += (dx / dist) * push;
            y += (dy / dist) * push;
          }
        }

        if (x < -24 || x > width + 24 || y < -24 || y > height + 24) {
          p.baseX = Math.random() * width;
          p.baseY = Math.random() * height;
          x = p.baseX;
          y = p.baseY;
          p.angle = Math.random() * Math.PI * 2;
        }

        p.phase += p.phaseSpeed;
        const flicker = 0.6 + Math.sin(p.phase) * 0.12;
        p.node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        p.node.style.opacity = flicker.toFixed(2);
      }

      pollenState.rafId = requestAnimationFrame(step);
    };

    if (!pollenState.boundEvents) {
      window.addEventListener('mousemove', e => {
        pollenState.pointer = { x: e.clientX, y: e.clientY };
      });
      window.addEventListener('mouseleave', () => {
        pollenState.pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      });
      window.addEventListener('resize', () => {
        if (pollenState.resizeTimer) clearTimeout(pollenState.resizeTimer);
        pollenState.resizeTimer = setTimeout(() => initPreReleasePollen(), 200);
      });
      pollenState.boundEvents = true;
    }

    pollenState.rafId = requestAnimationFrame(step);
  }

  function hydratePreReleasePage() {
    const root = document.body?.classList.contains('prerelease-page');
    if (!root) return;

    if (gateState.ready && !gateState.prerelease && !hasGateBypass()) {
      replaceIfDifferent('index');
      return;
    }

    document.addEventListener(
      'contextmenu',
      e => {
        const allow = e.target?.closest('input, textarea, [contenteditable="true"]');
        if (!allow) {
          e.preventDefault();
        }
      },
      { capture: true }
    );

    const headlineEl = document.getElementById('pr-headline');
    const msgEl = document.getElementById('pr-message');
    const logoEl = document.getElementById('pr-logo');
    const dayEl = document.getElementById('pr-day');
    const hourEl = document.getElementById('pr-hour');
    const minEl = document.getElementById('pr-minute');
    const secEl = document.getElementById('pr-second');
    const soonEl = document.getElementById('pr-soon');
    const canvas = document.getElementById('pr-starfield');
    const openText = document.getElementById('pr-open-text');
    const staffModal = document.getElementById('pr-staff-modal');
    const staffOpen = document.getElementById('pr-staff-open');
    const staffClose = document.getElementById('pr-staff-close');

    // Pre-Release only: soft-moving pollen layer (maintenance untouched)
    initPreReleasePollen();

    if (staffOpen && staffModal) {
      const openModal = () => staffModal.removeAttribute('hidden');
      const closeModal = () => staffModal.setAttribute('hidden', '');
      staffOpen.addEventListener('click', openModal);
      staffClose?.addEventListener('click', closeModal);
      staffModal.addEventListener('click', e => { if (e.target === staffModal) closeModal(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    }

    const staffForm = document.querySelector('[data-staff-login-form]');
    const staffFeedback = document.querySelector('[data-staff-feedback]');
    if (staffForm && !boundStaffForms.has(staffForm)) {
      boundStaffForms.add(staffForm);
      staffForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (staffFeedback) {
          staffFeedback.textContent = '';
          staffFeedback.classList.remove('staff-error');
        }
        const username = (staffForm.querySelector('[name="staff-username"]')?.value || '').trim();
        const password = staffForm.querySelector('[name="staff-password"]')?.value || '';
        if (!username || !password) {
          showToast('Bitte Username und Passwort eingeben.', 'error');
          return;
        }
        try {
          const resp = await fetch('/api/staff-login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ username, password, context: 'prerelease' }),
          });
          let data = null;
          try { data = await resp.json(); } catch (err) { data = null; }
          if (!resp.ok) {
            const msg = (data && data.message)
              || (resp.status === 401 ? 'Username oder Passwort falsch.'
              : resp.status === 403 ? 'Kein Zugriff (Rang 2+ erforderlich).'
              : 'Staff Login fehlgeschlagen.');
            showToast(msg, 'error');
            return;
          }
          if (data?.token) setToken(data.token);
          grantBypass();
          if (data?.redirect) {
            window.location.replace(data.redirect);
            return;
          }
        } catch (err) {
          showToast('Staff Login fehlgeschlagen.', 'error');
        }
      });
    }

    const cfg = getPreReleaseConfig();
    if (headlineEl) headlineEl.textContent = cfg.headline;
    if (msgEl) msgEl.textContent = cfg.message;
    if (logoEl && cfg.logoUrl) {
      logoEl.src = cfg.logoUrl;
      logoEl.alt = 'Habbo Logo';
    }

    startPrCountdownDom();

    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let viewWidth = window.innerWidth;
    let viewHeight = window.innerHeight;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const starCount = window.innerWidth < 720 ? 150 : 320;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      r: Math.random() * 1.2 + 0.6,
      tw: Math.random() * Math.PI * 2,
      ta: 0.002 + Math.random() * 0.003,
    }));

    let pointer = { x: null, y: null };
    let rafId = null;

    const resize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      viewWidth = window.innerWidth;
      viewHeight = window.innerHeight;
      canvas.width = viewWidth * dpr;
      canvas.height = viewHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.fill();
      });
    };

    const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        if (pointer.x !== null && pointer.y !== null) {
          const dx = s.x - pointer.x;
          const dy = s.y - pointer.y;
          const dist2 = dx * dx + dy * dy;
          const radius = 14000;
          if (dist2 < radius && dist2 > 0.01) {
            const force = (radius - dist2) / radius;
            const inv = 1 / Math.sqrt(dist2);
            s.vx += dx * inv * force * 0.05;
            s.vy += dy * inv * force * 0.05;
          }
        }

        s.x += s.vx;
        s.y += s.vy;
  if (s.x < 0) s.x = viewWidth;
  if (s.x > viewWidth) s.x = 0;
  if (s.y < 0) s.y = viewHeight;
  if (s.y > viewHeight) s.y = 0;
        s.vx *= 0.985;
        s.vy *= 0.985;

        s.tw += s.ta;
        const alpha = 0.5 + Math.sin(s.tw) * 0.25;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
        ctx.fill();
      }
      rafId = requestAnimationFrame(step);
    };

    resize();
    window.addEventListener('resize', resize);
    if (!prefersReduced) {
      canvas.addEventListener('mousemove', e => { pointer = { x: e.clientX, y: e.clientY }; });
      canvas.addEventListener('mouseleave', () => { pointer = { x: null, y: null }; });
      rafId = requestAnimationFrame(step);
    } else {
      drawStatic();
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && rafId) cancelAnimationFrame(rafId);
      else if (!document.hidden && !prefersReduced) rafId = requestAnimationFrame(step);
    });
  }

  function hydrateMePage() {
    const path = (window.location.pathname || '').toLowerCase();
    const onMe = path.endsWith('/me') || path.endsWith('/me.html') || path === '/me' || path === '/me.html';
    if (!onMe) return;
    const token = getToken();
    if (!token) {
      window.location.replace('/');
      return;
    }
    const btn = document.getElementById('btn-logout');
    if (btn) {
      btn.addEventListener('click', () => {
        clearToken();
        revokeBypass();
        const mode = getEffectiveGateMode();
        if (mode === 'maintenance') {
          window.location.replace('maintenance.html');
          return;
        }
        if (mode === 'prerelease') {
          window.location.replace('prerelease.html');
          return;
        }
        window.location.replace('index.html');
      });
    }
  }

  const mapNewsItems = (items = []) => {
    if (!Array.isArray(items)) return [];
    return items.map((item) => {
      const dateRaw = item.published_at || item.updated_at || item.created_at;
      const createdAt = dateRaw ? new Date(dateRaw).toLocaleDateString('de-DE') : '';
      // Bild-Logik: image_filename hat PrioritÃ¤t, dann image_path als Fallback, sonst notavailable.svg
      let slideImage = '/assets/news/notavailable.svg';
      if (item.image_filename && typeof item.image_filename === 'string' && item.image_filename.trim()) {
        slideImage = '/assets/news/' + item.image_filename.replace(/^\/+/, '');
      } else if (item.image_path && typeof item.image_path === 'string' && item.image_path.trim()) {
        slideImage = item.image_path;
      }
      return {
        image: slideImage,
        eyebrow: 'News',
        title: item.title || 'News',
        lead: item.teaser || '',
        desc: item.teaser || '',
        body: item.content || item.teaser || '',
        chips: [],
        labels: [],
        createdAt,
        author: item.author || item.author_name || '',
        pill: 'News',
        heroAlt: item.title || 'News',
      };
    });
  };

  async function loadNewsFromDb() {
    let nextSlides = [];
    try {
      const res = await apiFetch('/api/news?index=1');
      const items = Array.isArray(res?.items) ? res.items : [];
      nextSlides = mapNewsItems(items);
    } catch (err) {
      console.warn('News laden fehlgeschlagen', err);
    }

    if (!nextSlides.length) {
      nextSlides = [placeholderSlide];
    }

    slides = nextSlides;
    if (typeof window.__heroReload === 'function') {
      window.__heroReload(nextSlides);
    }
  }


  function fakeFetch(url, body) {
    // Placeholder to mimic API behavior with validation and rate limits.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!body || Object.values(body).some(v => v === '')) {
          reject(new Error('Eingaben unvollstÃ¤ndig.'));
          return;
        }
        if (url.includes('login') && body.username === 'banned') {
          reject(new Error('Account gebannt. Bitte Support kontaktieren.'));
          return;
        }
        if (url.includes('register') && body.username.length < 3) {
          reject(new Error('Username zu kurz.')); return;
        }
        if (url.includes('register') && body.password) {
          const pwAssessment = evaluatePasswordStrength(body.password, { username: body.username, email: body.email });
          if (!pwAssessment.valid) {
            reject(new Error(pwAssessment.problems[0] || 'Passwort zu schwach.'));
            return;
          }
        }
        if (url.includes('ticket')) {
          resolve({ message: 'Ticket ready', ticket: 'SSO-1234567890' }); return;
        }
        resolve({ message: 'OK' });
      }, 700);
    });
  }

  function wireTheme() {
    const btn = document.getElementById('btn-theme');
    if (!btn) return;
    if (btn.dataset.bound === '1') return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  async function startApp() {
    ensureToastStyles();
    ensureToastContainer();
    initTheme();
    wireTheme();
    await loadGateConfigFromApi();
    if (!gateState.ready) gateState.ready = true;

    const isPrereleasePage = document.body?.classList.contains('prerelease-page');
    const isMaintenancePage = document.body?.classList.contains('maintenance-page');

    if (isPrereleasePage) {
      const redirected = enforceGate();
      if (redirected) return;

      hydratePreReleasePage();
      connectSeasonSocket();
      startSeasonPolling();
      window.addEventListener('popstate', enforceGate);
      clearGatePending();
      requestAnimationFrame(() => requestAnimationFrame(() => {
        document.documentElement.classList.remove('is-loading');
      }));
      return;
    }

    if (isMaintenancePage) {
      const redirected = enforceGate();
      if (redirected) return;

      hydrateMaintenancePage();
      connectSeasonSocket();
      startSeasonPolling();
      window.addEventListener('popstate', enforceGate);
      clearGatePending();
      requestAnimationFrame(() => requestAnimationFrame(() => {
        document.documentElement.classList.remove('is-loading');
      }));
      return;
    }

    const redirected = enforceGate();
    if (redirected) return;

    syncInfoHeaderNav();

    hydrateMaintenancePage();
    hydratePreReleasePage();
    hydrateMePage();

    initSeasonalModes();
    connectSeasonSocket();
    startSeasonPolling();
    initOnlineCounter();
    wireTheme();
    wireTabs();
    initClsDebug();
    initPanelFromUrl();
    handleLogin();
    handleRegister();
    handleRecover();
    handleJoin();
    highlightFooterLinks();
    if (!document.body?.classList.contains('maintenance-page') && !document.body?.classList.contains('prerelease-page')) {
      handleStaffLogin();
    }
    window.addEventListener('popstate', enforceGate);
    loadNewsFromDb();

    requestAnimationFrame(() => requestAnimationFrame(() => {
      document.documentElement.classList.remove('is-loading');
    }));

    renderFrankMessage(frankIndex, { animate: false });
    scheduleFrankRotation();

    document.addEventListener('newsPreview:open', () => {
      pauseFrankRotation();
    });

    document.addEventListener('newsPreview:close', () => {
      resumeFrankRotation();
    });

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        loadSeasonModesFromApi();
        loadGateConfigFromApi();
      }
    });

    console.log('[FutureCMS] starting carousel');
    startHeroCarousel();
    clearGatePending();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
  } else {
    startApp();
  }
})();

function startHeroCarousel() {
  const heroEl = document.getElementById('hero-visual');
  const heroCurrent = document.getElementById('hero-layer-current');
  const heroNext = document.getElementById('hero-layer-next');
  let frontHero = heroCurrent; // currently visible layer
  let backHero = heroNext; // buffer for the incoming frame
  const heroEyebrow = document.getElementById('hero-eyebrow');
  const heroTitle = document.getElementById('hero-title');
  const heroLead = document.getElementById('hero-lead');
  const heroBadges = document.getElementById('hero-badges');
  const thumbRail = document.querySelector('.thumb-rail');
  const thumbs = [
    { box: document.getElementById('thumb-1'), pill: document.getElementById('thumb-pill-1') },
    { box: document.getElementById('thumb-2'), pill: document.getElementById('thumb-pill-2') },
    { box: document.getElementById('thumb-3'), pill: document.getElementById('thumb-pill-3') },
  ];

  if (!heroEl || !heroCurrent || !heroNext || !heroEyebrow || !heroTitle || !heroLead || !heroBadges || !thumbRail || thumbs.some(t => !t.box || !t.pill)) return;

  const brandLogo = document.querySelector('.brand-logo');
  const path = (window.location.pathname.split('/').pop() || '').toLowerCase();
  const onLanding = path === '' || path === 'index.html' || path === 'index';

  function resetToLoginState() {
    if (!onLanding) {
      window.location.href = '/';
      return;
    }

    const wasPreviewOpen = isPreviewOpen;
    if (isPreviewOpen) {
      closeNewsPreview();
    } else {
      scheduleRotation();
    }

    const loginTabBtn = document.querySelector('.tab[data-panel="login"]');
    if (loginTabBtn) {
      loginTabBtn.click();
    } else {
      showPanel('login');
    }

    const regForm = document.getElementById('form-register');
    if (regForm) regForm.reset();

    const regInputs = [
      document.getElementById('reg-email'),
      document.getElementById('reg-password'),
      document.getElementById('reg-password2'),
    ];
    regInputs.forEach(input => {
      if (!input) return;
      input.classList.remove('is-error', 'is-ok');
      input.value = '';
      input.removeAttribute('aria-invalid');
    });

    const hintIds = ['reg-email-hint', 'reg-password-hint', 'reg-password2-hint', 'register-feedback'];
    hintIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = '';
        el.classList.remove('is-error', 'is-ok');
      }
    });

    const pwFill = document.getElementById('pw-meter-fill');
    const pwHint = document.getElementById('pw-meter-hint');
    if (pwFill) {
      pwFill.style.width = '0%';
      pwFill.style.opacity = '0';
      pwFill.style.backgroundColor = 'transparent';
    }
    if (pwHint) pwHint.textContent = '';

    frankPaused = false;
    clearFrankTimer();
    renderFrankMessage(frankIndex, { animate: false });
    scheduleFrankRotation();
    if (wasPreviewOpen) scheduleRotation();

    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function resetLandingState() {
    pauseRotation();
    if (isPreviewOpen) closeNewsPreview();
    pauseRotation();
    currentIndex = 0;

    frontHero.classList.add('no-trans');
    backHero.classList.add('no-trans');
    renderAt(currentIndex, { skipHero: false });
    frontHero.style.backgroundImage = `url('${slides[currentIndex].image}')`;
    frontHero.style.opacity = '1';
    backHero.style.opacity = '0';
    thumbs.forEach(t => {
      t.box.classList.add('no-trans');
      t.box.style.setProperty('--tx', '0');
      t.box.style.setProperty('--op', '1');
    });
    requestAnimationFrame(() => {
      frontHero.classList.remove('no-trans');
      backHero.classList.remove('no-trans');
      thumbs.forEach(t => t.box.classList.remove('no-trans'));
    });

    frankIndex = 0;
    frankPaused = false;
    clearFrankTimer();
    renderFrankMessage(frankIndex, { animate: false });
    scheduleFrankRotation();

    showPanel('login');
    window.scrollTo({ top: 0, behavior: 'auto' });
    scheduleRotation();
  }

  if (brandLogo) {
    brandLogo.tabIndex = 0;
    const handleLogo = (e) => {
      e.preventDefault();
      resetToLoginState();
    };
    brandLogo.addEventListener('click', handleLogo);
    brandLogo.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleLogo(e);
      }
    });
  }

  const ensureSlides = () => {
    if (!Array.isArray(slides) || !slides.length) {
      slides = baseSlides.map(s => ({ ...s }));
    }
  };

  ensureSlides();

  let rotationHandle = null;
  let isPreviewOpen = false;
  let lastFocused = null;
  let previousBodyOverflow = '';

  const previewBtn = document.getElementById('btn-open-preview');
  const previewModal = document.getElementById('news-preview');
  const previewPanel = previewModal ? previewModal.querySelector('.modal-panel') : null;
  const previewImage = previewModal ? previewModal.querySelector('.preview-image') : null;
  const previewEyebrow = previewModal ? previewModal.querySelector('.preview-eyebrow') : null;
  const previewMeta = previewModal ? previewModal.querySelector('.preview-meta') : null;
  const previewTitle = previewModal ? previewModal.querySelector('.preview-title') : null;
  const previewDesc = previewModal ? previewModal.querySelector('.preview-desc') : null;
  const previewBodyText = previewModal ? previewModal.querySelector('.preview-bodytext') : null;
  const previewTags = previewModal ? previewModal.querySelector('.preview-tags') : null;
  const previewActions = previewModal ? previewModal.querySelector('.preview-actions') : null;
  const previewPill = previewModal ? previewModal.querySelector('.preview-pill') : null;
  const closeControls = previewModal ? previewModal.querySelectorAll('[data-close]') : [];

  function pauseRotation() {
    if (rotationHandle) {
      clearTimeout(rotationHandle);
      rotationHandle = null;
    }
  }

  function scheduleRotation() {
    pauseRotation();
    if (isPreviewOpen) return;
    rotationHandle = setTimeout(runCycle, 10000);
  }

  function renderAt(index, { skipHero = false } = {}) {
    ensureSlides();
    const hero = slides[index % slides.length];
    const thumbData = [
      slides[(index + 1) % slides.length],
      slides[(index + 2) % slides.length],
      slides[(index + 3) % slides.length],
    ];

    if (!skipHero) {
      frontHero.style.backgroundImage = `url('${hero.image}')`;
      frontHero.style.opacity = '1';
      backHero.style.opacity = '0';
      heroEyebrow.textContent = hero.eyebrow;
      heroTitle.textContent = hero.title;
      heroLead.textContent = hero.lead;
      heroBadges.innerHTML = hero.chips.map(txt => `<span class="chip">${txt}</span>`).join('');
    }

    thumbs.forEach((t, idx) => {
      const data = thumbData[idx];
      t.box.style.setProperty('--img', `url('${data.image}')`);
      t.pill.textContent = data.pill || 'Event';
    });
  }

  let currentIndex = 0;

  function renderNewsPreview(slide) {
    if (!previewModal) return;
    const data = slide || {};
    const labels = Array.isArray(data.labels) ? data.labels : Array.isArray(data.chips) ? data.chips : [];
    const pillText = labels[0] || data.pill || 'News';
    const eyebrowText = data.eyebrow || (labels.length ? labels.slice(0, 2).join(' â€¢ ') : 'News');
    const metaParts = [];
    if (data.createdAt) metaParts.push(`Erstellt am ${data.createdAt}`);
    if (data.author) metaParts.push(`von ${data.author}`);
    const metaText = metaParts.join(' â€¢ ') || data.meta || eyebrowText;

    if (previewImage) previewImage.style.backgroundImage = data.image ? `url('${data.image}')` : 'none';
    if (previewPill) {
      previewPill.textContent = pillText;
      previewPill.style.display = pillText ? 'inline-flex' : 'none';
    }
    if (previewEyebrow) previewEyebrow.textContent = eyebrowText || 'News';
    if (previewMeta) previewMeta.textContent = metaText;
    if (previewTitle) previewTitle.textContent = data.title || 'News Update';
    if (previewDesc) previewDesc.textContent = data.desc || data.lead || '';
    if (previewBodyText) previewBodyText.textContent = data.body || data.lead || '';
    if (previewTags) {
      previewTags.innerHTML = labels.length ? labels.map(txt => `<span class="chip">${txt}</span>`).join('') : '';
    }
    if (previewActions) {
      previewActions.innerHTML = '';
      const primary = document.createElement('button');
      primary.className = 'primary';
      primary.type = 'button';
      primary.textContent = 'Jetzt beitreten';
      primary.addEventListener('click', () => {
        const target = document.querySelector('[data-panel-link="register"]');
        if (target) target.click();
        closeNewsPreview();
      });
      previewActions.appendChild(primary);
    }
  }

  function syncPreviewIfOpen() {
    if (!isPreviewOpen) return;
    renderNewsPreview(slides[currentIndex % slides.length]);
  }

  function resetCarousel() {
    ensureSlides();
    pauseRotation();
    currentIndex = 0;
    renderAt(currentIndex);
    frontHero.classList.add('no-trans');
    backHero.classList.add('no-trans');
    frontHero.style.backgroundImage = `url('${slides[currentIndex].image || ''}')`;
    frontHero.style.opacity = '1';
    backHero.style.opacity = '0';
    thumbs.forEach(t => {
      t.box.classList.add('no-trans');
      t.box.style.setProperty('--tx', '0');
      t.box.style.setProperty('--op', '1');
    });
    requestAnimationFrame(() => {
      frontHero.classList.remove('no-trans');
      backHero.classList.remove('no-trans');
      thumbs.forEach(t => t.box.classList.remove('no-trans'));
    });
    if (typeof syncPreviewIfOpen === 'function') syncPreviewIfOpen();
    scheduleRotation();
  }

  resetCarousel();

  window.__heroReload = (nextSlides) => {
    if (Array.isArray(nextSlides) && nextSlides.length) {
      slides = nextSlides;
    } else {
      slides = baseSlides.map(s => ({ ...s }));
    }
    resetCarousel();
  };

  function waitTransition(el) {
    return new Promise(resolve => {
      const done = e => {
        if (e.target !== el || e.propertyName !== 'opacity') return;
        el.removeEventListener('transitionend', done);
        resolve();
      };
      el.addEventListener('transitionend', done);
      setTimeout(resolve, 1800);
    });
  }

  function syncPreviewIfOpen() {
    if (!isPreviewOpen) return;
    renderNewsPreview(slides[currentIndex % slides.length]);
  }

  const trapFocus = (event) => {
    if (!isPreviewOpen || !previewModal || previewModal.classList.contains('hidden')) return;
    if (event.key !== 'Tab') return;
    const focusable = previewPanel ? Array.from(previewPanel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(el => !el.disabled && el.offsetParent !== null) : [];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handlePreviewKeyDown = (e) => {
    if (!isPreviewOpen) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      closeNewsPreview();
      return;
    }
    trapFocus(e);
  };

  const closeNewsPreview = () => {
    if (!previewModal || !isPreviewOpen) return;
    isPreviewOpen = false;
    previewModal.classList.add('hidden');
    previewModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = previousBodyOverflow;
    document.removeEventListener('keydown', handlePreviewKeyDown);
    if (previewPanel) previewPanel.removeEventListener('keydown', trapFocus);
    if (lastFocused) lastFocused.focus();
    scheduleRotation();
    document.dispatchEvent(new CustomEvent('newsPreview:close'));
  };

  const openNewsPreview = () => {
    if (!previewModal) return;
    isPreviewOpen = true;
    pauseRotation();
    lastFocused = document.activeElement;
    previousBodyOverflow = document.body.style.overflow;
    renderNewsPreview(slides[currentIndex % slides.length]);
    previewModal.classList.remove('hidden');
    previewModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handlePreviewKeyDown);
    if (previewPanel) {
      previewPanel.addEventListener('keydown', trapFocus);
      const focusable = previewPanel.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable) focusable.focus();
    }
    document.dispatchEvent(new CustomEvent('newsPreview:open'));
  };

  if (previewBtn && previewModal) {
    previewBtn.addEventListener('click', openNewsPreview);
    closeControls.forEach(btn => btn.addEventListener('click', closeNewsPreview));
    const backdrop = previewModal.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeNewsPreview();
      });
    }
  }
  function runCycle() {
    ensureSlides();
    if (isPreviewOpen) return;
    const nextIndex = (currentIndex + 1) % slides.length;
    const nextHeroSlide = slides[nextIndex];
    const oldHeroSlide = slides[currentIndex];
    const oldThumb1 = slides[(currentIndex + 1) % slides.length];
    const finalThumbs = [
      slides[(nextIndex + 1) % slides.length],
      slides[(nextIndex + 2) % slides.length],
      slides[(nextIndex + 3) % slides.length],
    ];

    // Update overlay text immediately to match incoming hero
    heroEyebrow.textContent = nextHeroSlide.eyebrow;
    heroTitle.textContent = nextHeroSlide.title;
    heroLead.textContent = nextHeroSlide.lead;
    heroBadges.innerHTML = nextHeroSlide.chips.map(txt => `<span class="chip">${txt}</span>`).join('');

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      currentIndex = nextIndex;
      frontHero.classList.add('no-trans');
      backHero.classList.add('no-trans');
      frontHero.style.backgroundImage = `url('${nextHeroSlide.image}')`;
      frontHero.style.opacity = '1';
      backHero.style.opacity = '0';
      frontHero.classList.remove('no-trans');
      backHero.classList.remove('no-trans');
      finalThumbs.forEach((data, idx) => {
        thumbs[idx].box.style.setProperty('--img', `url('${data.image}')`);
        thumbs[idx].pill.textContent = data.pill || 'Event';
        thumbs[idx].box.style.setProperty('--tx', '0');
        thumbs[idx].box.style.setProperty('--op', '1');
      });
      syncPreviewIfOpen();
      scheduleRotation();
      return;
    }

    // Measure positions relative to rail for thumb shift
    const railRect = thumbRail.getBoundingClientRect();
    const slotRects = thumbs.map(t => t.box.getBoundingClientRect());
    const slots = slotRects.map(r => ({
      left: r.left - railRect.left,
      top: r.top - railRect.top,
      width: r.width,
      height: r.height,
    }));
    const startTxThumb1 = slots[1].left - slots[0].left;
    const startTxThumb2 = slots[2].left - slots[1].left;
    const startTxThumb3 = railRect.width - slots[2].left;
    const exitGhostShift = slots[0].left - slots[1].left;

    // Exit ghost for the outgoing left thumb
    const exitGhost = document.createElement('div');
    exitGhost.className = 'thumb temp-thumb';
    exitGhost.style.width = `${slots[0].width}px`;
    exitGhost.style.height = `${slots[0].height}px`;
    exitGhost.style.left = `${slots[0].left}px`;
    exitGhost.style.top = `${slots[0].top}px`;
    exitGhost.style.setProperty('--img', `url('${oldThumb1.image}')`);
    exitGhost.style.setProperty('--tx', '0');
    exitGhost.style.setProperty('--op', '1');
    const exitPill = document.createElement('span');
    exitPill.className = 'pill';
    exitPill.textContent = oldThumb1.pill || 'Event';
    exitGhost.appendChild(exitPill);
    thumbRail.appendChild(exitGhost);

    const thumbBoxes = thumbs.map(t => t.box);
    backHero.classList.add('no-trans');
    backHero.style.backgroundImage = `url('${nextHeroSlide.image}')`;
    backHero.style.opacity = '0';
    frontHero.style.opacity = '1';
    [...thumbBoxes, exitGhost].forEach(el => el.classList.add('no-trans'));
    backHero.offsetWidth;
    backHero.classList.remove('no-trans');

    finalThumbs.forEach((data, idx) => {
      thumbs[idx].box.style.setProperty('--img', `url('${data.image}')`);
      thumbs[idx].pill.textContent = data.pill || 'Event';
    });

    thumbs[0].box.style.setProperty('--tx', `${startTxThumb1}px`);
    thumbs[0].box.style.setProperty('--op', '1');
    thumbs[1].box.style.setProperty('--tx', `${startTxThumb2}px`);
    thumbs[1].box.style.setProperty('--op', '1');
    thumbs[2].box.style.setProperty('--tx', `${startTxThumb3}px`);
    thumbs[2].box.style.setProperty('--op', '0');
    exitGhost.style.setProperty('--tx', '0');
    exitGhost.style.setProperty('--op', '1');

    requestAnimationFrame(() => {
      [...thumbBoxes, exitGhost].forEach(el => el.classList.remove('no-trans'));

      requestAnimationFrame(() => {
        backHero.style.opacity = '1';
        frontHero.style.opacity = '0';

        thumbs[0].box.style.setProperty('--tx', '0');
        thumbs[0].box.style.setProperty('--op', '1');
        thumbs[1].box.style.setProperty('--tx', '0');
        thumbs[2].box.style.setProperty('--tx', '0');
        thumbs[2].box.style.setProperty('--op', '1');
        exitGhost.style.setProperty('--tx', `${exitGhostShift}px`);
        exitGhost.style.setProperty('--op', '0');
      });
    });

    Promise.all([
      waitTransition(backHero),
      waitTransition(thumbs[0].box),
      waitTransition(thumbs[1].box),
      waitTransition(thumbs[2].box),
      waitTransition(exitGhost),
    ]).then(() => {
      thumbBoxes.forEach(el => el.classList.add('no-trans'));
      thumbRail.offsetWidth;

      thumbs.forEach(t => {
        t.box.style.setProperty('--tx', '0');
        t.box.style.setProperty('--op', '1');
      });
      exitGhost.remove();
      currentIndex = nextIndex;
      [frontHero, backHero] = [backHero, frontHero];

      requestAnimationFrame(() => {
        thumbBoxes.forEach(el => el.classList.remove('no-trans'));
      });

      syncPreviewIfOpen();
      scheduleRotation();
    });
  }

  scheduleRotation();
}