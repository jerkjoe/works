require('babel-polyfill')
const hamburger = document.getElementById('hamburger')
hamburger.addEventListener('click', function() {
  this.classList.toggle('active')
  document.querySelector('.nav-items').classList.toggle('active')
})

const previous = document.getElementById('previous')
const next = document.getElementById('next')
const slides = [].slice.call(document.querySelectorAll('.slider>li'))
console.log(slides)
slides[0].classList.add('active')
var index = 0
next.addEventListener('click', function() {
  index = index + 1 >= slides.length ? 0 : index + 1
  slides[index].classList.add('active')
  index === 0
    ? slides[slides.length - 1].classList.remove('active')
    : slides[index - 1].classList.remove('active')
  // console.log(index);
})
previous.addEventListener('click', function() {
  index = index - 1 < 0 ? slides.length - 1 : index - 1
  slides[index].classList.add('active')
  index === slides.length - 1
    ? slides[0].classList.remove('active')
    : slides[index + 1].classList.remove('active')
  console.log(index)
})

previous.addEventListener('click', ()=>{
  console.log("a")
})