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
    img: 'https://dannytan.github.io/images/minesweeper_1.png'
  },
  {
    id: 1,
    route: '/2048',
    name: '2048',
    img: 'https://res.cloudinary.com/lmn/image/upload/fl_lossy,q_80/f_auto/v1/gameskinny/693a45d8d66fad03debd0c9270109865.png'
  },
]