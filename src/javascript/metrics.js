// Метрика ------------------------------------------
// offsetWidth/Height - внешняя ширина и высота (ширина контента + padding + border)
// clientWidth/Height - размер области внутри рамок (ширина контента + padding)
// scrollWidth/Height - полный размер с учётом прокрученной области (без border)
// scrollLeft/scrollTop - ширина/высота прокрученной области

const element = document.querySelector('#element')
console.log(element.offsetWidth)
console.log(element.offsetHeight)

console.log(element.clientWidth)
console.log(element.clientHeight)

console.log(element.scrollWidth)
console.log(element.scrollHeight)

element.addEventListener('scroll', () => {
  console.log(element.scrollTop)
})

// Координаты
// pageX/pageY - относительно документа
// clientX/clientY - относительно окна

document.body.addEventListener('click', ({ pageX, pageY, clientX, clientY }) => {
  console.log(clientX, clientY)
  console.log(pageX, pageY)
})

const rect = element.getBoundingClientRect()
console.log(rect)
