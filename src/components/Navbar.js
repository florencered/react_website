import React from 'react'
import { NavLink } from 'react-router-dom' 
import styled from 'styled-components' //nesting the css can only be done in styled components
const Nav=styled.nav`  
.navbar-list{
    display:flex;  
    gap:4.5rem; 
li{
    list-style:none; 
    .navbar-link{
        text-decoration:none; 
       color:black; 
       
    
    
    }  
    .navbar-link{
        text-transform:uppercase; 
        font-size:1.2rem;
        display:inline-block;
    }
    .navbar-link:hover{ 
        color:${({theme})=>theme.colors.helper};
    }
    .navbar-link:active{ 
        color:${({theme})=>theme.colors.helper}
        
    }
}


}
`
const Navbar = () => {  

  
  return (
    <Nav>
        <div className='menuIcon'>
            <ul className='navbar-list'>
                <li>
                    <NavLink className="navbar-link" to="/">Home</NavLink> {/*//for redirecting */}
                
                </li> 
                <li>
                    <NavLink className="navbar-link" to="/about">About</NavLink> 
                </li> 
                <li>
                    <NavLink className="navbar-link" to="/service">Service</NavLink>
                </li> 
                <li>
                    <NavLink className="navbar-link" to="/contact">Contact</NavLink> 
                </li>
            </ul>
        </div>
    </Nav>
  ) 
 
 
}



export default Navbar