import "./Create.css";
import {useState} from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      
      <form className="create-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} required />

        

        <label htmlFor="method">Method</label>
        <textarea id="method" value={method} onChange={(e)=>setMethod(e.target.value)} required />
        <label htmlFor="cookingTime">Cooking Time</label>
        <input type="number" id="cookingTime" value={cookingTime} onChange={(e)=>setCookingTime(e.target.value)} required />
        <button type="submit" className="btn">Add Recipe</button>
      </form>

    </div>
  );
}

export default Create;
