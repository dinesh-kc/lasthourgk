const CACHE_VERSION = '1.0.0';
const CACHE_NAME = `gk-quiz-${CACHE_VERSION}`;

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/organization.html',
                '/bookmark.html',
                '/styles.css',
                '/mcqstyle.css',
                '/organization.js'
            ]);
        })
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name => name.startsWith('gk-quiz-') && name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        })
    );
}); 