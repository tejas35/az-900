
const questionNumber=document.querySelector(".question-number");
const questionText=document.querySelector(".question-text");
const optionContainer=document.querySelector(".question-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];

function setAvailableQuestions() {
  const totalQuestion = quiz.length;
  for(let i = 0; i < totalQuestion; i++){
    availableQuestions.push(quiz[i]);
  }
}
function getNewQuestion(){
  questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;
  const questionIndex = availableQuestions[Math.floor(Math.random()* availableQuestions.length)];
  currentQuestion = questionIndex;
  questionText.innerHTML= currentQuestion.q;
  // console.log(questionIndex);
  const index1 = availableQuestions.indexOf(questionIndex);
  availableQuestions.splice(index1, 1);
  const optionLen = currentQuestion.options.length;
  for(let i = 0; i<optionLen; i++){
    availableOptions.push(i);
  }
  // console.log(availableOptions);
  optionContainer.innerHTML='';
  for(let i = 0; i<optionLen; i++){

    const optionIndex = availableOptions[Math.floor(Math.random()*availableOptions.length)];
    const index2 = availableOptions.indexOf(optionIndex);
    availableOptions.splice(index2, 1);
    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[optionIndex];
    option.id = optionIndex;
    option.className = "option";
    optionContainer.appendChild(option);
  }
  questionCounter++;

}

function next() {
  if(questionCounter == quiz.length){
    console.log("quiz over");
  }
  else{
    getNewQuestion();
  }
}

window.onload = function(){
  setAvailableQuestions();
  getNewQuestion();
}
