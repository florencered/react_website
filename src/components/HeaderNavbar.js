import React from 'react'
import { NavLink } from 'react-router-dom' 
import Navbar from './Navbar'
import styled from 'styled-components'
const HeaderNavbar = () => { 
    const Header=styled.header` 
padding: 0 4.8rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;

`
  return (
    <Header>
        <NavLink to="/"> {/*//does not refresh on clicking,can be used to redirect to one page as well*/}
            <h2>TAKE ME BACK</h2>
        </NavLink> 
        <Navbar/>
    </Header> 
  )
}

export default HeaderNavbar