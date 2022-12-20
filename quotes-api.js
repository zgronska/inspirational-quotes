// Made with Quotable
// https://github.com/lukePeavey/quotable

// Background changer
let randomId = Math.floor(Math.random() * 10000000);
document.querySelector(".container").style.background =
  "url('https://source.unsplash.com/random/?Landscape&" +
  randomId +
  "') center/cover no-repeat";

// Quote changer

const quoteEl = document.querySelector(".quote-text");
const authorEl = document.querySelector(".quote-author");

async function randomQuote() {
  let response = await fetch("https://api.quotable.io/random");
  let data = await response.json();

  quoteEl.textContent = data.content;
  authorEl.textContent = data.author;
}

randomQuote();
