class Pwa {
  connect() {
    if (this.isServiceWorkerSupported) {
      this.registerServiceWorker()
    }
  }

  registerServiceWorker() {
    navigator.serviceWorker
      .register('service_worker.js', { scope: '/' })
      .then((reg) => console.log('Service Worker Registered with scope', reg.scope))
      .catch((error) =>
        console.error('Service worker registration failed: ' + error)
      )
  }

  get isServiceWorkerSupported() {
    return 'caches' in window && 'serviceWorker' in navigator
  }
}

(new Pwa()).connect()
