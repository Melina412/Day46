// Aufgabe:

// Schreibe zuerst eine Funktion, die nach X Sekunden einen Text anzeigt. Dafür kannst du die setTimeout-Methode nutzen.
// Schreibe anschließend eine Funktion, die das Ergebnis der Vorschau ausgibt. Nutze hierfür: setInterval, clearInterval und if/else.

const warten = () => {
  console.log("Start Warten für 3 Sekunden");
  setTimeout(() => {
    console.log("Erledigt, du hast 3 Sekunden verschwendet");
  }, 3000);
};
warten();

let countdown = 10;
const timer = setInterval(() => {
  let date = new Date();
  let hour = date.getHours().toString().padStart(2, "0");
  let min = date.getMinutes().toString().padStart(2, "0");
  let sec = date.getSeconds().toString().padStart(2, "0");
  let time = `${hour}:${min}:${sec}`;

  console.log(time);
  console.log(countdown);
  countdown--;

  if (countdown < 0) {
    clearInterval(timer);
  }
}, 1000);
