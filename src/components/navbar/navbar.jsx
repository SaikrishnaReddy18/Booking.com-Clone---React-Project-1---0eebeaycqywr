import { useState } from "react";

import "./navbar.css";
import TopNavbar from "./topNavbar";
import TopNavbarOption from "./topNavbarOption";
import NavForm from "./navForm";

function Navbar(){

const [flag,setFlag] = useState(false);


    return(
        <div className="bg-[#003b95] h-[337px]  relative lg:h-[311px]">
            
           <TopNavbar/>
           <div className="flex m-auto w-[71%] gap-[23px] lg:w-[100%]">
            
            <TopNavbarOption/>
           </div>

            <div className="w-[71%] mt-[60px] mb-[42px] mx-auto lg:m-5">
                <div className="text-white text-[46px] font-bold lg:text-[30px] text-left">Find your next stay</div>
                <div className="text-white text-[24px] text-left">Search deals on hotels, homes, and much more...</div>
            </div>

            <div className="w-[71%] rounded relative m-auto lg:w-[100%] mt-5">
              <NavForm flag = {flag} setFlag={setFlag}/>
                
              
            </div>
        </div>
    )
}  

export default Navbar;