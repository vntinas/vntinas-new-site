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

    var state = { type: "all", topic: "all" };

    function matches(entry) {
      var type = entry.getAttribute("data-pub-type") || "";
      var status = entry.getAttribute("data-pub-status") || "";
      var topics = " " + (entry.getAttribute("data-pub-topics") || "") + " ";

      var typeOk = state.type === "all" || state.type === type || state.type === status;

      var topicOk = state.topic === "all" || topics.indexOf(" " + state.topic + " ") !== -1;

      return typeOk && topicOk;
    }

    function apply() {
      var anyVisible = false;
      entries.forEach(function (entry) {
        // jekyll-scholar wraps each entry's content in an <li>.
        var li = entry.closest("li") || entry;
        if (matches(entry)) {
          li.style.display = "";
          anyVisible = true;
        } else {
          li.style.display = "none";
        }
      });

      // Hide year headings + lists that have no visible entries.
      document.querySelectorAll("ol.bibliography").forEach(function (ol) {
        var visible = ol.querySelectorAll("li:not([style*='display: none'])").length;
        var heading = ol.previousElementSibling;
        if (heading && heading.tagName === "H2") {
          heading.style.display = visible ? "" : "none";
        }
        ol.style.display = visible ? "" : "none";
      });

      var empty = document.getElementById("pub-filter-empty");
      if (empty) empty.hidden = anyVisible;

      // Live count next to the "Papers" heading.
      var count = document.getElementById("pub-count");
      if (count) {
        count.textContent = entries.filter(function (e) {
          var li = e.closest("li") || e;
          return li.style.display !== "none";
        }).length;
      }
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
