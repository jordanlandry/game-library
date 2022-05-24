// Image imports
import minesweeperThumbnail from '../images/minesweeper-thumbnail.png'

interface Game {
  id: number,
  route: string,
  name: string,
  desc?: string,
  img: string,
}

export default<Game[]> [
  {
    id: 0,
    route: '/minesweeper',
    name: 'Minesweeper',
    img: minesweeperThumbnail,
    desc: `Minesweeper is a logic-based puzzle game. The objective is to clear a board which contians hidden "bombs" without detonating any! Each grid square contains clues giving the number of nearby bombs (in a 3x3 area). When you believe there is a bomb, you can flag it (right click) to make sure you don't set off a bomb!`
  },
  {
    id: 1,
    route: '/2048',
    name: '2048',
    img: 'https://res.cloudinary.com/lmn/image/upload/fl_lossy,q_80/f_auto/v1/gameskinny/693a45d8d66fad03debd0c9270109865.png'
  },
]