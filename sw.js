self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('dodgerocks-v1').then(cache => {
      return cache.addAll([
        '.',
        'index.html',
        'manifest.json',
        'kv-jam.mp3',
        '080047_lose_funny_retro_video-game.mp3'
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
