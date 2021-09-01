import { learnBasicJS } from "./data.js";
import { regex } from "./data.js";

//ELEMENT SELECTORS
const basicLessonLink = document.querySelector(".basicJS .lesson-link");
const basicNewLesson = document.querySelector(".new-lesson");
//console.log(basicLessonLink.href);

//ON CLICK, NEW LESSON LINK GENERATED

basicNewLesson.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * learnBasicJS.length);
  //console.log(learnBasicJS[111].link);
  const randomBasicLessonLink = learnBasicJS[randomIndex].link;
  const randomBasicLessonName = learnBasicJS[randomIndex].name;
  basicLessonLink.href = randomBasicLessonLink;
  basicLessonLink.innerHTML = randomBasicLessonName;
  basicNewLesson.innerHTML = "gimme another!";
  //console.log(randomLesson);
});
