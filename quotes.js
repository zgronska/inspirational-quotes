const quotes = [
  {
    quote: "Today is your opportunity to build the tomorrow you want.",
    author: "Ken Poirot",
  },
  {
    quote: "When you have a dream, you've got to grab it and never let go.",
    author: "Carol Burnett",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "You define your own life. Don't let other people write your script.",
    author: "Oprah Winfrey",
  },
  {
    quote: "Someone once told me to never dream. I said NEVER SAY NEVER",
    author: "Justin Bieber",
  },
];

// Background changer
let randomId = Math.floor(Math.random() * 10000000);
document.querySelector(".container").style.background =
  "url('https://source.unsplash.com/random/?Landscape&" +
  randomId +
  "') center/cover no-repeat";

// Quote changer

const quoteEl = document.querySelector(".quote-text");
const authorEl = document.querySelector(".quote-author");

function randomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex].quote;
  authorEl.textContent = quotes[randomIndex].author;
}

randomQuote();
