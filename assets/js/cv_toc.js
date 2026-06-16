(function () {
  // Align with fixed navbar (56px) + anchor offset (~70px)
  var FOCUS_OFFSET = 72;
  var clickLockUntil = 0;

  function cvSections() {
    var sections = [];
    document.querySelectorAll(".cv a.anchor[id]").forEach(function (anchor) {
      var card = anchor.nextElementSibling;
      if (!card || !card.classList.contains("card")) return;
      var heading = card.querySelector("h3.card-title");
      sections.push({ id: anchor.id, anchor: anchor, card: card, heading: heading || card });
    });
    return sections;
  }

  function setActive(id) {
    document.querySelectorAll("#toc-sidebar .cv-toc .nav-link").forEach(function (link) {
      var href = link.getAttribute("href");
      link.classList.toggle("active", href === "#" + id);
    });
  }

  function updateCvTocActive() {
    if (Date.now() < clickLockUntil) return;

    var sections = cvSections();
    if (!sections.length) return;

    var activeIndex = 0;

    sections.forEach(function (section, index) {
      var top = section.heading.getBoundingClientRect().top;
      if (top <= FOCUS_OFFSET) {
        activeIndex = index;
      }
    });

    setActive(sections[activeIndex].id);
  }

  function initCvToc() {
    if (!document.querySelector("#toc-sidebar .cv-toc")) return;

    window.addEventListener("scroll", updateCvTocActive, { passive: true });
    window.addEventListener("resize", updateCvTocActive, { passive: true });

    document.querySelectorAll("#toc-sidebar .cv-toc .nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        var id = this.getAttribute("href").slice(1);
        setActive(id);
        clickLockUntil = Date.now() + 700;
        window.setTimeout(updateCvTocActive, 750);
      });
    });

    updateCvTocActive();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCvToc);
  } else {
    initCvToc();
  }
})();
