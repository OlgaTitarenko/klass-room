import React from 'react';

function DishItem({value}) {
  return (
    <div key={Math.random()*10} className="Dish">
      <img src="/img/meat.jpg" alt="meat"/>
      <h2>{value.nameDish}</h2>
      <ul>
        {value.listIndgredients.map(ingredient =>
          <li key={Math.random()*10}>
            {ingredient.name}
            <span>{ingredient.grams}</span>
          </li>
        )}
      </ul>
      <p>{value.totalWeigth}</p>
    </div>
  )
}
export default DishItem;
