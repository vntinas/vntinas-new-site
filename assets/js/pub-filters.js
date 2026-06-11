// Client-side filtering for the Research publications list.
// Filters by type (published/preprint/journal/conference/chapter) AND topic.
// Hides year headings (<h2 class="bibliography">) that end up with no visible entries.

(function () {
  "use strict";

  function init() {
    var bar = document.getElementById("pub-filters");
    if (!bar) return;

    var entries = Array.prototype.slice.call(document.querySelectorAll(".publication-entry"));
    if (!entries.length) return;

    var state = { type: "all", topic: "all", sort: "newest" };

    // Capture the original year-grouped DOM so "Newest" can be restored exactly.
    var listRoot = document.querySelector(".publications");
    var originalOrder = listRoot ? Array.prototype.slice.call(listRoot.children) : [];
    // For citation sort: each entry's <li> wrapper + its citation count.
    var items = entries.map(function (e) {
      return {
        entry: e,
        li: e.closest("li") || e,
        cites: parseInt(e.getAttribute("data-pub-citations") || "0", 10),
        year: parseInt(e.getAttribute("data-pub-year") || "0", 10),
      };
    });
    // A flat container we build once for citation-sorted view.
    var flatList = null;

    function matches(entry) {
      var type = entry.getAttribute("data-pub-type") || "";
      var status = entry.getAttribute("data-pub-status") || "";
      var topics = " " + (entry.getAttribute("data-pub-topics") || "") + " ";

      var typeOk = state.type === "all" || state.type === type || state.type === status;

      var topicOk = state.topic === "all" || topics.indexOf(" " + state.topic + " ") !== -1;

      return typeOk && topicOk;
    }

    function ensureFlatList() {
      if (flatList) return flatList;
      flatList = document.createElement("ol");
      flatList.className = "bibliography flat-sorted";
      flatList.style.display = "none";
      if (listRoot) listRoot.appendChild(flatList);
      return flatList;
    }

    function setCount(n) {
      var count = document.getElementById("pub-count");
      if (count) count.textContent = n;
    }

    function applyNewest() {
      // Restore the original year-grouped DOM and hide the flat list.
      if (flatList) flatList.style.display = "none";
      var visibleCount = 0;
      items.forEach(function (it) {
        if (matches(it.entry)) {
          it.li.style.display = "";
          visibleCount++;
        } else {
          it.li.style.display = "none";
        }
      });
      document.querySelectorAll("ol.bibliography:not(.flat-sorted)").forEach(function (ol) {
        var vis = ol.querySelectorAll("li:not([style*='display: none'])").length;
        var heading = ol.previousElementSibling;
        if (heading && heading.tagName === "H2") heading.style.display = vis ? "" : "none";
        ol.style.display = vis ? "" : "none";
      });
      setCount(visibleCount);
      var empty = document.getElementById("pub-filter-empty");
      if (empty) empty.hidden = visibleCount > 0;
    }

    function applyCitations() {
      // Hide year headings + original lists; show one flat list sorted by citations.
      document.querySelectorAll("ol.bibliography:not(.flat-sorted)").forEach(function (ol) {
        ol.style.display = "none";
        var heading = ol.previousElementSibling;
        if (heading && heading.tagName === "H2") heading.style.display = "none";
      });
      var flat = ensureFlatList();
      flat.innerHTML = "";
      var matched = items.filter(function (it) {
        return matches(it.entry);
      });
      matched.sort(function (a, b) {
        if (b.cites !== a.cites) return b.cites - a.cites;
        return b.year - a.year; // tie-break: newer first
      });
      matched.forEach(function (it) {
        var clone = it.li.cloneNode(true);
        clone.style.display = "";
        flat.appendChild(clone);
      });
      flat.style.display = matched.length ? "" : "none";
      setCount(matched.length);
      var empty = document.getElementById("pub-filter-empty");
      if (empty) empty.hidden = matched.length > 0;
    }

    function apply() {
      if (state.sort === "citations") applyCitations();
      else applyNewest();
    }

    bar.addEventListener("click", function (e) {
      var btn = e.target.closest(".pub-filter");
      if (!btn) return;

      var row = btn.parentElement;
      row.querySelectorAll(".pub-filter").forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");

      if (btn.hasAttribute("data-filter-type")) {
        state.type = btn.getAttribute("data-filter-type");
      } else if (btn.hasAttribute("data-filter-topic")) {
        state.topic = btn.getAttribute("data-filter-topic");
      }
      apply();
    });

    // Sort control (Newest / Citations).
    var sortBar = document.getElementById("pub-sort");
    if (sortBar) {
      sortBar.addEventListener("click", function (e) {
        var btn = e.target.closest(".pub-sort-btn");
        if (!btn) return;
        sortBar.querySelectorAll(".pub-sort-btn").forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        state.sort = btn.getAttribute("data-sort");
        apply();
      });
    }

    // Preselect a topic filter from the URL (?topic=slug), e.g. linked from
    // the homepage research-highlight cards.
    var params = new URLSearchParams(window.location.search);
    var wanted = params.get("topic");
    if (wanted) {
      var tBtn = bar.querySelector('[data-filter-topic="' + wanted + '"]');
      if (tBtn) {
        bar.querySelectorAll("[data-filter-topic]").forEach(function (b) {
          b.classList.remove("active");
        });
        tBtn.classList.add("active");
        state.topic = wanted;
        apply();
        var grid = document.querySelector(".pub-count-heading") || document.querySelector(".publications");
        if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
