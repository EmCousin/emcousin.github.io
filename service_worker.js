const CACHE_VERSION = 'v12'
const CACHE_NAME = CACHE_VERSION + ':sw-cache-emmanuel-cousin'

function onInstall(event) {
  console.log('[Serviceworker]', "Installing!", event)
  event.waitUntil(
    caches.open(CACHE_NAME).then(function prefill(cache) {
      const cachesToAdd = [
        '/assets/images/emmanuel.webp',
        '/assets/images/icons/linkedin.svg',
        '/assets/images/icons/github.svg',
        '/assets/images/icons/github-white.svg',
        '/assets/images/icons/mail.svg',
        '/assets/images/resume/reprtoir_logo.webp',
        '/assets/images/resume/first_ruby_friend_logo.svg',
        '/assets/images/resume/smalldoor_logo.webp',
        '/assets/images/resume/braidio_logo.webp',
        '/assets/images/resume/my_job_glasses_logo.webp',
        '/assets/images/resume/captain_contrat_logo.webp',
        '/assets/images/recommendations/avatar-placeholder.svg',
        '/assets/images/recommendations/dominique.webp',
        '/assets/images/recommendations/steve.webp',
        '/assets/images/recommendations/aurelien.webp',
        '/assets/images/recommendations/nathan.webp',
        '/assets/images/recommendations/nikolaz.webp',
        '/assets/images/recommendations/edward.webp',
        '/assets/images/recommendations/trip.webp',
        '/assets/images/recommendations/elliott.webp',
        '/assets/images/recommendations/pierre.webp',
        '/assets/images/recommendations/manon.webp',
        '/assets/css/main.css',
        '/',
        '/resume',
        '/recommendations',
        '/favicon.ico',
        '/apple-touch-icon.png',
        '/manifest.webmanifest'
      ]

      return cache.addAll(cachesToAdd)
    })
  )
}

function onActivate(event) {
  console.log('[Serviceworker]', "Activating!", event)
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
          return cacheName.indexOf(CACHE_VERSION) !== 0
        }).map(function(cacheName) {
          return caches.delete(cacheName)
        })
      )
    })
  )

  return self.clients.claim()
}

function onFetch(event) {
  event.respondWith(
    // try to return untouched request from network first
    fetch(event.request).catch(function() {
      // if it fails, try to return request from the cache
      return caches.match(event.request.url).then(function(response) {
        if (response) {
          return response
        }
        // if not found in cache, return default offline content for navigate requests
        if (event.request.mode === 'navigate' ||
          (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
          console.log('[Serviceworker]', "Fetching offline content", event)
          return caches.match("/")
        }
      })
    })
  )
}

self.addEventListener('install', onInstall)
self.addEventListener('activate', onActivate)
self.addEventListener('fetch', onFetch)
