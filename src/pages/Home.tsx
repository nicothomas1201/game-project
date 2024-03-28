import { Link } from 'react-router-dom'
export function Home() {
  return (
    <>
      <h2>
        <Link to="/ping-pong">Ping</Link>
      </h2>
      <h2>
        <Link to="/arkanoid">Arkanoid</Link>
      </h2>
      <h2>
        <Link to="/game">Game</Link>
      </h2>
    </>
  )
}
