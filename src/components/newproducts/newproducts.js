import NewItem from '../newItem/newItem';
import './newproducts.css';
import { useState , useEffect } from 'react';

function Newproducts(options) 
{
    
   
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
    
        <div className='newItem-container'>
            <h1 >New For You</h1>
             <div className='items'>
             {products.length > 0 && (
                    <>
                        <NewItem id={products[0].id} image={products[0].image} title={products[0].title} rate={products[0].rating.rate} price={products[0].price} c = {products[0].c} onCChange={(newCValue) => updateCProperty(0, newCValue)} />
                        <NewItem id={products[1].id} image={products[1].image} title={products[1].title} rate={products[1].rating.rate} price={products[1].price} c = {products[1].c} onCChange={(newCValue) => updateCProperty(1, newCValue)}   />
                        <NewItem id={products[2].id} image={products[2].image} title={products[2].title} rate={products[2].rating.rate} price={products[2].price} c = {products[2].c} onCChange={(newCValue) => updateCProperty(2, newCValue)} />
                        <NewItem id={products[3].id} image={products[3].image} title={products[3].title} rate={products[3].rating.rate} price={products[3].price} c = {products[3].c} onCChange={(newCValue) => updateCProperty(3, newCValue)} />
                    </>
                )}
               
            </div>
        </div>
   )
}
export default Newproducts;