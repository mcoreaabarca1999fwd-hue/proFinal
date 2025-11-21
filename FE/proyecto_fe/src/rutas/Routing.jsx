import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Registro from '../paginas/Registro'
import Login from '../paginas/Login'
import Bienvenidxinicio from "../paginas/Bienvenidxinicio"
import AgregaTuCiclo from "../paginas/AgregaTuCiclo"
import CalendarioPage from '../paginas/calendario/CalendarioPage'
import ProfilePage from '../paginas/perfilPage/ProfilePage'
import SupportPage from '../paginas/soportePage/SupportPage'
import ForoPage from '../paginas/foroPage/ForoPage'
import RecursosPage from '../paginas/educacionPage/RecursosPage'
    

const Routing = () => {
    return(
        <Router>
            <Routes>
                <Route path='/registro' element={<Registro/>}/>
                <Route path='/' element={<Login/>}/>
                <Route path='/bienvenidx' element={<Bienvenidxinicio/>}/>
                <Route path='/agrega-tu-ciclo' element={<AgregaTuCiclo/>}/>
                <Route path='/calendario' element={<CalendarioPage/>}/>
                <Route path='/perfil' element={<ProfilePage/>}/>
                <Route path='/soporte' element={<SupportPage/>}/>
                <Route path='/foro' element={<ForoPage/>}/>
                <Route path='/recursos' element={<RecursosPage/>}/>
            </Routes>
        </Router>
    )
}
export default Routing