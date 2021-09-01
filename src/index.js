import { learnBasicJS } from "./data.js";
import { regex } from "./data.js";

///////////////LEARN BASIC JS
//ELEMENT SELECTORS
const basicLessonLink = document.querySelector(".basicJS .lesson-link");
const basicNewLesson = document.querySelector(".basicJS .new-lesson");
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

////////////////////REGEX
//ELEMENT SELECTORS
const regexLessonLink = document.querySelector(".regex .lesson-link");
const regexNewLesson = document.querySelector(".regex .new-lesson");
//console.log(regexLessonLink.href);

//ON CLICK, NEW LESSON LINK GENERATED
regexNewLesson.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * regex.length);
  //console.log(learnRegexJS[111].link);
  const randomRegexLessonLink = regex[randomIndex].link;
  const randomRegexLessonName = regex[randomIndex].name;
  regexLessonLink.href = randomRegexLessonLink;
  regexLessonLink.innerHTML = randomRegexLessonName;
  regexNewLesson.innerHTML = "gimme another!";
  //console.log(randomLesson);
});
