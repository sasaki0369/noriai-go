// sw.js — のりあいGO 用の最小限のService Worker
// このファイルが存在すること自体が、Chromeの「アプリをインストール」表示条件の一つになる。
// キャッシュ戦略は持たせず、通常はそのままネットワークへフォールスルーする。

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(
      () => new Response('オフラインです。ネットワーク接続をご確認ください。', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      })
    )
  );
});
