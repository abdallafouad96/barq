/* Barq website: language switch (English / Arabic), showcase tabs, live accent colour, reveal on scroll. */
(function () {
  "use strict";

  var AR = {
    "title": "برق — مدير التحميلات الأسرع لأندرويد",
    "desc": "برق مدير تحميلات لأندرويد: تحميل بسرعة عالية، فيديو من أي موقع بالجودة اللي تختارها، متصفح يكتشف الملفات، مانع إعلانات، ونوافذ عائمة. بالعربي والإنجليزي.",
    "nav.demos": "إزاي بيشتغل",
    "t6.h": "تورنت زي uTorrent", "t6.p": "افتح رابط magnet أو ملف .torrent، واختار الملفات اللي عايزها، وحمّل بالترتيب لو عايز تشغّل وهو بيتحمّل.",
    "t7.h": "الأقران والمتتبعات والمشاركة", "t7.p": "شوف السرعة اللحظية والأقران والمتتبعات ونسبة المشاركة. حدّد أولوية كل ملف وحدود السرعة، وكمّل المشاركة بعد ما يخلص.",
    "t8.h": "متصفح بصفحة رئيسية", "t8.p": "مواقع سريعة وآخر تنزيلاتك والصفحات اللي زرتها. وزر التحميل بيظهر بس في الصفحات اللي فيها فيديو شغّال.",
    "f10.h": "تورنت", "f10.p": "روابط magnet وملفات .torrent مع اختيار الملفات والأقران والمتتبعات وحدود السرعة والمشاركة، زي uTorrent.",
    "f11.h": "ابحث أو الصق رابط", "f11.p": "خانة البحث في التحميلات بتقبل الروابط كمان: الملف بيتحمّل، والصفحة بتفتح في المتصفح. ملقيتش حاجة؟ دوّر في جوجل بضغطة.",
    "f12.h": "خفيف ومحدّث", "f12.p": "وضع خفيف للأجهزة الضعيفة، وفحص مدمج للإصدارات الجديدة.",
    "dm.eyebrow": "إزاي بيشتغل", "dm.h2": "شوفه بالحركة", "dm.sub": "أربع حلقات قصيرة بتوضّح الأفكار الأساسية. دي رسوم متحركة معمولة للصفحة دي، مش تسجيل شاشة.",
    "d1.h": "أربع طرق للتحميل", "d1.p": "الصق الرابط في زر + أو في خانة البحث، أو شاركه من تطبيق تاني، أو افتح magnet، أو دوّر في جوجل لو مفيش نتيجة.",
    "d2.h": "الزر بيظهر لما يكون فيه فيديو", "d2.p": "افتح الصفحة وشغّل الفيديو الأول. وقتها بس بيظهر زر التحميل، فمفيش زر مربك في صفحات من غير فيديو.",
    "d3.h": "تورنت مع اختيار الملفات", "d3.p": "اختار الملفات اللي عايزها، وشوف الأقران وهم بيتصلوا، وحدّد السرعة، وكمّل المشاركة بعد ما يخلص.",
    "d4.h": "الإعلانات والمتتبعات متحجوبة", "d4.p": "عدّاد مباشر بيوريك اللي اتمنع في الصفحة، وتقدر توقفه لموقع واحد من الدرع.",
    "nav.features": "المميزات", "nav.showcase": "من جوّه التطبيق", "nav.custom": "خصّصه", "nav.faq": "الأسئلة", "nav.download": "تحميل",
    "hero.pill": "الإصدار 0.9.2 · أندرويد 10 فأحدث",
    "hero.h1a": "حمّل أي شيء.", "hero.h1b": "بسرعة البرق.",
    "hero.lead": "برق مدير تحميلات ذكي لأندرويد. ملفات وفيديوهات بأعلى جودة، متصفح يلقط الروابط، ونافذة عائمة تتابع منها كل حاجة.",
    "hero.dl": "تحميل APK", "hero.more": "اكتشف المميزات",
    "chip.1": "مجاني", "chip.2": "بالعربي والإنجليزي", "chip.3": "مانع إعلانات مدمج",
    "fc.speed": "سرعة التحميل", "fc.q": "أعلى جودة",
    "stat.1": "اتصالات لكل ملف", "stat.2": "جودة فيديو", "stat.3": "لغتان", "stat.4": "مانع إعلانات ومتتبعات",
    "sh.eyebrow": "من جوّه التطبيق", "sh.h2": "لقطات حقيقية من برق", "sh.sub": "كل صورة هنا مصوّرة من التطبيق نفسه على موبايل حقيقي.",
    "t1.h": "تحميلاتك في نظرة", "t1.p": "عدد التحميلات النشطة، السرعة اللحظية، والإعلانات المحجوبة فوق. وتحتها كل ملف بحالته بلون واضح: مكتمل، متوقف، فاشل أو جاري.",
    "t2.h": "كل الجودات في نافذة واحدة", "t2.p": "شارك رابط فيديو لبرق، وتظهر لك نافذة صغيرة فيها كل الجودات بأحجامها، من 144p لحد 4K. اختر الصيغة (MP4 أو MKV) أو الصوت فقط.",
    "t3.h": "تحميل ذكي", "t3.p": "جدولة التحميل في وقت معين، ترتيب الملفات في مجلدات حسب النوع، وحد سرعة بضغطة، ووضع Wi-Fi فقط.",
    "t4.h": "إعدادات منظّمة", "t4.p": "كل قسم في صف واضح، وتحت كل واحد قيمته الحالية. تغيّر اللي عايزه من غير ما تدخل صفحات كتير.",
    "t5.h": "جاهز في ثواني", "t5.p": "أول تشغيل بيشرح الصلاحيات المطلوبة بشكل واضح، وبعدها كل حاجة تشتغل بنفسها.",
    "ft.eyebrow": "المميزات", "ft.h2": "كل اللي تحتاجه في تطبيق واحد", "ft.sub": "برق بيجمع محرك تحميل قوي، ومتصفح، وأدوات تحكم، من غير تعقيد.",
    "f1.h": "تحميل سريع", "f1.p": "كل ملف بيتقسّم لأجزاء تتحمّل مع بعض، بعدة اتصالات. التحميلات بتتوقف وتكمل وتعيد المحاولة لوحدها.",
    "f2.h": "فيديو من أي موقع", "f2.p": "يوتيوب وفيسبوك وإنستجرام وتيك توك ومشغلات البث. اختر الجودة أو احفظ الصوت بس، وحمّل قوائم التشغيل كاملة.",
    "f3.h": "متصفح يكتشف الملفات", "f3.p": "افتح أي موقع داخل برق: الفيديوهات والملفات اللي في الصفحة بتظهر على زر التحميل.",
    "f4.h": "حظر الإعلانات والمتتبعات", "f4.p": "قوائم EasyList وEasyPrivacy وhosts، وحظر النوافذ المنبثقة، ودرع لإيقافه على موقع واحد.",
    "f5.h": "روابط ذكية", "f5.p": "شارك أي رابط لبرق: الملفات تروح لنافذة التحميل، والصفحات تفتح في المتصفح.",
    "f6.h": "نافذة عائمة", "f6.p": "التقدم والسرعة وإيقاف سريع فوق أي تطبيق، وحتى داخل متصفح برق.",
    "f7.h": "ما بيضيّع تحميل", "f7.p": "النت قطع؟ التحميلات تستنى وتكمل لوحدها. وفيه وضع Wi-Fi فقط، وإيقاف عند ضعف البطارية.",
    "f8.h": "جدولة وترتيب", "f8.p": "حدّد وقت التحميل (مثلًا بالليل)، والملفات بتترتب في مجلدات: فيديو، صوت، صور، مستندات وتطبيقات.",
    "f9.h": "خصّصه براحتك", "f9.p": "ألوان التطبيق، الحركات، الحواف، حجم الخط، والشريط السفلي. لكل واحد منهم إعداد.",
    "band.eyebrow": "في الاستخدام",
    "b1.h": "النافذة العائمة", "b1.p": "تابع التقدم والحجم وأوقف التحميل بضغطة، من فوق أي تطبيق.",
    "b2.h": "المتصفح المدمج", "b2.p": "صفحة بداية بمواقعك المفضلة، ومانع إعلانات، وزر تحميل بيلقط الملفات.",
    "cu.eyebrow": "خصّصه", "cu.h2": "اختر لون التطبيق", "cu.sub": "الأزرق هو الأساسي، بس تقدر تختار لون تاني أو تضبط أي لون من شريط الألوان، والتطبيق كله يتغيّر. جرّب هنا: اللون بيتغير في الموقع نفسه.",
    "cu.note": "الألوان المتاحة في التطبيق: أزرق، بنفسجي، أخضر، برتقالي، وردي، ولون مخصص من شريط الألوان.",
    "st.eyebrow": "إزاي يشتغل", "st.h2": "ثلاث خطوات وخلصت",
    "s1.h": "شارك الرابط", "s1.p": "من أي تطبيق اضغط مشاركة واختر برق، أو الصق الرابط جوّه التطبيق.",
    "s2.h": "اختر الجودة", "s2.p": "نافذة صغيرة بتعرض الجودات والأحجام. اختر وابدأ، أو احفظه لوقت لاحق.",
    "s3.h": "تابع وخلاص", "s3.p": "التحميل بيكمل في الخلفية. هتلاقي الملف في مجلد Download/Barq جاهز.",
    "dl.eyebrow": "التحميل", "dl.h2": "حمّل برق دلوقتي", "dl.sub": "ملف APK مباشر. الإصدار 0.9.2 لأجهزة أندرويد 10 فأحدث.",
    "dl.btn": "تحميل APK", "dl.ver": "الإصدار", "dl.size": "الحجم", "dl.req": "أندرويد 10+", "dl.sha": "SHA-256",
    "i1.h": "1. نزّل الملف", "i1.p": "اضغط زر التحميل واحفظ ملف الـAPK.",
    "i2.h": "2. اسمح بالتثبيت", "i2.p": "لو أندرويد سأل، اسمح بالتثبيت من المتصفح أو من مدير الملفات.",
    "i3.h": "3. افتح برق", "i3.p": "هيطلب الصلاحيات مرة واحدة، وبعدها جاهز للاستخدام.",
    "fq.eyebrow": "الأسئلة", "fq.h2": "أسئلة شائعة",
    "q1": "هل برق مجاني؟", "a1": "نعم، التطبيق مجاني.",
    "q2": "يشتغل على أنهي إصدار أندرويد؟", "a2": "على أندرويد 10 وأحدث.",
    "q3": "ليه بيطلب صلاحيات؟", "a3": "الإشعارات لعرض التقدم، والعرض فوق التطبيقات للنافذة العائمة، والصور والفيديوهات لعرض المعاينات، وتجاهل توفير البطارية عشان التحميلات الطويلة تكمل. بيطلبهم مرة واحدة في الأول وتقدر تغيّرهم من إعدادات الجهاز.",
    "q4": "فين بيحفظ الملفات؟", "a4": "في مجلد Download/Barq على الذاكرة الداخلية، ومرتبة في مجلدات حسب النوع (فيديو، صوت، صور وغيرها)، وتقدر توقف الترتيب من الإعدادات.",
    "q5": "هل ينزّل أي فيديو؟", "a5": "الفيديوهات العامة من المواقع المشهورة أيوه. المحتوى المحمي بحقوق نسخ رقمية (DRM) أو اللي محتاج تسجيل دخول ممكن ما ينزلش.",
    "q6": "هل التطبيق بالعربي؟", "a6": "أيوه، التطبيق والموقع بالعربي والإنجليزي، والتطبيق بيتحول لاتجاه اليمين لليسار تلقائيًا.",
    "ft.dev": "تطوير: عبدالله فؤاد", "ft.rights": "برق مدير التحميلات"
  };

  var LABELS = { en: { download: "Download" }, ar: { download: "تحميل" } };

  var root = document.documentElement;
  var nodes = document.querySelectorAll("[data-i]");
  nodes.forEach(function (el) { el.dataset.en = el.innerHTML; });
  var metaDesc = document.querySelector('meta[name="description"]');
  var EN_TITLE = document.title, EN_DESC = metaDesc ? metaDesc.getAttribute("content") : "";

  function setLang(lang) {
    var ar = lang === "ar";
    root.lang = ar ? "ar" : "en";
    root.dir = ar ? "rtl" : "ltr";
    nodes.forEach(function (el) {
      var k = el.dataset.i;
      el.innerHTML = ar && AR[k] !== undefined ? AR[k] : el.dataset.en;
    });
    document.title = ar ? AR.title : EN_TITLE;
    if (metaDesc) metaDesc.setAttribute("content", ar ? AR.desc : EN_DESC);
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    try { localStorage.setItem("barq-lang", lang); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem("barq-lang"); } catch (e) {}
  var initial = saved || ((navigator.language || "en").toLowerCase().indexOf("ar") === 0 ? "ar" : "en");
  setLang(initial);
  document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang); }); });

  /* showcase tabs: click, or follow auto-advance */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  var shots = Array.prototype.slice.call(document.querySelectorAll("#showScreen img"));
  var cur = 0, timer = null;
  function select(i) {
    cur = i;
    tabs.forEach(function (t, n) { t.setAttribute("aria-selected", String(n === i)); });
    shots.forEach(function (s, n) { s.classList.toggle("on", n === i); });
  }
  function auto() { clearInterval(timer); timer = setInterval(function () { select((cur + 1) % tabs.length); }, 6000); }
  tabs.forEach(function (t, i) { t.addEventListener("click", function () { select(i); auto(); }); });
  if (tabs.length) { select(0); auto(); }
  var heroShots = Array.prototype.slice.call(document.querySelectorAll("#heroScreen img"));
  if (heroShots.length > 1) {
    var h = 0; heroShots[0].classList.add("on");
    setInterval(function () { heroShots[h].classList.remove("on"); h = (h + 1) % heroShots.length; heroShots[h].classList.add("on"); }, 4500);
  }

  /* live accent colour */
  var PALETTE = { blue: ["#2f7bff", "#38bdf8", "rgba(47,123,255,.45)"], violet: ["#7c6bff", "#a78bfa", "rgba(124,107,255,.45)"], green: ["#10b981", "#34d399", "rgba(16,185,129,.42)"],
    orange: ["#f97316", "#fbbf24", "rgba(249,115,22,.42)"], pink: ["#ec4899", "#f9a8d4", "rgba(236,72,153,.45)"] };
  function paint(a, b, g) { root.style.setProperty("--accent", a); root.style.setProperty("--accent2", b); root.style.setProperty("--glow", g); }
  document.querySelectorAll(".sw").forEach(function (s) {
    s.addEventListener("click", function () {
      document.querySelectorAll(".sw").forEach(function (o) { o.setAttribute("aria-pressed", "false"); });
      s.setAttribute("aria-pressed", "true");
      if (s.dataset.c === "rainbow") {
        var h = Math.floor(Math.random() * 360);
        paint("hsl(" + h + " 85% 58%)", "hsl(" + ((h + 25) % 360) + " 90% 68%)", "hsl(" + h + " 85% 58% / .45)");
      } else { var p = PALETTE[s.dataset.c]; paint(p[0], p[1], p[2]); }
    });
  });

  /* reveal on scroll */
  var rv = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .12 });
    rv.forEach(function (el) { io.observe(el); });
  } else { rv.forEach(function (el) { el.classList.add("in"); }); }
})();

/* demo counters: driven by script so they work in every browser */
(function () {
  var pct = document.querySelector(".d-paste .pct .n"), cnt = document.querySelector(".d-ads .count");
  if (!pct && !cnt) return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { if (pct) pct.textContent = "100%"; if (cnt) cnt.textContent = "217"; return; }
  function tick() {
    var t = Date.now();
    if (pct) { var p = ((t % 6000) / 6000 - 0.28) / 0.54; p = Math.max(0, Math.min(1, p)); pct.textContent = Math.round(p * 100) + "%"; }
    if (cnt) { var q = ((t % 4200) / 4200) / 0.6; cnt.textContent = Math.round(Math.max(0, Math.min(1, q)) * 217); }
  }
  tick(); setInterval(tick, 120);
})();
