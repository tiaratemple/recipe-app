import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="newRecipe" element={<NewRecipeScreen />} />
          <Route path="recipe/:id" element={<DetailScreen />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
