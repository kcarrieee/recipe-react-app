import HeroImage from '../assets/hero.svg'
import ArrowImage from '../assets/arrow.svg'
import styled from 'styled-components'

const Hero = () => {
  return (
    <HeroWrapper>
        <div>
        <h1>Discover and share everyday cooking inspiration.</h1>
        <a href="/">Join discord</a>
        <img src={ArrowImage} alt="arrow" />
        </div>
        <img src={HeroImage} alt="cooking image" />
    </HeroWrapper>
  )
}
const HeroWrapper = styled.section`
    background-color:#A5BEE0;
    min-height: 350px;
    border-radius: 20px;
    display: grid;
    grid-template-columns:1fr 1fr;
    padding:60px;
    margin-bottom:30px;
    div{
        h1{
            font-style: normal;
            font-weight: 700;
            font-size: clamp(2rem, 0.75rem + 4vw, 3rem);
            line-height: 115%;
            margin-top:70px;
            margin-bottom:33px;
            width:100%;
            @media screen and (max-width: 800px) {
                margin-top:30px;

            }
        }
        a{
            text-decoration:none;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 115%;
            color:#000;
            cursor:not-allowed;
            
        }
        img{
            display:block;
            margin-left:4rem;
        }
    }
    @media screen and (max-width: 800px) {
    grid-template-columns:auto;
    min-height:450px;
    
    img{
        display:none;
    }
    
    }
`

export default Hero