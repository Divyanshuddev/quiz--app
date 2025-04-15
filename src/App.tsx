import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Difficulty from "./pages/Difficulty"
import TimeStart from "./pages/TimeStart"
import Quiz from "./pages/Quiz"
import Result from "./pages/Result"


function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/category" element={<Category />} />
    <Route path="/difficulty" element={<Difficulty />} />
    <Route path="/timer" element={<TimeStart />} />
    <Route path="/quiz" element={<Quiz />} />   
    <Route path="/result" element={<Result />} /> 
    </Routes>
    </>
  )
}

export default App
