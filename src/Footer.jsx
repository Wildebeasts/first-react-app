import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { PiPaperPlaneTiltFill } from "react-icons/pi";

function Footer() {

    return(
        <footer className="absolute flex justify-around bottom-0 left-1 right-0 w-full h-[367px] font-medium text-base leading-9">
            <div className="w-[249px] h-[237px] text-[#616161]">
                <p className="font-semibold text-2xl text-black -mb-px mb-3">Timber Hub.</p>
                <p className="leading-relaxed mt-4">Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</p>
                <div className="flex">
                    <FaMapMarkerAlt className="translate-y-2.5"/>
                    <p className="pl-2"> NVH, Khu dai hoc quoc gia</p>
                </div>
                <div className="flex">
                    <FaPhone className="translate-y-2.5"/>
                    <p className="pl-2">+1234 5678 989</p>
                </div>
                <p>www.timberhub.com</p>
            </div>
            <div className="w-[104px] h-[229px] text-[#616161]">
                <p className="font-semibold text-2xl text-black -mb-px mb-3">Menu</p>
                <p>Products</p>
                <p>Rooms</p>
                <p>Inspirations</p>
                <p>About Us</p>
                <p>Terms & Policy</p>
            </div>
            <div className="w-[93px] h-[189px] text-[#616161]">
                <p className="font-semibold text-2xl text-black -mb-px mb-3">Account</p>
                <p>My Account</p>
                <p>Checkout</p>
                <p>My Cart</p>
                <p>My catalog</p>
            </div>
            <div className="w-[180px] h-[151px] text-[#616161]">
                <p className="font-semibold text-2xl text-black -mb-px mb-3">Stay Connected</p>
                <div className="flex">
                    <FaFacebook className="translate-y-2.5"/>
                    <p className="pl-2"> Facebook</p>
                </div>
                <div className="flex">
                    <FaInstagram className="translate-y-2.5"/>
                    <p className="pl-2"> Instagram</p>
                </div>
                <div className="flex">
                    <FaTwitter className="translate-y-2.5"/>
                    <p className="pl-2"> Twitter</p>
                </div>
            </div>
            <div className="w-[292px] h-[90px] text-[#616161]">
                <p className="font-semibold text-2xl text-black -mb-px mb-3">Stay Updated</p>
                <form className="flex align-middle justify-center mt-6">
                    <input type="text" placeholder="Enter Your Email" />
                    <button type="submit" className="bg-[#E89F71] rounded-none w-[45px] h-[45px] ml-[6px]">
                    <PiPaperPlaneTiltFill className="-translate-x-1 scale-150 text-white"/>
                    </button>
                </form>
            </div>
        </footer>
    );
}

export default Footer