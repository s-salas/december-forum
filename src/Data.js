import hocusPocusQuestionImg from "./imgs/hocuspocus-question.jpg";
import hocusPocusAnswerImg from "./imgs/hocuspocus-answer.jpg";
import gremlinsQuestionImg from "./imgs/gremlins-question.jpg";
import gremlinsAnswerImg from "./imgs/gremlins-answer.jpg";
import silenceOfTheLambsQuestionImg from "./imgs/silenceofthelambs-question.jpg";
import silenceOfTheLambsAnswerImg from "./imgs/silenceofthelambs-answer.jpg";
import alienQuestionImg from "./imgs/alien-question.jpg";
import alienAnswerImg from "./imgs/alien-answer.jpg";
import cujoQuestionImg from "./imgs/cujo2-question.jpg";
import cujoAnswerImg from "./imgs/cujo2-answer.jpg";
import spiceGirlsImg from "./imgs/spicegirls.jpg";
import holyGuacamoleImg from "./imgs/holy-guacamole.jpg";
import hawaiianPunchImg from "./imgs/hawaiianpunch.jpg";
import creativeOutletImg from "./imgs/creativeoutlet.jpg";
import amazonPrimeImg from "./imgs/amazonprime.jpg";

// Categories
export const categories = [
  "Ops",
  "Writers",
  "CTO",
  "International Food",
  "SLA",
];

// Questions and choices
export const questions = [
  // ops
  [
    { image: hocusPocusQuestionImg },
    { image: silenceOfTheLambsQuestionImg },
    { image: cujoQuestionImg },
    { image: gremlinsQuestionImg },
    { image: alienQuestionImg },
  ],
  // writers
  [
    "Which writer has read nearly 100 books so far this year?",
    "Which character from J.K. Rowling's Harry Potter series is known for her strong magical abilities and is a member of the Gryffindor house?",
    "Who is the wise old wizard that leads the fellowship in The Lord of the Rings?",
    "What is the name of the iconic character played by Bette Midler in the 1993 film Hocus Pocus?",
    "In the Harry Potter series, who is revealed to be the Half-Blood Prince?",
  ],
  [
    // cto
    "What is the name of the urban legend involving a supposed haunted mirror that shows a person's true nature?",
    "What Mexican urban legend talks of a figure wearing a white dress wandering graveyards or streets looking for her children on Halloween night?",
    "What is the urban legend that revolves around a cursed object, often a doll, that brings misfortune to its owner?",
    "In the urban legends from India, what's the name of the spirit that is said to lure men and harm them?",
    "In which state did the urban legend of the 'Chupacabra,' a creature said to drain the blood of live stock, originate?",
    // { question: "question 1",
    // choices: [
    // "A) ",
    // "B) ",
    // "C) ",
    // "D) "
    // ],
  ],
  [
    // international food
    { image: spiceGirlsImg },
    { image: holyGuacamoleImg },
    { image: hawaiianPunchImg },
    { image: creativeOutletImg },
    { image: amazonPrimeImg },
  ],
  [
    // sla
    "question 1",
    "question 2",
    "question 3",
    "question 4",
    "question 5",
  ],
];

// Answers
export const answers = [
  [
    // ops
    { image: hocusPocusAnswerImg },
    { image: silenceOfTheLambsAnswerImg },
    { image: cujoAnswerImg },
    { image: gremlinsAnswerImg },
    { image: alienAnswerImg },
  ],
  [
    // writers
    "Mary",
    "Hermione Granger",
    "Gandalf",
    "Winifred Sanderson",
    "Severus Snape",
  ],
  // cto
  ["Bloody Mary", "La Llorona", "Annabelle", "Chudail", "Puerto Rico"],
  [
    // international food
    "Spice Girls",
    "Holy guacamole!",
    "Hawaiian Punch",
    "Creative outlet",
    "Amazon Prime",
  ],
  // sla
  ["answer 1", "answer 2", "answer 3", "answer 4", "answer 5"],
];
