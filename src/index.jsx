import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/header.jsx'
import Home from './pages/home/home.jsx'
import Error from './pages/error/error.jsx'
import Footer from './components/footer/footer.jsx'
import Contact from './pages/contact/contact.jsx'
import Apropos from './pages/a-propos/a-propos.jsx'
import Projects from './pages/projects/projects.jsx'
import Project from './pages/project/project.jsx'
import Skills from './pages/skills/skills.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/OCProjet8" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/mes-competences" element={<Skills />} />
        <Route path="/mes-projets" element={<Projects />} />
        <Route path="/projet/:idProject" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
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
