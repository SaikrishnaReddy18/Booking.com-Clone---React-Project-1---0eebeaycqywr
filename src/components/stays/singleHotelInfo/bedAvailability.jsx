import { useContext, useEffect, useState } from "react";
import "../singleHotelInfo/singleHotelInfo.css";
import { useParams } from "react-router";

import { Link } from "react-router-dom";
import { myContext } from "../../contextApi/usercontextprovider";

function BedAvailability() {
            
    const { id } = useParams();

    const [data, setData] = useState();

    const {adultCount, childrenCount} = useContext(myContext);

    const singleDataApi = async () => {
        try {
            let data = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel/${id}`, {
                method: "GET",
                headers: {
                    projectID: "0eebeaycqywr",
                }
            });
            let res = await data?.json();
            console.log("resp", res?.data);
            setData(res?.data);
        }

        catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        singleDataApi();
    }, [])

    return (
        <div className="w-[70%] mt-[60px] m-auto text-[22px]">
            <div className="font-bold">Availability</div>
            <table className="w-full">
                <thead className="text-[15px] h-16 bg-[#8a2be2] text-white ">
                    <tr>
                        <th>Room Type</th>
                        <th>Number of guests</th>
                        <th>Price for 15 days</th>
                        <th>Your Choices</th>
                        <Link to ={`/FormDetails/${id}`}>
                            <th className="cursor-pointer bg-yellow-500 p-4">I'll Reserve</th>
                        </Link>
                    </tr>
                </thead>


                {data && data.rooms.map((val) => {
                    return (
                        <tr className="edeuid">
                            <td className="text-[15px] text-center">
                                <p className="text-[#8a2be2] underline font-semibold cursor-pointer">{val.roomType} Bed</p>
                                <p className="font-normal text-sm">{val.bedDetail}</p>
                            </td>

                            <td className="text-[15px] text-center">{adultCount+childrenCount}</td>
                            <td className="text-[15px] text-center">
                                <p>₹ {Math.floor(val.costPerNight)}</p>
                            </td>

                            <td className="text-[15px] text-center">
                                <p className="font-normal text-red-500">₹ {(val.cancellationPolicy)}</p>
                            </td>
                        </tr>
                    )
                })}

            </table>
        </div>
    )
}

export default BedAvailability;