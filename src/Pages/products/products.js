import Footer from '../../components/Footer/Footer';
import MyNavbar from '../../components/Navbar/Navbar';
import NewItem from '../../components/newItem/newItem';
import { useState, useEffect } from 'react';
import './products.css';
import { Link } from 'react-router-dom';


function Products() {
  const [products, Setproducts] = useState([]);

  // Fetch the products and retrieve saved `c` values from localStorage
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        // Retrieve saved `c` values from localStorage
        const savedProducts = json.map((product) => {
          const savedProduct = JSON.parse(localStorage.getItem(product.id));
          return {
            ...product,
            c: savedProduct?.c || 0,  // Use saved `c` from localStorage, or default to 0
          };
        });
        Setproducts(savedProducts);  // Update the state with the saved products
      });
  }, []);
  
  // Function to update the `c` property dynamically and persist it in localStorage
  const updateCProperty = (index, newCValue) => {
    const updatedProducts = products.map((product, i) =>
      i === index ? { ...product, c: newCValue } : product
    );
    Setproducts(updatedProducts); // Update the state

    // Save the updated product to localStorage
    const updatedProduct = updatedProducts[index];
    localStorage.setItem(updatedProduct.id, JSON.stringify(updatedProduct));
  };

  return (
    <div className="products-container">
      <MyNavbar />
      <h3>Our Products</h3>
      <div className="products-body">
        <div className="left">
          {products.map((temp, index) => (
            <NewItem
              key={temp.id}
              id={temp.id}
              image={temp.image}
              title={temp.title}
              rate={temp.rating.rate}
              price={temp.price}
              c={temp.c}
              onCChange={(newCValue) => updateCProperty(index, newCValue)} // Pass the function to update `c`
            />
          ))}
        </div>
        <div className="right">
          <h2>Categories</h2>
          <hr />
          <div className="links">
            <ul>
              <li>
                <Link to="/category/women's clothing">
                  <i className="fa-solid fa-caret-up fa-rotate-90"></i> Women's Clothing
                </Link>
              </li>
              <li>
                <Link to="/category/men's clothing">
                  <i className="fa-solid fa-caret-up fa-rotate-90"></i> Men's Clothing
                </Link>
              </li>
              <li>
                <Link to="/category/jewelery">
                  <i className="fa-solid fa-caret-up fa-rotate-90"></i> Jewelery
                </Link>
              </li>
              <li>
                <Link to="/category/electronics">
                  <i className="fa-solid fa-caret-up fa-rotate-90"></i> Electronics
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
