const Time = Math.floor(Math.random() * (4 - 2 + 1) + 2) * 1000;
const Boo = document.querySelector(".boo");

setTimeout(boo, Time);

function boo() {
  Boo.style.display = "initial";
  const hideTime = Math.floor(Math.random() * (4 + 2 + 1) + 2) * 1000;
  setTimeout(hideBoo, hideTime);
}

function hideBoo() {
  Boo.style.display = "none";
}
