import { Route, Routes, BrowserRouter } from "react-router-dom"
import Registration from "./onboarding/Registration"
import Navbar from "./dashboard/Navbar"
import Login from "./onboarding/Login"
const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signUp" element={<Registration />} />

                <Route path="/dashboard" element={<Navbar />} >
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default Routers