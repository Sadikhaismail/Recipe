import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Login from './Pages/Login';
import Email from './Input/Email.'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Zucchini from './Recipe/Zucchini';
import MainPart from './MainPart/MainPart';
import Registration from './Pages/Registartion'
import NewEmail from './Input/NewEmail';
import RecipeList from './Pages/RecipeList';
import PanCake from './Recipe/PanCake';
import RecipeDetails from './RecipeDetails';
import Smoothies from './Recipe/Smoothies';
import Cookies from './Recipe/Cookies';
import Banana from './Recipe/Banana';
import Tacos from './Recipe/Tacos';
import Lasagna from './Recipe/Lasagna';


function App() {
  const location = useLocation();
  
 
  const noHeaderFooterPaths = ['/email', '/login', '/email-signup','/joinnow','/recipe',]
  
  const showHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);

  return (
    <div className=''>
      {showHeaderFooter && <Header />}
      <Routes>
        <Route path='/' element={<MainPart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/email' element={<Email />} />
        <Route path='/joinnow' element={<Registration />} />
        <Route path='/email-signup' element={<NewEmail />} />
        <Route path='/chicken' element={<RecipeList />} />
        <Route path='/smoothies' element={<Smoothies />} />
        <Route path='/recipe/:id'element={<RecipeDetails />}/>
        <Route path='/trendinpara'element={<Zucchini />}/>
        <Route path='/cookies'element={<Cookies />}/>
        <Route path='/banana-bread'element={<Banana />}/>
        <Route path='/pancakes'element={<PanCake />}/>
        <Route path='/lasagna'element={<Lasagna />}/>

        <Route path='/tacos'element={<Tacos/>}/>







      
        
     
      </Routes>
      {showHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
