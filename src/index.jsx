import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/header.jsx'
import Home from './pages/home/home.jsx'
import Error from './pages/error/error.jsx'
import Footer from './components/footer/footer.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" />
        <Route path="/mes-competences" />
        <Route path="/mes-projet" />
        <Route path="/contact" />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
