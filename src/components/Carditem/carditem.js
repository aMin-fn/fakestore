import './carditem.css';
import { CiCreditCard1 } from "react-icons/ci";
import { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import Swal from 'sweetalert2';
import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
function Buyitem({ item, onRemove, onUpdate }) {
    
    // Function to handle the removal of an item
    const handleClose = () => {
        onRemove(item.key); 
    };

    // Function to handle the decrease of the item count
    const handleDecrease = () => {
        if (item.c > 1) {
            const updatedItem = { ...item, c: item.c - 1 }; // Decrease the count
            localStorage.setItem(item.key, JSON.stringify(updatedItem)); // Update localStorage
            onUpdate(updatedItem); // Call onUpdate to update the state in the parent component
        } else {
            onRemove(item.key); // Remove item if count goes below 1
        }
    };

    // Handle increase in item count
    const handleIncrease = () => {
        const updatedItem = { ...item, c: item.c + 1 }; // Increase the count
        localStorage.setItem(item.key, JSON.stringify(updatedItem)); // Update localStorage
        onUpdate(updatedItem); // Call onUpdate to update the state in the parent component
    };

    // Calculate total price for the item
    const sumprice = item.price * item.c;

    return (
        <div className="center d-flex">
            <div className="img-c">
                <img style={{ width: '60px' }} src={item.image} alt="" />
            </div>
            <p>{item.title}</p>
            <p>{sumprice}$</p>
            <p style={{ width: '15%' }}>
               {item.c} {/* Display the current count */}
            </p>
            <div className="icon">
                <FaPlus onClick={handleIncrease} /> {/* Increase count */}
                <FaTrash onClick={handleClose} /> {/* Remove item */}
                <FaMinus onClick={handleDecrease} /> {/* Decrease count */}
            </div>
        </div>
    );
}

function Carditem() {
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from localStorage on mount
    useEffect(() => {
        const items = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            items.push({ key, ...JSON.parse(localStorage.getItem(key)) });
        }
        setCartItems(items);
    }, []);

    // Function to remove an item from the cart
    const removeItem = (key) => {
        localStorage.removeItem(key); // Remove item from localStorage
        setCartItems(cartItems.filter(item => item.key !== key)); // Update state
    };

    // Function to update an item count in the cart
    const updateItem = (updatedItem) => {
        const updatedItems = cartItems.map(item => 
            item.key === updatedItem.key ? updatedItem : item
        );
        setCartItems(updatedItems); // Update state
    };

    // Calculate the total price of all items in the cart
    const total = cartItems.reduce((sum, item) => sum + Number(item.price * item.c), 0);

    return (
        <div className="card-container">
            <div className="top-text">
                <i className="fa-solid fa-bag-shopping" style={{ color: 'darkred', marginRight: '5px', fontSize: '20px' }}></i>
                <h2>Cart</h2>
            </div>
            <div className="cart-body">
                <div className="top">
                    <p>Product</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Count</p>
                </div>
                
                {cartItems.map((item) => (
                    <Buyitem 
                        key={item.key} 
                        item={item} 
                        onRemove={removeItem} 
                        onUpdate={updateItem} // Pass update function to child component
                    />
                ))}
                
                <hr />
                <div className="bottom">
                    <p style={{ fontFamily: 'satisfy', padding: '0' }}>Total Price: {total} </p>
                    <a href="">
                        <CiCreditCard1 style={{ marginRight: '5px', fontSize: '20px' }} />
                        Pay now
                    </a>
                </div>
                <hr />
            </div>
        </div>
    );
}



export default Carditem;
