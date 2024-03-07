import { Route, Routes } from "react-router"
import Home from "./Pages/Home.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/:id" element={<Home />} />
    </Routes>
    </>
  )     
}

export default App
