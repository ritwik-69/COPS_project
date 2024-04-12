
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Auth"
import Main from "./components/Main"
import Home from "./components/Home"
import Signup from "./components/Signup"


function App(props) {
  return (
    
     <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home/>} />
         <Route path="/auth" element={<Auth/>} />
         <Route path="/main" element={<Main/>} />
         <Route path="/signup" element={<Signup/>}/>

      </Routes>
     </BrowserRouter>
  )
}

export default App
