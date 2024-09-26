import React, { useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import './HoverHeader.css';
import ImageOne from './recipe.svg';
import { Link, useNavigate } from 'react-router-dom';

const HoverHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const fetchRecipes = async (query = '') => {
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`);
      if (!response.ok) {
        throw new Error(`Error : ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setResults(data.data.recipes);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      fetchRecipes(searchQuery);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (results.length > 0 && searchQuery) {
      const filteredSuggestions = results.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  }, [results, searchQuery]);

  const handleSuggestionClick = (suggestion) => {
    navigate(`/recipe/${suggestion.id}`);
    setSearchQuery('');
    setSuggestions([]);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleOverlayClick = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      <header className="hoverheader">
        <div className="firstdiv">
          <IoMenu className='menu' onClick={toggleSidebar} />
          <div className="imagediv">
            <img src={ImageOne} alt="Logo" />
          </div>
          <div className='inputdiv'>
            <input
              type="text"
              placeholder="Find a recipe or ingredient"
              className='inputbox'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="searchiconbutton">
              <IoSearch />
            </button>
            {suggestions.length > 0 && (
              <ul className='suggestions-list'>
                {suggestions.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleSuggestionClick(item)}
                    className='suggestion-item'
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="linksdiv">
            <Link to="/login" className="login">
              <IoMdContact /> Log In
            </Link>
          </div>
        </div>
      </header>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="closebtn" onClick={toggleSidebar}>×</button>
      </div>

      {sidebarOpen && <div className="overlay" onClick={handleOverlayClick}></div>}
    </>
  );
}

export default HoverHeader;
