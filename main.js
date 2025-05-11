

var slideimgs = [
  /*{
    "image": "/assets/siteimg/fbrawl_art1.jpg",
    "description": "FruitBrawl concept art",
    "alt": "A sketchbook drawing of fruits from FruitBrawl battling, with an Ackee and Avocado in the front."
  },*/
  {
    "image": "/assets/siteimg/fbrawl_art2.png",
    "description": "FruitBrawl concept art",
    "alt": "A digital drawing of Apple waving, with the text \"Fruit Brawl\" below."
  },
  {
    "image": "/assets/siteimg/fbrawl-3.jpg",
    "description": "FruitBrawl playtesting",
    "alt": "An image of a black table with printed out FruitBrawl cards laid out, in the middle of a FruitBrawl game."
  },
  {
    "image": "/assets/siteimg/fruitbrawl-coin.png",
    "description": "FruitBrawl logo on a wooden coin",
    "alt": "The FruitBrawl logo, laser-burned onto a small wooden coin."
  },
  {
    "image": "/assets/siteimg/fbrawl-2.jpg",
    "description": "FruitBrawl Kiwi build",
    "alt": "A FruitBrawl build on a wooden table, called the \\\"Kiwi Build\\\""
  }
]


var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


var slideimgs_length = slideimgs.length;
var slideimgs_slide = document.getElementById("slideimgs-slide");
var slideimgs_index = 0;
var slide_transition = 2000; // anne reference ?????
var slsf = 100; // size factor (doensnt apply to arrows and will screw things up now)
var desktop = true;
var prev_desktop = true;
var clientmode_interval;
var dont_autoslide = false;
var dont_autoslide_timeout;

if (windowWidth < windowHeight) {
  desktop = false;
}

function init_slideimgs() {
  var add_html = "";
  var slideimgs_pushed = [...slideimgs];
  slideimgs_pushed.push(slideimgs[0]);
  if (desktop == false) { // mobile stuffs
    document.getElementById("slideimgs").setAttribute("viewBox", `0 0 ${1 * slsf} ${2 * slsf}`)
  } else {
    document.getElementById("slideimgs").setAttribute("viewBox", `0 0 ${2 * slsf} ${1 * slsf}`)
  }
  
  for (i in slideimgs_pushed) {
    if (desktop == false) { // mobile
      add_html += `
<image href="${slideimgs_pushed[i]["image"]}" x="${i * (1 * slsf)}" width="${1 * slsf}" height="${2 * slsf}" />
<foreignObject x="${i * (2 * slsf)}" y="0" width="${1 * slsf}" height="${2 * slsf}">
  <xhtml:div class="slide-description ctr1"><xhtml:span class="sldesc ctr2">${slideimgs_pushed[i]["description"].replaceAll("\n", "<br>")}</xhtml:span></xhtml:div>
</foreignObject>
`; 
    } else {
      add_html += `
<image href="${slideimgs_pushed[i]["image"]}" x="${i * (2 * slsf)}" width="${2 * slsf}" height="${1 * slsf}" />
<foreignObject x="${i * (2 * slsf)}" y="0" width="${2 * slsf}" height="${1 * slsf}">
  <xhtml:div class="slide-description ctr1"><xhtml:span class="sldesc ctr2">${slideimgs_pushed[i]["description"].replaceAll("\n", "<br>")}</xhtml:span></xhtml:div>
</foreignObject>
`; 
    }
    
  }
  //add_html += `<image href="${slideimgs[0]}" x="${slideimgs_length * 20}" width="20" height="10" />\n`;


  // making the alt text
  var alt_text = "Animated image gallery; ";
  for (i in slideimgs) {
    alt_text += `Slide ${parseInt(i) + 1}: ${slideimgs[i]["alt"]} `;
  }
  document.getElementById("slideimgs").setAttribute("alt", alt_text);

  slideimgs_slide.innerHTML = add_html;
  slideimgs_slide.style.transitionDuration = `${slide_transition}ms`;
}

init_slideimgs();

