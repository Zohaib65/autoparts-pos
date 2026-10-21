/* lets the browser offer "Install app". It never stores pages, so the newest version always loads. */
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{});
