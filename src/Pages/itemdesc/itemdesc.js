import MyNavbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { json, Link, useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import './itemdesc.css';
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


function Itemdesc() {
    
    const { item: itemtemp } = useParams(); // Get item ID from params
    
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null); // State for current product

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then((res) => res.json())
          .then((json) => {
            const savedProducts = json.map((product) => {
              const savedProduct = JSON.parse(localStorage.getItem(product.id));
              return {
                ...product,
                c: savedProduct?.c || 0,  // Use saved `c` from localStorage or default to 0
              };
            });

            // Set products state
            setProducts(savedProducts);

            // Find the specific product and set it in currentProduct state
            const productFound = savedProducts.find(p => p.id == itemtemp);
            if (productFound) {
              setCurrentProduct(productFound);
            }
          });
    }, [itemtemp]); // Dependency on itemtemp to refetch when item changes

    // Function to increment `c` and update both state and localStorage
    const incrementCount = () => {
      if (currentProduct) {
        const updatedProduct = {
          ...currentProduct,
          c: currentProduct.c + 1 // Increment count
        };
        
        setCurrentProduct(updatedProduct); // Update state
        localStorage.setItem(currentProduct.id, JSON.stringify(updatedProduct)); // Update localStorage
      }
    };

    const deleteAll = (event) => {
      event.preventDefault();
      event.stopPropagation();

      // Remove the item from localStorage
      if (currentProduct) {
        localStorage.removeItem(currentProduct.id);
        setCurrentProduct({ ...currentProduct, c: 0 }); // Reset count in state
      }

      Swal.fire({
        title: "Item removed from cart!",
        icon: "success"
      });
    };
    const decreasement = () => {
      if (currentProduct) {
       if(currentProduct.c > 1)
       {
        const updatedProduct = {
          ...currentProduct,
          c: currentProduct.c - 1 // Increment count
        };
        setCurrentProduct(updatedProduct); // Update state
        localStorage.setItem(currentProduct.id, JSON.stringify(updatedProduct)); // Update localStorage
       }
       else
       {
        localStorage.removeItem(currentProduct.id);
        setCurrentProduct({ ...currentProduct, c: 0 }); // Set count to 0 and re-render
       }

        
      
      }
    };
  
    if (!currentProduct) {
      return <div>Loading...</div>; // Show loading if product is not ready
    }

    return (
      <>
        <MyNavbar />
        <div className="details-container">
          <div className="left">
            <div className="desc">
              <h1>{currentProduct.title}</h1>
              <p>{currentProduct.description}</p>
            </div>
            <div className="price">
              <p>{currentProduct.price}$</p>
              {currentProduct.c === 0 ? (
                <button onClick={incrementCount} className="addCardBtn">
                  <i className="fa-solid fa-cart-shopping" style={{marginRight : '5px'}} aria-hidden="true"></i>
                  Add To Cart
                </button>
              ) : (
                <div className="addCardContainer">
                  <div className="counts">
                    <button onClick={decreasement} className="addCardBtn2">
                      <FaMinus ></FaMinus>
                    </button>
                    <p>{currentProduct.c}</p> {/* Dynamic count display */}
                    <button onClick={incrementCount} className="addCardBtn2">
                      <FaPlus />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="right">
            <img src={currentProduct.image} alt={currentProduct.title} />
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Itemdesc;
