(function () {
  "use strict";
  const inputPixel = document.querySelector(".js-input-pixel");
  const inputRem = document.querySelector(".js-input-rem");
  const ROOT_FONT_SIZE_IN_PIXEL = 16;

  const convertPixelToRem = () => {
    const remValue = document.querySelector(".js-rem-value");
    const pixel = inputPixel.value;
    remValue.textContent = pixel / ROOT_FONT_SIZE_IN_PIXEL;
  };

  const convertRemToPixel = () => {
    const pixelValue = document.querySelector(".js-pixel-value");
    const rem = inputRem.value;
    pixelValue.textContent = rem * ROOT_FONT_SIZE_IN_PIXEL;
  };

  inputPixel.addEventListener("input", convertPixelToRem);
  inputRem.addEventListener("input", convertRemToPixel);
})();
