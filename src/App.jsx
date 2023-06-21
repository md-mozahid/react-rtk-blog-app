import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import PostDetails from './components/postDetails/PostDetails'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-details" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
