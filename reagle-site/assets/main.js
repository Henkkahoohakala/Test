/* Reagle – sivuston toiminnallisuudet */
(function () {
  "use strict";

  /* Header muuttuu kiinteäksi, kun sivua vieritetään */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-solid", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobiilivalikko */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".main-nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Tiimi (Yritys-sivu) */
  var TEAM = [
    ["Henri Hakala", "Partner", "+358 41 506 3101", "henri.hakala@reagle.fi", "2023/02/Hakala_Henri_003_lowres.jpg"],
    ["Alexander Doepel", "Partner", "+358 50 305 3409", "alexander.doepel@reagle.fi", "2021/06/timopyykonen_low-0467.jpg"],
    ["Juhani Paatsama", "Partner", "+358 40 760 9664", "juhani.paatsama@reagle.fi", "2021/06/timopyykonen_low-9880.jpg"],
    ["Peder Lund", "Director, Sweden", "+46 70 2285000", "peder.lund@reagle.se", "2023/02/Peter_02_lowres.jpg"],
    ["Andrew Dalgliesh", "Director, Denmark", "+45 2213 7122", "andrew.dalgliesh@reagle.dk", null],
    ["Antton Nordberg", "Head of CRE & Innovations", "+358 50 357 4285", "antton.nordberg@reagle.fi", "2025/10/nordberg_antton_1_web.jpg"],
    ["Jussi Suominen", "Associate Director", "+358 40 750 9964", "jussi.suominen@reagle.fi", "2026/04/suominen_jussi_01_web1.jpg"],
    ["Pia-Sofia Lehtoniemi", "Associate", "+358 40 719 8053", "pia-sofia.lehtoniemi@reagle.fi", "2021/06/timopyykonen_low-0147.jpg"],
    ["Nico Manelius", "Associate", "+358 50 564 0593", "nico.manelius@reagle.fi", "2022/01/timopyykonen_Hi-0402-1700x1700.jpg"],
    ["Meri Kiikka", "Associate (vanhempainvapaalla)", "+358 40 041 7749", "meri.kiikka@reagle.fi", "2022/01/MG_0051_timopyykonen_Hi-1700x1700.jpg"],
    ["Erik Lilliecreutz", "Associate", "+46 76 345 39 90", "erik.lilliecreutz@reagle.se", "2023/10/Lilliecreutz_Erik_web.jpg"],
    ["Aleksi Lindqvist", "Associate", "+358 44 997 9976", "aleksi.lindqvist@reagle.fi", "2025/10/lindqvist_aleksi_web.jpg"],
    ["Nea Alsina", "Associate", "+358 50 344 0959", "nea.alsina@reagle.fi", "2026/08/alsina_nea_02_web.jpg"],
    ["Pernille Dalgaard", "Associate, Denmark", "+45 22164664", "pernille.dalgaard@reagle.dk", "2026/10/Dalgaard-Pernille-1700x1700.jpg"],
    ["Miro Leppälä", "Senior Advisor", "+358 50 536 7815", "miro.leppala@reagle.fi", "2025/10/leppala_miro_web.jpg"],
    ["Kim Nguyen", "Advisor", "+358 50 384 7861", "kim.nguyen@reagle.fi", "2023/12/Nguyen_Kim_web.jpg"],
    ["Johanna Kovero", "Advisor", "+358 50 313 9030", "johanna.kovero@reagle.fi", "2024/10/kovero_johanna_lowres.jpg"],
    ["Oona Nieminen", "Advisor", "+358 50 512 7178", "oona.nieminen@reagle.fi", "2026/08/nieminen_oona_web.jpg"],
    ["Kauri Melakari", "Data Engineer", "+358 50 387 9871", "kauri.melakari@reagle.fi", "2022/03/MG_9256_timopyykonen_samplet_low.jpg"],
    ["Severi Vapalahti", "Data Engineer", "+358 40 041 9859", "severi.vapalahti@reagle.fi", "2023/01/Vapalahti_Severi_lowres.jpg"],
    ["Maksim Li", "Junior Software Developer", "+358 46 964 3079", "maksim.li@reagle.fi", "2025/01/Le_Maxim_web.jpg"],
    ["Vilma Puusaari", "Analyst", "+358 40 099 5444", "vilma.puusaari@reagle.fi", "2025/03/puusaari_vilma_web.jpg"],
    ["Rebecca Koramo", "Analyst", "+358 44 202 6322", "rebecca.koramo@reagle.fi", "2025/12/koramo_rebecca_web1.jpg"],
    ["Miika Tiirikainen", "Analyst", "+358 50 467 0576", "miika.tiirikainen@reagle.fi", "2025/12/tiirikainen_miika_001_web-1.jpg"],
    ["Viktor Sylvén", "Analyst", "+46 70 888 55 27", "viktor.sylven@reagle.se", "2026/04/sylven_viktor_02_web.jpg"],
    ["Simon Lindström", "Junior Analyst", "+358 40 040 6482", "simon.lindstrom@reagle.fi", "2026/08/lindstrom_simon_web.jpg"],
    ["Netta Varonen", "Data Trainee", "+358 50 357 4380", "netta.varonen@reagle.fi", "2024/05/Varonen_Netta_web.jpg"]
  ];
  var IMG_BASE = "https://reagle.fi/wp-content/uploads/";

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function initials(name) {
    return name.split(/\s+/).map(function (p) { return p.charAt(0); }).join("").slice(0, 2);
  }

  var teamEl = document.getElementById("team-grid");
  if (teamEl) {
    var skip = (teamEl.dataset.skip || "").split(",");
    teamEl.innerHTML = TEAM.filter(function (m) { return skip.indexOf(m[3]) === -1; }).map(function (m) {
      var photo = m[4]
        ? '<img src="' + IMG_BASE + m[4] + '" alt="' + esc(m[0]) + '" loading="lazy" onerror="this.replaceWith(document.createTextNode(\'' + initials(m[0]) + '\'))">'
        : esc(initials(m[0]));
      return '<article class="member reveal">' +
        '<div class="photo">' + photo + '</div>' +
        '<h3>' + esc(m[0]) + '</h3>' +
        '<div class="role">' + esc(m[1]) + '</div>' +
        '<a href="tel:' + m[2].replace(/\s/g, "") + '">' + esc(m[2]) + '</a>' +
        '<a href="mailto:' + m[3] + '">' + esc(m[3]) + '</a>' +
        '</article>';
    }).join("");
  }

  var countEl = document.querySelectorAll("[data-team-count]");
  countEl.forEach(function (el) { el.textContent = TEAM.length; });

  /* Referenssien suodatus */
  var filterBtns = document.querySelectorAll(".filters button");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var cat = btn.dataset.filter;
      filterBtns.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
      document.querySelectorAll(".case").forEach(function (c) {
        c.hidden = !(cat === "all" || c.dataset.cat === cat);
      });
    });
  });
  /* Avaa referenssi suoraan linkistä, esim. referenssit.html#hoivatilat */
  if (location.hash) {
    var target = document.querySelector(location.hash + ".case details");
    if (target) target.open = true;
  }

  /* Yhteydenottolomake – avaa sähköpostiohjelman (ei vaadi palvelinta) */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var d = new FormData(form);
      // TARKISTA: yleinen vastaanottajaosoite (info@reagle.fi on oletus, vaihda tarvittaessa)
      var to = d.get("aihe") === "Rekrytointi" ? "rekry@reagle.fi" : "info@reagle.fi";
      var body = d.get("viesti") + "\n\n— " + d.get("nimi") + "\n" + d.get("email") + (d.get("puhelin") ? "\n" + d.get("puhelin") : "");
      location.href = "mailto:" + to + "?subject=" + encodeURIComponent("Yhteydenotto: " + d.get("aihe")) + "&body=" + encodeURIComponent(body);
      document.getElementById("form-note").textContent = "Kiitos! Sähköpostiohjelmasi avautuu viestin lähettämistä varten.";
    });
  }

  /* Elementtien ilmestymisanimaatio */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
