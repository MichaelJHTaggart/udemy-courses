// styles
import './RecipeList.css';
import { useSelector } from 'react-redux';
import { getTheme } from '../store/selectors/themes';

import { Link } from 'react-router-dom';

function RecipeList({ recipes }) {
  const { modeDark } = useSelector(getTheme);
  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={modeDark ? `card dark` : `card light`}>
          {recipe.title}
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime}</p>
          <div>{recipe.method.substring(0, 100)}</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
