//ELEMENT SELECTORS
const lesson = document.querySelector(".lesson");
const newLesson = document.querySelector(".new-lesson");
//console.log(newLesson);

//LESSONS ARRAY
//TODO: can this be modulized? try pulling it out later
const learnBasicJS = [
  {
    id: "001",
    name: "Comment your code",
    link:
      "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code"
  },
  {
    id: "002",
    name: "declare variables",
    link:
      "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-javascript-variables"
  },
  {
    id: "003",
    name: "storing values with assignment operator",
    link:
      "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator"
  },
  {
    id: "004",
    name: "assigning value of one variable to another",
    link:
      "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/assigning-the-value-of-one-variable-to-another"
  }
];

//ON CLICK, NEW LESSON LINK GENERATED

//event listener
newLesson.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * learnBasicJS.length);

  //console.log(randomIndex);

  const randomLesson = learnBasicJS[randomIndex].link;
  lesson.innerHTML = randomLesson;
  //console.log(randomLesson);
});

//TODO: link should go in hyperlink, text show name
