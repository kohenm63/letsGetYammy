
import React ,{useEffect, useState}from "react";
import Recipe from "./Recipe";




const App = () => {

  const APP_ID = "21f58d29";
  const APP_KEY = "c939fb2ecf3c86dd64451ed0de7a9ce9";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("coffee");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (

    < div className = "recipes-container container-lg" >

      <form onSubmit={getSearch} className=" container-lg search-form ">
        <input className="search-input " type="text" value={search} onChange={updateSearch} />
        <button className="search-btn" type="submit">search</button>

      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>

  );
}

export default App;
