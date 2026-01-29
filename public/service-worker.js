const CACHE_NAME = "image-cache-v1";

// 캐시할 파일 패턴 (이미지)
const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"];

// 설치: 기본 캐시 생성
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

// 활성화: 이전 캐시 정리
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name)),
      );
    }),
  );
  self.clients.claim();
});

// 요청 가로채기: 이미지는 캐시 우선
self.addEventListener("fetch", (event) => {
  const url = event.request.url;
  const isImage = IMAGE_EXTENSIONS.some((ext) =>
    url.toLowerCase().includes(ext),
  );

  if (isImage) {
    // 이미지: 캐시에 있으면 캐시에서, 없으면 네트워크에서 받아서 캐시에 저장
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse; // 캐시 히트
          }
          return fetch(event.request).then((networkResponse) => {
            // 성공한 응답만 캐시
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      }),
    );
  }
  // 이미지가 아니면 그냥 네트워크로
});
