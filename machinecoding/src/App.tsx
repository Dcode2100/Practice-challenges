import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 w-[100vw]">
      <header className="border-b bg-white">
        <nav className="  flex items-center justify-between p-4">
          <Link to="/" className="text-xl font-semibold">Machinecoding</Link>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </div>
        </nav>
      </header>
      <main className="mx-auto  p-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
