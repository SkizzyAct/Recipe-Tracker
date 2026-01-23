import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData(initialFormState);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="cuisine">Cuisine</label>
        <input
          id="cuisine"
          name="cuisine"
          type="text"
          value={formData.cuisine}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="photo">Photo</label>
        <input
          id="photo"
          name="photo"
          type="url"
          value={formData.photo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="preparation">Preparation</label>
        <textarea
          id="preparation"
          name="preparation"
          value={formData.preparation}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default RecipeCreate;
