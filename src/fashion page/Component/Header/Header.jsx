import React from 'react'
import "./Header.css"
import { useRef} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
function Header() {
  const iconRef = useRef(null)
  const navRef = useRef(null)
  const closeIconRef = useRef(null)

const openNav = ()=>{
if(!navRef.current.classList.contains("active")){
  navRef.current.classList.add("active")
  iconRef.current.classList.add("active")
}
}
const closeNav = ()=>{
  if(navRef.current.classList.contains("active")){
    navRef.current.classList.remove("active")
    iconRef.current.classList.remove("active")
  }
}
  return (
  <div className="header">

    <header className='Header'>
        <h2 className="name">
            Fashion
        </h2>
            <div className="icon">
              hweloo display
                <div className="icon-img" ref={iconRef} onClick={()=>{openNav()}}> **** </div>
        </div>
        <nav className="navigation" ref={navRef}>
          <div className="close-icon" ref={closeIconRef} onClick={()=>{closeNav()}}>+</div>
            <ul>
                <li onClick={()=>{closeNav()}}><Link to='/'>Home</Link></li>
                <li onClick={()=>{closeNav()}}><Link to='/men'>Men</Link></li>
                <li onClick={()=>{closeNav()}}><Link to='/women'>Women</Link></li>
                <li onClick={()=>{closeNav()}}><Link to='/jewelery'>Jewelery</Link></li>
                <li onClick={()=>{closeNav()}}><Link to='/electronics'>Electronics</Link></li>
                <li onClick={()=>{closeNav()}}><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    </header>
  </div>
  )
}
export default Header