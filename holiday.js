// special webpage features & things based on the day (like christmas theme, pride month theme, etc.)

const now = new Date();
const month = now.getMonth() + 1; // month 1-12
const day = now.getDate();        // day 1-31

var month_day = `${month}-${day}`;
var christmaslight_interval;
var christmaslight_index = 0;

if (month == 12) {
  month_day = "december"
}

// console.log(month_day)

var holiday_stuff = document.getElementById("holiday_stuff");

switch (month_day) {
  case `december`:                                                       // christmas
    holiday_stuff.innerHTML += `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146 20" class="christmaslights-svg">

  <defs>
    <radialGradient id="l1grad" class="light1-gradient">
      <stop class="ctr7" offset="65%" stop-opacity="0.5" />
      <stop class="ctr7" offset="100%" stop-opacity="0.0"/>
    </radialGradient>
    <radialGradient id="l2grad" class="light2-gradient">
      <stop class="ctr7" offset="65%" stop-opacity="0.5" />
      <stop class="ctr7" offset="100%" stop-opacity="0.0"/>
    </radialGradient>
    <radialGradient id="l3grad" class="light3-gradient">
      <stop class="ctr7" offset="65%" stop-opacity="0.5" />
      <stop class="ctr7" offset="100%" stop-opacity="0.0"/>
    </radialGradient>
    <radialGradient id="l4grad" class="light4-gradient">
      <stop class="ctr7" offset="65%" stop-opacity="0.5" />
      <stop class="ctr7" offset="100%" stop-opacity="0.0"/>
    </radialGradient>
  </defs>

  <path d="M 1,1 q 12,6 24,0 12,6 24,0 12,6 24,0 12,6 24,0 12,6 24,0 12,6 24,0" class="christmas-string ctr5" stroke-width="1" fill="none" />

  <g transform="translate(9, 4) rotate(10)" >
    <circle cx="5" cy="5" r="4" fill="url('#l1grad')" transform="translate(-3, 0)" />
    <path d="M 2,2 L 3,2 Q 3.75,2.25 4,3 Q 4,6 2,7 Q 0,6 0,3 Q 0.25,2.25 1,2 L 2,2" class="light1 ctr6" stroke-width="1" transform="translate(0, 0.85)"/>
    <path d="M 2,0 Q 3,0 3,1 L 3,2 L 1,2 L 1,1 Q 1,0 2,0" class="christmas-string light-base ctr6" stroke-width="1" />
  </g>
  <g transform="translate(23, 2) rotate(0)" >
    <circle cx="5" cy="5" r="4" fill="url('#l2grad')" transform="translate(-3, 0)" />
    <path d="M 2,2 L 3,2 Q 3.75,2.25 4,3 Q 4,6 2,7 Q 0,6 0,3 Q 0.25,2.25 1,2 L 2,2" class="light2 ctr6" stroke-width="1" transform="translate(0, 0.85)"/>
    <path d="M 2,0 Q 3,0 3,1 L 3,2 L 1,2 L 1,1 Q 1,0 2,0" class="christmas-string light-base ctr6" stroke-width="1" />
  </g>
  <g transform="translate(35.5, 4.5) rotate(-5)" >
    <circle cx="5" cy="5" r="4" fill="url('#l3grad')" transform="translate(-3, 0)" />
    <path d="M 2,2 L 3,2 Q 3.75,2.25 4,3 Q 4,6 2,7 Q 0,6 0,3 Q 0.25,2.25 1,2 L 2,2" class="light3 ctr6" stroke-width="1" transform="translate(0, 0.85)"/>
    <path d="M 2,0 Q 3,0 3,1 L 3,2 L 1,2 L 1,1 Q 1,0 2,0" class="christmas-string light-base ctr6" stroke-width="1" />
  </g>
  <g transform="translate(47, 1.25) rotate(7)" >
    <circle cx="5" cy="5" r="4" fill="url('#l4grad')" transform="translate(-3, 0)" />
    <path d="M 2,2 L 3,2 Q 3.75,2.25 4,3 Q 4,6 2,7 Q 0,6 0,3 Q 0.25,2.25 1,2 L 2,2" class="light4 ctr6" stroke-width="1" transform="translate(0, 0.85)"/>
    <path d="M 2,0 Q 3,0 3,1 L 3,2 L 1,2 L 1,1 Q 1,0 2,0" class="christmas-string light-base ctr6" stroke-width="1" />
  </g>
  <g transform="translate(59, 4) rotate(-2)" >
    <circle cx="5" cy="5" r="4" fill="url('#l1grad')" transform="translate(-3, 0)" />
    <path d="M 2,2 L 3,2 Q 3.75,2.25 4,3 Q 4,6 2,7 Q 0,6 0,3 Q 0.25,2.25 1,2 L 2,2" class="light1 ctr6" stroke-width="1" transform="translate(0, 0.85)"/>
    <path d="M 2,0 Q 3,0 3,1 L 3,2 L 1,2 L 1,1 Q 1,0 2,0" class="christmas-string light-base ctr6" stroke-width="1" />
  </g>
  <g transform="translate(71, 1) rotate(5)" >
    <circle cx="5" cy="5" r="4" fill="url('#l2grad')" transform="translate(-3, 0)" />
    <path d="M 2,2 L 3,2 Q 3.75,2.25 4,3 Q 4,6 2,7 Q 0,6 0,3 Q 0.25,2.25 1,2 L 2,2" class="light2 ctr6" stroke-width="1" transform="translate(0, 0.85)"/>
    <path d="M 2,0 Q 3,0 3,1 L 3,2 L 1,2 L 1,1 Q 1,0 2,0" class="christmas-string light-base ctr6" stroke-width="1" />
  </g>
  <g transform="translate(83.5, 4.5) rotate(-2)" >
    <circle cx="5" cy="5" r="4" fill="url('#l3grad')" transform="translate(-3, 0)" />
    <path d="M 2,2 L 3,2 Q 3.75,2.25 4,3 Q 4,6 2,7 Q 0,6 0,3 Q 0.25,2.25 1,2 L 2,2" class="light3 ctr6" stroke-width="1" transform="translate(0, 0.85)"/>
    <path d="M 2,0 Q 3,0 3,1 L 3,2 L 1,2 L 1,1 Q 1,0 2,0" class="christmas-string light-base ctr6" stroke-width="1" />
  </g>
  <g transform="translate(95, 1.5) rotate(-5)" >
    <circle cx="5" cy="5" r="4" fill="url('#l4grad')" transform="translate(-3, 0)" />
    <path d="M 2,2 L 3,2 Q 3.75,2.25 4,3 Q 4,6 2,7 Q 0,6 0,3 Q 0.25,2.25 1,2 L 2,2" class="light4 ctr6" stroke-width="1" transform="translate(0, 0.85)"/>
    <path d="M 2,0 Q 3,0 3,1 L 3,2 L 1,2 L 1,1 Q 1,0 2,0" class="christmas-string light-base ctr6" stroke-width="1" />
  </g>
  <g transform="translate(108, 4) rotate(2)" >
    <circle cx="5" cy="5" r="4" fill="url('#l1grad')" transform="translate(-3, 0)" />
    <path d="M 2,2 L 3,2 Q 3.75,2.25 4,3 Q 4,6 2,7 Q 0,6 0,3 Q 0.25,2.25 1,2 L 2,2" class="light1 ctr6" stroke-width="1" transform="translate(0, 0.85)"/>
    <path d="M 2,0 Q 3,0 3,1 L 3,2 L 1,2 L 1,1 Q 1,0 2,0" class="christmas-string light-base ctr6" stroke-width="1" />
  </g>
  <g transform="translate(119, 1) rotate(5)" >
    <circle cx="5" cy="5" r="4" fill="url('#l2grad')" transform="translate(-3, 0)" />
    <path d="M 2,2 L 3,2 Q 3.75,2.25 4,3 Q 4,6 2,7 Q 0,6 0,3 Q 0.25,2.25 1,2 L 2,2" class="light2 ctr6" stroke-width="1" transform="translate(0, 0.85)"/>
    <path d="M 2,0 Q 3,0 3,1 L 3,2 L 1,2 L 1,1 Q 1,0 2,0" class="christmas-string light-base ctr6" stroke-width="1" />
  </g>
  <g transform="translate(131.5, 4.5) rotate(-5)" >
    <circle cx="5" cy="5" r="4" fill="url('#l3grad')" transform="translate(-3, 0)" />
    <path d="M 2,2 L 3,2 Q 3.75,2.25 4,3 Q 4,6 2,7 Q 0,6 0,3 Q 0.25,2.25 1,2 L 2,2" class="light3 ctr6" stroke-width="1" transform="translate(0, 0.85)"/>
    <path d="M 2,0 Q 3,0 3,1 L 3,2 L 1,2 L 1,1 Q 1,0 2,0" class="christmas-string light-base ctr6" stroke-width="1" />
  </g>

</svg> 
`;
    function christmaslight_change() {
      var holiday_styling = document.getElementById("holiday-styling");

      switch (christmaslight_index % 4) {
        case 1:
          holiday_styling.innerHTML = `
.light1 {
  fill: var(--christmas-light4);
  stroke: var(--christmas-light4);
}
.light1-gradient stop {
  stop-color: var(--christmas-light4);
}
.light2 {
  fill: var(--christmas-light1);
  stroke: var(--christmas-light1);
}
.light2-gradient stop {
  stop-color: var(--christmas-light1);
}
.light3 {
  fill: var(--christmas-light2);
  stroke: var(--christmas-light2);
}
.light3-gradient stop {
  stop-color: var(--christmas-light2);
}
.light4 {
  fill: var(--christmas-light3);
  stroke: var(--christmas-light3);
}
.light4-gradient stop {
  stop-color: var(--christmas-light3);
}
`;
        break;
        case 2:
          holiday_styling.innerHTML = `
.light1 {
  fill: var(--christmas-light3);
  stroke: var(--christmas-light3);
}
.light1-gradient stop {
  stop-color: var(--christmas-light3);
}
.light2 {
  fill: var(--christmas-light4);
  stroke: var(--christmas-light4);
}
.light2-gradient stop {
  stop-color: var(--christmas-light4);
}
.light3 {
  fill: var(--christmas-light1);
  stroke: var(--christmas-light1);
}
.light3-gradient stop {
  stop-color: var(--christmas-light1);
}
.light4 {
  fill: var(--christmas-light2);
  stroke: var(--christmas-light2);
}
.light4-gradient stop {
  stop-color: var(--christmas-light2);
}
`;
        break;
        case 3:
          holiday_styling.innerHTML = `
.light1 {
  fill: var(--christmas-light2);
  stroke: var(--christmas-light2);
}
.light1-gradient stop {
  stop-color: var(--christmas-light2);
}
.light2 {
  fill: var(--christmas-light3);
  stroke: var(--christmas-light3);
}
.light2-gradient stop {
  stop-color: var(--christmas-light3);
}
.light3 {
  fill: var(--christmas-light4);
  stroke: var(--christmas-light4);
}
.light3-gradient stop {
  stop-color: var(--christmas-light4);
}
.light4 {
  fill: var(--christmas-light1);
  stroke: var(--christmas-light1);
}
.light4-gradient stop {
  stop-color: var(--christmas-light1);
}
`;
        break;
        default: // also 0
          holiday_styling.innerHTML = `
.light1 {
  fill: var(--christmas-light1);
  stroke: var(--christmas-light1);
}
.light1-gradient stop {
  stop-color: var(--christmas-light1);
}
.light2 {
  fill: var(--christmas-light2);
  stroke: var(--christmas-light2);
}
.light2-gradient stop {
  stop-color: var(--christmas-light2);
}
.light3 {
  fill: var(--christmas-light3);
  stroke: var(--christmas-light3);
}
.light3-gradient stop {
  stop-color: var(--christmas-light3);
}
.light4 {
  fill: var(--christmas-light4);
  stroke: var(--christmas-light4);
}
.light4-gradient stop {
  stop-color: var(--christmas-light4);
}
`;
      }
      christmaslight_index += 1;
    }
    christmaslight_change();
    christmaslight_interval = setInterval(christmaslight_change, 1000);
    generate_team("december");
    break;
  default:
    console.log("nothing interesting today :pensive:");
}