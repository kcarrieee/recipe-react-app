import Categories from "./components/Categories";
import Pages from "./pages/Pages";
import {BrowserRouter} from 'react-router-dom'
import SearchInput from "./components/SearchInput";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Hero/>
      <SearchInput/>
      <Categories/>
      <Pages/>
      <Footer/>
     </BrowserRouter>
    </div>
     
     
    
  );
}

export default App;
