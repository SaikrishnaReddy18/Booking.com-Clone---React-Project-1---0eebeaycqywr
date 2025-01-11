import { useContext, useEffect, useRef, useState } from "react";

import "./offers.css";

import { useNavigate } from "react-router";

import Button from "../../button/button";
import { offersArray } from "../../../constant/constantData";
import MenCountCard from "../menCountCard";

function Offers() {
    const navigate = useNavigate();

    const containRef = useRef(null);

    const [visibleItems, setVisibleItems] = useState(3);

    // const {handleFlagCard} = useContext(UserContext);


    function StayButtonHandler() {
        // navigate("/FlightSearchPage");
        alert("jhbhh")
    }

   
    return (
        <div className=" my-[52px] mx-auto w-[68%] lg:w-full">

            <div className="lg:mt-40">
                <div className="text-[22px] font-bold text-left">Offers</div>

                <div className="text-left text-[#595959] mt-[7px]">Promotions, deals, and special offers for you</div>

                <div ref={containRef} className="flex gap-[10px] lg:flex-col">
                    {
                        offersArray.slice(0, visibleItems).map((val) => {
                            return (
                                <div className="border border-solid border-[#d4d4d4] gap-[10px] mt-5 p-[18px] rounded-lg w-[50%] flex justify-around lg:w-[100%]">
                                    <div className="flex">
                                        <div>
                                            <h1 className="text-sm text-left">{val.h1}</h1>
                                            <p className="font-normal text-sm text-left">{val.p}</p>
                                            <Button onClick={StayButtonHandler} className="py-[7px] px-3 mt-[15px] rounded-md text-sm bg-[#003b95] ml-[-187px] text-white" text={val.buttonText} />
                                        </div>


                                        <div>
                                            <div className="img">
                                                <img src={val.img} className="h-[114px] w-[118px]"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default Offers;