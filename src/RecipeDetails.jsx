import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(true); // State to control suggestions
  const suggestionRef = useRef(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setRecipe(data.data.recipe);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  // Handle click outside of suggestions box
  useEffect(() => {
    const handleClick = (event) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
        setShowSuggestions(false); // Hide suggestions when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-container">
      <h2 className="recipe-title">{recipe.title}</h2>
      <div className="recipe-details">
        <img src={recipe.image_url} alt={recipe.title} className="recipe-image" />
        <p><strong className='ingrediantsapihead'>Ingredients:</strong></p>
        <ul className='ingrediantsapi'>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.quantity ? `${ingredient.quantity} ` : ''}
              {ingredient.unit ? `${ingredient.unit} ` : ''}
              {ingredient.description}
            </li>
          ))}
        </ul>
        <a href={recipe.source_url} target="_blank" rel="noopener noreferrer" className="recipe-link">
          View Full Recipe
        </a>
      </div>

      
      {showSuggestions && (
        <div ref={suggestionRef} className="suggestions">
        
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
