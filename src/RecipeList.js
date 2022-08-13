import React from "react";
import RecipeView from "./RecipeView";

function RecipeList({ recipes, deleteRecipe }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  return (
      <table className="recipe-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {recipes.map((recipe, index) => (
              <RecipeView
                key={index}
                recipe={recipe}
                className="recipe"
                deleteRecipe={() => deleteRecipe(index)}
              />
            ))}
        </tbody>
      </table>
  );
}

export default RecipeList;
