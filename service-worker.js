const CACHE_NAME = 'mema-v4-cache-v1';
const urlsToCache = [
  './mema_pwa.html',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&family=Poppins:wght@300;400;600&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request).catch(() => {
          return new Response('<h1 style="text-align:center;padding-top:50px;font-family:sans-serif;">MEMA - Fara internet</h1><p style="text-align:center;">Harta necesita conexiune la internet.</p>', { headers: {'Content-Type': 'text/html'} });
        });
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});