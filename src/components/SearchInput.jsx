import styled from 'styled-components'
import { useState} from "react"
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const SearchInput = () => {
    const [input, setInput] =useState('')
    const navigate = useNavigate()

    const submitHandler =(e)=>{
        e.preventDefault()
        navigate("/searched/" + input)

    }

  return (
    <StyledForm onSubmit={submitHandler}>
        <div>
        <FaSearch></FaSearch>
        <input 
        type="text" 
        placeholder='Blueberry muffin.....' 
        value={input}
        onChange={(e)=>{
            setInput(e.target.value)
        }}/>
        </div>
    </StyledForm>
  )
}

const StyledForm = styled.form`
    margin: 0 auto;
    max-width:820px;
    width:100%;
    div{
        position:relative;
        width:100%;
         svg{
            position:absolute;
            top:50%;
            left:0%;
            transform:translate(100%,-50%);
            color:#797979;
        }
    }

    input{
        border:none;
        background:#EEEEEE;
        width:100%;
        font-size:1rem;
        padding: 1rem 3rem;
        border-radius: 15px;
        outline:none;
        &[placeholder]{
            color:#797979;
        }
       
    }
`
export default SearchInput