import "./App.css";
import DetailsCategory from "./pages/detailsCategory/detailsCategory";
import HomePage from "./pages/homePage/HomePage";
import IngredientsPage from "./pages/ingredientsPage/ingredientsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/details" element={<DetailsCategory />}></Route>
          <Route path="/ingredients" element={<IngredientsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
