import Home from "./Home"
import Cuisine from "./Cuisine";
import Search from "./Search";
import Recipe from "./Recipe";
import {Route, Routes} from 'react-router-dom';


const Pages = () => {
  return (
   
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cuisine/:type" element={<Cuisine/>}/>
            <Route path="/searched/:search" element={<Search/>}/>
            <Route path="/recipe/:name" element={<Recipe/>}/>
        </Routes>
 
  )
}

export default Pages