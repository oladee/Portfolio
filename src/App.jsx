import Navbar from "./Components/Navbar"
import { useState } from "react"
import Home from "./pages/Home"

const App = ()=> {
  const [lightmode, setLightMode] = useState(false)
  return (
    <div className="text-[#A7A7A7] mx-14">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App

