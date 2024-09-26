import React, { useState, useEffect } from 'react';
import { IoMdContact } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { RiArrowDropDownFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import ImageOne from './recipe.svg';
import HoverHeader from './HoverHeader';

const Header = () => {
  const [showHoverHeader, setShowHoverHeader] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // Fetch all recipes or based on search query
  const fetchRecipes = async (query = '') => {
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setResults(data.data.recipes);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    // Fetch all recipes initially
    fetchRecipes();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      // Fetch recipes based on search input
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
    // Navigate to the RecipeDetails page with the recipe ID
    navigate(`/recipe/${suggestion.id}`);
    // Clear the input box and suggestions
    setSearchQuery('');
    setSuggestions([]);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowHoverHeader(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showHoverHeader && <HoverHeader />}
      {!showHoverHeader && (
        <header className="headerpart">
          <div className="first-section">
            <div className="logo-search-login">
              <div className="imagepart">
                <img src={ImageOne} alt="Logo" className="image1s" />
              </div>
              <div className="searchpart">
                <input
                  type="text"
                  className="searchinput"
                  placeholder="Find a recipe or Ingredient"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="searchbutton">
                  <IoSearch />
                </button>
                {suggestions.length > 0 && (
                  <ul className="suggestions-list">
                    {suggestions.map((item) => (
                      <li
                        key={item.id}
                        onClick={() => handleSuggestionClick(item)}
                        className="suggestion-item"
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="linksdivcon">
                <Link to="/login" className="login">
                  <IoMdContact size={25} color='rgb(196, 8, 8)' /> Log In
                </Link>

                <div className="dropdownmagazine">
                  <Link to="/magazine" className="link">
                    Magazine <RiArrowDropDownFill size={30} />
                  </Link>
                  <div className="dropdowncontentmagazine">
                    <Link to="/magazine-issue1" className='magazineoption'>Subscribe</Link>
                    <Link to="/magazine-issue2">Manage Your Subscription</Link>
                    <Link to="/magazine-issue3">Give a Gift Subscription</Link>
                    <Link to="/magazine-issue4">Get Help</Link>
                  </div>
                </div>

                <Link to="/newsletters" className="link">Newsletters</Link>
                <Link to="/sweepstakes" className="link">Sweepstakes</Link>
              </div>
            </div>

            <div className="navbardiv">
              <nav className="navbar">
                <div className="dropdowndinners">
                  <Link to="/dinners" className="navlink">DINNERS</Link>
                  <div className="dropdowncontentdinners">
                    <Link to="/dinners/5-ingredient-dinner">5-Ingredient Dinner</Link>
                    <Link to="/dinners/one-pot-meals">One-Pot Meals</Link>
                    <Link to="/dinners/quick-easy">Quick & Easy</Link>
                    <Link to="/dinners/30-minute-meals">30-Minute Meals</Link>
                    <Link to="/dinners/soups-stews-chili">Soups, Stews & Chili</Link>
                    <Link to="/dinners/comfort-food">Comfort Food</Link>
                    <Link to="/dinners/main-dishes">Main Dishes</Link>
                    <Link to="/dinners/sheet-pan-dinners">Sheet Pan Dinners</Link>
                    <Link to="/dinners/view-all"><p className="view-all-link">View All</p></Link>
                  </div>
                </div>




                <div className="dropdownmeals">
                  <Link to="/meals" className="navlink">MEALS</Link>
                  <div className="dropdowncontentmeals">

                    <Link to="/meals/breakfast-brunch">Breakfast & Brunch</Link>
                    <Link to="/meals/lunch">Lunch</Link>
                    <Link to="/meals/healthy">Healthy</Link>
                    <Link to="/meals/appetizers-snacks">Appetizers & Snacks</Link>
                    <Link to="/meals/salads">Salads</Link>
                    <Link to="/meals/side-dishes">Side Dishes</Link>
                    <Link to="/meals/soups">Soups</Link>
                    <Link to="/meals/bread">Bread</Link>
                    <Link to="/meals/drinks">Drinks</Link>
                    <Link to="/meals/desserts">Desserts</Link>
                    <Link to="/meals/view-all"><p className="view-all-link">View All</p></Link>
                  </div>
                </div>

                <div className="dropdowningredients">
                  <Link to="/ingredients" className="navlink">INGREDIENTS</Link>
                  <div className="dropdowncontentingredients">
                    <Link to="/ingredients/chicken">Chicken</Link>
                    <Link to="/ingredients/beef">Beef</Link>
                    <Link to="/ingredients/pork">Pork</Link>
                    <Link to="/ingredients/seafood">Seafood</Link>
                    <Link to="/ingredients/pasta">Pasta</Link>
                    <Link to="/ingredients/fruits">Fruits</Link>
                    <Link to="/ingredients/vegetables">Vegetables</Link>
                    <Link to="/ingredients/view-all"><p className="view-all-link">View All</p></Link>
                  </div>
                </div>


                <div className="dropdownoccasions">
                  <Link to="/occasions" className="navlink">OCCASIONS</Link>
                  <div className="dropdowncontentoccasions">
                    <Link to="/occasions/summer-entertaining">Summer Entertaining</Link>
                    <Link to="/occasions/more-summer-recipes">More Summer Recipes</Link>
                    <Link to="/occasions/back-to-school-recipes">Back to School Recipes</Link>
                    <Link to="/occasions/view-all"><p className="view-all-link">View All</p></Link>
                  </div>
                </div>


                <div className="dropdowncuisines">
                  <Link to="/cuisines" className="navlink">CUISINES</Link>
                  <div className="dropdowncontentcuisines">
                    <Link to="/cuisines/mexican">Mexican</Link>
                    <Link to="/cuisines/italian">Italian</Link>
                    <Link to="/cuisines/chinese">Chinese</Link>
                    <Link to="/cuisines/indian">Indian</Link>
                    <Link to="/cuisines/german">German</Link>
                    <Link to="/cuisines/greek">Greek</Link>
                    <Link to="/cuisines/filipino">Filipino</Link>
                    <Link to="/cuisines/japanese">Japanese</Link>
                    <Link to="/cuisines/view-all"><p className="view-all-link">View All</p></Link>
                  </div>
                </div>

                <div className="dropdownkitchentips">
                  <Link to="/kitchen-tips" className="navlink">KITCHEN TIPS</Link>
                  <div className="dropdowncontentkitchentips">
                    <Link to="/kitchen-tips/instant-pot">Instant Pot</Link>
                    <Link to="/kitchen-tips/air-fryer">Air Fryer</Link>
                    <Link to="/kitchen-tips/slow-cooker">Slow Cooker</Link>
                    <Link to="/kitchen-tips/favorite-products">Our Favorite Products</Link>
                    <Link to="/kitchen-tips/bbq-grilling">BBQ & Grilling</Link>
                    <Link to="/kitchen-tips/cooking-by-equipment">Cooking by Equipment</Link>
                    <Link to="/kitchen-tips/ingredient-substitutions">Ingredient Substitutions</Link>
                    <Link to="/kitchen-tips/view-all"><p className="view-all-link">View All</p></Link>
                  </div>
                </div>

                <div className="dropdownnews">
                  <Link to="/news" className="navlink">NEWS</Link>
                  <div className="dropdowncontentnews">
                    <Link to="/news/celebrity-entertainment">Celebrity & Entertainment</Link>
                    <Link to="/news/fast-food">Fast Food</Link>
                    <Link to="/news/grocery">Grocery</Link>
                    <Link to="/news/recalls">Recalls</Link>
                    <Link to="/news/trends">Trends</Link>
                    <Link to="/news/view-all"><p className="view-all-link">View All</p></Link>
                  </div>
                </div>

                <div className="dropdownfeatures">
                  <Link to="/features" className="navlink">FEATURES</Link>
                  <div className="dropdowncontentfeatures">
                    <Link to="/features/dinner-fix">Dinner Fix</Link>
                    <Link to="/features/sweet-spot">Sweet Spot</Link>
                    <Link to="/features/in-the-kitchen">In the Kitchen</Link>
                  </div>
                </div>

                <div className="dropdownaboutus">
                  <Link to="/about-us" className="navlink">ABOUT US</Link>
                  <div className="dropdowncontentaboutus">
                    <Link to="/about-us/allrecipes-allstars">The Allrecipes Allstars</Link>
                    <Link to="/about-us/add-a-recipe">How to Add a Recipe</Link>
                  </div>
                </div>



                </nav>
              <Link to="/get-the-magazine" className="magazine">GET THE MAGAZINE</Link>
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;