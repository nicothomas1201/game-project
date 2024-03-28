import { Link } from 'react-router-dom'
export function Home() {
  return (
    <>
      <Link to="/ping-pong">Ping</Link>
      <Link to="/arkanoid">Arkanoid</Link>
    </>
  )
}
