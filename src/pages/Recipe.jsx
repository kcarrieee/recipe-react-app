import styled from 'styled-components';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  let params = useParams();

  useEffect(()=>{
    fetchDetailsRecipe();

  },[params.id])

  const fetchDetailsRecipe = async ()=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API}`)
    const dataDetails = await data.json();
    
    setDetails(dataDetails);
    setLoading(true);
    
    
  }
  return (
    <DetailsWrapper
      animate={{opacity:1}}
       initial={{opacity:0}}
       exit={{opacity:0}}
       transition={{duration: 0.4}}
     >
       {loading ? ( 
         <>
       <ImageWrapper>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </ImageWrapper>

      <div>

        <IngredientWrapper>
        <div>
        <h3>Ingredients</h3>
        <ul>
          {details.extendedIngredients?.map(item=>{
            return(
              <li key={item.id} >{item.original}</li>
            )
          })}
        </ul>
        </div>

        <DetailsInfo>
        <p>Servings: {details.servings}</p>
        <p>Cooking time {details.readyInMinutes} min</p>
        </DetailsInfo>
        </IngredientWrapper>


        <div>
        <h3>Instructions</h3>
        <h4 dangerouslySetInnerHTML={{__html: details.summary}}></h4>
        <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
        </div>
      </div>
      </>) : <Spinner>
          <div></div>
          </Spinner>}
     
    </DetailsWrapper>
  )
}

const Spinner = styled.div`
  width:90vw;
  height:600px;
  display:grid;
  place-content:center;
  div{
  width: 50px;
  height: 50px;
  border: 3px solid #4848484c;
  border-radius: 50%;
  border-top-color: #000000;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}

`

const DetailsWrapper = styled(motion.div)`
  display:grid;
  grid-template-columns:1fr 1fr;
  margin-top:2rem;

  @media screen and (max-width: 850px) {
    grid-template-columns:auto;
    
  }
`
const ImageWrapper = styled.div`
  margin-right: 40px;
 h2{
   margin-bottom: 1.2em;
  }
  img{
    border-radius: 20px;
    width:100%;
    

  }
   @media screen and (max-width: 850px) {
    margin-right: 0px;
    
  }

`
const IngredientWrapper = styled.div`
  display:flex;
  width:100%;
  justify-content:space-between;
  margin-bottom: 50px;
  margin-top:50px;
  
  
`
const DetailsInfo = styled.div`
  p{
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 200%;
    color: #646464;
    
  }

`

export default Recipe