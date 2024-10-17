import Footer from '../../components/Footer/Footer';
import MyNavbar from '../../components/Navbar/Navbar';
import NewItem from '../../components/newItem/newItem';
import { useState , useEffect } from 'react';
import '../products/products.css';
import { useParams } from 'react-router-dom';
function CategoryItem()
{
   let item = useParams().cat;
   
   
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
        <div className='products-container'>
            <MyNavbar></MyNavbar>
            <h3>{item}</h3>
            <div className="products-body">
             
               
                <div className="left">
                
                {
                    products.map((temp)=>
                    {              

                            
                        if(temp.category == item)                            
                       {
                        console.log(temp);
                        return <NewItem id={temp.id} image={temp.image} title={temp.title} rate={temp.rating.rate} price={temp.price} c = {temp.c} onCChange={(newCValue) => updateCProperty(temp.id-1, newCValue)} />
                       }

                            

                    } )
                    
                }
                </div>
               
            </div>
           
            <Footer></Footer>

        </div>
        
    )
}
export default CategoryItem;
