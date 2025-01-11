import { useContext, useState } from "react";
import Button from "../../button/button";
import "../singleHotelInfo/singleHotelInfo.css";
import { NavLink, useNavigate } from "react-router-dom";
import MenCountCard from "../menCountCard";
import { myContext } from "../../contextApi/usercontextprovider";
import MyCalender from "../../navbar/myCalender";


function HotelSearchCard(){

    const navigate = useNavigate();
    const [flag1,setFlag1] = useState(false);
    const {adultCount,childrenCount,roomCount,startDate,endDate,searchCity, setSearchCity} = useContext(myContext);

    const [handleFlagCard, setHandleFlagCard] = useState(false);
    const handleClick = ()=>setHandleFlagCard(!handleFlagCard);

    function onClickHandler(){
        navigate(`/hotelList?search=${JSON.stringify(searchCity)}`);
    }

    return(
        <div className="bg-[#febb02] p-3 ">
            <div className="text-xl font-medium">Search</div>

            <div className="mt-2">
                <div>Destination/property name:</div>
                <div className="flex bg-white gap-2 items-center p-2 md:gap-0">
                    <span class="fcd9eec8fb d24fc26e73 f64eb5d122" aria-hidden="true"><svg viewBox="0 0 128 128" width="1em" height="1em">
                        <path d="M118.8 113.2l-31-31A4 4 0 0 0 85 81a44 44 0 1 0-4 4 4 4 0 0 0 1.2 2.8l31 31a4 4 0 0 0 5.6-5.7zM52 88a36 36 0 1 1 36-36 36 36 0 0 1-36 36z">
                            </path>
                        </svg>
                    </span>
                    <input name="ss" class="eb46370fe1 md:w-[109px]" 
                    onChange={(e)=>setSearchCity(e.target.value)} placeholder="Where are you going?" data-destination="1" 
                    autocomplete="off" value={searchCity} aria-autocomplete="list" aria-controls="autocomplete-results" aria-haspopup="listbox" aria-label="Where are you going?" aria-expanded="true" role="combobox" id=":rt:">
                    </input>
                </div>
            </div>


            <div className="mt-1">
                <div>Check-in date</div>
                <div className="">
                    <input className="p-[5px] w-[220px] md:w-[147px]" value={startDate} onClick={()=>setFlag1(!flag1)}/>
                </div>
            </div>

            <div className="mt-1">
                <div>Check-out date</div>
                <div className="flex flex-col">
                    <input value={endDate} onClick={()=>setFlag1(!flag1)} className="p-[5px] w-[220px] md:w-[147px]"/>
                    <div className="mt-2">19-night stay</div>
                    <input onClick={handleClick} className="mt-2 w-55 p-[5px] w-[220px] md:w-[147px]" type="text"
                     placeholder="ideji" value={`${adultCount} adults. ${childrenCount} children. ${roomCount} room`}/>
                    {handleFlagCard &&<MenCountCard/>}
                </div>
                {flag1 && <MyCalender/>}
            </div>


            <div className="mt-2">
                <span className="flex gap-2">
                    <input type="checkbox" />
                    <p className="font-normal">Entire homes & apartments</p>
                </span>
                
                <span className="flex gap-2">
                    <input type="checkbox" />
                    <p className="font-normal">I'm traveling for work</p>
                </span>
            </div>


            <div className="eiend mt-2">
                <Button onClick = {onClickHandler} className="bg-[#4343f5] text-white m-auto py-[10px] px-[80px] md:px-[40px]" text = "Search"/>
            </div>

        </div>
    )
}

export default HotelSearchCard;