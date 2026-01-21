let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");

  index++;
  if (index === slides.length) {
    index = 0;
  }

  slides[index].classList.add("active");
}, 3000); 


// caroussel 8
  
  window.onload = function () {

    let images = document.querySelectorAll("#containerimgg img");
    let dots = document.querySelectorAll(".indi");
    let index = 0;

    function show(i) {
      images.forEach(img => img.classList.remove("active"));
      dots.forEach(dot => dot.classList.remove("active"));

      images[i].classList.add("active");
      dots[i].classList.add("active");
    }

    function autoSlide() {
      index++;
      if (index === images.length) {
        index = 0;
      }
      show(index);
      setTimeout(autoSlide, 2500); // هنا كيتعاود
    }

    show(0);
    setTimeout(autoSlide, 2500);

  };

