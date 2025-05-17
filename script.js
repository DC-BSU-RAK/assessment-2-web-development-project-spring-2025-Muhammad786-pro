// Gallery Slider Logic
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;

function showSlide(index) {
  if (!slider) return;
  if (index >= slides.length) counter = 0;
  if (index < 0) counter = slides.length - 1;
  slider.style.transform = `translateX(${-counter * 100}%)`;
}

if (nextBtn && prevBtn && slider) {
  nextBtn.addEventListener('click', () => {
    counter++;
    showSlide(counter);
  });

  prevBtn.addEventListener('click', () => {
    counter--;
    showSlide(counter);
  });

  showSlide(counter);
}

// Modal Popup Viewer for Models
const modal = document.getElementById('modelModal');
const modalImg = document.getElementById('modelImg');
const captionText = document.getElementById('caption');
const modelThumbs = document.querySelectorAll('.model-thumb');
const closeBtn = document.querySelector('.close');

modelThumbs.forEach((img) => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src.replace('_thumb', ''); // Assumes full image has no "_thumb"
    captionText.innerHTML = img.alt;
  });
});

if (closeBtn) {
  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };
}

// Fade-in on scroll animation
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1,
});

fadeElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  observer.observe(el);
});
document.addEventListener("DOMContentLoaded", () => {
  const discoverBtn = document.querySelector(".discover-btn");

  if (discoverBtn) {
    discoverBtn.addEventListener("click", () => {
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "about.html#brabus-info";
      }, 800); // Adjust delay if needed to match your CSS animation
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const discoverBtn = document.querySelector(".discover-btn");

  if (discoverBtn) {
    discoverBtn.addEventListener("click", () => {
      // Add fade-out class to body
      document.body.classList.add("fade-out");

      // Wait for the animation to finish before navigating
      setTimeout(() => {
        window.location.href = "about.html"; // Change destination here
      }, 800); // Match the CSS animation duration (0.8s)
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollImage = document.querySelector(".scroll-image");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    scrollImage.classList.add("animate-in");
                    observer.unobserve(entry.target); // animate once
                }
            });
        },
        { threshold: 0.5 }
    );

    if (scrollImage) {
        observer.observe(scrollImage);
    }
});
