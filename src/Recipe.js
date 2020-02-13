import React from "react";


function Recipe({title,image,ingredients}) {
    
    return ( 
        <div className="recipe col-lg-6">
            <h2 >{title} </h2>
            <ol>{ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>))}</ol>
          <img className="image" src={image} alt=""/>
          </div>
      );
}

export default Recipe;
