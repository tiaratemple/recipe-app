import React from "react";
import "../newRecipeComponents/NewRecipeScreen.css";

const NewRecipeScreen = () => {
  return (
    <section className="form-container">
      <h1 className="form-h1-styles">Tell us about your Recipe!</h1>
      <form>
        <div className="form-row-top">
          <input
            type="text"
            value=""
            name="recipeName"
            placeholder="Name"
          ></input>
          <input
            type="text"
            value=""
            name="imageURL"
            placeholder="Image URL"
          ></input>
        </div>
        <div className="form-radio-row">
          <label>
            <input type="radio" value="" name="cook"></input>
            Cook
          </label>
          <label>
            <input type="radio" value="" name="bake"></input>
            Bake
          </label>
          <label>
            <input type="radio" value="" name="drink"></input>
            Drink
          </label>
        </div>
        <div className="form-row-3">
          <input
            type="text"
            value=""
            name="prepTime"
            placeholder="Prep Time"
          ></input>
          <input
            type="text"
            value=""
            name="cookTime"
            placeholder="Cook Time"
          ></input>
          <input
            type="number"
            value=""
            name="serves"
            placeholder="Serves"
          ></input>
        </div>
        <div className="form-row-4">
          <div className="form-column">
            <input
              type="text"
              value=""
              name="ingredient"
              placeholder="Ingredient"
            ></input>
            <input
              type="number"
              value=""
              name="quantity"
              placeholder="Quantity"
            ></input>
          </div>
          <div className="form-column">
            <ul>
              <li>4 eggs</li>
              <li>1 box of cake</li>
            </ul>
          </div>
        </div>
        <div className="btn-container">
          <button className="add-btn">Add Another</button>
        </div>
        <div className="text-area-container">
          <textarea name="instructions">What are the instructions?</textarea>
        </div>
        <div className="btn-container">
          <button className="save-btn">Save</button>
        </div>
      </form>
    </section>
  );
};

export default NewRecipeScreen;
