import { Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Navbar } from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Login } from "./Components/Login"
import { Pricing } from "./Pages/Pricing"
import { Success } from "./Components/Success"
import { Generate } from "./Components/Generate"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Signup } from "./Components/Signup"
function App() {

  return (
    <>
      <div>
        <Navbar />
        <ToastContainer position="bottom-right"/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/generate-image" element={<Generate/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
