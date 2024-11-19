
import Home from "./Pages/Home"
import Moon from "./Pages/Moon"
import Planet from "./Pages/Planet"
import Stars from "./Pages/Stars"
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/moon" element={<Moon />} />
      <Route path="/planet" element={<Planet />} />
      <Route path="/stars" element={<Stars />} />
     </Routes>
    </>
  )
}

export default App
