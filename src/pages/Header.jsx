import Image from "../components/images/house.svg";
import Face from "../components/images/default-avatar.png"
import { IoSearchSharp } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { PiShoppingCart } from "react-icons/pi";



function Header() {

    return (
        <div>
        <div className="font-semibold text-[12px] flex items-start pl-5 pr-10 pt-6 top-0 left-0 w-screen h-[774px] bg-[#FCF8F3]">
            <div className="flex z-10 w-full h-20 items-center justify-between">
                <img src={Image} alt="house" className="w-[68px] h-[54px]" />
                <h1 className="text-2xl font-bold text-black mt-4 ml-3 w-[140px] min-w-[140px]">Timber Hub.</h1>
                <nav className="mb-1 ml-10 w-[400px] mt-6">
                    <ul className="flex justify-between text-base ">
                        <li><a href="#" className="text-black hover:text-black">Products</a></li>
                        <li><a href="" className="text-black hover:text-black">Rooms</a></li>
                        <li><a href="" className="text-black hover:text-black">Inspirations</a></li>
                    </ul>
                </nav>
                <div className="ml-10 mt-5 w-2/4 h-[45px] flex justify-start items-center relative">
                    <input type="text" placeholder="Search for minimalist chair..." className="w-full h-full bg-[#FFFFFF] indent-14 placeholder:text-[#616161] placeholder:text-sm text-sm focus:outline-none" />
                    <IoSearchSharp className="absolute mr-2 w-14 h-5 text-[#3A3A3A]" />
                </div>
                <div className="flex mt-5 ml-5 mr-10 pl-5 pr-5 w-[304px] h-[45px] justify-around items-center">
                    <GoHeart className="text-3xl" />
                    <PiShoppingCart className="text-3xl" />
                    <img class="w-10 h-10 rounded-full" src={Face} alt="Rounded avatar"></img>
                </div>
            </div>
            <div className="w-9/12 h-[774px] bg-[#F9F1E6] top-0 left-0 absolute z-0"></div>
            <div className="bg-white bg-opacity-80 z-20 w-[494px] h-[553px] absolute ml-[8em] mt-[10em] flex flex-col items-center">
                <h1 className="text-[#3A3A3A] text-5xl font-bold leading-[67.2px] w-[374px] h-[201px] mt-10">High-Quality Furniture Just For You</h1>
                <p className="text-[#898989] text-lg font-medium leading-[30px] w-[345px] h-[90px] mt-4 mr-7">Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
                <div className="w-[374px] h-[78px] mt-[6em] bg-[#E89F71] flex items-center justify-center text-center">
                    <span className="text-[#FFFFFF] text-lg font-medium">Shop Now</span>
                </div>
            </div>
        </div>
        
        </div>
    );
}

export default Header