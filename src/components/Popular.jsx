import { useEffect, useState} from "react";
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(()=>{
    getPopular()
  },[]);

  const getPopular = async ()=>{
    const check = localStorage.getItem('Trending');
    if(check){
      setPopular(JSON.parse(check))
    }else{

      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=9`)
      const data = await api.json();
      localStorage.setItem('Trending', JSON.stringify(data.recipes))
      setPopular(data.recipes)

    }
   
  }

  return (
    <div>
      
            <Wrapper> 
              <h3>Trending recipes</h3>
              <Splide options={{ 
                perPage:4,breakpoints:{
                  600:{
                    perPage:1,
                  },
                  800:{
                    perPage:2,
                  },
                  1100:{
                    perPage:3,
                  },
                },
                arrows:false,
                pagination:false,
                drag:'free',
                gap:'1rem',
                }}>
              {popular.map((recipe)=>{

                return(
                   <SplideSlide key={recipe.id}>
                  <Card >
                    <Link to={'/recipe/' + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}/>
                    <Overlay/>
                    </Link>
                  </Card>
                  </SplideSlide>
                )})}
              </Splide>
            </Wrapper>

       
     
    </div>
  )
}


const Wrapper= styled.div`
  margin: 4rem 0rem;
`
const Card = styled.div`
  min-height:20rem;
  border-radius:1.25rem;
  overflow:hidden;
  position:relative;

  p{
    position:absolute;
    z-index:5;
    bottom:10%;
    left:50%;
    transform:translateX(-50%);
    font-size:1rem;
    font-weight:300;
    text-align:center;
    color:#fff;
    
  }
  img{
    border-radius:2rem;
    position:absolute;
    object-fit:cover;
    left:0;
    width:100%;
    height:100%;
  }
`
const Overlay = styled.div`
  border-radius:1.7rem;
  z-index: 3;
  position:absolute;
  width:100%;
  height:100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)
`
export default Popular