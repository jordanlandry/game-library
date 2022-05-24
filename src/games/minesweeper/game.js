let canvas = null;
let ctx = null
let xCount, yCount, width, height, w

let bombCount = 50
const board = []

let firstClick = true
let firstSpot

const bombImage = new Image()
bombImage.src = 'https://esraa-alaarag.github.io/Minesweeper/images/bomb.png'

const flagImage = new Image()
flagImage.src = 'https://inotgo.com/imagesLocal/202108/03/20210803020506364t_4.png'

const defaultImage = new Image()
defaultImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Minesweeper_unopened_square.svg/768px-Minesweeper_unopened_square.svg.png'


export default function startGame(difficulty = "MEDIUM") {
  init(difficulty)
  clearBackground()
  generateCells()
  update();
}

const init = (difficulty) => {
  canvas = document.getElementById('minesweeper-canvas')
  ctx = canvas.getContext('2d')
  xCount = 30
  yCount = 16
  width = 750
  height = Math.floor(yCount / xCount * width)
  w = width / xCount

  canvas.setAttribute('width', width)
  canvas.setAttribute('height', height)

  canvas.addEventListener('mousedown', handleMouseClick, true)
  canvas.addEventListener('contextmenu', handleRemoveRightClick, true)

  ctx.font = `bold ${w + 2}px serif`
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const bombFreq = difficulty === 'EASY' ? .1 : difficulty === 'HARD' ? .3 : .2
  bombCount = Math.floor(xCount * yCount * bombFreq)
}

const handleRemoveRightClick = (e) => {
  e.preventDefault();
}

const handleMouseClick = (e) => {
  if (e.button !== 0 && e.button !== 2) return    // Only run on left click or right click
  
  // Get mouse position
  let i = Math.floor((e.x - canvas.offsetLeft) / w)
  let j = Math.floor((e.y - canvas.offsetTop) / w)
  
  // If you somehow click out of bounds
  if (i >= xCount) i = xCount -1
  if (j >= yCount) j = yCount -1

  // Right click
  if (e.button === 2) {
    board[i][j].toggleFlag()
    board[i][j].draw()
    return
  } board[i][j].show()
  
  // If it's your first time clicking, generate the bomb positions
  if (firstClick) {
    firstSpot = {i, j}
    generateBombPositions()
    generateBoardValues()
    board[i][j].show()    // Re draw it with the board value
    firstClick = false

    update();
  }

  // Show the gauranteed safe spots automatically 
  if (board[i][j].value === 0) {
    board[i][j].showNeighbours()
  }
  if (board[i][j].isFlagged) board[i][j].isFlagged = false
}

const update = () => {
  showAll()
}

// Re render
const showAll = () => {
  clearBackground()

  // Grid
  board.forEach(row => {
    row.forEach(cell => {
      cell.draw()
    })
  })

  // drawBorder()
}


// **** START OF GAME **** \\
const generateCells = () => {
  for (let i = 0; i < xCount; i++) {
    board.push([])

    for (let j = 0; j < yCount; j++) {
      board[i].push(new Cell(i, j))}
  }
}

// **** START OF GAME **** \\
const generateBombPositions = () => {
  const safeRadius = 2    // Bombs should not be able to go inside of the safe area radius
  const safeSpots = []

  for (let i = -safeRadius; i <= safeRadius; i++) {
    for (let j = -safeRadius; j <= safeRadius; j++) {
      
      // Randomize safe area to prevent forced guess from only a sqaure of information
      let randomOffset = 0
      if (i === -safeRadius || i === safeRadius) randomOffset = Math.random() < 0.7 ? i < 0 ? -1 : 1 : 0
      if (j === -safeRadius || j === safeRadius) randomOffset = Math.random() < 0.7 ? j < 0 ? -1 : 1 : 0

      safeSpots.push({x: firstSpot.i - i, y: firstSpot.j - j})
      
      if (randomOffset !== 0) safeSpots.push({x: firstSpot.i - i + randomOffset, y: firstSpot.j - j + randomOffset})

    }
  }
  
  if (bombCount > xCount * yCount / 2) bombCount = Math.floor(xCount * yCount / 2)

  for (let i = 0; i < bombCount; i++) {
    const randX = Math.floor(Math.random() * xCount) 
    const randY = Math.floor(Math.random() * yCount)

    const spot = { x: randX, y: randY }

    if (obInArr(spot, safeSpots)) {
      i--
      continue
    }

    board[randX][randY].isBomb = true
  }
}

