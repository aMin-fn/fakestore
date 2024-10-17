import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import './newItem.css';
import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


function NewItem({ id, image, title, rate, price, c, onCChange }) {
  // Function to handle the "Add to Cart" logic
  function buy(event) {
    event.preventDefault(); // Prevent link default behavior

    // Increment the `c` property when added to the cart
    onCChange(c + 1); // This calls the passed function from parent to update the `c` state

    // Save the item in localStorage (for persistence)
    const productData = { id, image, title, rate, price, c: c + 1 };
    localStorage.setItem(id, JSON.stringify(productData));

    // Display a success message
    Swal.fire({
      
      title: "Added to cart!",
      icon: "success"
    });
  }

  function buy2(event) {
    event.preventDefault(); // Prevent link default behavior

    // Increment the `c` property when added to the cart
    onCChange(c + 1); // This calls the passed function from parent to update the `c` state

    // Save the item in localStorage (for persistence)
    const productData = { id, image, title, rate, price, c: c + 1 };
    localStorage.setItem(id, JSON.stringify(productData));
  }

  function deleteAll(event) {
    event.preventDefault(); // Prevent default link behavior
    event.stopPropagation(); // Stop the click event from propagating to the Link component
  
    // Remove the item from localStorage
  
    // Update the state to re-render the component
    onCChange(0); // Set count to 0 after deletion
    localStorage.removeItem(id);

    // Display a success message
    Swal.fire({
      title: "Item removed from cart!",
      icon: "success"
    });
  }
  function decreasement(event) {
    event.preventDefault(); // Prevent link default behavior

    // Increment the `c` property when added to the cart
    onCChange(c - 1); // This calls the passed function from parent to update the `c` state

    // Save the item in localStorage (for persistence)
    if(c>1)
    {
      const productData = { id, image, title, rate, price, c: c - 1 };
      localStorage.setItem(id, JSON.stringify(productData));
    }
    else
      localStorage.removeItem(id);

  }

  if (c === 0) {
    return (
      <Link style={{ textDecoration: 'none', color: 'black', height: '360px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', margin: '10px' }} to={`/detail/${id}`}>
        <div className="newitem">
          <div className="img-container">
            <img src={image} alt={title} />
          </div>
          <div className="desc">
            <h4>{title}</h4>
            <div className="p-container">
              <p>
                <i className="fa-solid fa-star"></i> {rate}
              </p>
              <p>{price}$</p>
            </div>
            <button onClick={buy} className="addCardBtn">
              <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link style={{ textDecoration: 'none', color: 'black', height: '360px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', margin: '10px' }} to={`/detail/${id}`}>
        <div className="newitem">
          <div className="img-container">
            <img src={image} alt={title} />
          </div>
          <div className="desc">
            <h4>{title}</h4>
            <div className="p-container">
              <p>
                <i className="fa-solid fa-star"></i> {rate}
              </p>
              <p>{price}$</p>
            </div>
            <div className="addCardContainer">
              <div className="counts">
                <button onClick={decreasement} className="addCardBtn2">
                  <FaMinus ></FaMinus>
                </button>
               
                <p>{c}</p>
                <button onClick={buy2} className="addCardBtn2">
                  <FaPlus></FaPlus>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default NewItem;
