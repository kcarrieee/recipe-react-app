import React from 'react'
import styled from 'styled-components'
import menu from '../assets/menu.svg'

const Navbar = () => {
  return (
    <NavWrapper>
        <LogoWrapper>Chef.io</LogoWrapper>
        <NavItems>
            <ul>
                <li>About us</li>
                <li>Join</li>
                <li><img src={menu} alt="menu icon" /></li>
            </ul>
        </NavItems>

    </NavWrapper>
  )
}
const NavWrapper = styled.nav`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:80px;
`
const LogoWrapper = styled.div`
    font-size:20px;
    font-weight:bold;
`
const NavItems= styled.div`
    ul{
        list-style:none;
        display:flex;
        
        margin-left:auto;
        justify-content:space-between;
        align-items:center;
        li{
            margin-left:30px;
            font-size:1rem;
        }
    }
`

export default Navbar