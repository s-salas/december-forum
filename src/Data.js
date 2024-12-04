import cornDog from "./imgs/corndog.jpg";
import beefWellington from "./imgs/beef-wellington.jpg";
import crepes from "./imgs/crepes.jpg";
import simit from "./imgs/simit.jpg";

// Categories
export const categories = [
  "Ops",
  "Writer/Manager Trivia",
  "CTO",
  "International Food",
  "SLA",
];

// Questions and choices
export const questions = [
  // ops
  [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5",
  ],
  // writers
  [
    "Which writer has read nearly 100 books so far this year?",
    "Which writer is a professional singer and guitarist who also plays in a band?",
    "Who had a previous job as a choreographer?",
    "Which writer likes to solve 3D puzzles in her spare time?",
    "Question 5",
  ],
  [
    // cto
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5",
  ],
  [
    // international food
    { image: cornDog },
    { image: beefWellington },
    { image: crepes },
    { image: simit },
    "Question",
  ],
  [
    // sla
    "If an impact has an RDD of 12/11 and you start writing on 12/11, by what date should you have this submitted for SME approval?",
    "If an impact has an RDD of 12/11 and you start writing on 12/17, by what date should you have this submitted for SME approval?",
    "If an impact has an RDD of 12/11 and you start writing on 12/10, by what date should you have this submitted for SME approval?",
    "If an impact has an RDD of 12/12 and you start writing on 12/12, by what date should you have this submitted for SME approval?",
    "If an impact has an RDD of 12/16 and you start writing on 12/17, by what date should you have this submitted for SME approval?",
  ],
];

// Answers
export const answers = [
  // ops
  [
    "Answer 1", 
    "Answer 2", 
    "Answer 3", 
    "Answer 4", 
    "Answer 5"
  ],
  [
    // writers
    "Mary",
    "Allwyn",
    "Antonio",
    "Meetali",
    "Answer",
  ],
  // cto
  [
    "Answer 1", 
    "Answer 2", 
    "Answer 3", 
    "Answer 4", 
    "Answer 5"
  ],
  [
    // international food
    "USA",
    "England",
    "France",
    "Turkey",
    "Answer",
  ],
  // sla
  [
    "Before end of day on 12/17", 
    "Before end of day on 12/17", 
    "Before end of day on 12/16", 
    "Before end of day on 12/17", 
    "Before end of day on 12/17"
  ],
];
