import {
  useState
} from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import {
  useRoutes
} from 'react-router-dom';
import {
  log
} from 'mathjs';
import { Navbar } from 'react-bootstrap';
import MyNavbar from './components/Navbar/Navbar.js';
import Home from './Pages/Home/Home.js';
import Login from './Pages/Login/Login.js';
import Cart from './Pages/cart/cart.js';
import Products from './Pages/products/products.js';
import CategoryItem from './Pages/categoryItem/categoryItem.js';
import Itemdesc from './Pages/itemdesc/itemdesc.js';


function App() {
 
 return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/login' element = {<Login></Login>}></Route>
        <Route path='/cart' element = {<Cart></Cart>}></Route>
        <Route path='/products' element = {<Products></Products>}></Route>
        <Route path='/category/:cat' element = {<CategoryItem></CategoryItem>}></Route>
        <Route path='/detail/:item' element = {<Itemdesc></Itemdesc>}></Route>
      
        
      </Routes>

    </BrowserRouter>
 )
  
  
  
  
}
export default App;
