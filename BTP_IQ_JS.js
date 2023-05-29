function submitQuiz() {
  var totalQuestions = 5; // Replace with the total number of questions in your quiz
  var score = 0;

  // Loop through each question
  for (var i = 1; i <= totalQuestions; i++) {
    var question = document.getElementsByName('question' + i);
    for (var j = 0; j < question.length; j++) {
      if (question[j].checked) {
        // Check if the selected option is correct
        if (question[j].value === 'option2') {
          score++;
        }
      }
    }
  }

  // Display the result
  var resultElement = document.querySelector('.result');
  resultElement.innerHTML = 'Your score is: ' + score;
}
