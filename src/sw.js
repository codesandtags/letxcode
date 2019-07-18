// Service Worker Definition
const cacheName = 'cache-v1';
const precacheResources = [
  '/',
  'index.html',
  'assets/images/search-job.png',
  'main.css',
  'main.js'
]


self.addEventListener('install', event => {
  console.log('⚙️ Service Worker install event');

  event.waitUntil(
    caches
    .open(cacheName)
    .then(cache => {
      return cache.addAll(precacheResources);
    })
  )
});

self.addEventListener('activate', event => {
  console.log('⚙️ Service Worker activate event');

});

self.addEventListener('fetch', event => {
  console.log('⚙️ Service Worker fetch event: Intercepted for :', event.request.url);

  event.respondWith(
    caches
    .match(event.request)
    .then(cacheResponse => {
      if (cacheResponse) {
        return cacheResponse;
      }
      return fetch(event.request);
    })
  )

});
