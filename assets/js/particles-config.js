// Particles.js background for the al-folio site.
// AAU-navy on light theme, lightened on dark theme, re-initialised on theme toggle.
// Loaded site-wide from _includes/scripts.liquid.

(function () {
  "use strict";

  // Colours pulled from the AAU palette used in _sass/_themes.scss.
  var LIGHT = "#211a52"; // AAU primary dark blue
  var DARK = "#8f86d6"; // lightened AAU blue for dark backgrounds

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light";
  }

  function config(color) {
    return {
      particles: {
        number: { value: 55, density: { enable: true, value_area: 900 } },
        color: { value: color },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: color,
          opacity: 0.28,
          width: 1,
        },
        move: { enable: true, speed: 1.2, out_mode: "out" },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 160, line_linked: { opacity: 0.5 } },
          push: { particles_nb: 3 },
        },
      },
      retina_detect: true,
    };
  }

  function destroy() {
    if (window.pJSDom && window.pJSDom.length) {
      window.pJSDom.forEach(function (dom) {
        try {
          dom.pJS.fn.vendors.destroypJS();
        } catch (e) {
          /* no-op */
        }
      });
      window.pJSDom = [];
    }
  }

  function render() {
    if (typeof window.particlesJS !== "function") return;
    destroy();
    var color = currentTheme() === "dark" ? DARK : LIGHT;
    window.particlesJS("particles-js", config(color));
  }

  function init() {
    if (!document.getElementById("particles-js")) return;
    render();

    // Re-render whenever the theme toggle flips data-theme on <html>.
    var observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        if (mutations[i].attributeName === "data-theme") {
          render();
          break;
        }
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
