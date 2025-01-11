import FooterStays from "../../footer/footerStays";
import TopNavbar from "../../navbar/topNavbar";
import TopNavbarOption from "../../navbar/topNavbarOption";
import "../singleHotelInfo/singleHotelInfo.css";
import BedAvailability from "./bedAvailability";
import HotelFacilities from "./hotelFacilities";
import HotelSearchCard from "./hotelSearchCard";
import SingleHotelImg from "./singleHotelImg";

function SingleHotelInfo() {
    return (
        <>
            <TopNavbar />
            <div className="flex m-auto gap-[23px] lg:w-[100%] bg-[#003b95]">
                <p className="w-[42%] pb-2">
                <TopNavbarOption/>
                </p>
            </div>

            <div className="w-[70%] m-auto flex gap-5 mt-5 lg:px-10 lg:w-full">
           
                <div className="w-[25%]">
                    <HotelSearchCard/>
                </div>
                    <SingleHotelImg />
            </div>
            <BedAvailability/>
            <HotelFacilities/> 
            <FooterStays/>
        </>
    )
}

export default SingleHotelInfo;