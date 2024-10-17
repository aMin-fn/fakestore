import MyNavbar from '../../components/Navbar/Navbar';
import './cart.css';
import Footer from '../../components/Footer/Footer';
import Carditem from '../../components/Carditem/carditem';
function Cart()
{
    return (
        <>
            <MyNavbar></MyNavbar>
            <Carditem></Carditem>
            <Footer></Footer>
        </>
    )
}
export default Cart