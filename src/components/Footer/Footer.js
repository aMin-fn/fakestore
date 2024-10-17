import { FaInstagram } from 'react-icons/fa';
import Instagram from '../Instagram/instagram';
import { TiTick } from "react-icons/ti";
import footerimg from "../../assets/images/nav2.jpg"
import './footer.css';
import { Link } from 'react-router-dom';
function Footer()
{
    return (
        
           <footer>
                <div className="footer-container">
                 
                    <div className="footer-col " id='first-col'  >
                        <img style={{width : '70px' , height : '70px'}} src={footerimg} alt="" />
                        <p style={{width : '70%' , margin : '10px 0'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab voluptatem perferendis impedit id quidem! Sunt sed necessitatibus quos expedita laboriosam!</p>
                    </div>
                    <div className="footer-col " >
                    <h5 style={{fontWeight : 'bold'}}>Products</h5>
                        <ul>
                            <li>
                                <TiTick />
                                <Link to="/category/women's clothing">Women's Clothing</Link>
                               
                            </li>
                            <li>
                                <TiTick />
                                <Link to="/category/men's clothing">men's Clothing</Link>
                               
                            </li>
                            <li>
                                <TiTick />
                                <Link to="/category/jewelery">Jewlery</Link>
                               
                            </li>
                            <li>
                                <TiTick />
                                <Link to="/category/electronics">Electronic</Link>
                               
                            </li>
                           
                        </ul>
                    </div>
                    <div className="footer-col" >
                        <h5 style={{fontWeight : 'bold'}}>Contact us</h5>
                        <ul>
                            <li>
                                <FaInstagram></FaInstagram> 
                                <a href="">fake_shop</a>
                               
                            </li>
                            <li>
                                <FaInstagram></FaInstagram> 
                                <a href="">fake_shop</a>
                               
                            </li>
                            <li>
                                <FaInstagram></FaInstagram> 
                                <a href="">fake_shop</a>
                               
                            </li>
                            <li>
                                <FaInstagram></FaInstagram> 
                                <a href="">fake_shop</a>
                               
                            </li>
                           
                        </ul>
                    </div>
                </div>
           </footer>
        
    )
}
export default Footer;
