// import { Link } from "react-router-dom"
import Aboutme from "../components/Aboutme"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import Welcome from "../components/Welcome"


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Welcome />
      <Aboutme />
      <Footer />
    </div>
  )
}

export default Home
