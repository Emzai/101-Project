const slides = document.querySelector('.slides');
const thumbnails = document.querySelectorAll('.thumbnails img');
const factBox = document.getElementById('factBox');

const total = slides.children.length;
let index = 0;

const facts = [
    "Earth is our home planet and the third planet from the Sun.",
    "Jupiter is the largest planet and has a Great Red Spot, a giant storm.",
    "Saturn is famous for its beautiful rings made of ice and rock.",
    "Mars is known as the Red Planet because of its iron-rich dust.",
    "Venus is the hottest planet and is often called Earth's twin because of its similar size.",
    "Uranus rotates on its side, making it unique among planets.",
    "Mercury is the closest planet to the Sun and the smallest in our solar system.",
    "Neptune is the farthest planet and has the strongest winds in the solar system."
];

function showSlide(i) {
    if (i < 0) index = total - 1;
    else if (i >= total) index = 0;
    else index = i;

    slides.style.transform = 'translateX(' + (-index * 100) + '%)';

    thumbnails.forEach(img => img.classList.remove('active'));
    thumbnails[index].classList.add('active');

    factBox.textContent = facts[index];
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

function currentSlide(i) {
    showSlide(i);
}

showSlide(index);