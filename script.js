// =========================
// TRANSLATIONS
// =========================
const translations = {
  ka: {
    'nav-home': 'მთავარი',
    'nav-buy': 'როგორ ვიყიდოთ?',
    'nav-cottages': 'კოტეჯები',
    'nav-contact': 'კონტაქტი',

    'hero-title': 'მიწის ნაკვეთები და კოტეჯების მშენებლობა საქართველოში',
    'hero-text': 'დაგეხმარებით მიწის ნაკვეთების შერჩევაში და თანამედროვე კოტეჯების აშენებაში.',

    'buy-title': 'როგორ ხდება ნაკვეთის შეძენა საქართველოში?',
    'buy-text-1': 'უცხოელებსაც და ქართველებსაც შეუძლიათ მიწის ყიდვა მარტივად.',
    'buy-text-2': 'ჩვენ დაგეხმარებით:',
    'buy-li-1': 'ნაკვეთის შერჩევაში;',
    'buy-li-2': 'იურიდიული დოკუმენტაციის გადამოწმებაში;',
    'buy-li-3': 'შეთანხმებისა და რეგისტრაციის მომზადებაში.',

    'build-title': 'კოტეჯების მშენებლობა',
    'build-text-1': 'ვაშენებთ თანამედროვე, ენერგოეფექტურ კოტეჯებს.',
    'build-text-2': 'სტანდარტული 40–60 მ² კოტეჯები სრულად დასრულებული ფორმატით.',
    'build-btn': 'მეტის ნახვა',

    'contact-title': 'კონტაქტი',
    'contact-text': 'დაგვიტოვეთ შეტყობინება და დაგიკავშირდებით.'
  },

  en: {
    'nav-home': 'Home',
    'nav-buy': 'How to buy?',
    'nav-cottages': 'Cottages',
    'nav-contact': 'Contact',

    'hero-title': 'Land plots and cottage construction in Georgia',
    'hero-text': 'We help you choose land and build modern cottages with legal support.',

    'buy-title': 'How to buy land?',
    'buy-text-1': 'Foreigners and locals can buy land easily.',
    'buy-text-2': 'We help you:',
    'buy-li-1': 'Select the right land;',
    'buy-li-2': 'Check legal documents;',
    'buy-li-3': 'Prepare agreements and registration.',

    'build-title': 'Cottage construction',
    'build-text-1': 'We build modern, energy-efficient cottages.',
    'build-text-2': 'Standard 40–60 m² fully finished cottages.',
    'build-btn': 'See more',

    'contact-title': 'Contact',
    'contact-text': 'Leave a message and we will contact you.'
  },

  ru: {
    'nav-home': 'Главная',
    'nav-buy': 'Как купить?',
    'nav-cottages': 'Коттеджи',
    'nav-contact': 'Контакты',

    'hero-title': 'Земельные участки и строительство коттеджей в Грузии',
    'hero-text': 'Мы поможем выбрать участок и построить современный коттедж.',

    'buy-title': 'Как купить участок?',
    'buy-text-1': 'И иностранцы, и местные могут легко купить землю.',
    'buy-text-2': 'Мы поможем:',
    'buy-li-1': 'Подобрать участок;',
    'buy-li-2': 'Проверить документы;',
    'buy-li-3': 'Подготовить договор и регистрацию.',

    'build-title': 'Строительство коттеджей',
    'build-text-1': 'Мы строим современные энергоэффективные коттеджи.',
    'build-text-2': 'Стандартные 40–60 м² полностью готовые коттеджи.',
    'build-btn': 'Подробнее',

    'contact-title': 'Контакты',
    'contact-text': 'Оставьте сообщение и мы свяжемся с вами.'
  }
};


// =============================
// LANGUAGE SWITCHER
// =============================
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = translations[lang][key] || el.innerHTML;
  });

  localStorage.setItem("site-language", lang);
  document.querySelector(".lang-btn").textContent = lang.toUpperCase() + " ▾";
}

document.querySelector(".lang-btn").addEventListener("click", () => {
  document.querySelector(".lang-list").classList.toggle("show");
});

document.querySelectorAll(".lang-list li").forEach(li => {
  li.addEventListener("click", () => {
    setLanguage(li.dataset.lang);
    document.querySelector(".lang-list").classList.remove("show");
  });
});

document.addEventListener("click", e => {
  if (!document.querySelector(".lang-dropdown").contains(e.target)) {
    document.querySelector(".lang-list").classList.remove("show");
  }
});

// Load saved language
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem("site-language") || "ka");
});


// =============================
// HEADER SCROLL EFFECT
// =============================
window.addEventListener("scroll", () => {
  const header = document.querySelector(".glass-header");
  if (window.scrollY > 80) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});
