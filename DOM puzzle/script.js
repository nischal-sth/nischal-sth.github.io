const mk = (tag, props = {}, parent) => {
  const el = document.createElement(tag)
  Object.assign(el, props)
  if (parent) parent.appendChild(el)
  return el
}
const setStyle = (el, styles) => Object.assign(el.style, styles)

const puzzle = document.getElementById('puzzle')
const title = mk('h1', { textContent: 'DOM Puzzle' })
puzzle.parentNode.insertBefore(title, puzzle)
const desc = mk('p', { textContent: 'This is a puzzle created entirely with JavaScript.' })
puzzle.parentNode.insertBefore(desc, puzzle.nextSibling)

setStyle(puzzle, { position: 'relative', backgroundColor: '#5f3296' })

const Q = 250
const S = 125

;[
  { x: 0, y: 0, txt: 'A', color: '#9455F4' },
  { x: S, y: 0, txt: 'B', color: '#4A2B74' },
  { x: 0, y: S, txt: 'C', color: '#594492' },
  { x: S, y: S, txt: 'D', color: '#854DDC' }
].forEach(({ x, y, txt, color }) => {
  const box = mk('div', { textContent: txt }, puzzle)
  setStyle(box, {
    position: 'absolute',
    left: x + 'px',
    top: y + 'px',
    width: S + 'px',
    height: S + 'px',
    backgroundColor: color,
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: '18px',
    textAlign: 'center',
    lineHeight: S + 'px',
    boxSizing: 'border-box',
    border: '2px solid #2b1d40'
  })
})

const topRight = mk('div', {}, puzzle)
setStyle(topRight, {
  position: 'absolute',
  left: Q + 'px',
  top: 0,
  width: Q + 'px',
  height: Q + 'px',
  backgroundColor: '#6C3BA6',
  boxSizing: 'border-box',
  border: '2px solid #2b1d40'
})

const bottomLeft = mk('div', {}, puzzle)
setStyle(bottomLeft, {
  position: 'absolute',
  left: '0px',
  top: Q + 'px',
  width: Q + 'px',
  height: Q + 'px',
  backgroundColor: '#7338A0',
  boxSizing: 'border-box',
  border: '2px solid #2b1d40'
})

const grid = mk('div', {}, puzzle)
setStyle(grid, {
  position: 'absolute',
  left: Q + 'px',
  top: Q + 'px',
  width: Q + 'px',
  height: Q + 'px',
  boxSizing: 'border-box',
  border: '2px solid #2b1d40',
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridTemplateRows: 'repeat(10, 1fr)'
})

const makeButton = () => {
  const btn = mk('button', {}, grid)
  setStyle(btn, {
    width: '100%',
    height: '100%',
    border: '1px solid #2f2150',
    backgroundColor: '#b395f6',
    cursor: 'pointer',
    margin: '0',
    padding: '0'
  })
  return btn
}

const buttons = Array.from({ length: 100 }, makeButton)

puzzle.addEventListener('mouseenter', () => {
  puzzle.style.border = '5px solid #FFA500'
})
puzzle.addEventListener('mouseleave', () => {
  puzzle.style.border = '5px solid black'
})

const DARK_PURPLE = '#4A2574'
const ORANGE = '#FF9E00'

grid.addEventListener('click', e => {
  if (e.target.tagName !== 'BUTTON') return
  const idx = buttons.indexOf(e.target)
  e.target.style.backgroundColor = DARK_PURPLE
  if (idx > 0) buttons[idx - 1].style.backgroundColor = ORANGE
  if (idx < buttons.length - 1) buttons[idx + 1].style.backgroundColor = ORANGE
})
