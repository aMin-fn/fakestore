
import { Nav, Navbar } from 'react-bootstrap';
import './navbar.css'
import navLogo from '../../assets/images/nav2.jpg';
import { Link } from 'react-router-dom';
import Myoffcanvas from '../offcavas/offcanvas';
function MyNavbar()
{
  
  return (
    
     <nav>
        <Myoffcanvas></Myoffcanvas>
        <div className="left">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li className='product-li'>
              <Link to='/products'>Products</Link>
              <i className="fa-solid fa-angle-down"></i>
            </li>
            <li>
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>
              <Link to='/cart'>Cart</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <img src={navLogo} alt="" />
        </div>

     </nav>
  )
}
export default MyNavbar;
