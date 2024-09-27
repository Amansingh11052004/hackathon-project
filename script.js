let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}
document.addEventListener('scroll', () => {
    const topics = document.querySelectorAll('.topic');
    const triggerBottom = window.innerHeight / 5 * 4;

    topics.forEach(topic => {
        const boxTop = topic.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            topic.classList.add('visible');
        }
    });
});
