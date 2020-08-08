// selected id's
var beginBtn = $('#beginBtn');
var timer = $('#timer');
var line = $('#line');
var correctAns = $('#correct');
var wrongAns = $('#wrong');
var questionPrompt = $('#question');
var description = $('#description');
var q1Btn = $('#q1');
var q2Btn = $('#q2');
var q3Btn = $('#q3');
var q4Btn = $('#q4');

//selected classes
var questions = $('.q');

//Questions and Answers
var qAndA = [
  {
    question: 'What is an event loop in Node.js ?',
    answers: [
      'A. An event is first captured by the innermost element and then propagated to outer elements.',
      'B. An inheritable and overridable function or method for which dynamic dispatch is facilitated. This concept is an important part of the (runtime) polymorphism portion of object-oriented programming (OOP).',
      'C. To process and handle external events and to convert them into callback invocations an event loop is used. So, at I/O calls, node.js can switch from one request to another.',
      'D. An event is first captured by the outermost element and then propagated to inner elements.',
    ],
    correct:
      'C. To process and handle external events and to convert them into callback invocations an event loop is used. So, at I/O calls, node.js can switch from one request to another.',
  },
  {
    question: 'What is event capturing (trickling).',
    answers: [
      'A. An event is first captured by the innermost element and then propagated to outer elements.',
      'B. An inheritable and overridable function or method for which dynamic dispatch is facilitated. This concept is an important part of the (runtime) polymorphism portion of object-oriented programming (OOP).',
      'C. To process and handle external events and to convert them into callback invocations an event loop is used. So, at I/O calls, node.js can switch from one request to another.',
      'D. An event is first captured by the outermost element and then propagated to inner elements.',
    ],
    correct:
      'D. An event is first captured by the outermost element and then propagated to inner elements.',
  },
  {
    question: 'What is a virtual function?',
    answers: [
      'A. An event is first captured by the innermost element and then propagated to outer elements.',
      'B. An inheritable and overridable function or method for which dynamic dispatch is facilitated. This concept is an important part of the (runtime) polymorphism portion of object-oriented programming (OOP).',
      'C. To process and handle external events and to convert them into callback invocations an event loop is used. So, at I/O calls, node.js can switch from one request to another.',
      'D. An event is first captured by the outermost element and then propagated to inner elements.',
    ],
    correct:
      'B. An inheritable and overridable function or method for which dynamic dispatch is facilitated. This concept is an important part of the (runtime) polymorphism portion of object-oriented programming (OOP).',
  },
  {
    question: 'What is event delegation?',
    answers: [
      'A. Allows you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent. That event listener analyzes bubbled events to find a match on child elements. Eg. Adding an event listener to a UL to catch bubbled events from an LI.',
      'B. An inheritable and overridable function or method for which dynamic dispatch is facilitated. This concept is an important part of the (runtime) polymorphism portion of object-oriented programming (OOP).',
      'C. To process and handle external events and to convert them into callback invocations an event loop is used. So, at I/O calls, node.js can switch from one request to another.',
      'D. An event is first captured by the outermost element and then propagated to inner elements.',
    ],
    correct:
      'A. Allows you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent. That event listener analyzes bubbled events to find a match on child elements. Eg. Adding an event listener to a UL to catch bubbled events from an LI.',
  },
  {
    question: 'What is event bubbling?',
    answers: [
      'A. An event is first captured by the innermost element and then propagated to outer elements.',
      'B. An inheritable and overridable function or method for which dynamic dispatch is facilitated. This concept is an important part of the (runtime) polymorphism portion of object-oriented programming (OOP).',
      'C. To process and handle external events and to convert them into callback invocations an event loop is used. So, at I/O calls, node.js can switch from one request to another.',
      'D. An event is first captured by the outermost element and then propagated to inner elements.',
    ],
    correct:
      'A. An event is first captured by the innermost element and then propagated to outer elements.',
  },
  {
    question:
      'Node.js is a Server side scripting which is used to build scalable programs. Its multiple advantages over other server side languages, the prominent being non-blocking I/O.',
    answers: [
      'What is Node.js?',
      'What is inversion of control?',
      'What is strict mode?',
      'What is polymorphism?',
    ],
    correct: 'What is Node.js?',
  },
  {
    question:
      'The (what?) method creates a new array with the results of calling a provided function on every element in this array.',
    answers: ['map()', 'push()', 'create()', 'fill()'],
    correct: 'map()',
  },
  {
    question:
      'What has the ability of a function to handle objects of many types',
    answers: ['stict mode', 'tail recursion', 'encapsulation', 'polymorphism'],
    correct: 'polymorphism',
  },
];

var totalSeconds = 90;
var next = 0;
var interval;

init();

/*This function initializes the application upon opening and restarting the browser*/
function init() {
  timer.text(0);
  correctAns.hide();
  wrongAns.hide();
  line.hide();
  questions.hide();
}

/*function for time on clock*/
function clockTime() {
  timer.text(totalSeconds);
  interval = setInterval(function () {
    totalSeconds--;
    timer.text(totalSeconds);
    if (totalSeconds === 0) {
      clearInterval(interval);
    }
  }, 1000);
}

/*function for starting quiz on click*/
function startQuiz() {
  // 1. countdown clock
  clockTime();
  // 2. replace header with questions
  qAndA.forEach(function (element) {
    console.log(element);
    questionPrompt.text(element.question);
    q1Btn.text(element.answers[0]);
    q2Btn.text(element.answers[1]);
    q3Btn.text(element.answers[2]);
    q4Btn.text(element.answers[3]);
    next++;
  });

  // 3. hide p tag
  description.hide();
  // 4. change beginBtn to four buttons with answer choice
  beginBtn.hide();
  questions.show();
}

// //a function to move to the next question
// function nextQuestion() {
// }

/*Buttons*/
beginBtn.on('click', startQuiz);
// q1Btn.on('click', nextQuestion);
// q2Btn.on('click', nextQuestion);
// q3Btn.on('click', nextQuestion);
// q4Btn.on('click', nextQuestion);

//TEST
//console.log(qAndA[1].answers[3]);
