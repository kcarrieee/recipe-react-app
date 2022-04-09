import Home from "./Home"
import Cuisine from "./Cuisine";
import Search from "./Search";
import Recipe from "./Recipe";
import {Route, Routes, useLocation} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";



const Pages = () => {
  const location= useLocation()
  return (
    
        <AnimatePresence exitBeforeEnter>
          
          <Routes location={location} key={location.path}>
              <Route path="/" element={<Home/>}/>
              <Route path="/cuisine/:type" element={<Cuisine/>}/>
              <Route path="/searched/:search" element={<Search/>}/>
              <Route path="/recipe/:name" element={<Recipe/>}/>
          </Routes>
          
        </AnimatePresence>
        
 
  )
}

export default Pages