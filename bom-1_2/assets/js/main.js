// Aufgabe:

// Schreibe eine Funktion, die beim Drücken des Buttons von 100% bis 0% runter zählt (siehe Ergebnisvorschau).
// HTML und CSS ist vorgegeben (siehe Code Snippet).
// Nutzen kannst du folgende Befehle und Methoden: onclick, setInterval, clearInterval, if, else if und querySelector.

let prozent = 100;
const output = document.querySelector(".zeit");

btn.addEventListener("click", () => {
  const count = setInterval(() => {
    output.innerHTML = `${prozent--}%`;
    if (prozent < 0) {
      clearInterval(count);
    }
  }, 100);
});
