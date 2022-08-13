import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
    const [name, setName] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [photo, setPhoto] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [preparation, setPreparation] = useState("")

    const handleNameChange = (event) => setName(event.target.value)
    const handleCuisineChange = (event) => setCuisine(event.target.value)
    const handlePhotoChange = (event) => setPhoto(event.target.value)
    const handleIngredientsChange = (event) => setIngredients(event.target.value)
    const handlePreparationChange = (event) => setPreparation(event.target.value)

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("submitted", name, cuisine, photo, ingredients, preparation);
        createRecipe({name, cuisine, photo, ingredients, preparation});

        setName("");
        setCuisine("");
        setPhoto("");
        setIngredients("");
        setPreparation("");
    }
  
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

    return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
                <input id="name" name="name" placeholder="Name" onChange={handleNameChange} value={name} />
            </td>
            <td>
                <input id="cuisine" name="cuisine" placeholder="Cuisine" onChange={handleCuisineChange} value={cuisine} />
            </td>
            <td>
                <input id="photo" name="photo" placeholder="URL" onChange={handlePhotoChange} type="url" value={photo} />
            </td>
            <td>
                <textarea id="ingredients" name="ingredients" placeholder="ingredients" onChange={handleIngredientsChange} value={ingredients} />
            </td>
            <td>
                <textarea id="preparations" name="preparation" placeholder="Preparations" onChange={handlePreparationChange} value={preparation} />
            </td>
            
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
