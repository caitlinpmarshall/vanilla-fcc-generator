import { learnBasicJS } from "./data.js";

//ELEMENT SELECTORS
const lessonLink = document.querySelector(".lesson-link");
const newLesson = document.querySelector(".new-lesson");
//console.log(lessonLink.href);

//LESSONS ARRAY

//ON CLICK, NEW LESSON LINK GENERATED

newLesson.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * learnBasicJS.length);
  //console.log(randomIndex);
  const randomLessonLink = learnBasicJS[randomIndex].link;
  const randomLessonName = learnBasicJS[randomIndex].name;
  lessonLink.href = randomLessonLink;
  lessonLink.innerHTML = randomLessonName;
  newLesson.innerHTML = "gimme another!";
  //console.log(randomLesson);
});
