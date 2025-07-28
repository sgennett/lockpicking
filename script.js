document.addEventListener('DOMContentLoaded', function() {
    // Technique toggles
    document.querySelectorAll('#method-list li').forEach(function(li) {
      li.addEventListener('click', function() {
        var target = this.getAttribute('data-target');
        document.querySelectorAll('.detail').forEach(function(d) {
          d.style.display = 'none';
        });
        var sel = document.getElementById(target);
        if (sel) sel.style.display = 'block';
      });
    });
  
    // Quiz on Get Started page
    var quizForm = document.getElementById('quiz-form');
    if (quizForm) {
      quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var selected = document.querySelector('input[name="order"]:checked');
        var feedback = document.getElementById('quiz-feedback');
        if (!selected) {
          feedback.textContent = 'Please select an answer.';
          return;
        }
        feedback.textContent = (selected.value === 'correct')
          ? 'Correct!'
          : 'Try again.';
      });
    }
  });
  