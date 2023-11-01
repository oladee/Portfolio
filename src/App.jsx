import Navbar from "./Components/Navbar"
// import { useState } from "react"
import Home from "./pages/Home"
import Footer from "./Components/Footer"

const App = ()=> {
  // const [lightmode, setLightMode] = useState(false)

  return (
    <div className="text-[#A7A7A7] md:mx-14 mx-6 mb-9">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App

