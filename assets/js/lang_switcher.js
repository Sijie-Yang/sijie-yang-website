(function () {
  var STORAGE_KEY = "site-lang";

  function pageDefaultLang() {
    var meta = document.querySelector('meta[name="default-lang"]');
    return meta && meta.content === "zh" ? "zh" : "en";
  }

  function getStoredLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "zh" || saved === "en") return saved;
    } catch (e) {}
    return null;
  }

  function setLang(lang) {
    if (lang !== "zh" && lang !== "en") return;

    document.querySelectorAll(".lang-content[data-lang]").forEach(function (el) {
      el.classList.toggle("active", el.getAttribute("data-lang") === lang);
    });

    document.querySelectorAll(".lang-switch-btn-nav, .lang-switch-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.dispatchEvent(new CustomEvent("site-lang-change", { detail: { lang: lang } }));
  }

  function initLangSwitcher() {
    document.querySelectorAll(".lang-switch-btn-nav, .lang-switch-btn").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        setLang(this.getAttribute("data-lang"));
      });
    });

    setLang(getStoredLang() || pageDefaultLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLangSwitcher);
  } else {
    initLangSwitcher();
  }

  window.siteSetLang = setLang;
})();
