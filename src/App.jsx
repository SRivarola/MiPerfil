import { Route, Routes } from "react-router-dom"
import { About, Contact, Main, NavBar, Portfolio } from "./components"

function App() {

  return (
    <div className="font-poppins">
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
