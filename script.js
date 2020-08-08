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
    question1: 'question',
    answers1: ['1', '2', '3', '4'],
    correct: 'ans',
  },
  {
    question2: 'question',
    answers2: ['1', '2', '3', '4'],
    correct: 'ans',
  },
  {
    question3: 'question',
    answers3: ['1', '2', '3', '4'],
    correct: 'ans',
  },
  {
    question4: 'question',
    answers4: ['1', '2', '3', '4'],
    correct: 'ans',
  },
  {
    question5: 'question',
    answers5: ['1', '2', '3', '4'],
    correct: 'ans',
  },
  {
    question6: 'question',
    answers6: ['1', '2', '3', '4'],
    correct: 'ans',
  },
  {
    question7: 'question',
    answers7: ['1', '2', '3', '4'],
    correct: 'ans',
  },
  {
    question8: 'question',
    answers8: ['1', '2', '3', '4'],
    correct: 'ans',
  },
  {
    question9: 'question',
    answers9: ['1', '2', '3', '4'],
    correct: 'ans',
  },
];
/*question randomizer*/
// var randomQ = qAndA[Math.floor(Math.random() * qAndA.length)];
// console.log(randomQ);

var totalSeconds = 90;
var secondsElapsed = 0;
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
    console.log(totalSeconds);
  }, 1000);
}

//function that returns chosen question
function chooseQ() {
  // 1. loop through questions array
  // 2. display question
  /*loop through questions*/
  // for (var i = 0; i < qAndA.length; i++) {
  //   question.text(Object.keys(qAndA[i])[0]);
  //   console.log(question.text());
  // }
}

/*function for starting quiz on click*/
function start() {
  // 1. countdown clock
  clockTime();
  // 2. replace header with question
  questionPrompt.text(qAndA[0].question1);
  // 3. hide p tag
  description.hide();
  // 4. change beginBtn to four buttons with answer choice
  beginBtn.hide();
  questions.show();
}

function rightOrWrong() {
  if (q === qAndA.answers)
}

/*Buttons*/
beginBtn.on('click', start);
// q1.on('click', function () {});
// q2.on('click', function () {});
// q3.on('click', function () {});
// q4.on('click', function () {});

//TEST
// console.log(Object.keys(qAndA[0])[0]);
