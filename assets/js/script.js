 
  var highScore=100;
  var timeEl=document.querySelector("#count");
  var index=0;
  var buttonD=document.querySelector("#quiz");
  var listEl = document.createElement('ol');
  var ans1 = document.createElement('li');
  var ans2 = document.createElement('li');
  var ans3 = document.createElement('li');
  var ans4 = document.createElement('li');
  var formEl=document.querySelector("#form");
  var formShowscore=document.querySelector("showS");
  
 

  var arrayquestion=[
   {q:" Who created JavaScript?",a:"Netscape",b:"yud",c:"uu",},
   {q:"How long did Brendan Eich take to write the JavaScript programming language?",a:" 10 days!"},];
    


function showQuestions(){
   
   var removeQuiz= document.getElementById("star");
   removeQuiz.remove();
  //star countdown
   starTimer();
     
   for(var i=0;i<arrayquestion.length;i++){
       arrayquestion[i].b;
   }
    var question=document.createElement("h3");
    // show the question
    //show the response
    // add the event lestener
    // when on click the veriy, increase the index verify if you have mores questions if yes go to showestio  if not go to results

}

function starTimer(){
  var timecountdown= 100;

  var timeInterval=setInterval(function(){    
    timecountdown--;
    timeEl.textContent=timecountdown ;
    if( timecountdown===0){
        ShowScore();
        clearInterval(timeInterval)
    }   
  },1000);
}

function results(){}


function ShowScore(){
    //create element for a form
 var texth2=document.createElement("h1");
 var p=document.createElement("p");
 var input=document.createElement("input");
 var submit=document.createElement("button");
 var formLabel=document.createElement("label")

 texth2.textContent="All Done!"
 p.innerHTML="Your finale score is" +  highScore;
 formLabel.textContent="Enter initial:";
 submit.textContent="Submit";

 //input.setAttribute()
 formLabel.setAttribute("style","font-size:16px"); 
 formEl.appendChild(texth2);
 formEl.appendChild(p);
 formEl.appendChild(formLabel);
 formEl.appendChild(input);
 formEl.appendChild(submit);
 

 // all the element container
 formShowscore.appendChild(formEl);
 formShowscore.setAttribute("style","text-align: left");

//save in local store

//var saveInitialScore=localStorage.setItem();

}



buttonD.addEventListener("click",showQuestions);
  // add event listern to the #quiz
  // clear the area 
  // showQuestions()
  // startTimer()