function slide_images(direction, no_timeout) {
  console.log(slideimgs_index);
  if (no_timeout != true) {
    dont_autoslide = true;
    clearTimeout(dont_autoslide_timeout);
    dont_autoslide_timeout = setTimeout(() => {
      dont_autoslide = false;
      clearTimeout(dont_autoslide_timeout);
    }, 5000);  
  }
  
  if (slideimgs_index + direction > slideimgs_length) {  // if its going past the end (at the end, going farther)
    // remove transition, skip to beginning, add transition, then slide forward (seamless)
    slideimgs_slide.style.transitionDuration = `0ms`;
    slideimgs_slide.style.transform = `translateX(0px)`;
    setTimeout( () => {
      slideimgs_slide.style.transitionDuration = `${slide_transition}ms`;
      slideimgs_index = 0;
      slideimgs_index += direction;
      if (desktop == false) { // mobile
        slideimgs_slide.style.transform = `translateX(${slideimgs_index * -(1 * slsf)}px)`;
      } else {
        slideimgs_slide.style.transform = `translateX(${slideimgs_index * -(2 * slsf)}px)`;
      }
      
    }, 10);
  } else if (slideimgs_index + direction < 0) {           // if its going past the beginning (at the beginning, going earlier)
    // slide backward, if its going to go behind 0, remove transition, skip to end, add transition, and slide backward (also seamless)
    slideimgs_slide.style.transitionDuration = `0ms`;
    if (desktop == false) { // mobile
      slideimgs_slide.style.transform = `translateX(${slideimgs_index * -(1 * slsf)}px)`;
    } else {
      slideimgs_slide.style.transform = `translateX(${slideimgs_index * -(2 * slsf)}px)`;
    }
    setTimeout( () => {
      slideimgs_slide.style.transitionDuration = `${slide_transition}ms`;
      slideimgs_index = slideimgs_length;
      slideimgs_index += direction;
      if (desktop == false) { // mobile
        slideimgs_slide.style.transform = `translateX(${slideimgs_index * -(1 * slsf)}px)`;
      } else {
        slideimgs_slide.style.transform = `translateX(${slideimgs_index * -(2 * slsf)}px)`;
      }
    }, 10);

  } else {
    slideimgs_index += direction;
    if (desktop == false) { // mobile
      slideimgs_slide.style.transform = `translateX(${slideimgs_index * -(1 * slsf)}px)`;
    } else {
      slideimgs_slide.style.transform = `translateX(${slideimgs_index * -(2 * slsf)}px)`;
    }
  }
  console.log(slideimgs_index);
}


var slider_interval = setInterval( () => {
  if (dont_autoslide == false) {
    slide_images(1, true);
  }
}, 7000)


function generate_team(holiday) {
  final_html = "";
  for (i in fruitbrawl_team) {

    if (holiday == "december") {
      var add_html = `
      <div class="member-card ctr1">
        <span style="position: relative;">
          <img class="member-image round" src="${fruitbrawl_team[i]["photo"]}" alt="${fruitbrawl_team[i]["alt"]}">
          <svg class="christmas-hat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" >
            <g class="christmashat">
              <path d="M 5,25 Q 8,19 11,15 15,10 25,10 32,10.5 36,14 38,16 38,16 L 36,19 Q 34,17 32,17 29,17 29,20 29,24 33,25 Z" fill="red" stroke="red" />
              <circle cx="5" cy="30" r="4" fill="#e6e6e6" />
              <circle cx="10" cy="31" r="4" fill="#e6e6e6" />
              <circle cx="15" cy="30" r="4" fill="#e6e6e6" />
              <circle cx="20" cy="32" r="4" fill="#e6e6e6" />
              <circle cx="25" cy="31" r="4" fill="#e6e6e6" />
              <circle cx="30" cy="31" r="4" fill="#e6e6e6" />
              <circle cx="35" cy="30" r="4" fill="#e6e6e6" />
              <circle cx="7" cy="27" r="4" fill="#e6e6e6" />
              <circle cx="12" cy="27" r="4" fill="#e6e6e6" />
              <circle cx="17" cy="28" r="4" fill="#e6e6e6" />
              <circle cx="22" cy="28" r="4" fill="#e6e6e6" />
              <circle cx="27" cy="27" r="4" fill="#e6e6e6" />
              <circle cx="32" cy="27" r="4" fill="#e6e6e6" />
              <circle cx="38" cy="16" r="2" fill="#e6e6e6" />
              <circle cx="38" cy="19" r="2" fill="#e6e6e6" />
              <circle cx="36" cy="19" r="2" fill="#e6e6e6" />
              <circle cx="36" cy="16" r="2" fill="#e6e6e6" />
            </g>
          </svg>
        </span>
        <div class="membertext">
          <p class="name ctr2">${fruitbrawl_team[i]["name"]}</p>
          <p class="title ctr2">${fruitbrawl_team[i]["title"]}</p>
          <!--<p class="description ctr2">${fruitbrawl_team[i]["description"]}</p>-->
        </div>
      </div>`;
        final_html += add_html;
    } else {
      var add_html = `
      <div class="member-card ctr1">
        <img class="member-image round" src="${fruitbrawl_team[i]["photo"]}" alt="${fruitbrawl_team[i]["alt"]}">
        <div class="membertext">
          <p class="name ctr2">${fruitbrawl_team[i]["name"]}</p>
          <p class="title ctr2">${fruitbrawl_team[i]["title"]}</p>
          <!--<p class="description ctr2">${fruitbrawl_team[i]["description"]}</p>-->
        </div>
      </div>`;
        final_html += add_html;
    }
    
  }
  document.getElementById("team-div").innerHTML = final_html;
}

generate_team();


function check_mobile() {
  windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  if (windowWidth < windowHeight) {
    desktop = false;
  } else {
    desktop = true;
  }

  if (prev_desktop != desktop) {
    // run the new stuff
    console.log("changed");
    if (desktop == false) {
      document.getElementById("mobile").setAttribute("href", "../mobile.css");
    } else {
      document.getElementById("mobile").setAttribute("href", "");
    }
    slideimgs_slide.innerHTML = "";
    slideimgs_slide.style.transform = `translateX(0px)`;
    init_slideimgs();
  }


  prev_desktop = desktop;
}

check_mobile();


clientmode_interval = setInterval(check_mobile, 500);