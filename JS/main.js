//skills
let ourSkills = document.querySelector(".our-skills");
let ourSkillsSpan = document.querySelectorAll(".our-skills .the-progress span");
//latest events
let events = document.querySelector(".events");
let eventsDays = document.querySelector(".events .unit .daysC");
let eventsHours = document.querySelector(".events .unit .hoursC");
let eventsMinutes = document.querySelector(".events .unit .minutesC");
let eventsSeconds = document.querySelector(".events .unit .secondsC");
//the end
let countDownDate = new Date("Mars 1, 2022 23:59:59").getTime();
//
let eventsCounter = setInterval(function () {
  //date now
  let dateNow = new Date().getTime();
  //defference
  let dateDef = countDownDate - dateNow;
  //time units
  //days
  let days = Math.floor(dateDef / (1000 * 60 * 60 * 24));
  eventsDays.innerHTML = days < 10 ? `0${days}` : days;
  //hours
  let hours = Math.floor((dateDef % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  eventsHours.innerHTML = hours < 10 ? `0${hours}` : hours;
  //minutes
  let minutes = Math.floor((dateDef % (1000 * 60 * 60)) / (1000 * 60));
  eventsMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  //seconds
  let seconds = Math.floor((dateDef % (1000 * 60)) / 1000);
  eventsSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  if (dateDef < 0) {
    clearInterval(eventsCounter);
  }
}, 1000);
//stats
let stats = document.querySelector(".stats");
let numberSpan = document.querySelectorAll(".stats .number");
let started = false;
//
function statsCounter(element) {
  let goal = element.dataset.number;
  let statsCounterInt = setInterval(function () {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(statsCounterInt);
    }
  }, 2100 / goal);
}
//WINDOW ONSCROLL
window.onscroll = function () {
  // (1)
  if (window.scrollY >= ourSkills.offsetTop + 20) {
    ourSkillsSpan.forEach(function (span) {
      span.style.cssText = `width: ${span.dataset.width}`;
    });
  }
  // (2)
  if (window.scrollY >= stats.offsetTop + 3) {
    //
    if (!started) {
      numberSpan.forEach(function (span) {
        statsCounter(span);
      });
      started = true;
    }
  }
};
//
