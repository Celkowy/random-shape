class Shape {
  constructor(width, height, x, y, borderRadius, red, green, blue) {
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.borderRadius = borderRadius
    this.red = red
    this.green = green
    this.blue = blue
  }
  create() {
    const element = document.createElement('div')
    element.style.height = this.width + 'px'
    element.style.width = this.height + 'px'
    element.style.left = this.x + 'px'
    element.style.top = this.y + 'px'
    element.style.borderRadius = this.borderRadius + '%'
    element.style.backgroundColor = `rgb(${this.red}, ${this.green}, ${this.blue})`
    document.body.appendChild(element)
  }
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min
}

setInterval(() => {
  let random = getRandomNumber(25, 100)
  let singleElement = new Shape(
    random,
    random,
    getRandomNumber(0, window.innerWidth - random),
    getRandomNumber(0, window.innerHeight - random),
    getRandomNumber(15, 50),
    getRandomNumber(100, 255),
    getRandomNumber(100, 255),
    getRandomNumber(100, 255)
  )
  singleElement.create()
}, 200)
