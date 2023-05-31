import { Navigate, Outlet } from "react-router-dom"

const ProtectRoutes = () => {
    if(localStorage.getItem("token")){
        return <Outlet />
    } else {
        return <Navigate to={"/"}/>
    }
  return (
    <div>ProtectRoutes</div>
  )
}

export default ProtectRoutes