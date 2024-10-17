import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './offcanvas.css';
import MyNavbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

function Myoffcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button style={{backgroundColor: '#808080' , border : 'none' , borderRadius : '5px' , padding : '5px 10px' }}  onClick={handleShow}>
        Menu
      </button>

      <Offcanvas placement='end' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Close</Offcanvas.Title>
        </Offcanvas.Header >
        <Offcanvas.Body>        <div className="left">
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

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Myoffcanvas;