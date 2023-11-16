import "./App.css";
import DetailsPage from "./pages/detailsCategory/DetailsPage";
import HomePage from "./pages/homePage/HomePage";
import IngredientsPage from "./pages/ingredientsPage/ingredientsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/details/:id" element={<DetailsPage />}></Route>
          <Route path="/ingredients" element={<IngredientsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
