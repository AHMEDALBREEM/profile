function toggleContactInfo() {
    const contactInfo = document.getElementById('contactInfo');
    contactInfo.classList.toggle('visible');
}

let timeoutId;
let currentIndex = 0;
const maxIndex = 50;

function showImage(url) {
    // Open the file in a new tab
    window.open(url, '_blank');  
}

function closeFullscreen() {
    const images = document.querySelectorAll('.certificate-img');
    images.forEach(img => img.classList.remove('fullscreen'));
    clearTimeout(timeoutId);
}

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
        showImage(currentIndex + 1);
    } else if (event.key === 'ArrowLeft') {
        showImage(currentIndex - 1);
    } else if (event.key === 'Escape') {
        closeFullscreen();
    }
});

document.querySelectorAll('.certificate-img').forEach((img, index) => {
    img.addEventListener('click', () => {
        showImage(img.src);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.id = "scrollToTopBtn";
    scrollToTopBtn.innerHTML = "↑";
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

let worknum = -1;

window.addEventListener('scroll', () => {
    worknum++;
    if (worknum === 10) {
        closeFullscreen();
        worknum = 0;
    }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
