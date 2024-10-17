import newarivalimg from '../../assets/images/newarrival.jpg';
import '../newarival/newarival.css'

function Newarival()
{
    return (
        <div className="newarival-container">
           
            <div className="left">
                <h1 style={{color : 'darkred'}}>New</h1>
                <h1>Arrival</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maxime minima assumenda laboriosam ipsa iste. Veniam repudiandae, nam quisquam nihil nostrum in perspiciatis accusantium ipsum, aperiam dolore aut vel error!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque consequuntur illo tempore, officia quos aperiam accusamus aliquam earum tempora nihil magnam culpa itaque sed, voluptatum labore perferendis ipsa impedit possimus!
                </p>
                <a href="">Shop Now</a>

            </div>
            <div className="right">
                <img src={newarivalimg} alt="" />
            </div>
        </div>
    )
}
export default Newarival;