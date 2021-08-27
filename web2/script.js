document.querySelectorAll('main > section').forEach(Element => {
  const circle = document.createElement('div')
  circle.classList.add('circle')
  Element.appendChild(circle)
})

const image = new Rellax('.image img', {
  speed: -4,
  center: true,
})

const circle = new Rellax('.circle', {
  center: true,
  speed: 2,
})

const header = new Rellax('header', {
  speed:4
})
