// Trading Suite — Service Worker
// Cache version — incrementează când faci update la fișiere
const CACHE = 'trading-suite-v3';

const CORE_FILES = [
  '/',
  '/index.html',
  '/nasdaq-scanner.html',
  '/crypto-scanner.html',
  '/grid-calculator.html',
  '/price-alerter.html',
  '/crypto-news.html',
  '/manifest.json',
  '/icon-hub.svg',
  '/icon-nasdaq.svg',
  '/icon-crypto.svg',
  '/icon-grid.svg',
  '/icon-alerts.svg',
  '/icon-news.svg',
];

// ── INSTALL: cache toate fișierele core ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(CORE_FILES.map(url =>
        new Request(url, { cache: 'reload' })
      )))
      .catch(() => {}) // nu bloca instalarea dacă lipsesc fișiere
  );
  self.skipWaiting();
});

// ── ACTIVATE: șterge cache-urile vechi ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// ── FETCH: cache-first pentru resurse locale, network-first pentru API ──
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Lasă API-urile externe să meargă direct (nu le cache-ui)
  const PASS_THROUGH = [
    'finnhub.io',
    'binance.com',
    'anthropic.com',
    'yahoo.com',
    'alternative.me',
    'coingecko.com',
    'allorigins',
    'corsproxy',
    'fonts.googleapis.com',
    'fonts.gstatic.com',
  ];

  if (PASS_THROUGH.some(domain => url.includes(domain))) {
    event.respondWith(fetch(event.request).catch(() => new Response('', { status: 503 })));
    return;
  }

  // Cache-first pentru tot restul (fișierele HTML, SVG, JSON)
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // Salvează în cache dacă e răspuns valid
        if (response && response.status === 200 && response.type !== 'opaque') {
          const toCache = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, toCache));
        }
        return response;
      }).catch(() =>
        // Offline fallback — returnează index.html
        caches.match('/index.html')
      );
    })
  );
});

// ── NOTIFICĂRI PUSH (opțional) ──
self.addEventListener('push', event => {
  const data = event.data?.json() || {
    title: 'Trading Suite',
    body: 'Alertă nouă!',
  };
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icon-hub.svg',
      badge: '/icon-hub.svg',
      tag: 'trading-alert',
      renotify: true,
      vibrate: [200, 100, 200],
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(clientList => {
      for (const client of clientList) {
        if (client.url === '/' && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow('/');
    })
  );
});
