import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

function Footer() {

    return(
        <footer className="Footer">
            <div className="Card1">
                <p><FaMapMarkerAlt/> NVH, Khu dai hoc quoc gia</p>
                <p><FaPhone/> +1234 5678 989</p>
                <p>www.timberhub.com</p>
            </div>
        </footer>
    );
}

export default Footer