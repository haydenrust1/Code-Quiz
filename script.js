// document.querySelector
var beginBtn = $('#beginBtn');
var timer = $('#timer');
var line = $('#line');
var correctAns = $('#correct');
var wrongAns = $('#wrong');
var question = $('#question');
var description = $('#description');

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

var totalSeconds = 90;
var secondsElapsed = 0;
var interval;

init();

//This function initializes the application upon opening and restarting the browser
function init() {
  timer.text(0);
  correctAns.hide();
  wrongAns.hide();
  line.hide();
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
/*function for starting quiz on click*/
function start() {
  // 1. replace header with question
  question.text();
  // 2. hide p tag
  description.hide();
  // 3. change beginBtn to four buttons with answer choice
  // 4. countdown clock
  clockTime();
}

//for looping through questions and answers
for (var i = 0; i < qAndA.length; i++) {
  if (null) {
  }
}

beginBtn.on('click', start);

//TEST
console.log(qAndA[8].answers9);
