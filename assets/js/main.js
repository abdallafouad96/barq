/* Barq website: language switch (English / Arabic), showcase tabs, live accent colour, reveal on scroll. */
(function () {
  "use strict";

  var AR = {
    "nav.why": "ليه برق", "why.eyebrow": "ليه برق", "why.h2": "تطبيق واحد بدل خمسة",
    "why.sub": "ناس كتير عندها برنامج لتحميل الفيديو، ومدير تحميلات، وتطبيق تورنت، ومانع إعلانات، ومتصفح. برق هو كل دول، وكل جزء فيه معمول عشان يبقى الأسرع في نوعه.",
    "wy1.h": "فيديو من غير استنى", "wy1.p": "شارك رابط من يوتيوب أو فيسبوك أو تيك توك أو إنستجرام أو X: الجودات والأحجام بتظهر في حوالي ثانية، والتحميل بيبدأ على طول. ولو فتحت صفحة الفيديو في متصفح برق، بتبقى جاهزة قبل ما تدوس.",
    "wy2.h": "سرعة مدير تحميلات حقيقي", "wy2.p": "كل ملف بيتقسم أجزاء بتتحمّل مع بعض. ولما جزء يخلص بدري، الاتصال بتاعه ياخد نص أبطأ جزء، فآخر ثواني بتبقى سريعة زي أولها. والنت لو فصل؟ بيكمّل لوحده.",
    "wy3.h": "إعلانات بعيد عنك", "wy3.p": "عشر قوايم فلترة، منها قوايم للمواقع العربي. النوافذ المنبثقة وأزرار التشغيل المزيفة والتحويلات في مواقع الأفلام والمسلسلات بتتمنع، حتى شبكات الإعلانات اللي بتغيّر اسمها كل كام يوم، والمشغّل نفسه بيفضل شغّال.",
    "wy4.h": "مجاني، وهيفضل مجاني", "wy4.p": "مافيش إعلانات جوه التطبيق، ولا حساب، ولا نسخة مدفوعة بتخبّي مميزات. وبرق بيدوّر على التحديثات ويثبّتها لوحده.",
    "cmp.other": "تطبيق تحميل عادي",
    "cmp.r1": "فيديو من يوتيوب وفيسبوك وتيك توك وإنستجرام و X", "cmp.r2": "الجودات جاهزة في حوالي ثانية",
    "cmp.r3": "اتصالات كتير للملف، والأجزاء بتتوزّع وهو شغّال", "cmp.r4": "تورنت وروابط magnet",
    "cmp.r5": "متصفح بمانع إعلانات للمواقع العربي", "cmp.r6": "نافذة عائمة فوق أي تطبيق",
    "cmp.r7": "ابعت روابط للكمبيوتر والعكس", "cmp.r8": "من غير إعلانات ولا حساب",
    "why.cta": "حمّل برق مجانًا", "chip.4": "بيحدّث نفسه",
    "dl.old": "موبايلك قديم (32-bit)؟", "dl.old.a": "حمّل النسخة دي بدلها",
    "title": "برق — مدير التحميلات السريع لأندرويد وويندوز",
    "desc": "برق مدير تحميلات لأندرويد وويندوز: تحميل بسرعة عالية، فيديو من أي موقع بالجودة اللي تختارها، متصفح يكتشف الملفات، مانع إعلانات، ونوافذ عائمة. بالعربي والإنجليزي.",
    "nav.demos": "إزاي بيشتغل",
    "t6.h": "تورنت زي uTorrent", "t6.p": "افتح رابط magnet أو ملف .torrent، واختار الملفات اللي عايزها، وحمّل بالترتيب لو عايز تشغّل وهو بيتحمّل.",
    "t7.h": "الأقران والمتتبعات والمشاركة", "t7.p": "شوف السرعة اللحظية والأقران والمتتبعات ونسبة المشاركة. حدّد أولوية كل ملف وحدود السرعة، وكمّل المشاركة بعد ما يخلص.",
    "t8.h": "متصفح بصفحة رئيسية", "t8.p": "مواقع سريعة وآخر تنزيلاتك والصفحات اللي زرتها. وزر التحميل بيظهر بس في الصفحات اللي فيها فيديو شغّال.",
    "f10.h": "تورنت", "f10.p": "روابط magnet وملفات .torrent مع اختيار الملفات والأقران والمتتبعات وحدود السرعة والمشاركة، زي uTorrent.",
    "f11.h": "ابحث أو الصق رابط", "f11.p": "خانة البحث في التحميلات بتقبل الروابط كمان: الملف بيتحمّل، والصفحة بتفتح في المتصفح. ملقيتش حاجة؟ دوّر في جوجل بضغطة.",
    "f12.h": "خفيف ومحدّث", "f12.p": "وضع خفيف للأجهزة الضعيفة، والإصدارات الجديدة بتتحمّل وتتثبّت لوحدها.",
    "dm.eyebrow": "إزاي بيشتغل", "dm.h2": "شوفه بالحركة", "dm.sub": "ست حلقات قصيرة بتوضّح الأفكار الأساسية على الموبايل والكمبيوتر. دي رسوم متحركة معمولة للصفحة، والصور الحقيقية موجودة في قسمي أندرويد وويندوز.",
    "d1.h": "أربع طرق للتحميل", "d1.p": "الصق الرابط في زر + أو في خانة البحث، أو شاركه من تطبيق تاني، أو افتح magnet، أو دوّر في جوجل لو مفيش نتيجة.",
    "d2.h": "الزر بيظهر لما يكون فيه فيديو", "d2.p": "افتح الصفحة وشغّل الفيديو الأول. وقتها بس بيظهر زر التحميل، فمفيش زر مربك في صفحات من غير فيديو.",
    "d3.h": "تورنت مع اختيار الملفات", "d3.p": "اختار الملفات اللي عايزها، وشوف الأقران وهم بيتصلوا، وحدّد السرعة، وكمّل المشاركة بعد ما يخلص.",
    "d4.h": "الإعلانات والمتتبعات متحجوبة", "d4.p": "عدّاد مباشر بيوريك اللي اتمنع في الصفحة، وتقدر توقفه لموقع واحد من الدرع.",
    "nav.features": "المميزات", "nav.showcase": "أندرويد", "nav.custom": "خصّصه", "nav.faq": "الأسئلة", "nav.download": "تحميل",
    "hero.pill": "برق واحد · أندرويد 10+ وويندوز 10/11",
    "nav.shield": "الحماية", "nav.link": "الموبايل + الكمبيوتر",
    "lnk.eyebrow": "الموبايل + الكمبيوتر", "lnk.h2": "موبايلك وكمبيوترك شغالين مع بعض",
    "lnk.sub": "اربط برق على الأندرويد بـ Barq DM على الويندوز مرة واحدة. على نفس الواي فاي، ابعت روابط للكمبيوتر، ورجّع الملفات اللي خلصت للموبايل.",
    "lnk.cap1": "Barq DM: المهام ← توصيل الموبايل", "lnk.cap2": "برق: الإعدادات ← ربط الكمبيوتر",
    "lnk.s1h": "اربط بكود QR", "lnk.s1p": "على الكمبيوتر افتح المهام ← توصيل الموبايل. وعلى الموبايل افتح الإعدادات ← ربط الكمبيوتر وامسح الكود. خلاص، مرة واحدة.",
    "lnk.s2h": "ابعت روابط للكمبيوتر", "lnk.s2p": "لقيت ملف كبير على الموبايل؟ دوس «الكمبيوتر» في نافذة المشاركة أو «ابعت لـ» في زرار +، وBarq DM هيحمّله على الكمبيوتر.",
    "lnk.s3h": "رجّع الملفات للموبايل", "lnk.s3p": "شوف تحميلات الكمبيوتر لحظة بلحظة، ودوس «هات» على ملف خلص عشان ينتقل للموبايل على الواي فاي، مع الاستكمال.",
    "lnk.safe": "آمن من الأساس: محدش يقدر يكلّم Barq DM غير الموبايل اللي مسح الكود، كل طلب بيتوقّع بمفتاحه، ومفيش حاجة بتخرج بره الواي فاي بتاعك.",
    "sx.eyebrow": "Barq Shield", "sx.h": "مانع إعلانات جوّه الإضافة",
    "sx.p": "إضافة Barq DM لكروم وإيدج وفايرفوكس جاية ومعاها Barq Shield. بيحجب الإعلانات والمتتبعات والنوافذ المنبثقة في كل المواقع، وبيخفي المربعات الفاضية اللي بتسيبها.",
    "sx.l1": "9 قوايم فلترة معروفة: EasyList وEasyList العربية وفلاتر uBlock وEasyPrivacy وغيرهم، حوالي 18,000 قاعدة.",
    "sx.l2": "القوايم بتحدّث نفسها مرة في اليوم، وبيتحمّل بس اللي اتغيّر.",
    "sx.l3": "بيوقف النوافذ المنبثقة والطبقات الخفية اللي بتفتح إعلان في أي مكان تدوس فيه.",
    "sx.l4": "«حجب عنصر»: دوس على أي حاجة في الصفحة عشان تخفيها، وتفضل مخفية.",
    "sx.l5": "توقفه على موقع واحد، تضيف فلاترك الخاصة، وتتخطى إعلانات يوتيوب (تجريبي).",
    "sx.how": "عشان تشغّله: دوس على زرار Barq DM في شريط أدوات المتصفح، افتح تبويب الحماية ودوس زرار التشغيل.",
    "sx.off": "الحماية مقفولة", "sx.on": "الحماية شغالة",
    "w5.h": "Barq Shield", "w5.p": "الإعلانات والمتتبعات والنوافذ المنبثقة متحجوبة في المتصفح بـ 9 قوايم فلترة بتحدّث نفسها.",
    "w6.h": "قوائم انتظار وجدولة", "w6.p": "شغّل التحميلات بالليل، حدّد السرعة، وخلّي Barq DM يقفل الجهاز لما يخلص.",
    "fc.conn": "اتصال للملف الواحد", "fc.shield": "إعلان اتمنع بـ Barq Shield",
    "d5.h": "من المتصفح لـ Barq DM", "d5.p": "دوس على تحميل في كروم أو إيدج أو فايرفوكس: الإضافة بتبعته لـ Barq DM، اللي بيقسمه لأجزاء بتتحمّل مع بعض.",
    "d6.h": "شكلين، زرار واحد", "d6.p": "برق زي تطبيق الأندرويد، وكلاسيك الجدول المعروف بشريط الأدوات. غيّره من الخيارات ← الثيمات، وتحميلاتك زي ما هي.", "hero.win": "ويندوز", "nav.windows": "ويندوز",
    "w.eyebrow": "برق لويندوز", "w.h2": "نفس برق على الكمبيوتر", "w.sub": "Barq DM بيجيب نفس الشكل ونفس السرعة لويندوز، ومعاه إضافة للمتصفح بتاخد تحميلاتك.",
    "w1.h": "اتصالات متعددة", "w1.p": "الملف بيتقسم لأجزاء بتتحمّل مع بعض، وبيكمّل بعد انقطاع النت أو إعادة التشغيل.",
    "w2.h": "إضافة للمتصفح", "w2.p": "لكروم وإيدج وفايرفوكس: Barq DM بياخد التحميلات والفيديوهات وروابط magnet من الصفحة.",
    "w3.h": "فيديو وتورنت", "w3.p": "فيديوهات المواقع المشهورة بالجودة اللي تختارها، وروابط magnet وملفات .torrent.",
    "w4.h": "بيحدّث نفسه", "w4.p": "Barq DM بيدوّر على إصدار جديد مرة في اليوم وبيثبّته بعد موافقتك، بعد التحقق ببصمة SHA-256.",
    "w.dl.eyebrow": "تحميل لويندوز", "w.dl.h2": "حمّل Barq DM", "w.dl.sub": "ملف تثبيت أو نسخة محمولة. ويندوز 10 و11، 64 بت.",
    "wt1.h": "كل حاجة قدامك", "wt2.h": "أضف رابط", "wt3.h": "التقدم لحظة بلحظة", "wt4.h": "خلص في ضغطة", "wt5.h": "الوضع الفاتح", "wt6.h": "بالعربي",
    "wt1.p": "السرعة والتحميلات الشغالة فوق، وفلاتر ملونة بالأعداد، وخانة بحث بتقبل الروابط كمان: الصق الرابط والتحميل يبدأ.",
    "wt2.p": "الصق الرابط (أو خلّي إضافة المتصفح تبعته): Barq DM بيعرض الاسم والحجم والتصنيف، وبيحط الملف في المجلد الصح.",
    "wt3.p": "كل ملف بيتقسم لحد 32 جزء بيتحمّلوا مع بعض. هتشوف كل اتصال والسرعة والوقت المتبقي، وتقدر توقف وتكمّل في أي وقت.",
    "wt4.p": "لما التحميل يخلص، نافذة صغيرة بتخليك تفتح الملف أو مجلده على طول، أو تنسخ الرابط.",
    "wt5.p": "الفاتح والغامق بيمشوا مع ويندوز تلقائيًا، واللون المميز ممكن يمشي مع ويندوز أو تختاره بنفسك.",
    "wt6.p": "البرنامج كله بالعربي والإنجليزي، والواجهة بتتقلب من اليمين للشمال لوحدها.",
    "lk.eyebrow": "شكلين، برنامج واحد", "lk.h": "برق ولا كلاسيك: انت تختار",
    "lk.p": "Barq DM ليه شكلين. <b>برق</b> زي تطبيق الأندرويد: مربعات وفلاتر وكروت. و<b>كلاسيك</b> الجدول المعروف بالقوائم وشريط الأدوات وشجرة التصنيفات. التحميلات والقوائم والإعدادات واحدة في الاتنين.",
    "lk.b1": "برق · غامق", "lk.b2": "برق · فاتح", "lk.b3": "كلاسيك · فاتح", "lk.b4": "كلاسيك · غامق",
    "lk.s1": "افتح الخيارات (الترس اللي فوق، أو المهام ← خيارات).", "lk.s2": "روح لتبويب الثيمات.",
    "lk.s3": "اختار برق أو كلاسيك، وبعدين فاتح أو غامق أو زي ويندوز.", "lk.s4": "دوس موافق: البرنامج بيعيد تشغيل نفسه بالشكل الجديد، والتحميلات الشغالة بتكمّل.",
    "w.req": "ويندوز 10 / 11", "w.btn": "تحميل لويندوز", "w.zip": "نسخة محمولة (zip)", "w.all": "كل الإصدارات وبصمات SHA-256",
    "hero.h1a": "حمّل أي شيء.", "hero.h1b": "بسرعة البرق.",
    "hero.lead": "الصق رابط من يوتيوب أو فيسبوك أو تيك توك أو إنستجرام أو X واختار الجودة في ثانية. الملفات بتتحمّل على اتصالات كتير مع بعض، وإعلانات مواقع الأفلام بتتمنع، والتورنت والمتصفح والنافذة العائمة كلهم جوّه. مجاني، من غير إعلانات ولا حساب.",
    "hero.dl": "أندرويد (APK)", "hero.more": "اكتشف المميزات",
    "chip.1": "مجاني، من غير إعلانات ولا حساب", "chip.2": "بالعربي والإنجليزي", "chip.3": "مانع إعلانات على الموبايل والكمبيوتر",
    "fc.speed": "سرعة التحميل", "fc.q": "أعلى جودة",
    "stat.1": "منصتين: أندرويد وويندوز", "stat.2": "اتصال للملف على الكمبيوتر", "stat.3": "لقراية جودات الفيديو", "stat.4": "قوايم فلترة في Barq Shield",
    "sh.eyebrow": "من جوّه التطبيق", "sh.h2": "لقطات حقيقية من برق", "sh.sub": "كل صورة هنا مصوّرة من التطبيق نفسه على موبايل حقيقي.",
    "t1.h": "تحميلاتك في نظرة", "t1.p": "عدد التحميلات النشطة، السرعة اللحظية، والإعلانات المحجوبة فوق. وتحتها كل ملف بحالته بلون واضح: مكتمل، متوقف، فاشل أو جاري.",
    "t2.h": "كل الجودات في نافذة واحدة", "t2.p": "شارك رابط فيديو لبرق، وتظهر لك نافذة صغيرة فيها كل الجودات بأحجامها، من 144p لحد 4K. اختر الصيغة (MP4 أو MKV) أو الصوت فقط.",
    "t3.h": "تحميل ذكي", "t3.p": "جدولة التحميل في وقت معين، ترتيب الملفات في مجلدات حسب النوع، وحد سرعة بضغطة، ووضع Wi-Fi فقط.",
    "t4.h": "إعدادات منظّمة", "t4.p": "كل قسم في صف واضح، وتحت كل واحد قيمته الحالية. تغيّر اللي عايزه من غير ما تدخل صفحات كتير.",
    "t5.h": "جاهز في ثواني", "t5.p": "أول تشغيل بيشرح الصلاحيات المطلوبة بشكل واضح، وبعدها كل حاجة تشتغل بنفسها.",
    "ft.eyebrow": "المميزات", "ft.h2": "كل اللي تحتاجه في تطبيق واحد", "ft.sub": "برق بيجمع محرك تحميل قوي، ومتصفح، وأدوات تحكم، من غير تعقيد.",
    "f1.h": "تحميل سريع", "f1.p": "كل ملف بيتقسّم لأجزاء تتحمّل مع بعض، بعدة اتصالات. التحميلات بتتوقف وتكمل وتعيد المحاولة لوحدها.",
    "f2.h": "فيديو من أي موقع", "f2.p": "يوتيوب وفيسبوك وإنستجرام وتيك توك و X ومشغّلات مواقع الأفلام. الجودات في حوالي ثانية؛ اختار واحدة، أو الصوت بس، أو قايمة تشغيل كاملة.",
    "f3.h": "متصفح يكتشف الملفات", "f3.p": "افتح أي موقع داخل برق: الفيديوهات والملفات اللي في الصفحة بتظهر على زر التحميل.",
    "f4.h": "حظر الإعلانات والمتتبعات", "f4.p": "عشر قوايم فلترة منها قوايم عربي، ومنع النوافذ المنبثقة والتحويلات في مواقع الأفلام، وزرار درع تقفله لموقع واحد.",
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
    "dl.eyebrow": "التحميل", "dl.h2": "حمّل برق دلوقتي", "dl.sub": "ملف APK مباشر لأندرويد 10 وأحدث. وبعد ما تثبّته، برق بيحدّث نفسه.",
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

  /* showcase tabs (Android phone and Windows screenshots): click, or follow auto-advance */
  function showcase(tabSel, shotSel, capSel, onSelect) {
    var tabs = Array.prototype.slice.call(document.querySelectorAll(tabSel));
    var shots = Array.prototype.slice.call(document.querySelectorAll(shotSel));
    var caps = capSel ? Array.prototype.slice.call(document.querySelectorAll(capSel)) : [];
    var cur = 0, timer = null;
    function select(i) {
      cur = i;
      tabs.forEach(function (t, n) { t.setAttribute("aria-selected", String(n === i)); });
      shots.forEach(function (s, n) { s.classList.toggle("on", n === i); });
      caps.forEach(function (c, n) { c.classList.toggle("on", n === i); });
      if (onSelect) onSelect(shots[i]);
    }
    function auto() { clearInterval(timer); timer = setInterval(function () { select((cur + 1) % tabs.length); }, 7000); }
    tabs.forEach(function (t, i) { t.addEventListener("click", function () { select(i); auto(); }); });
    if (tabs.length) { select(0); auto(); }
  }
  showcase(".tab", "#showScreen img", null, null);
  var wstage = document.querySelector(".wstage");
  showcase(".wtab", ".wstage img:not(.wbg)", ".wcaps p", function (img) {
    if (wstage && img) wstage.classList.toggle("dlg-on", img.classList.contains("dlg"));
  });

  /* Barq Shield: before / after slider (moves by itself until it is touched) */
  var ba = document.getElementById("ba");
  if (ba) {
    var rng = ba.querySelector(".ba-range"), touched = false, t0 = Date.now();
    function setPos(v) { ba.style.setProperty("--pos", v + "%"); rng.value = v; }
    rng.addEventListener("input", function () { touched = true; setPos(+rng.value); });
    if (!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
      (function swing() { if (touched) return; var k = (Date.now() - t0) / 2600; setPos(Math.round(50 + 38 * Math.sin(k))); requestAnimationFrame(swing); })();
    }
  }

  /* Windows: Barq / Classic look switch */
  var lookImg = document.getElementById("lookImg");
  document.querySelectorAll(".lookbtn").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".lookbtn").forEach(function (o) { o.setAttribute("aria-pressed", String(o === b)); });
      if (!lookImg) return;
      var n = b.getAttribute("data-look");
      var cls = n.indexOf("classic") >= 0;
      lookImg.style.opacity = "0";
      setTimeout(function () {
        lookImg.src = "assets/img/" + n + ".webp";
        lookImg.width = cls ? 1166 : 1366; lookImg.height = cls ? 593 : 793;
        lookImg.style.opacity = "1";
      }, 180);
    });
  });
  var pcShots = Array.prototype.slice.call(document.querySelectorAll("#pcScreen img"));
  if (pcShots.length > 1) {
    var q = 0; pcShots[0].classList.add("on");
    setInterval(function () { pcShots[q].classList.remove("on"); q = (q + 1) % pcShots.length; pcShots[q].classList.add("on"); }, 5200);
  }
  /* Barq Shield counter in the hero */
  var shN = document.querySelector(".sh-n");
  if (shN && !(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
    var shV = 1284;
    setInterval(function () { shV += 1 + Math.floor(Math.random() * 3); shN.textContent = shV.toLocaleString("en-US"); }, 1400);
  }
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
