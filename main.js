/* Jessie Zhang portfolio — lightbox + scroll reveal (vanilla JS) */
(function () {
  "use strict";

  /* ---------- lightbox ---------- */
  var figures = Array.prototype.slice.call(
    document.querySelectorAll(".art img, .case-step img")
  );
  var lb = document.getElementById("lightbox");
  var lbImg = lb.querySelector(".lb-img");
  var lbCap = lb.querySelector(".lb-caption");
  var current = -1;

  function captionFor(img) {
    var fig = img.closest("figure");
    var cap = fig ? fig.querySelector("figcaption") : null;
    return cap ? cap.textContent : img.alt || "";
  }

  function show(i) {
    current = (i + figures.length) % figures.length;
    var img = figures[current];
    lbImg.src = img.src;
    lbImg.alt = img.alt || "";
    lbCap.textContent = captionFor(img);
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    lbImg.src = "";
    document.body.style.overflow = "";
  }

  figures.forEach(function (img, i) {
    img.addEventListener("click", function () { show(i); });
  });

  lb.querySelector(".lb-close").addEventListener("click", close);
  lb.querySelector(".lb-prev").addEventListener("click", function () { show(current - 1); });
  lb.querySelector(".lb-next").addEventListener("click", function () { show(current + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) close(); });

  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });

  /* ---------- scroll reveal ---------- */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el) { io.observe(el); });
  }
})();
