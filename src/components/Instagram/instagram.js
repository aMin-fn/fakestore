import Mycarousal from "../carousal/carousal";
import { FaInstagram } from "react-icons/fa";
import './instagram.css';

function Instagram()
{
    return (
       <div className="insta">
             <div className="s-container">
           
           <div className="left">
              <div className="concept">
               <h2>Follow Instagram</h2>
               <div className="desc">
                   <FaInstagram fill="rgb(211, 70, 70)"></FaInstagram>
                   <p>fake_shop</p>
               </div>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quis. Ab possimus ullam facilis, vitae nemo earum, mollitia veritatis optio obcaecati.</p>
               <a href="">Discover Now</a>
              </div>
           </div>
           <div className="right">
               <Mycarousal></Mycarousal>
           </div>
       </div>
       </div>
    )
}
export default Instagram;