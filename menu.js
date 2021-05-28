const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const headline = document.getElementById('headline');
const button = document.getElementById('listen-button');

hamburger.onclick = function() {
    this.classList.toggle('open');
    nav.classList.toggle('show');
    headline.classList.toggle('hide');
    button.classList.toggle('hide');
};