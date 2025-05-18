function randomHexCodeGenerator() {
  let randomDigit1 = Math.floor(Math.random() * 10);
  let randomDigit2 = Math.floor(Math.random() * 10);
  let randomDigit3 = Math.floor(Math.random() * 10);
  let letters = ["a", "b", "c", "d", "e", "f"];
  let Radomletter1Index = Math.floor(Math.random() * letters.length);
  let Radomletter2Index = Math.floor(Math.random() * letters.length);
  let Radomletter3Index = Math.floor(Math.random() * letters.length);

  return `#${letters[Radomletter1Index]}${randomDigit1}${letters[Radomletter2Index]}${randomDigit2}${letters[Radomletter3Index]}${randomDigit3}`;
}

function applyRadomBg(element) {
  element.style.backgroundColor = randomHexCodeGenerator();
}
function showRadomHexCode(element) {
  element.innerHTML += " " + randomHexCodeGenerator();
}
let body = document.querySelector("body");

let title = document.querySelector(".color-code");

applyRadomBg(body);
showRadomHexCode(title);
