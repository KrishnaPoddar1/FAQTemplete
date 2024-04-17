const questionSections = document.querySelectorAll('.text-container .question');

questionSections.forEach(questionSection => {
  const questionImage = questionSection.querySelector('img');
  const answer = questionSection.nextElementSibling;
    /*
    console.log("Question Image"+questionImage);
    console.log("Answer"+answer);
    */
  questionImage.addEventListener('click', () => {
    answer.classList.toggle('hidden');

    if (answer.classList.contains('hidden')) {
      questionImage.src = "assets/images/icon-plus.svg"; 
    } else {
      questionImage.src = "assets/images/icon-minus.svg"; 
    }
  });
});
