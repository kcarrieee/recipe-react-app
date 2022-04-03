import { useEffect, useState} from "react";
const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(()=>{
    getPopular()
  },[]);

  const getPopular = async ()=>{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=9`)
    const data = await api.json();
    setPopular(data.recipes)
  }

  return (
    <div>
      {popular.map((recipe)=>{
        return(
            <div key={recipe.id}>
              {recipe.title}
            </div>

        )
      })}
    </div>
  )
}

export default Popular