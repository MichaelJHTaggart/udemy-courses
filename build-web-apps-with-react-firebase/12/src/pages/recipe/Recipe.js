import './Recipe.css';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTheme } from '../../store/selectors/themes';

function Recipe() {
  const { modeDark } = useSelector(getTheme);
  const { id } = useParams();
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch('http://localhost:3000/recipes/' + id);

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
        </>
      )}
    </div>
  );
}

export default Recipe;
