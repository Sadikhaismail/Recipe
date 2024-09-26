import React, { useState, useEffect } from 'react';
import './RecipeList.css';

function RecipeList() {
    const [results, setResults] = useState([]); // Stores the fetched recipes
    const [allResults, setAllResults] = useState([]); // Stores the original full list of recipes
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState(''); // Stores the current search query
    const [suggestions, setSuggestions] = useState([]); // Stores filtered suggestions

    // Fetch all menu items initially
    async function getAllMenu() {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=chicken`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setResults(data.recipes); // Store all recipes in the results state
            setAllResults(data.recipes); // Store all recipes in the allResults state
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllMenu(); // Fetch all items when the component mounts
    }, []);

    useEffect(() => {
        if (searchQuery) {
            const filteredSuggestions = allResults.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    }, [searchQuery, allResults]);

    // Handle the search button click or suggestion click
    const handleSearch = () => {
        if (searchQuery) {
            const filteredResults = allResults.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setResults(filteredResults); // Filter the results based on the search query
        } else {
            setResults(allResults); // Reset to all results if no search query
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion.title); // Set the search query to the clicked suggestion
        setResults([suggestion]); // Show only the selected suggestion in results
        setSuggestions([]); // Clear suggestions after selection
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        if (value) {
            const filteredSuggestions = allResults.filter(item =>
                item.title.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions); // Update suggestions as user types
        } else {
            setSuggestions([]); // Clear suggestions if input is empty
            setResults(allResults); // Reset results to all results if input is cleared
        }
    };

    return (
        <div className='apimaindiv'>
            <div className='searchinputheadapi'>
                <h3 className='searchquoteapi'>Search Results</h3>

                <div className="searchpartofapidiv">
                    <input
                        type="text"
                        className="searchinputapidiv"
                        placeholder="Find a recipe or ingredient"
                        value={searchQuery}
                        onChange={handleInputChange} // Update on typing
                    />
                    <button className="searchbuttoniconapi" onClick={handleSearch}>
                        Go
                    </button>
                    {suggestions.length > 0 && (
                        <ul className="suggestions-list">
                            {suggestions.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSuggestionClick(item)}
                                    className="suggestion-item"
                                >
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className='error'>{error}</p>}
            {results.length > 0 ? (
                <div className="recipe-gridapiimgs">
                    {results.map((item, index) => (
                        <div key={index} className='apiseconddivcontainsurls'>
                            <div className='apiimageandheaddivs'>
                                <img src={item.image_url} alt={item.title} className='apiimgs' />
                                <h2>
                                    <a href={item.source_url} target="_blank" rel="noopener noreferrer" className='imgurlapis'>
                                        {item.title}
                                    </a>
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                !loading && !error && <p>No recipes found.</p>
            )}
        </div>
    );
}

export default RecipeList;
