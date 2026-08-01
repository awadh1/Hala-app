/* عامل خدمة بسيط جداً — مطلوب تقنياً عشان المتصفح ومولّدات APK
   يعتبرون الموقع "تطبيق ويب تقدمي" قابل للتثبيت. ما نخزّن أي شي
   للعمل بدون نت — التطبيق أصلاً محتاج اتصال حي بالبروكر عشان
   يشتغل، فمالها فايدة حقيقية بدون إنترنت. */
self.addEventListener('install', function (e) {
  self.skipWaiting();
});
self.addEventListener('activate', function (e) {
  self.clients.claim();
});
self.addEventListener('fetch', function (e) {
  // نمرّر كل طلب زي ما هو — بدون تخزين مؤقت، عشان دايماً تجيك آخر نسخة
  e.respondWith(fetch(e.request));
});
