import './Recipe.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTheme } from '../../store/selectors/themes';

import { projectFirestore } from '../../firebase/config';

function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const { modeDark } = useSelector(getTheme);
  const { id } = useParams();

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection('recipes')
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false)
          setRecipe(doc.data())
        } else {
          setIsPending(false)
          setError('Could not find that recipe')
        }
      });
    
    return () => unsub()
    
  }, [id]);

  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: "Something completely different"
    })
  }

  return (
    <div className={modeDark ? `recipe dark` : `recipe light`}>
      {isPending && <p className="loading">Loading...</p>}
      {error && (
        <h1 className="error">There was an error grabbing the recipe</h1>
      )}
      {recipe && (
        <>
          <h3 className="page-title">{recipe.title}</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleClick}>Update Me!</button>
        </>
      )}
    </div>
  );
}

export default Recipe;
