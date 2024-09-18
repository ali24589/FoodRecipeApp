import "./App.css";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import { BrowserRouter as Router ,Routes,Route  } from "react-router-dom";


function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
             <Route path="/RecipeDetails/:id" element={<RecipeDetails/>}/>
          </Routes>
        </Router>
        
      </div>
    </>
  );
}

export default App;
