import React, { useState } from "react";
import "./RecipeCreate.css"

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialFormState = {
      name: "Name",
      cuisine: "Cuisine",
      photo: "URL",
      ingredients: "Ingredients",
      preparation: "Preparation",
  };
  
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
      setFormData({
        ...formData,
        [target.name]: target.value,
      });
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      createRecipe(formData);
      setFormData({ ...initialFormState });
  };
  
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <col className="single" />
        <col className="single" />
        <col className="single" />
        <col className="double" />
        <col className="double" />
        <col className="single" />
        <tbody>
          
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                size="5"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                size="5"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input 
                id="photo" 
                name="photo" 
                type="text"
                size="5"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                rows={3}
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                rows={3}
                onChange={handleChange}
                value={formData.preparation}
              />
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