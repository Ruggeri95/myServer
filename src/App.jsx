import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import PlansPages from './pages/PlansPage/PlansPage'
import ContactPage from './pages/ContactPage/ContactPage'
import { useState } from 'react'
import LoginScreen from './components/LoginScreen/LoginScreen'
import Footer from './components/Footer/Footer'

export default function App() {
  const [showLogin, setShowLogin] = useState(false)
  
  return (
    <BrowserRouter basename='/myServer'>
      <Header onLoginClick={() => setShowLogin(prev => !prev)}/>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/plans' element={<PlansPages />} />
        <Route path='/contact' element={<ContactPage />} />

        <Route path='*' element={<h1>Página não encontrada</h1>} />
      </Routes>

      {showLogin && (
        <LoginScreen onClose={() => setShowLogin(false)} />
      )}

      <Footer />
    </BrowserRouter>
  )

  
}