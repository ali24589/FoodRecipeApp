import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load the components
const Home = React.lazy(() => import("./pages/Home"));
const RecipeDetails = React.lazy(() => import("./pages/RecipeDetails"));

function App() {
  return (
    <div>
      <Router>
        {/* Wrapping the entire Routes with Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/RecipeDetails/:id" element={<RecipeDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
