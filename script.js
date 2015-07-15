$(document).ready(function(){


  // var numberOfQuestions= 4;
  // var correctAnswer;
  // var currentQuestion;
  // var score= 0;


  var questions= [{

      question: "What is Type 2 Diabetes?",
      possibleAnswers: ["The pressure in your blood is too high", "There is too much fluid in your lungs", "The body produces too much insulin", "The body does not produce enough insulin"],
      answer: "The body does not produce enough insulin"
    },{

      question: "What happens when you experience hyperglycemia?",
      possibleAnswers: ["Your blood sugar is too high", "Your blood sugar is too low", "Your blood sugar is <60", "You should eat something right away"],
      answer: "Your blood sugar is too high"



    },{
      question: "What is insulin?",
      possibleAnswers: ["A hormone that makes sugar", "A hormone that brings down your blood pressure", "A hormone that allows your body to use sugar", "A hormone that you don't need?"],
      answer: "A hormone that allows your body to use sugar"

    }, {
      question: "What can raise your blood sugar?",
      possibleAnswers: ["Walking to school", "Singing", "Eating salty foods", "Hanging out with friends and eating foods high in sugar"],
      answer: "Hanging out with friends and eating foods high in sugar"
    },{
      question: "What can do to help keep your blood sugar down?",
      possibleAnswers: ["Exercise", "Sleep more", "Talk to your friends about it", "Eat more candy"],
      answer: "Exercise"
    },{
      question:  "Where does the sugar go after you eat?",
      possibleAnswers: ["Lungs", "Bloodstream","Pancrease", "In a cup"],
      answer: "Bloodstream"
    },{

      question: "What symptoms might you feel if your blood sugar is low?",
      possibleAnswers: ["Shaky", "Happy", "Energetic", "Lonely"],
      answer: "Shaky"

    },{

       question: "What symptoms might you feel if your blood sugar is too high?",
       possibleAnswers: ["Shaky", "Happy", "Nothing", "Lonely"],
       answer: "Nothing"

    },{

        question: "All of the the following complications can occur except",
        possibleAnswers:  ["Nerve damage", "Eye problems", "Kidney disease", "Hair growth"],
        answer: "Hair growth"
    },{

         question: "What is Type 1 Diabetes?",
         possibleAnswers: ["The pancrease does not produce enough insulin", "The body has too much insulin", "The pancrease does not produce any insulin", "The body is overweight"],
         answer:  "The pancrease does not produce any insulin"

    },{
         question: "How does exercise affect the blood suga?",
         possibleAnswers: ["Increases your blood sugar", "Burns calories to decrease your blood sugar", "Makes it disappear", "It does nothings"],
         answer: "Burns calories to decrease your blood sugar"

    },{

        question:  "Which food should you eat less of?",
        possibleAnswers: ["Strawberries", "Kale", "Spinach", "Candy"],
        answer: "Candy"

}]

  $("#triviaQuestions").hide();

  // $("#question").hide();
  // $("#choices").hide();


   //click start, question appear
  $("#start").on("click", function(){
    $(".getStarted").hide()
    $("h1").hide()
     $(".triviaQuestions").hide()


     //$("#questionOne").show()
     var randomNumber = Math.floor(Math.random ()*12);
     $("#question").html(questions[randomNumber].question)
    $(".choice").eq(0).html(questions[randomNumber].possibleAnswers[0])
})
})
  //get user's input
//var val= document.querySelector("value");
// function startTrivia() {
// for(i=0; i<questions.length;i++){
//
// $("#choices").on("click", function(){
// if (questions.possibleAnswers === answer) {
//       //   //$("#feedback").html("You can do this", "Correct!");
//       //   alert("that is correct");




        //
        //     } else {
        //         $("#feedback").html("You can do this", "Incorrect");







    //Tally score
    //
    //
    // function getScore(){
    // var score=0;
    // var numofQuestions=4;
    //
    // for (var i=0;i<numberofQuestions;i++){
    // if (userInput[i]==answers[i]){
    // score += 1;
    // }
    // else{
    // score += 0;
    // }
    //
    // }
    // return score;
    // }
    // function returnScore(){
    // alert("Your score is "+getScore()+"/10");
    // $("#score").html("0", "Your score is" + getscore() + "/4");
    // }





  // for (i=0; i<questions.length; i++){


  // $("#question").html(random.question);
  //
  // setRadioLabel("radioOne", random.options[0]);
  // setRadioLabel("radioTwo", random.options[1]);
  // setRadioLabel("radioThree", random.options[2]);
  // setRadioLabel("radioFour"), random.options[3]);
  // currentQuestion = random;

// }
// };
//
//
// /
