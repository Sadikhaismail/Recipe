import React from 'react';
import './MainPart.css';
import ImageOne from './image copy.png';
import Imagetwo from './image.png';
import Imagethree from './image copy 2.png';
import Imagefour from './image copy 3.png';
import Imagefive from './image copy 4.png';
import Imagesix from './image copy 9.png';
import Imageseven from './image copy 5.png';
import Imageeight from './image copy 6.png';
import Imagenine from './image copy 7.png';
import Imageten from './image copy 8.png';
import Imageeleven from './image copy 10.png';
import { IoSearch } from 'react-icons/io5';
import { SiCodechef } from "react-icons/si";
import { Link } from 'react-router-dom';

import ImageTwelve from './image copy 18.png';
import ImageThirteen from './image copy 19.png';
import ImageFourteen from './image copy 17.png';
import ImageFifteen from './image copy 20.png';

function MainPart() {
  return (
    <div className='MainPart'>
      
      {/* Blue Line Division */}
      <div className='linkdivclass'>
        <h2 className='blueline'>
          America's <span className='highlight'>#1 Trusted Recipe Resource since 1997</span>
        </h2>
        <div className='dot dot-green'></div>
        <h2 className='lineh2'>113k</h2>
        <p><span className='original'>Original Recipes</span></p>
        <div className='dot dot-orange'></div>
        <h1 className='lineh2'>6.9M+</h1>
        <p><span className='rating'>Ratings & Reviews</span></p>
        <div className='dot dot-yellow'></div>
        <h1 className='lineh2'>60M</h1>
        <p><span className='home'>Home Cooks</span></p>
      </div>

      {/* Food News Division */}
      <div className='foodnews'>
      <div className='chickenimagediv'>
        <img src={ImageOne} className="image1" alt="Delicious Chicken Dish" />
      </div>

      <div className='image2class'>
        <h1 className='foodnewshead'>Food News</h1>

        <div className='image2-container'> 
          <img src={Imagetwo} className="image2" alt="Best Recipes in 30-Minute Meals Cookbook" />
          <div className='text-container'>
            <Link to="/30-minute-meals">The 5 Best Recipes in Our <br /> “30-Minute Meals” <br /> Cookbook</Link>
          </div>
        </div>

        <div className='image2-container'>
          <img src={Imagethree} className="image2" alt="Grocery Store Bakery Item Fans Are Calling Life-Changing" />
          <div className='text-container'>
            <Link to="/grocery-store-bakery">The Grocery Store Bakery <br /> Item Fans Are Calling "Life- <br /> Changing"</Link>
          </div>
        </div>

        <div className='image2-container'>
          <img src={Imagefour} className="image2" alt="Trader Joe's Best Thing They Sell" />
          <div className='text-container'>
            <Link to="/trader-joes">Trader Joe's Just Brought <br /> Back the "Best Thing They <br /> Sell"</Link>
          </div>
        </div>

        <div className='image2-container'>
          <img src={Imagefive} className="image2" alt="Walmart Kitchen Deals Deeply Discounted" />
          <div className='text-container'>
            <Link to="/walmart-deals">10 Walmart Kitchen Deals So <br /> Deeply Discounted, We Did a <br /> Double Take</Link>
          </div>
        </div>
      </div>
    </div>

      {/* Main Dishes Section */}
      <div className='main-dishes'>
        <h4 className='mainparthead'>Kitchen Tips</h4>
        <Link to = './lazyrecipe' className='mainparthead2'>23 Lazy Summer Dinners You'll Never Get Tired Of </Link>
        <h5 className='mainparthead3'>From pasta salad to Crock-pot chicken, these meals are great options for when you want a delicious dinner but don't <br />have the energy to match your apetite.</h5>
      </div>







      <div>
      <h1 className='trendingheading'>Trending Now</h1>
      <div className='trendingimagediv'>

        <div className='trendingimagerow'>
          <Link to='/trends'>
            <img src={ImageFifteen} alt="ImageOne" />
          </Link>
          <div className='subheaddiv'>
            <h5 className='trendingsubhead'>TRENDS</h5>
            <Link to='/trendinpara' className='trendingsentence'>
              The 18 Recipes We Can’t Wait To Make <br /> This August
            </Link>
          </div>
        </div>

        <div className='trendingimagerow'>
          <Link to='/trends'>
            <img src={ImageTwelve} alt="ImageTwo" />
          </Link>
          <div className='subheaddiv'>
            <h5 className='trendingsubhead'>ZUCCHINI</h5>
            <Link to='/trendinpara' className='trendingsentence'>
              The Allrecipes Zucchini Hall of Fame
            </Link>
          </div>
        </div>

        <div className='trendingimagerow'>
          <Link to='/trends'>
            <img src={ImageThirteen} alt="ImageThree" />
          </Link>
          <div className='subheaddiv'>
            <h5 className='trendingsubhead'>CARNIVALS AND FAIRS</h5>
            <Link to='/trendinpara' className='trendingsentence'>
              15 Fair Foods You Can Make at <br /> Home
            </Link>
          </div>
        </div>

        <div className='trendingimagerow'>
          <Link to='/trends'>
            <img src={ImageFourteen} alt="ImageFour" />
          </Link>
          <div className='subheaddiv'>
            <h5 className='trendingsubhead'>HOW TO</h5>
            <Link to='/trendinpara' className='trendingsentence'>
              This Rustic Tart Is the Best Use for <br /> Your Summer Tomatoes
            </Link>
          </div>
        </div>

      </div>
    </div>
 













      {/* Hot Stuff Division */}
      <div className='hot-stuff'>
        <h1 className='mainparthead4'>Hot Stuff</h1>
        <div className='mainpartimage-container'>
        <div>
  <img src={Imagesix} className="mainpartimage6" alt="Chicken Biriyani" />
  <Link to="/chicken-biriyani" className='mainpartrasagula'>Chicken Biriyani</Link>
</div>

<div>
  <img src={Imageseven} className="mainpartimage6" alt="Soft Tofu Stew" />
  <Link to="/soft-tofu-stew" className='mainpartrasagula'>Soft Tofu Stew</Link>
</div>

<div>
  <img src={Imageeight} className="mainpartimage6" alt="Kung Pao Chicken" />
  <Link to="/kung-pao-chicken" className='mainpartrasagula'>Kung Pao Chicken</Link>
</div>

<div>
  <img src={Imagenine} className="mainpartimage6" alt="Chaat" />
  <Link to="/chaat" className='mainpartrasagula'>Chaat</Link>
</div>

<div>
  <img src={Imageten} className="mainpartimage6" alt="Rasagula" />
  <Link to="/rasagula" className='mainpartrasagula'>Rasagula</Link>
</div>

<div>
  <img src={Imageeleven} className="mainpartimage6" alt="Moon Cookies" />
  <Link to="/moon-cookies" className='mainpartrasagula'>Moon Cookies</Link>
</div>
        </div>
      </div>

      {/* Chef Icon Section */}
      <div className='mainpartchoose'>
        <SiCodechef className='cheficoninput' />
        <h2 className='chef'>What would you like to cook?</h2>

        <div className="cheficonsearchpart">
          <input 
            type="text" 
            className="cheficonsearchinput" 
            placeholder="Search here..." 
          />
          <button className="cheficonsearchbutton">
            <IoSearch />
          </button>
        </div>

        <div className='popularsearchescontainer'>
          <h3 className='popularsearches'>Popular Searches</h3>
          <div className='buttonscheficon'>
        

<Link to="/chicken" className='Lasangabutton1'>Chicken</Link>
<Link to="/smoothies" className='Lasangabutton2'>Smoothies</Link>
<Link to="/banana-bread" className='Lasangabutton3'>Banana Bread</Link>
<Link to="/lasagna" className='Lasangabutton4'>Lasagna</Link>
<Link to="/pancakes" className='Lasangabutton5'>Pancakes</Link>
<Link to="/meatloaf" className='Lasangabutton6'>Meatloaf</Link>
<Link to="/cookies" className='Lasangabutton7'>Cookies</Link>
<Link to="/tacos" className='Lasangabutton8'>Tacos</Link>

          </div>
        </div>
      </div>

    </div>
  );
}

export default MainPart;
