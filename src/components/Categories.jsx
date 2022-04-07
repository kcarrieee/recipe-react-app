import React from 'react'
import {FaHamburger, FaPizzaSlice} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Categories = () => {
  return (
    <List>
        <Slink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            
        </Slink>

        <Slink to={'/cuisine/American'}>
            <FaHamburger/>
            
        </Slink>
        < Slink to={'/cuisine/Thai'}>
            <GiNoodles/>
            
        </ Slink>
         < Slink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
           
        </Slink>

    </List>
  )
}

const List = styled.div`
    display:flex;
    justify-content:center;
    margin: 1.5rem 0rem;
`
const Slink = styled(NavLink)`
    background: #EEEEEE;
    border-radius:50%;
    text-decoration:none;
    cursor: pointer;
    color:#6a6a6a;
    padding:1em;
    font-size:1.5rem;
    margin:0.5em;
    &.active{
        background:#A5BEE0;
        svg{
            color:#000;
        }
    }
    
`

export default Categories