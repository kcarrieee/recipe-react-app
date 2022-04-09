import {useState} from 'react'
import styled from "styled-components"
import {FiArrowUpRight} from 'react-icons/fi';

const Footer = () => {
    const [formValue,setFormValue]= useState('');
    const [submit, setSubmit] = useState(false);
    
    const SubmitHandler= (e)=>{
         e.preventDefault();
         
        }
   
  return (
    <StyledFooter>
        <Logo>Chef.io</Logo>
       
         <FooterLinks>
                <li>About</li>
                <li>Contact us</li>
                 <li>Join</li>
         </FooterLinks>
        
        <FormNews onSubmit={SubmitHandler} >
            <h4>Join our Newsletter</h4>
            <input type="email" placeholder='Your email....' value={formValue}
              onChange={(e)=>{setFormValue(e.target.value)}}/>
            <button type='submit' onClick={()=>{
                setFormValue('')
                setSubmit(true)
            }}
        >Submit <FiArrowUpRight/></button>
        {submit ? <Message>Email sent successfully!</Message>: null}  
        </FormNews>
    </StyledFooter>
  )
}

export default Footer



const StyledFooter = styled.footer`
 display:flex;
 justify-content:space-between;
 align-items:center;
 background-color:#EEEEEE;
 width:100%;
 min-height:150px;
 padding:2rem;
 border-radius: 10px 10px 0px 0px;
 margin-top:40px;
 @media screen and (max-width: 500px) {
     padding:1rem;
     

 }
  
`
const Logo = styled.h2`
    font-size: clamp(1.125rem, 0.25rem + 2.8vw, 2rem);
`
const FooterLinks = styled.ul`
    list-style:none;
    display:flex;
    li{
        margin-left:2em;
    }
    @media screen and (max-width: 700px) {
     flex-direction:column;
     gap:5px;
     li{
         margin-left:0;
     }

    }
    @media screen and (max-width: 400px) {
        display:none;
    }
`
const FormNews = styled.form`
    display:flex;
    flex-direction:column;
    gap:13px;
    

    h4{
        font-size: clamp(1rem, 0.75rem + 0.8vw, 1.25rem);
    }
    input[type="email"]{
        background-color:#EEEEEE;
        border:none;
        
        font-size:1rem;
        color:#000;
        height:20px;
        border-bottom: 1px solid #000;
        &:focus{
            outline:none;
        }
    }
    button{
        background:none;
        color:#0d0d0d;
        border:none;
        outline:none;
        height:30px;
        width:max-content;
        font-size: 1rem;
        font-weight:500;
        cursor:pointer;
        svg{
            display:inline-block;
            font-size:1.2rem;
            
        }

    }
    
`
const Message= styled.p`
    color: #5ab068;
    font-size: 0.85rem;
    padding-block: 0.07em;
`
