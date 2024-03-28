import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home, Arkanoid, PingPong, Game } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ping-pong" element={<PingPong />} />
        <Route path="/arkanoid" element={<Arkanoid />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
