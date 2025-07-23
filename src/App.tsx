import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './routes/Home'
import PostAd from './routes/PostAd'
import ViewAd from './routes/ViewAd'
import Header from './components/Header'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './routes/Dashboard'

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/post" element={<ProtectedRoute><PostAd /></ProtectedRoute>} />
        <Route path="/ad/:id" element={<ProtectedRoute><ViewAd /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </Router>
    <Footer />
    </div>
  )
}

export default App
