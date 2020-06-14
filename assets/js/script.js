document.body;
var highScore = 100;
var timecountdown = 100;
var index = 0;
var timeEl = document.querySelector("#count");
var buttonD = document.querySelector("#quiz");
var showq = document.createElement("h3")//show question on the page
var questionAnswer = document.querySelector("#showQ");

var timeInterval;


var listAnswer = document.createElement("ol");//order list
var list1 = document.createElement("li");
var list2 = document.createElement("li");
var list3 = document.createElement("li");
var list4 = document.createElement("li");

var ans1 = document.createElement("button");
var ans2 = document.createElement("button");
var ans3 = document.createElement("button");
var ans4 = document.createElement("button");

var formEl = document.querySelector("#form");
var formShowscore = document.querySelector("#infoUser");



var arrayquestion = [
  {
    question: " Who created JavaScript?",
    choices: ["Netscape", "Microsoft", "Oracle", "Sun Microsystems"],
    answer: "Netscape"
  },
  {
    question: "Which of the following is not a reserved word in JavaScript?",
    choices: ["default", "finally", "throw ", "undefined"],
    answer: "undefined"
  },
  {
    question: " which of these statements does not belong to JavaScript:",
    choices: ["Valuest", "String", "Keywords", "Comments"],
    answer: "String"
  },
  {
    question: " which  statement JavaScript return a Random Integers:",
    choices: ["Math.random()", "Math.floor()", "Math.floor()", "Math.floor(Math.random()*10)", "Math.random(Math.floor()*10)"],
    answer: "Math.floor(Math.random()*10)"
  },
  {
    question: "A JavaScript Boolean represents one or two values: ",
    choices: ["true", "false", "null and false", "true or false"],
    answer: "true or false"
  },
  {
    question: "Is JavaScript a front-end, back-end, full-stack or database programming language?",
    choices: ["front-end", "back-end", "full-stack", "database"],
    answer: "full-stack"
  },
  {
    question: "What is not a JSON?",
    choices: [" Stands for JavaScript Object Notation", "A lightweight data interchange format", "Language dependent", "self-describing and easy to understand"],
    answer: "Language dependent"
  },
  {
    question: "JavaScript defines 5 types of primitive data types, Which of these is not one?",
    choices: [" boolean", "number", "null", "integer"],
    answer: "integer"
  },
  {
    question: "Which of these Comparison Operators returns true for x = 5? ",
    choices: ["x ==='5'", "x!== 5", "x!== 8", "x >= 8"],
    answer: "x!== 8"
  },
  {
    question: "Select the Assignment Operators that belong to JavaScript ",
    choices: ["+= ", "+= ", "/=", " all of the above "],
    answer: " all of the above "
  }];


//arrayquestion[index];// display arrayquestion[index], it will give you the first question. once the click happened,and you checked the asnwer, then put index++;
// now arrayquestion[index] means the second question. now the function will check the the click, the answer, and then index++ again. answer !== -10 points.     

function showQuestions() {

  var removeQuiz = document.getElementById("star");
  removeQuiz.remove();
  //star countdown
  starTimer(timecountdown);

  console.log("Preparring Question at index:", index);
  //Question [i]
  showq.innerHTML = arrayquestion[index].question;

  // answers for the question [i]
  ans1.textContent = arrayquestion[index].choices[0]
  ans2.textContent = arrayquestion[index].choices[1]
  ans3.textContent = arrayquestion[index].choices[2]
  ans4.textContent = arrayquestion[index].choices[3]
  // console.log(arrayquestion[index]);

  list1.appendChild(ans1);
  list2.appendChild(ans2);
  list3.appendChild(ans3);
  list4.appendChild(ans4);
  listAnswer.appendChild(list1);
  listAnswer.appendChild(list2);
  listAnswer.appendChild(list3);
  listAnswer.appendChild(list4);
  questionAnswer.appendChild(showq);
  questionAnswer.appendChild(listAnswer);

  ans1.addEventListener("click", Result);
  ans2.addEventListener("click", Result);
  ans3.addEventListener("click", Result);
  ans4.addEventListener("click", Result);

}

//function check result 
function Result() {
  // show the answer is correct or wrong
  console.log("THIS is what we just clicked on:", this)

  var correct = document.createElement("h6")
  var wrong = document.createElement("h6")


  wrong.textContent = "Wrong";
  correct.textContent = "Correct";


  wrong.setAttribute("Style", "font-size:20px ;margin:15px;color:gray; text-decoration: underline");
  correct.setAttribute("Style", "font-size:20px ;margin:15px;color:gray; text-decoration: underline");



  console.log("  Correct Answer: ", arrayquestion[index].answer)

  if (this.textContent === arrayquestion[index].answer) {
    console.log(" --- Test Taker's Answer: ", ans1.textContent);

    console.log("Correct Answer!")
    questionAnswer.appendChild(correct);
    index++;
    console.log("Next Question's index:", index);
    return
  }

  else {
    console.log("Incorrect Answer!!")


    console.log("BEFORE CLEAR", timecountdown)
    clearInterval(timeInterval)
    console.log("AFTER CLEAR", timecountdown)


    timecountdown = timecountdown - 10;


    console.log("AFTER PENALTY", timecountdown)

    starTimer(timecountdown)

   

    highScore = highScore - 10;

    questionAnswer.appendChild(wrong);
    index++;
    console.log("Next Question's index:", index);
    return

  }



};// end Result() fct def





function starTimer(howLong) {


  timeInterval = setInterval(function () {

    howLong--;
    console.log("Time Left: ", howLong)



    timeEl.textContent = howLong;

  
    if (timecountdown === 0) {
      ShowScore();
      clearInterval(timeInterval)
    }
  }, 1000);

}

//function results(){}


function ShowScore() {
  //create element for a form
  var texth2 = document.createElement("h1");
  var p = document.createElement("p");
  var input = document.createElement("input");
  var submit = document.createElement("button");
  var formLabel = document.createElement("label")

  texth2.textContent = "All Done!"
  p.innerHTML = "Your finale score is" + highScore;
  formLabel.textContent = "Enter initial:";
  submit.textContent = "Submit";

  //input.setAttribute()
  formLabel.setAttribute("style", "font-size:16px;margin:5px");
  submit.setAttribute("style", "margin:5px");
  formEl.appendChild(texth2);
  formEl.appendChild(p);
  formEl.appendChild(formLabel);
  formEl.appendChild(input);
  formEl.appendChild(submit);


  // all the element container
  formShowscore.appendChild(formEl);


  //save in localStore

  //var saveInitialScore=localStorage.setItem();

}



buttonD.addEventListener("click", showQuestions);
  // add event listern to the #quiz
  // clear the area 
  // showQuestions()
  // startTimer()
