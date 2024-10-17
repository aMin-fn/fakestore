import './category.css'
import men_svg from './women.svg';
import women_svg from './men.svg';
import { Link } from 'react-router-dom';
function Category()
{
   
    return (
        <div className="category-container">
            <div className="item">
                <Link to="/category/men's clothing">
                    <img src={men_svg} alt="" />
                    <p>Men's Clothing</p>
                </Link>
            </div>
            <div className="item">
                <Link to="/category/women's clothing">
                    <img src={women_svg} alt="" />
                    <p>Women's Clothing</p>
                </Link>
            </div>
            <div className="item">
                <Link to="/category/jewelery">
                    <i className="fa-regular fa-gem"></i>
                    <p>Jewlery</p>
                </Link>
            </div>
            <div className="item">
                <Link to="/category/electronics">
                    <i className="fa-solid fa-headphones"></i>
                    <p>Electrnics</p>
                </Link>
            </div>
        </div>
    )
}
export default Category;