// DOM Elements

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

// Cookies

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
    body.classList.add(theme);
    isSolar && body.classList.add('solar');
    }

// Event Handlers

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
    }

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
    }

solarButton.onclick = () => {
    if (body.classList.contains('solar')) {
        body.classList.remove('solar');
        localStorage.removeItem('isSolar');
        }
     else {
        body.classList.add('solar');
        localStorage.setItem('isSolar', true);
        }
    }
