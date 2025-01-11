import { NavLink } from "react-router-dom";
import "./offers";

function DestinationArea(props) {
    const { DestDetails} = props;
    
    return (
        <div className="mt-5">
            <div className="w-[67%] m-auto font-bold text-xl lg:w-full">Explore India</div>
            <div className="w-[67%] my-[5px] mx-auto text-[#857c7c] lg:w-[100%]">e popular destinations have a lot to offer</div>
            <div className="w-[67%] m-auto flex gap-[18px] overflow-scroll lg:w-[100%]">
                {
                    DestDetails.map((val) => {
                        return (
                            <div className="rounded-lg min-w-[18%]">
                                <NavLink to = {(`/hotalList?search=${JSON.stringify(val.city)}`)}>
                                    <img 
                                        className="rounded-xl h-40 w-50"
                                        src={val.img}
                                        alt="image"
                                    />
                                 </NavLink>
                                
                                <div className="pb-5">
                                        <h5 className="font-bold">
                                            {val.name}
                                        </h5>

                                    <div className="flex items-center justify-between">
                                        {val.Properties}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default DestinationArea;