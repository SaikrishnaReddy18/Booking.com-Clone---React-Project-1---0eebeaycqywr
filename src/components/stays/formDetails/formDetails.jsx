
import { useParams } from "react-router-dom";
import TopNavbar from "../../navbar/topNavbar";
import HotelCheck from "../hotelCheckout/hotelCheck";
import HotelDetails from "../hotelDetails/hotelDetails";
import HotelPriceDetails from "../hotelPriceDetals/hotelPriceDetails";
import HoteluserDetails from "../hotelUserDetails/hoteluserDetails";

function FormDetails() {
    const { id } = useParams();
    return (
        <div>
                <TopNavbar />
                <div className="p-2 flex ml-40 gap-4">
                <div className="flex flex-col gap-3 w-[30%]">
                    <HotelCheck/>
                    <HotelDetails/>
                    <HotelPriceDetails/>
                </div>

                <div className="border-2 p-3 mt-10 w-[60%] rounded-xl flex flex-col gap-3">
                    <div className="border-2 p-3">
                        <div className="font-bold text-left">You are signed in</div>
                        <div className="text-left">{localStorage.getItem("email")}</div>
                    </div>

                    <div className="border-2 p-3">
                        <HoteluserDetails id={id}/>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default FormDetails;