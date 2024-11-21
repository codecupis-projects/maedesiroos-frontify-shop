const slides = document.querySelectorAll(".slide")
const showslide = function () {
  let counter = 0
  let lastItem = 0
  const timer = 250
  let showSlide = setTimeout(function show() {
    slides[lastItem].classList.remove("active-slide")
    slides[counter].classList.add("active-slide")
    lastItem = counter
    counter < slides.length - 1 ? counter++ : (counter = 0)
    showSlide = setTimeout(show, timer * 16) }, timer) }
showslide()
