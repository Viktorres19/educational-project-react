import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Contact } from './pages/Contact'
import { Navbar } from './Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  // in the round brackets you can specify some options. For example - how many seconds before refetch
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false // with this option window doesn't update if you change window - by default true
      }
    }
  })
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
