// Aufgabe:

// Schreibe eine Funktion, die einen Countdown in Minuten anzeigt und sich pausieren und neu starten lässt.
// HTML und CSS ist vorgegeben (siehe Code-Snippet).
// Nutze unter Anderem setInterval(), clearInterval() und if-Statements.

// * Variablenvergabe und Inputvalue lesen *****************************************

let input = document.getElementById("minutes");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let restart = document.getElementById("restart");
let reset = document.getElementById("reset");

let min = "";
let sec = 60;
let countdown;

let paused_min = "";
let paused_sec = 60;
let paused = false;

// input value wird sofort bei der eingabe gelesen und aktualisiert
input.addEventListener("input", (event) => {
  min = event.target.value;
  time.innerHTML = `${min}:00`;
});

// * Starten des Countdowns *****************************************

const startCountdown = () => {
  if (input.value > 0) {
    console.log({ paused });

    // check ob countdown zuvor pausiert wurde um ggf. pausierte zeit
    //   als startwerte zu setzten
    if (paused) {
      min = paused_min;
      sec = paused_sec;
    } else {
      time.innerHTML = `${min}:00`;
      min--;
    }

    // start des countdowns, sekunden werden runtergezählt
    countdown = setInterval(() => {
      sec--;
      time.innerHTML = `${min}:${sec}`;
      console.log(`${min}:${sec}`);

      // beenden des countdowns wenn zeit abgelaufen ist
      if (min === 0 && sec < 1) {
        clearInterval(countdown);
      }

      // nach ablauf einer minute werden minuten runtergezählt
      //  und sekunden zurückgesetzt
      if (sec < 1 && min !== 0) {
        min--;
        sec = 60;
      }
    }, 1000);
  } else {
    console.log("enter positive number!");
  }
};
start.addEventListener("click", startCountdown);

// * Pausieren des Countdowns ***************************************

pause.addEventListener("click", () => {
  clearInterval(countdown); // stoppt countdown
  paused_min = min; // speichert zeit bei der gestoppt wurde
  paused_sec = sec;
  paused = true; // hilfswert um beim restart die gespeicherten werte einzulesen
  console.log(`time paused at ${min}:${sec}`);
});

// * Restart ********************************************************

restart.addEventListener("click", () => {
  clearInterval(countdown);
  paused = false;
  min = input.value;
  sec = 60;
  startCountdown();
  //   setzt alles auf anfang zurück und aktualisiert den input value
});

// * Reset **********************************************************

reset.addEventListener("click", () => {
  clearInterval(countdown);
  paused = false;
  input.value = "";
  time.innerHTML = "00:00";
  min = 0;
  sec = 60;
  //   setzt alle werte auf anfangswerte zurück
});
