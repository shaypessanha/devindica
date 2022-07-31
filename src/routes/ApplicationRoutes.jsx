import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import Home from '../pages/Home/Home'
import Indicar from '../pages/Indicar/Indicar'
import Meindica from '../pages/Meindica/Meindica'
import Sobre from '../pages/Sobre/Sobre'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function ApplicationRoutes() {
    return(
        <BrowserRouter>
            <Menu />
            {/* <Header></Header> */}
            <Routes>
                <Route path="Home" element={<Home />} />
                <Route path="Indicar" element={<Indicar />} />
                <Route path="Meindica" element={<Meindica />} />
                {/* <Route path="Sobre" element={<Sobre />} /> */}
                <Route path="*" element={<Navigate to="Home" replace />} />
            </Routes>
            <Footer>
                Desenvolvido por <a href="https://github.com/shaypessanha">Shay Pessanha</a>
            </Footer>
        </BrowserRouter>
    )
}

export default ApplicationRoutes