import { Routes, Route } from "react-router-dom"
import App from "../App"
import Home from "../page/Home"


const router = () => {
  return (
    <Routes>
        <Route path="/" element={<App />}>
            <Route path='' element={<Home />}/>
        </Route>
    </Routes>
  )
}

export default router
