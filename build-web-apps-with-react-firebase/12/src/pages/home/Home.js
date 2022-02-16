import "./Home.css";
import {useFetch} from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

function Home() {
 const {data, isPending, error} = useFetch("http://localhost:3000/recipes");

 return (
  <div className="home">
   {error && <div>Something went wrong...</div>}
   {isPending && <p>Loading...</p>}
   {data && <RecipeList recipes={data} />
   }
  </div>
 );
}

export default Home;