// Checks if an object exists in an array
const obInArr = (ob, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (JSON.stringify(arr[i]) === JSON.stringify(ob)) return true
  } return false
}

const generateBoardValues = () => {
  board.forEach(row => {
    row.forEach((cell) => {
      cell.generateValue();
    })
  })
}


// ----------------------------------------------------- 
class Cell {
  constructor(i, j) {
    this.i = i
    this.j = j

    this.size = w

    this.x = i * this.size
    this.y = j * this.size

    this.isBomb = false;
    this.isShown = false;
    this.isFlagged = false;

    this.value = 0
  }

  show() {
    if (this.isShown) return
    if (this.isBomb) {
      gameOver()
      return
    }

    this.isShown = true
    this.draw()
  }

  showNeighbours() {
    this.isShown = true
    this.draw()

    if (this.value !== 0 || this.isBomb) return
    for (let i = this.i - 1; i <= this.i + 1; i++) {
      if (i < 0 || i >= xCount) continue    // Boundries

      for (let j = this.j - 1; j <= this.j + 1; j++) {
        if (j < 0 || j >= yCount) continue    // Boundries 

        if (!board[i][j].isShown) board[i][j].showNeighbours()
      }
    }
  }

  toggleFlag() {
    if (this.isShown) return
    this.isFlagged = !this.isFlagged
  }

  draw() {
    let img = ''
    if (this.isBomb && this.isShown) img = bombImage
    else if (this.isFlagged && !this.isShown) img = flagImage
    else if (!this.isShown) img = defaultImage

    if (img !== '') {
      ctx.drawImage(img, this.x, this.y, this.size, this.size)
    }

    else {
      ctx.fillStyle = '#cfced2'
      ctx.fillRect(this.x, this.y, this.size, this.size)
    }

    // Border
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1
    ctx.strokeRect(this.x, this.y, this.size, this.size)

    // Text content
    if (this.value === 0 || !this.isShown || this.isFlagged) return
    ctx.fillStyle = 
      this.value === 8 ? 'grey' : 
      this.value === 7 ? 'black' : 
      this.value === 6 ? 'cyan' : 
      this.value === 5 ? 'brown' : 
      this.value === 4 ? 'darkblue' : 
      this.value === 3 ? 'red' : 
      this.value === 2 ? 'green': 'blue'

    ctx.fillText(this.value, this.x + this.size / 2, this.y + this.size / 2 + 2)
  }

  generateValue() {
    if (this.isBomb) return

    for (let i = this.i - 1; i <= this.i + 1; i++) {
      if (i < 0 || i >= xCount) continue    // Boundries

      for (let j = this.j - 1; j <= this.j + 1; j++) {
        if (j < 0 || j >= yCount) continue    // Boundries 

        if (board[i][j].isBomb) this.value++
      }
    }
  }
}

const gameOver = () => {
  canvas.removeEventListener('mousedown', handleMouseClick, true)
  canvas.removeEventListener('contextmenu', handleRemoveRightClick, true)
}

const gameWon = () => {
  return
}

// ***** GRAPHICS FUNCTIONS ***** \\
const clearBackground = () => {
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, width, height)
}

const drawBorder = () => {
  ctx.strokeStyle = 'black'
  ctx.strokeRect(0, 0, width, height);
}
