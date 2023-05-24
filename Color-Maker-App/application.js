const cols = document.querySelector('.col')

document.addEventListener('keydown', (event) => {
  event.preventDefault()
  if (event.composed.toLowerCase() ==='space') {
    setRandomColors()
  }
})

document.addEventListener('click', (event) => {
  const type = event.target.dataset.type

  if(type ==='lock') {
    const node = event.target.tagName.toLowerCase() =='i'
    ? event.target
    :event.target.chidren[0]

    node.classList.toggle('fa-lock-open')
    node.classList.toggle('fa-lock')
  } else if (type === 'copy') {
    copyToClickboard(evnt.target.textContent)
  }
})

function gerenerateRandomColor() {
  // RGB
  // #FF0000
  // #00FF00
  // #0000FF

  const hexCodes = '0123456789ABCDEF'
  let color = ''
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
  }
  return '#' + color
}


function setToClickoard(text) {
  cols.forEach((col) => {
    col.style.background = gerenerateRandomColors()
  })
}

setRandomColors()