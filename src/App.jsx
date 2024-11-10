import { NavLink, Outlet } from "react-router-dom"

function App() {

  


  return (
    <div>
      <h1>Simple firebase</h1>
      <div>
        <NavLink style={{marginRight:"20px"}} to="/">Home</NavLink>
        <NavLink style={{marginRight:"20px"}}  to="/login">Login</NavLink>
        <NavLink to="/login2">Login2</NavLink>

      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default App
