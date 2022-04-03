
import { useEffect, useState} from "react";
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Vegan = () => {
  const [vegetarian, setVegetarian] = useState([]);

  useEffect(()=>{
    getVegetarian()
  },[]);

  const getVegetarian = async ()=>{
    const check = localStorage.getItem('Vegetarian');
    if(check){
      setVegetarian(JSON.parse(check))
    }else{

      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=9&tags=vegetarian`)
      const data = await api.json();
      localStorage.setItem('Vegetarian', JSON.stringify(data.recipes))
      setVegetarian(data.recipes)

    }
   
  }

  return (
    <div>
      
            <Wrapper> 
              <h3>Vegeterian recipes</h3>
              <Splide options={{ 
                perPage:4,
                arrows:false,
                pagination:false,
                drag:'free',
                gap:'2rem',
                }}>
              {vegetarian.map((recipe)=>{

                return(
                   <SplideSlide key={recipe.id}>
                  <Card >
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}/>
                    <Overlay/>
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
  border-radius:2rem;
  overflow:hidden;
  position:relative;

  p{
    position:absolute;
    z-index:5;
    bottom:20px;
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
  z-index: 3;
  position:absolute;
  width:100%;
  height:100%;
  background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
`
export default Vegan