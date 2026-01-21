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
    setTimeout(autoSlide, 2500);
  }

  show(0);
  setTimeout(autoSlide, 2500);

};

// .............................
let form = document.querySelector("form");

let bookings = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let inputs = document.querySelectorAll("input");

  let nameInput   = inputs[0];
  let emailInput  = inputs[1];
  let phoneInput  = inputs[2];
  let dateInput   = inputs[3];
  let timeInput   = inputs[4];
  let peopleInput = inputs[5];;

  if (
    nameInput.value === "" ||
        emailInput.value === "" ||
        phoneInput.value === "" ||
        dateInput.value === "" ||
        timeInput.value === "" ||
        peopleInput.value === ""
  ) {
    alert("3amer les cas kamlin");
    return;
  }

  for (let i = 0; i < bookings.length; i++) {
        if (
            bookings[i].date === dateInput.value &&
            bookings[i].time === timeInput.value
        ) {
            alert("deja reserve");
            return;
        }
    }

  let booking = {
    date: dateInput.value,
        time: timeInput.value
  };

  bookings.push(booking);

  alert("reservation donne");
 nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
    peopleInput.value = "";
    console.log(bookings);
    

});