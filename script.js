const slides = document.querySelector('.slides');
const thumbnails = document.querySelectorAll('.thumbnails img');
const factBox = document.getElementById('factBox');
const randomFactDiv = document.getElementById('randomFact');

const total = slides.children.length;
let index = 0;

const facts = [
    "Earth is our home planet and the third planet from the Sun. It is the only planet known to support life.",
    "Jupiter is the largest planet and has a giant storm called the Great Red Spot.",
    "Saturn is famous for its beautiful rings made of ice and rock. It is the second-largest planet in the solar system.",
    "Mars is called the Red Planet because of its reddish soil caused by iron. It has the tallest volcano in the solar system called Olympus Mons.",
    "Venus is the hottest planet because of its thick atmosphere full of greenhouse gases. It is similar in size to Earth, so sometimes it’s called Earth’s twin.",
    "Uranus rotates on its side, making it unique among the planets. It is a blue-green gas giant because of the methane in its atmosphere.",
    "Mercury is the closest planet to the Sun and the smallest planet in our solar system. It has very little atmosphere, so it is extremely hot in the day and freezing at night.",
    "Neptune is the farthest planet from the Sun. It has the strongest winds in the solar system and a dark, stormy atmosphere."
];

const extraFacts = [
    "Venus spins backward compared to most planets.",
    "Mars has the tallest volcano in the solar system.",
    "Jupiter has over 79 moons.",
    "Saturn's rings are made mostly of ice particles.",
    "Mercury has almost no atmosphere.",
    "Neptune has the fastest winds in the solar system.",
    "Uranus was the first planet discovered with a telescope.",
    "Earth is the only planet known to support life."
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

function nextSlide() { showSlide(index + 1); }
function prevSlide() { showSlide(index - 1); }
function currentSlide(i) { showSlide(i); }

showSlide(index);

const toggleBtn = document.getElementById('toggleFactBtn');
toggleBtn.addEventListener('click', () => {
    if (factBox.style.display === 'none') {
        factBox.style.display = 'block';
        toggleBtn.textContent = 'Hide Facts';
    } else {
        factBox.style.display = 'none';
        toggleBtn.textContent = 'Show Facts';
    }
});

// Random extra facts
function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * extraFacts.length);
    randomFactDiv.textContent = extraFacts[randomIndex];
}

setInterval(showRandomFact, 5000);
showRandomFact();

// Shooting stars
function createShootingStar() {
    const shooting = document.createElement('div');
    shooting.classList.add('shooting-star');
    shooting.style.top = Math.random() * 50 + 'vh';
    shooting.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(shooting);
    setTimeout(() => shooting.remove(), 2000);
}

setInterval(() => {
    createShootingStar();
    setTimeout(createShootingStar, 400);
}, 2000);