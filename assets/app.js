/* ==========================================================================
   LEAP LIVING — Design Presentation
   Renders the screen library and wires up breakpoints, lightbox and scrollspy.
   ========================================================================== */

(function () {
  "use strict";

  var IMG = "assets/screens/";

  /* ------------------------------------------------------------------ data */

  var PAGES = [
    {
      id: "home",
      num: "01",
      title: "Homepage",
      tag: "Core page · Entry point",
      url: "leapliving.ae",
      desc:
        "The front door of the consultancy. Positioning, the primary search task and the three core routes — Buy, Rent and Sell — are all resolved above the fold.",
      notes: [
        "<strong>Search-first hero:</strong> Buy / Rent / Commercial tabs put the primary task one tap away.",
        "<strong>Trust bar</strong> carries the four credentials that justify a premium mandate.",
        "<strong>Single CTA</strong> on every property — Request Private Dossier — protects the off-market model.",
        "<strong>Leadership and developer partners</strong> act as validation before the first conversation."
      ],
      devices: [
        { k: "desktop", file: "home-desktop.webp", w: 1440, h: 3656, label: "Desktop · 1440" },
        { k: "mobile", file: "home-mobile.webp", w: 390, h: 7298, label: "Mobile · 390" }
      ]
    },
    {
      id: "about",
      num: "02",
      title: "About Page",
      tag: "Core page · Company narrative",
      url: "leapliving.ae/about",
      desc:
        "The company story — methodology, leadership and developer partners — built to convert interest into a mandate request.",
      notes: [
        "<strong>Methodology as discipline:</strong> a three-step structure, not a list of services.",
        "<strong>Founder-led:</strong> the mandate is sold on the person, not the portal.",
        "<strong>Mobile reflows</strong> the story into one column without losing hierarchy."
      ],
      devices: [
        { k: "desktop", file: "about-desktop.webp", w: 1440, h: 4032, label: "Desktop · 1440" },
        { k: "mobile", file: "about-mobile.webp", w: 390, h: 8771, label: "Mobile · 390" }
      ]
    },
    {
      id: "buy",
      num: "03",
      title: "Buy Page",
      tag: "Core page · Catalogue",
      url: "leapliving.ae/buy",
      desc:
        "Catalogue browsing with layered filtering, responsive from 1440px down to 390px. Every state of the filter is designed, including no results.",
      notes: [
        "<strong>Full responsive set:</strong> desktop, tablet and mobile designed as one system.",
        "<strong>Filters expand in place</strong> — no page reload, no dead ends.",
        "<strong>Currency is switchable</strong> (AED / USD) without leaving the context.",
        "<strong>The empty state</strong> keeps the user in the funnel with alternative routes."
      ],
      devices: [
        { k: "desktop", file: "buy-desktop.webp", w: 1440, h: 4382, label: "Desktop · 1440" },
        { k: "tablet", file: "buy-tablet.webp", w: 834, h: 6234, label: "Tablet · 834" },
        { k: "mobile", file: "buy-mobile.webp", w: 390, h: 8778, label: "Mobile · 390" }
      ]
    },
    {
      id: "rent",
      num: "04",
      title: "Rent Page",
      tag: "Core page · Leasing",
      url: "leapliving.ae/rent",
      desc:
        "Residential leasing with monthly pricing treated as a first-class concept, and private tour booking handled in a drawer so context is never lost.",
      notes: [
        "<strong>Lease filters</strong> include monthly pricing and AED / USD display.",
        "<strong>Tour request opens in a drawer</strong> — the property stays in view.",
        "<strong>Mobile collapses filters</strong> into a single, thumb-reachable sheet."
      ],
      devices: [
        { k: "desktop", file: "rent-desktop.webp", w: 1440, h: 4210, label: "Desktop · 1440" },
        { k: "mobile", file: "rent-mobile.webp", w: 390, h: 9585, label: "Mobile · 390" }
      ]
    },
    {
      id: "sell",
      num: "05",
      title: "Sell Page",
      tag: "Core page · Seller advisory",
      url: "leapliving.ae/sell",
      desc:
        "The selling journey is structured as a four-stage plan, with confidential owner information captured progressively instead of in one long form.",
      notes: [
        "<strong>A route, not a feature list:</strong> the 4-stage plan reads as a sequence.",
        "<strong>Owner details are staged</strong> with a clear privacy contract at each step.",
        "<strong>Submission and confirmation states</strong> close the loop and set expectations."
      ],
      devices: [
        { k: "desktop", file: "sell-desktop.webp", w: 1440, h: 4168, label: "Desktop · 1440" },
        { k: "mobile", file: "sell-mobile.webp", w: 390, h: 8016, label: "Mobile · 390" }
      ]
    },
    {
      id: "contact",
      num: "06",
      title: "Contact Page",
      tag: "Core page · Enquiry",
      url: "leapliving.ae/contact",
      desc:
        "A single, low-friction enquiry route with validation, loading and confirmation designed as first-class screens rather than afterthoughts.",
      notes: [
        "<strong>Inline validation</strong> with actionable error text tied to each field.",
        "<strong>Loading and confirmation states</strong> match the language of the page.",
        "<strong>Mobile keeps every field and CTA</strong> inside the thumb zone."
      ],
      devices: [
        { k: "desktop", file: "contact-desktop.webp", w: 1440, h: 2723, label: "Desktop · 1440" },
        { k: "mobile", file: "contact-mobile.webp", w: 390, h: 4740, label: "Mobile · 390" }
      ]
    }
  ];

  var STATES = [
    {
      id: "filters-advanced",
      num: "07",
      title: "Advanced filters — expanded",
      tag: "Buy · Filter panel",
      url: "leapliving.ae/buy",
      desc:
        "The expanded filter panel. Every option is reachable, currency is switchable, and nothing resets unexpectedly.",
      notes: [
        "<strong>Currency toggle (AED / USD)</strong> is global, not buried in settings.",
        "<strong>Selected filters appear as removable chips.</strong>",
        "<strong>Empty results are handled inside the panel,</strong> not as a dead end."
      ],
      figures: [
        { file: "state-filters-advanced.webp", w: 1080, h: 1227, label: "Expanded panel · 1080" }
      ]
    },
    {
      id: "filters-lease",
      num: "08",
      title: "Lease filters — monthly pricing",
      tag: "Rent · Filter panel",
      url: "leapliving.ae/rent",
      desc:
        "Lease-specific filtering with a monthly / annual pricing toggle, designed so the rental figure is always comparable.",
      notes: [
        "<strong>Monthly pricing is a first-class control,</strong> not a conversion.",
        "<strong>Lease length and furnishing</strong> sit with the price filters.",
        "<strong>Results update in place.</strong>"
      ],
      figures: [
        { file: "state-filters-lease.webp", w: 960, h: 1936, label: "Lease panel · 960" }
      ]
    },
    {
      id: "tour-drawer",
      num: "09",
      title: "Private tour drawer",
      tag: "Rent · Tour booking",
      url: "leapliving.ae/rent",
      desc:
        "Tour request opens in a drawer over the property, keeping the asset in view while the details are captured.",
      notes: [
        "<strong>Desktop:</strong> side drawer, property stays visible.",
        "<strong>Mobile:</strong> full sheet with a thumb-reachable confirm action.",
        "<strong>Two-tap action</strong> — no separate booking page."
      ],
      figures: [
        { file: "state-tour-drawer.webp", w: 620, h: 1349, label: "Desktop drawer · 620" },
        { file: "state-tour-drawer-mobile.webp", w: 390, h: 1595, label: "Mobile sheet · 390" }
      ]
    },
    {
      id: "owner-details",
      num: "10",
      title: "Confidential owner details",
      tag: "Sell · Owner intake",
      url: "leapliving.ae/sell",
      desc:
        "Sensitive owner information is collected in a staged flow with a clear privacy contract at each step.",
      notes: [
        "<strong>Progressive capture</strong> — never one long form.",
        "<strong>Privacy commitment is stated</strong> before any data is entered.",
        "<strong>Desktop and mobile share</strong> the same step structure."
      ],
      figures: [
        { file: "state-owner-details.webp", w: 720, h: 1069, label: "Desktop · 720" },
        { file: "state-owner-details-mobile.webp", w: 390, h: 1203, label: "Mobile · 390" }
      ]
    },
    {
      id: "sale-timeline",
      num: "11",
      title: "Sale timeline and privacy",
      tag: "Sell · Transparency",
      url: "leapliving.ae/sell",
      desc:
        "The seller sees exactly what happens next, how long each stage takes, and how their information is handled.",
      notes: [
        "<strong>Timeline is visual,</strong> not a wall of text.",
        "<strong>Privacy and data-handling terms</strong> are stated up front.",
        "<strong>Expectation-setting</strong> reduces repeat enquiries."
      ],
      figures: [
        { file: "state-sale-timeline.webp", w: 720, h: 1055, label: "Desktop · 720" },
        { file: "state-sale-timeline-mobile.webp", w: 390, h: 1104, label: "Mobile · 390" }
      ]
    },
    {
      id: "submission",
      num: "12",
      title: "Submission and confirmation",
      tag: "Sell · Confirmation",
      url: "leapliving.ae/sell",
      desc:
        "A clear end state: what was submitted, what happens next, and how to reach the advisory desk.",
      notes: [
        "<strong>Confirmation restates the mandate</strong> back to the seller.",
        "<strong>Next step and response time are explicit.</strong>",
        "<strong>Primary action is a direct line to the desk,</strong> not another form."
      ],
      figures: [
        { file: "state-submission.webp", w: 720, h: 776, label: "Confirmation · 720" }
      ]
    },
    {
      id: "contact-validation",
      num: "13",
      title: "Validation, loading and confirmation",
      tag: "Contact · Form states",
      url: "leapliving.ae/contact",
      desc:
        "Validation, loading and confirmation are designed as first-class screens rather than browser defaults.",
      notes: [
        "<strong>Inline validation</strong> with actionable, field-specific error text.",
        "<strong>Loading state is on the button</strong> that triggered it.",
        "<strong>Confirmation acknowledges the enquiry</strong> and sets a response expectation."
      ],
      figures: [
        { file: "state-contact-validation.webp", w: 720, h: 1545, label: "Form states · 720" }
      ]
    },
    {
      id: "dossier-drawer",
      num: "14",
      title: "Private dossier drawer",
      tag: "Buy · Enquiry",
      url: "leapliving.ae/buy",
      desc:
        "The dossier request is a two-tap action that never leaves the property context.",
      notes: [
        "<strong>Drawer keeps the property visible</strong> while the enquiry is captured.",
        "<strong>Intentionally low-friction</strong> — no account required.",
        "<strong>Access is qualified,</strong> protecting off-market stock."
      ],
      figures: [
        { file: "state-dossier-drawer.webp", w: 620, h: 1013, label: "Dossier drawer · 620" }
      ]
    },
    {
      id: "nda-access",
      num: "15",
      title: "NDA and buyer profile",
      tag: "Buy · Private access",
      url: "leapliving.ae/buy",
      desc:
        "Private portfolio access is gated behind an NDA and buyer profile, protecting off-market stock from public exposure.",
      notes: [
        "<strong>The gate is explained, not imposed</strong> — the reason is stated.",
        "<strong>Profile questions qualify the buyer</strong> without feeling invasive.",
        "<strong>Access is granted progressively</strong> as trust is established."
      ],
      figures: [
        { file: "state-nda-access.webp", w: 800, h: 1585, label: "NDA gate · 800" }
      ]
    },
    {
      id: "buy-empty",
      num: "16",
      title: "Buy catalogue — empty state",
      tag: "Buy · Empty state",
      url: "leapliving.ae/buy",
      desc:
        "When nothing matches, the user is offered alternatives rather than a dead end.",
      notes: [
        "<strong>The empty state explains itself</strong> and offers a next action.",
        "<strong>Alternative routes</strong> (broaden filters, private enquiry) are one tap away.",
        "<strong>Tone stays on-brand</strong> — no error-page feel."
      ],
      figures: [
        { file: "state-buy-empty.webp", w: 1200, h: 1406, label: "Empty state · 1440" }
      ]
    }
  ];

  /* --------------------------------------------------------------- helpers */

  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function countAssets(items) {
    return items.reduce(function (n, i) {
      return n + (i.devices ? i.devices.length : i.figures ? i.figures.length : 0);
    }, 0);
  }

  /* ------------------------------------------------------- screen: pages */

  function pageCard(page) {
    var hasTabs = page.devices.length > 1;
    var first = page.devices[0].k;

    var imgs = page.devices
      .map(function (d) {
        return (
          '<img src="' + IMG + d.file + '" alt="' + esc(page.title) + " — " + d.k + '" width="' +
          d.w + '" height="' + d.h + '" loading="lazy" decoding="async" data-img="' + d.k + '"' +
          (d.k === first ? "" : " hidden") + ">"
        );
      })
      .join("");

    var tabs = hasTabs
      ? '<div class="seg" role="tablist" aria-label="Breakpoint for ' + esc(page.title) + '">' +
        page.devices
          .map(function (d, i) {
            return (
              '<button type="button" role="tab" data-device="' + d.k + '"' +
              ' aria-selected="' + (i === 0) + '"' + (i === 0 ? "" : " tabindex=\"-1\"") + ">" +
              d.label.split(" · ")[0] + "</button>"
            );
          })
          .join("") +
        "</div>"
      : "";

    return el(
      '<article class="screen reveal" id="screen-' + page.id + '" data-screen="' + page.id + '">' +
        '<div class="screen__head">' +
          '<span class="screen__num">' + page.num + "</span>" +
          '<div class="screen__heading">' +
            '<h3 class="screen__title">' + esc(page.title) + "</h3>" +
            '<p class="screen__page">' + esc(page.tag) + "</p>" +
          "</div>" +
          tabs +
        "</div>" +
        '<p class="screen__desc">' + esc(page.desc) + "</p>" +
        '<div class="stage">' +
          '<div class="frame frame--' + first + '" data-frame>' +
            '<div class="frame__bar">' +
              '<span class="frame__dots" aria-hidden="true"><i></i><i></i><i></i></span>' +
              '<span class="frame__url">' + esc(page.url) + "</span>" +
              '<span class="frame__size" data-size>' + page.devices[0].label + "</span>" +
              '<button class="frame__expand" type="button" data-expand ' +
                'aria-label="Expand ' + esc(page.title) + ' full size">Expand</button>' +
            "</div>" +
            '<div class="frame__viewport" tabindex="0" role="region" ' +
              'aria-label="' + esc(page.title) + " — scrollable screen preview\">" +
              imgs +
            "</div>" +
            '<div class="frame__hint">Scroll to explore the full page · Click to expand</div>' +
          "</div>" +
        "</div>" +
        '<ul class="notes">' +
          page.notes.map(function (n) { return "<li>" + n + "</li>"; }).join("") +
        "</ul>" +
      "</article>"
    );
  }

  /* ------------------------------------------------------ screen: states */

  function stateCard(state) {
    var single = state.figures.length === 1;

    var figures = state.figures
      .map(function (f) {
        return (
          '<figure class="figure">' +
            '<div class="figure__box">' +
              '<img src="' + IMG + f.file + '" alt="' + esc(state.title) + " — " + f.label + '" width="' +
              f.w + '" height="' + f.h + '" loading="lazy" decoding="async">' +
            "</div>" +
            '<figcaption class="figure__caption"><span>' + esc(f.label) + "</span></figcaption>" +
          "</figure>"
        );
      })
      .join("");

    return el(
      '<article class="screen reveal" id="screen-' + state.id + '" data-screen="' + state.id + '">' +
        '<div class="screen__head">' +
          '<span class="screen__num">' + state.num + "</span>" +
          '<div class="screen__heading">' +
            '<h3 class="screen__title">' + esc(state.title) + "</h3>" +
            '<p class="screen__page">' + esc(state.tag) + "</p>" +
          "</div>" +
        "</div>" +
        '<p class="screen__desc">' + esc(state.desc) + "</p>" +
        '<div class="figure-set' + (single ? " figure-set--single" : "") + '">' + figures + "</div>" +
        '<ul class="notes">' +
          state.notes.map(function (n) { return "<li>" + n + "</li>"; }).join("") +
        "</ul>" +
      "</article>"
    );
  }

  /* ------------------------------------------------------------- index nav */

  function buildIndex(targetId, items) {
    var host = document.getElementById(targetId);
    if (!host) return;
    host.innerHTML =
      '<p class="index__label">On this page</p>' +
      '<nav class="index__list" aria-label="Screen index">' +
      items
        .map(function (i) {
          return (
            '<a href="#screen-' + i.id + '" data-spy="screen-' + i.id + '">' +
            "<span>" + i.num + "</span>" + esc(i.title) + "</a>"
          );
        })
        .join("") +
      "</nav>" +
      '<div class="index__foot">' +
        '<p class="mono">' + items.length + " screens · " + countAssets(items) + " assets</p>" +
        "<p>Click any screen to expand it. Arrow keys move between screens.</p>" +
      "</div>";
  }

  /* -------------------------------------------------------------- render */

  var pagesHost = document.getElementById("pages-host");
  var statesHost = document.getElementById("states-host");

  if (pagesHost) {
    PAGES.forEach(function (p) { pagesHost.appendChild(pageCard(p)); });
  }
  if (statesHost) {
    STATES.forEach(function (s) { statesHost.appendChild(stateCard(s)); });
  }

  buildIndex("index-pages", PAGES);
  buildIndex("index-states", STATES);

  /* ------------------------------------------------------- breakpoint tabs */

  document.querySelectorAll("[data-frame]").forEach(function (frame) {
    var viewport = frame.querySelector(".frame__viewport");
    var sizeLabel = frame.querySelector("[data-size]");
    var imgs = frame.querySelectorAll("[data-img]");
    var card = frame.closest(".screen");
    var tabs = card ? card.querySelectorAll('[role="tab"]') : [];
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var device = tab.getAttribute("data-device");

        tabs.forEach(function (t) {
          t.setAttribute("aria-selected", t === tab ? "true" : "false");
          t.setAttribute("tabindex", t === tab ? "0" : "-1");
        });

        frame.className = "frame frame--" + device;
        imgs.forEach(function (img) {
          if (img.getAttribute("data-img") === device) {
            img.removeAttribute("hidden");
          } else {
            img.setAttribute("hidden", "");
          }
        });

        if (sizeLabel) {
          var meta = null;
          PAGES.forEach(function (p) {
            (p.devices || []).forEach(function (d) {
              if (d.k === device && p.id === card.id.replace("screen-", "")) meta = d;
            });
          });
          if (meta) sizeLabel.textContent = meta.label;
        }

        viewport.scrollTop = 0;
      });
    });

    // Arrow-key navigation inside the tablist.
    card.querySelector('[role="tablist"]').addEventListener("keydown", function (e) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      var list = Array.prototype.slice.call(tabs);
      var i = list.indexOf(document.activeElement);
      if (i < 0) return;
      e.preventDefault();
      var next = e.key === "ArrowRight" ? (i + 1) % list.length : (i - 1 + list.length) % list.length;
      list[next].focus();
      list[next].click();
    });
  });

  /* --------------------------------------------------------------- lightbox */

  var flat = [];
  PAGES.forEach(function (p) {
    p.devices.forEach(function (d) {
      flat.push({
        src: IMG + d.file,
        title: p.title,
        meta: p.tag + " · " + d.label
      });
    });
  });
  STATES.forEach(function (s) {
    s.figures.forEach(function (f) {
      flat.push({
        src: IMG + f.file,
        title: s.title,
        meta: s.tag + " · " + f.label
      });
    });
  });

  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxTitle = document.getElementById("lightbox-title");
  var lightboxMeta = document.getElementById("lightbox-meta");
  var lightboxClose = document.getElementById("lightbox-close");
  var lightboxPrev = document.getElementById("lightbox-prev");
  var lightboxNext = document.getElementById("lightbox-next");
  var current = 0;
  var lastFocus = null;

  function showAt(i) {
    current = (i + flat.length) % flat.length;
    lightboxImg.src = flat[current].src;
    lightboxImg.alt = flat[current].title;
    lightboxTitle.textContent = flat[current].title;
    lightboxMeta.textContent = flat[current].meta;
  }

  function openLightbox(i) {
    lastFocus = document.activeElement;
    showAt(i);
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  // Every screen image opens the lightbox.
  document.querySelectorAll(".frame__viewport img, .figure__box img").forEach(function (img) {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () {
      var entry = null;
      flat.forEach(function (f, i) { if (f.src === img.getAttribute("src")) entry = i; });
      openLightbox(entry === null ? 0 : entry);
    });
  });

  // "Expand" button in each frame bar opens the visible breakpoint.
  document.querySelectorAll("[data-expand]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var frame = btn.closest("[data-frame]");
      var visible = frame ? frame.querySelector("[data-img]:not([hidden])") : null;
      if (visible) visible.click();
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", function () { showAt(current - 1); });
  lightboxNext.addEventListener("click", function () { showAt(current + 1); });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showAt(current - 1);
    if (e.key === "ArrowRight") showAt(current + 1);
    if (e.key === "Tab") {
      // Minimal focus trap across the lightbox controls.
      var focusables = [lightboxClose, lightboxPrev, lightboxNext];
      var i = focusables.indexOf(document.activeElement);
      e.preventDefault();
      if (e.shiftKey) {
        focusables[i <= 0 ? focusables.length - 1 : i - 1].focus();
      } else {
        focusables[i === focusables.length - 1 ? 0 : i + 1].focus();
      }
    }
  });

  /* -------------------------------------------------------------- scrollspy */

  var spyLinks = Array.prototype.slice.call(document.querySelectorAll("[data-spy]"));
  if ("IntersectionObserver" in window && spyLinks.length) {
    var spyMap = {};
    spyLinks.forEach(function (a) { spyMap[a.getAttribute("data-spy")] = a; });

    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          spyLinks.forEach(function (a) { a.classList.remove("is-active"); });
          var link = spyMap[entry.target.id];
          if (link) link.classList.add("is-active");
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    document.querySelectorAll("[data-screen]").forEach(function (s) { spy.observe(s); });
  }

  // Topbar nav scrollspy.
  var topLinks = Array.prototype.slice.call(document.querySelectorAll(".topbar__nav a"));
  if ("IntersectionObserver" in window && topLinks.length) {
    var topMap = {};
    topLinks.forEach(function (a) {
      var id = a.getAttribute("href").replace("#", "");
      topMap[id] = a;
    });
    var topSpy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          topLinks.forEach(function (a) { a.classList.remove("is-active"); });
          var link = topMap[entry.target.id];
          if (link) link.classList.add("is-active");
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    Object.keys(topMap).forEach(function (id) {
      var node = document.getElementById(id);
      if (node) topSpy.observe(node);
    });
  }

  /* ---------------------------------------------------------------- reveal */

  if ("IntersectionObserver" in window) {
    var revealer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.04 }
    );
    document.querySelectorAll(".reveal").forEach(function (n) { revealer.observe(n); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (n) {
      n.classList.add("is-visible");
    });
  }

  /* ----------------------------------------------------------- present mode */

  var presentBtn = document.getElementById("present-toggle");
  if (presentBtn) {
    presentBtn.addEventListener("click", function () {
      var on = document.body.classList.toggle("is-present");
      presentBtn.textContent = on ? "Exit presentation" : "Presentation mode";
      presentBtn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }
})();
