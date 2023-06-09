import { Link } from "react-router-dom"
import "./styles/navigacion.css"

const Navegacion = () => {
  return (
<nav className="fixed-top navbar navbar-expand-lg bg-dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="/src/assets/DayGo.png" alt="DayGO" width="90vh" height="90vh"/></a>
    <button className="navbar-toggler btn btn-outline-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon btn btn-outline-success"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb- mb-lg--9">
        <li className="nav-item li__navbar">
          <a className="nav-link active text-white item_navbar" aria-current="page" href="#">Home</a>
         <Link className="nav-link active text-white item_navbar" aria-current="page" to={"/restaurants"}>Restaurants</Link> 
        
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
 )
}

export default Navegacion