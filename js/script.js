const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

const button = document.querySelector('#invert-btn');
button.addEventListener('click', () => {
    document.body.classList.toggle('inverted');
    console.log("darkmodeactivated");
});

const today = new Date();

if (today.getHours() >= 18 || today.getHours() < 6) {
    document.body.classList.add('inverted');
} else {
    document.body.classList.remove('inverted');
}


menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  navMenu.classList.toggle('hidden');
});

navMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  navMenu.classList.toggle('hidden');
});



/* none of this works and i have no idea why
 
// Select the question element
const faqQuestion = document.querySelector('.faqquestion');
// Select the answer element
const faqAnswer = document.getElementById('faqanswer');

// Set initial state so the first click always works
faqAnswer.style.display = 'none';

faqQuestion.addEventListener('click', function() {
  // Toggle between hidden and visible
  if (faqAnswer.style.display === 'none') {
    faqAnswer.style.display = 'block';
  } else {
    faqAnswer.style.display = 'none';
  }
}); */


