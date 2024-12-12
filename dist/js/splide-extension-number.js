/*!
 * @splidejs/splide-extension-number
 * Version  : 0.1.0
 * License  : MIT
 * Copyright: 2024 Youlead
 */
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) : factory();
})(function () {
  'use strict';

  function Number(Splide2, Components2) {
    var track = Components2.Elements.track;
    var elm;
    function mount() {
      elm = document.createElement("div");
      elm.classList.add("splide__number");
      track.parentElement.insertBefore(elm, track.nextSibling);
      update();
      Splide2.on("move", update);
    }
    function update() {
      elm.textContent = Splide2.index + 1 + "/" + Splide2.length;
    }
    return {
      mount: mount
    };
  }
  if (typeof window !== "undefined") {
    window.splide = window.splide || {};
    window.splide.Extensions = window.splide.Extensions || {};
    window.splide.Extensions.Number = Number;
  }
});
//# sourceMappingURL=splide-extension-number.js.map
