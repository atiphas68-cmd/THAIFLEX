const CACHE = 'thaiflex-v10';
const ASSETS = ['./', 'index.html', 'data-1-foods.js', 'data-2-menus.js', 'core-1-state.js', 'core-2-render.js', 'core-3-search.js', 'core-4-log.js', 'art-1-base.js', 'art-2-landmarks.js', 'art-3-scene.js', 'avatar-1-data.js', 'avatar-2-parts.js', 'avatar-3-builder.js', 'avatar-4-profile.js', 'app-1-auth.js', 'app-2-home.js', 'css-1-base.css', 'css-2-theme.css', 'css-3-fixes.css', 'css-4-ios.css', 'css-5-shell.css', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (new URL(e.request.url).origin === location.origin) {
        const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
  );
});
