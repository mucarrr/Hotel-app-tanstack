import { FC } from "react"
import Home from "./pages/home/Home"
import Details from "./pages/detail/Details"
import Create from "./pages/create/Create"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
const App:FC = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/place/:id" element={<Details />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App