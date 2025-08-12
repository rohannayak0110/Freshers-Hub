import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Features from './Components/Features'
import Maimt_Hub from './Components/Maimt_Hub'
import Campus from './Components/Campus'
import Checklist from './Components/Checklist'
import FAQ from './Components/FAQ'
import Testimonials from './Components/Testimonials'
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Maimt_Hub />} />
          <Route path="/features" element={<Features />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
