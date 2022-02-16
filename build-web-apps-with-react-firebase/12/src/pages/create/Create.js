import './Create.css';
import { useState, useRef, useEffect } from 'react';
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from 'react-router-dom';

function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const navigate = useNavigate();

  const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST');

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({title, ingredients, method, cookingTime: cookingTime + ' minutes'});
  };

  useEffect(() => {
    if (data) {
      navigate('/');
    }
  }, [data]);

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
    setNewIngredient('');
    ingredientInput.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>

      <form className="create-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="ingredients">Recipe ingredients:</label>
        <div>
          <input
            type="text"
            id="ingredients"
            value={newIngredient}
            ref={ingredientInput}
            onChange={(e) => setNewIngredient(e.target.value)}
          />
          <p>Current ingredients:</p>
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
          <button type="button" onClick={handleAdd}>
            Add
          </button>
        </div>

        <label htmlFor="method">Method</label>
        <textarea
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          required
        />
        <label htmlFor="cookingTime">Cooking Time</label>
        <input
          type="number"
          id="cookingTime"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
          required
        />
        <button type="submit" className="btn">
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default Create;
