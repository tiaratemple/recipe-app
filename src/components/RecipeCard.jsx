import React from 'react'
import './RecipeCard.css'

const RecipeCard = () => {
  return (
    <div className='recipe-card-section'>
      <div className="recipe-card-container">
        <img className='recipe-card-img' src="https://omgchocolatedesserts.com/wp-content/uploads/2017/07/Triple-Chocolate-Mouse-Cake-Minis-featured-new.jpg">   
        </img>
        <h1 className='recipe-card-title'>Triple Chocolate Mousse Cake</h1>
        <button className="blue-btn">See More</button>
      </div>

      <div className="recipe-card-container">
        <img className='recipe-card-img' src="https://simplyhomecooked.com/wp-content/uploads/2020/02/ribeye-steak-in-the-oven-4-683x1024.jpg">   
        </img>
        <h1 className='recipe-card-title'>Rosemary Seared Steak</h1>
        <button className="blue-btn">See More</button>
      </div>

      <div className="recipe-card-container">
        <img className='recipe-card-img' src="https://www.willcookforsmiles.com/wp-content/uploads/2022/04/Dirty-Martini-683x1024.jpg">   
        </img>
        <h1 className='recipe-card-title'>Dirty Martini</h1>
        <button className="blue-btn">See More</button>
      </div>
    </div>
  )
}
export default RecipeCard;