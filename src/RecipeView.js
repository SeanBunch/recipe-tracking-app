import React from "react";

function RecipeView({ recipe, deleteRecipe }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} />
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
      <button name="delete" onClick={deleteRecipe}>
        Delete
      </button>
      </td>
    </tr>
  );
}

export default RecipeView;
