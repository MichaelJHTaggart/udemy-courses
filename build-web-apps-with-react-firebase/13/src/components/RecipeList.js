// styles
import './RecipeList.css';
import { useSelector } from 'react-redux';
import { getTheme } from '../store/selectors/themes';
import Trashcan from '../assets/trashcan.svg';
import { Link } from 'react-router-dom';
import { projectFirestore } from '../firebase/config';

function RecipeList({ recipes }) {
  const { modeDark } = useSelector(getTheme);
  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={modeDark ? `card dark` : `card light`}>
          {recipe.title}
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime}</p>
          <div>{recipe.method.substring(0, 100)}</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            className="delete"
            src={Trashcan}
            alt="trashcan"
            onClick={() => {
              handleClick(recipe.id);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
