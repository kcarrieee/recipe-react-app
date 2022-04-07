import styled from 'styled-components';
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Cuisine = () => {

  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  useEffect(()=>{
    getRecipeCuisine(params.type)
  },[params.type]);

  const getRecipeCuisine = async (name)=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&number=20&cuisine=${name}`)
    const recipes= await data.json();
    setCuisine(recipes.results)

  }
  return (
    <Grid>
      {cuisine.map((item,index)=>{
        return (
          <Card key={`key-${index}`}>
             <Overlay/>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </Card>
        )
      })}

    </Grid>
  )
}
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap:1rem;
  
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
  z-index: 3;
  position:absolute;
  width:100%;
  height:100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)
`

export default Cuisine