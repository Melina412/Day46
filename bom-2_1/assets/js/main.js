// Aufgabe:

// Schreibe eine Funktion, die beim Auslösen die Zahlen runter zählt. Schau dir dazu die Ergebnisvorschau an.
// HTML und CSS ist vorgegeben (siehe Code-Snippet).
// Nutzen kannst du: setInterval(), clearInterval(), getElementsByClassName() oder getElementById() und if/else if.

let countdown = 10;
let message = document.querySelector(".message");

const timer = setInterval(() => {
  count.innerHTML = countdown;
  countdown--;

  if (countdown < 0) {
    clearInterval(timer);
    message.classList.add("hidden");
  }
}, 1000);
