
import { useContext } from "react";
import { useNavigate } from "react-router";
import { myContext } from "../contextApi/usercontextprovider";
import Button from "../button/button";
import TopNavbar from "../navbar/topNavbar";
import FooterStays from "../footer/footerStays";


function Wishlist() {
    const {wishListArr,setWishListArr} = useContext(myContext);

    const navigate = useNavigate();
    
    const removeFromWishList=(id)=>
    {
        const favArray = JSON.parse(localStorage.getItem("wishList"));
        const updatedFavArray = favArray.filter(val => val._id !== id);
        localStorage.setItem("wishList", JSON.stringify(updatedFavArray));
        setWishListArr(updatedFavArray);
    }

    const handleClick = (id)=>{
        navigate(`/singlehotal/${id}`);
    }
    return (
        <>
        <TopNavbar/>

        <div className="flex border-3 flex-wrap items-center pb-3">
            {
                wishListArr.length>0 ? wishListArr?.map((val) => {
                 
                    return (
                        <div className="border-2 w-[18%] mt-10 ml-20 rounded-xl md:min-h-[290px] md:min-w-[200px] min-h-[290px]">
                            <div className="">
                                <div className="h-[260px]">
                                    <img src={val.images} className="h-[260px] w-full rounded-xl md:h-[140px]" />
                                    <div onClick={()=>removeFromWishList(val._id)} className="edjne w-[20px] relative left-[90%] bottom-[257px] md:left-[81%] md:bottom-[134px] cursor-pointer">
                                        <svg className="edjne w-[20px] relative left-[84%] bottom" fill="white" height="20" viewBox="0 0 128 128" class="bk-icon -iconset-close_circle">
                                            <path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm22.2 69.8a6 6 0 1 1-8.4 8.4L64 72.5 50.2 86.2a6 6 0 0 1-8.4-8.4L55.5 64 41.8 50.2a6 6 0 0 1 8.4-8.4L64 55.5l13.8-13.7a6 6 0 0 1 8.4 8.4L72.5 64z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="w-fit m-auto ">
                                    <div>
                                        <h1 className="text-[#0d6efd] font-semibold text-xl md:text-sm text-clip">{val.name}</h1>
                                    </div>
                                    <div className="flex">
                                    {
                                        Array.from({ length: val.valRating }, (_, index) => {
                                            return (
                                                <img key={index} className="edjne" src="https://t4.ftcdn.net/jpg/05/70/03/51/240_F_570035178_kjB04e6Myv95x9YukX6ie8ynaaaY7i0L.jpg" />
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                            </div>

                            <div className=" flex items-center">
                                <div>
                                    <svg width="22" height="12" viewBox="0 0 128 128" class="bk-icon -iconset-geo_pin">
                                        <path d="M98.5 42.5a34.5 34.5 0 1 0-64.3 17.2L64 120l29.8-60.3a34.2 34.2 0 0 0 4.7-17.2zM64 59.7a17.2 17.2 0 1 1 17-17 17.2 17.2 0 0 1-17 17z"></path></svg>
                                </div>
                                <div className="md:text-sm md:text-ellipsis md:text-left">{val.location}</div>
                            </div>

                            <div className=" flex gap-2 items-center">
                                <div className=" pl-2 border-2 w-fit p-1 pt-0 min-w-9 md:min-w-3 md:p-[2px] bg-indigo-900 text-white rounded-lg md:text-sm">{val.rating}</div>
                                <div className="">
                                    {val.rating <= 6 && <p className="md:text-sm">Average</p> || val.rating > 6 && val.rating <= 7 && <p className="md:text-sm">Good</p> || val.rating > 7 && val.rating <= 8 && <p className="md:text-sm">Very Good</p> || val.rating > 8 && val.rating <= 10 && <p className="md:text-sm">Excellent</p>}
                                </div>
                            </div>

                            <p className="pr-2 font-normal text-lg md:text-sm text-left">₹ {Math.round(val.avgCostPerNight)}</p>


                            <Button onClick = {()=>{handleClick(val._id)}} text="View property" className="bg-blue-600 w-full text-white p-2 rounded-lg" />

                        </div>
                    )
                })
                :
                <img src="/images/emptyFav.png" alt="emptyFav" className="py-[5%] m-auto"/>
            }
        </div>
        <FooterStays/>
        </>
    )
}

export default Wishlist;
