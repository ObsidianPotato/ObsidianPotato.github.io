var theme = "1"

// 0 is dark, 1 is light



function change_theme() {
  if (theme == 0) {
    // dark theme
    document.getElementById("theme-css").setAttribute("href", "../darkmode.css");
  } else {
    // light theme
    document.getElementById("theme-css").setAttribute("href", "../lightmode.css");
  }
}


var theme_localstorage = localStorage.getItem("fruitbrawl-theme");

if (theme_localstorage == 0) {
  theme = 0;
} else {
  theme = 1;
}

localStorage.setItem("fruitbrawl-theme", theme);

change_theme();


function toggle_theme() {
  if (theme == 1) {
    theme = 0;
  } else {
    theme = 1;
  }
  localStorage.setItem("fruitbrawl-theme", theme)
  change_theme();
}

setTimeout( () => {
  document.getElementById("js-styling").innerHTML +=  `
.theme-button circle, .theme-button rect, .theme-moonmask, .raypiece {
  transition-duration: 500ms;
}
.raypiece rect {
  transition-duration: 0ms;
}
.ctr1 {
  transition: background-color 250ms;
}
.ctr2 {
  transition: color 250ms;
}
.ctr3 {
  transition: background-color 250ms, color 250ms;
}
.ctr4 {
  transition: fill 250ms;
}
.ctr5 {
  transition: stroke 250ms;
}
.ctr6 {
  transition: stroke 250ms, fill 250ms;
}
.ctr7 {
  transition-duration: 250ms;
}`;

}, 1000);