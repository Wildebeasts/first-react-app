import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {

    return(
        <footer className="Footer">
            <div className="Card1">
                <p className="SmallHead">Timber Hub.</p>
                <p>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</p>
                <p><FaMapMarkerAlt/> NVH, Khu dai hoc quoc gia</p>
                <p><FaPhone/> +1234 5678 989</p>
                <p>www.timberhub.com</p>
            </div>
            <div className="Card2">
                <p className="SmallHead">Menu</p>
                <p>Products</p>
                <p>Rooms</p>
                <p>Inspirations</p>
                <p>About Us</p>
                <p>Terms & Policy</p>
            </div>
            <div className="Card3">
                <p className="SmallHead">Account</p>
                <p>My Account</p>
                <p>Checkout</p>
                <p>My Cart</p>
                <p>My catalog</p>
            </div>
            <div className="Card4">
                <p className="SmallHead">Stay Connected</p>
                <p><FaFacebook/> Facebook</p>
                <p><FaInstagram/> Instagram</p>
                <p><FaTwitter/> Twitter</p>
            </div>
            <div className="Card5">
                <p className="SmallHead">Stay Updated</p>
            </div>
        </footer>
    );
}

export default Footer