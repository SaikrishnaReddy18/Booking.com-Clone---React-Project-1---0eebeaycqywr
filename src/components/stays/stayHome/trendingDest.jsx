import { NavLink } from "react-router-dom";
import { trendingDestData } from "../../../constant/constantData";

function TrendingDest() {

    return (<>
        <div className="m-auto w-[67%] lg:w-full">
            <div className="font-bold text-[22px]">Trending destinations</div>
            <div className="text-[#857c7c]">Most popular choices for travelers from India</div>
            
            <div className="grid grid-cols-2 gap-[13px]">
                {
                    trendingDestData.map((val, index) => {
                        return (
                            index <= 1 &&
                            <NavLink to={`/hotalList?search=${JSON.stringify(val?.city)}`}>
                                <div className="p-[10px] h-[267px] mt-[10px] rounded-lg" style={{ backgroundImage: `url(${val.img})` }}>
                                    <span  className="flex gap-[10px] items-center">
                                        <p className="text-white text-[20px]"> {val.name}</p>
                                        <img className="h-5" src={val.flag}/>
                                    </span>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>

            <div className="flex gap-[15px] w-[100%] overflow-scroll">
                {
                    trendingDestData.map((val, index) => {
                        return ( index > 1 && 
                            <NavLink to={(`/hotalList?search=${JSON.stringify(val.city)}`)}>
                            
                            <div className="w-[340px] p-[10px] mt-[15px] rounded-lg h-[240px]" style={{ backgroundImage: `url(${val.img})` }}>
                                <span className="flex gap-[10px] items-center">
                                    <p className="text-white text-[20px]"> {val.name}</p>
                                    <img className="h-5" src={val.flag}/>
                                </span>
                            </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default TrendingDest;