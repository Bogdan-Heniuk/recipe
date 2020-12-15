import './App.css';
import './styles/loader.css'
import './styles/recipe.css'
import React, {useEffect, useState} from "react";
import Recipe from "./component/Recipe";
import Search from "./component/Search";
import Loader from "./component/Loader";

function App() {
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('chicken')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('');

    useEffect(() => {
        getRecipe()
    }, [query])

    async function getRecipe() {
        try {
            const data = await fetch(`${process.env.REACT_APP_URL}/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}` +
                `&app_key=${process.env.REACT_APP_API_KEY}`).then(response => response.json())
            setRecipes(data.hits)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    function updateSearch(event) {
        setSearch(event.target.value)
    }

    function applySearch(event) {
        if (search) {
            setQuery(search);
            setSearch('')
        }
    }

    function renderRecipes() {
        if (loading) {
            return <Loader/>
        }

        if(error){
            return <p>{error}</p>
        }

        if(recipes.length){
            return recipes.map((recipe, index) =>
                <Recipe recipe={recipe} key={recipe.recipe.url}/>)
        }
        return  <p>No recipes</p>
    }

    return (
        <div className={'container'}>
            <div>
                <Search search={search} applySearch={applySearch} onChange={updateSearch}/>
            </div>
            <div className={'content'}>
                <div className="recipes">
                    {renderRecipes()}
                </div>
            </div>
        </div>
    )
}

export default App;
