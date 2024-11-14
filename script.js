const slides = document.querySelectorAll(".slide")
const sliderModule = function () {
  let counter = 0
  let lastItem = 0
  const sliderTimer = 250
  let showSlide = setTimeout(function show() {
    slides[lastItem].classList.remove("active-slide")
    slides[counter].classList.add("active-slide")
    lastItem = counter
    counter < slides.length - 1 ? counter++ : (counter = 0)
    showSlide = setTimeout(show, sliderTimer * 16)
  }, sliderTimer)
}
sliderModule()
