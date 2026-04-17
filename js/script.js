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

/*function toggleTheme() {
  const theme = document.getElementById("toggleDark");
  const current = theme.getAttribute("href");

  if(current === "css/styles.css") {
    theme.setAttribute("href", "css/darkmode.css");
  } else {
    theme.setAttribute("href", "css/styles.css");
  }
}*/


/*const button = document.querySelector('#invert-btn');

button.addEventListener('click', () => {

    document.body.classList.toggle('inverted');
    
    if (document.body.classList.contains('inverted')) {
        button.textContent = "⋆⁺₊⋆ ☾⋆⁺₊⋆";
    } else {
        button.textContent = "⁺₊⋆ ☀︎ ⋆⁺₊";
    }

    console.log("darkmodeactivated");
}) */


