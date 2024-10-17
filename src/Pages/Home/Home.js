
import './Home.css';
import MyNavbar from '../../components/Navbar/Navbar.js';
import Newarival from '../../components/newarival/newarival.js';
import Category from '../../components/category/category.js';
import NewItem from '../../components/newItem/newItem.js';
import { useState , useEffect } from "react";
import Newproducts from '../../components/newproducts/newproducts.js';
import Photos from '../../components/photos/photos.js';
import Mycarousal from '../../components/carousal/carousal.js';
import Instagram from '../../components/Instagram/instagram.js';
import Footer from '../../components/Footer/Footer.js';


function Home()
{
  
    return (

          <div className='home-container'>
            <MyNavbar></MyNavbar>
            <Newarival></Newarival>
            <Category></Category>
            <Newproducts></Newproducts>
            <Photos></Photos>
            <Instagram></Instagram>
            <Footer></Footer>
            

          </div>
    )
}
export default Home;