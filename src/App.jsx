import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Contact } from './pages/Contact'
import { Navbar } from './Navbar'
import { CounterProvider } from './CounterProvider'

const App = () => {

  return (
    <div className="App">
      <CounterProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </CounterProvider>
    </div>
  )
}

export default App
