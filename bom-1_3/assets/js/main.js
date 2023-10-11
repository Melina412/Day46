// Aufgabe:

// Schreibe eine Funktion, die sich Daten aus dem Browser zieht und diese anzeigt. Schaue dir zum besseren Verstädnis die Vorschau an.
// Recherchiere nach dem Begriff “Window Navigator”. Dann kannst du die Aufgabe lösen.
// Hole dir die Informationen über den Browser wie folgt:
// - Browsername
// - Betriebssystem-Architektur
// - Browser-Version
// - Window Auflösung
// - Innenhöhe und -breite des Dokuments
// - colorDepth
// - pixelDepth

console.log(window);

let browser_name = window.navigator.appName;
let os_architecture = window.navigator.platform;
let browser_version = window.navigator.appVersion;
let screen_width = window.screen.width;
let screen_height = window.screen.height;
let inner_width = window.innerWidth;
let inner_height = window.innerHeight;
let color_depth = window.screen.colorDepth;
let pixel_depth = window.screen.pixelDepth;

const hidden_div = document.querySelector(".hidden");

button.addEventListener("click", () => {
  hidden_div.style.display = "block";

  browser.innerHTML = browser_name;
  os.innerHTML = os_architecture;
  version.innerHTML = browser_version;
  screenH.innerHTML = screen_height;
  screenW.innerHTML = screen_width;
  docH.innerHTML = inner_height;
  docW.innerHTML = inner_width;
  cDepth.innerHTML = color_depth;
  pxDepth.innerHTML = pixel_depth;
});
