import minesweeper from '../images/minesweeper-thumbnail.png'
import pong from '../images/pong-thumbnail.png'

interface Game {
  id: number,
  route: string,
  host: string,
  name: string,
  desc?: string,
  img: string,
}

export default<Game[]> [
  {
    id: 0,
    route: '/minesweeper',
    host: "",
    name: 'Minesweeper',
    desc: `Minesweeper is a logic-based puzzle game. The objective is to clear a board which contians hidden "bombs" without detonating any! Each grid square contains clues giving the number of nearby bombs (in a 3x3 area). When you believe there is a bomb, you can flag it (right click) to make sure you don't set off a bomb!`,
    img: minesweeper,
  },
  {
    id: 1,
    route: '/pong',
    name: 'Pong',
    host: 'https://jordanlandry.github.io/pong/', 
    desc: `Pong is a table-tennis simulation game with simple 2d graphics. Pong was originally released in 1972 and commonly mistaken for the first game ever made, however that is incorrect.`,
    img: pong
  },
]