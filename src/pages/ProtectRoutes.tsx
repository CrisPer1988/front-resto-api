import { Link, Outlet } from "react-router-dom"
import "./styles/protectRouter.css"

const ProtectRoutes = () => {
    if(localStorage.getItem("token")){
        return <Outlet />
    } else {
        return <div className="login__user"><h2>LOGEATE PELOTUDO</h2>
        <Link to="/">Ingresar</Link></div>
        
    }
  return (
    <div>ProtectRoutes</div>
  )
}

export default ProtectRoutes