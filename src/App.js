import Categories from "./components/Categories";
import Pages from "./pages/Pages";
import {BrowserRouter} from 'react-router-dom'
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SearchInput/>
      <Categories/>
      <Pages/>
     </BrowserRouter>
    </div>
  );
}

export default App;
