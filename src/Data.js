import cornDog from "./imgs/corndog.jpg";
import beefWellington from "./imgs/beef-wellington.jpg";
import crepes from "./imgs/crepes.jpg";
import simit from "./imgs/simit.jpg";
import tamales from "./imgs/tamales.jpg";

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
    "If an Ops procedure has an 'Overview' section at the top, what should we proactively change this to?",
    "If SME, Legal and Controls approvals are required in Change Manager, what approvals do we bypass for a Link Only?",
    "What are the capitalization requirements for PRG titles?",
    "What are the mandatory Taxonomy fields found in the DDF?",
    "What are the two things that you should avoid using in the Important things to know section?",
  ],
  // writers
  [
    "Which writer has read nearly 100 books so far this year?",
    "Which writer has a pug named Rue?",
    "Which writer is a professional singer and guitarist who also plays in a band?",
    "Who had a previous job as a choreographer?",
    "Which writer likes to solve 3D puzzles in her spare time?",
  ],
  [
    // cto
    "When creating a bulleted list in CTO procedures, what is the minimum number of bullets the list should have?",
    "For CTO procedures, where is the one place chunking is used?",
    "Each topic that contains action steps should begin with a what?",
    "What can a small text (h4) topic title begin with?",
    "What do you enter in the Summary of Changes field in Change Manager for REF documents - content publish only?",
  ],
  [
    // international food
    { image: cornDog },
    { image: tamales },
    { image: beefWellington },
    { image: crepes },
    { image: simit },
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
    "Important things to know", 
    "Legal and Controls", 
    "All words are capitalized unless using connecting words like for, from, of, etc.", 
    "Organization, Content Type and Article Group", 
    "- Process or action steps in this section; consider section in 'How do I'\n- Remember statements; all information in 'Important things to know' are reminders and there is no need to double remind by starting with 'Remember'"
  ],
  [
    // writers
    "Mary",
    "Luis",
    "Allwyn",
    "Antonio",
    "Meetali",
    "Answer",
  ],
  // cto
  [
    "Two", 
    "What's new section", 
    "A statement that introduces the steps", 
    "Verb or noun", 
    "New or Modify"
  ],
  [
    // international food
    "USA",
    "Mexico",
    "England",
    "France",
    "Turkey",
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
