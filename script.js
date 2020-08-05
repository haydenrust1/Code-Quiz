// document.querySelector
var beginBtn = $('#beginBtn');
var timer = $('#timer');
var line = $('#line');
var correctAns = $('#correct');
var wrongAns = $('#wrong');


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

init();

//This function initializes the application upon opening and restarting the browser
function init () {
  timer.textContent = 0;
  correctAns.hide();
  wrongAns.hide();
  line.hide();
}

for (var i = 0; i < qAndA.length; i++) {
  if (null) {
  }
}

beginBtn.on('click', function () {
  console.log('Hello!');
});

//TEST
console.log(qAndA[8].answers9);

