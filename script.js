const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const montly = document.querySelector("#montly");

const workCurrent = document.querySelector("#work-current");
const workPrevious = document.querySelector("#work-previous");

const playCurrent = document.querySelector("#play-current");
const playPrevious = document.querySelector("#play-previous");

const studyCurrent = document.querySelector("#study-current");
const studyPrevious = document.querySelector("#study-previous");

const exerciseCurrent = document.querySelector("#exercise-current");
const exercisePrevious = document.querySelector("#exercise-previous");

const socialCurrent = document.querySelector("#social-current");
const socialPrevious = document.querySelector("#social-previous");

const selfCareCurrent = document.querySelector("#selfCare-current");
const selfCarePrevious = document.querySelector("#selfCare-previous");

// Event Listeners

// Work
daily.addEventListener("click", () => {
  workCurrent.innerHTML = "5hrs";
  workPrevious.innerHTML = "Last Week - 7hrs";
  daily.style.color = "white";
  weekly.style.color = "hsl(236, 100%, 87%)";
  montly.style.color = "hsl(236, 100%, 87%)";
});

weekly.addEventListener("click", () => {
  workCurrent.innerHTML = "32hrs";
  workPrevious.innerHTML = "Last Week - 36hrs";
  daily.style.color = "hsl(236, 100%, 87%)";
  weekly.style.color = "white";
  montly.style.color = "hsl(236, 100%, 87%)";
});

montly.addEventListener("click", () => {
  workCurrent.innerHTML = "103hrs";
  workPrevious.innerHTML = "Last Week - 128hrs";
  daily.style.color = "hsl(236, 100%, 87%)";
  weekly.style.color = "hsl(236, 100%, 87%)";
  montly.style.color = "white";
});

// Play
daily.addEventListener("click", () => {
  playCurrent.innerHTML = "1hrs";
  playPrevious.innerHTML = "Last Week - 2hrs";
});

weekly.addEventListener("click", () => {
  playCurrent.innerHTML = "10hrs";
  playPrevious.innerHTML = "Last Week - 8hrs";
});

montly.addEventListener("click", () => {
  playCurrent.innerHTML = "23hrs";
  playPrevious.innerHTML = "Last Week - 29hrs";
});

// Study
daily.addEventListener("click", () => {
  studyCurrent.innerHTML = "0hrs";
  studyPrevious.innerHTML = "Last Week - 1hrs";
});

weekly.addEventListener("click", () => {
  studyCurrent.innerHTML = "4hrs";
  studyPrevious.innerHTML = "Last Week - 7hrs";
});

montly.addEventListener("click", () => {
  studyCurrent.innerHTML = "13hrs";
  studyPrevious.innerHTML = "Last Week - 19hrs";
});

// Exercise
daily.addEventListener("click", () => {
  exerciseCurrent.innerHTML = "1hrs";
  exercisePrevious.innerHTML = "Last Week - 1hrs";
});

weekly.addEventListener("click", () => {
  exerciseCurrent.innerHTML = "4hrs";
  exercisePrevious.innerHTML = "Last Week - 5hrs";
});

montly.addEventListener("click", () => {
  exerciseCurrent.innerHTML = "11hrs";
  exercisePrevious.innerHTML = "Last Week - 18hrs";
});

// Social
daily.addEventListener("click", () => {
  socialCurrent.innerHTML = "1hrs";
  socialPrevious.innerHTML = "Last Week - 3hrs";
});

weekly.addEventListener("click", () => {
  socialCurrent.innerHTML = "5hrs";
  socialPrevious.innerHTML = "Last Week - 10hrs";
});

montly.addEventListener("click", () => {
  socialCurrent.innerHTML = "21hrs";
  socialPrevious.innerHTML = "Last Week - 23hrs";
});

// Self Care
daily.addEventListener("click", () => {
  selfCareCurrent.innerHTML = "0hrs";
  selfCarePrevious.innerHTML = "Last Week - 1hrs";
});

weekly.addEventListener("click", () => {
  selfCareCurrent.innerHTML = "2hrs";
  selfCarePrevious.innerHTML = "Last Week - 2hrs";
});

montly.addEventListener("click", () => {
  selfCareCurrent.innerHTML = "7hrs";
  selfCarePrevious.innerHTML = "Last Week - 11hrs";
});
