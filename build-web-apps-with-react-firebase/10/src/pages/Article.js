import {useEffect} from 'react';
import{useParams, useNavigate} from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';


function Article() {
  const navigate = useNavigate();
 const { id } = useParams();
 const url = "http://localhost:3000/articles/" + id;
 const { data: article, isPending, error } = useFetch(url);

 useEffect(() => {
   if(error){

    setTimeout(() => {
      navigate('/');
      }, 3000);
      }
      }, [error]);

 return (
  <div>
   <h1>Article</h1>
   {isPending && <div>Loading...</div>}
   {error && <div>{error}</div>}
   {article && (
    <div>
     <h2>{article.title}</h2>
     <p>{article.author}</p>
     <p>{article.body}</p>
    </div>
   )
   }
  </div>
  ); 

  }
   export default Article;
