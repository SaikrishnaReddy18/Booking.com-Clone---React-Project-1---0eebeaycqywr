import React from 'react'

import { useParams } from "react-router";
// import "./ResidenceDetails.css";
import { useEffect, useState } from "react";

function SinglehotelStay() {
    const { id } = useParams();
    console.log("my id ",id);
    const [data, setData] = useState();

    const singleDataApi = async () => {
        try {
            let data = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel/${id}`, {
                method: "GET",
                headers: {
                    projectID: "0eebeaycqywr"
                }
            });
            let res = await data?.json();
            // console.log("res", res?.data);
            setData(res?.data);
        }

        catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        singleDataApi();
    }, []);

    return (
        <div>
            <div className="font-bold text-2xl">{data && data.location}</div>
            <p className="font-normal"> A-289, National Highway No-08, Near IGI Airport, Mahipalpur, Mahipalpur, 110037 New Delhi, India</p>
            <div className="flex gap-4">
                <div className="flex flex-col gap-2 mt-5">
                    <div>
                      {data && <img className="h-40 ehdhedn" src={data.images[0]}/>}
                    </div>
                    <div>
                        {data && <img className="h-40 ehdhedn" src={data.images[1]}/>}
                    </div>

                </div>

                <div className="mt-5">
                    <div>
                        {data && <img className="h-80 edjen" src={data.images[2]}/>}
                    </div>
                </div>
            </div>

            <div className="mt-2 flex gap-2 edjemd">
                {
                    data?.images.map((val)=>{
                        return(
                            <img className="edjeodj" src={val}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SinglehotelStay


