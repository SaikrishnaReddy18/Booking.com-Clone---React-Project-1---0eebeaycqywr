import "../navbar/navbar.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../button/button";
import Navbar from "../navbar/navbar";
import FooterStays from "../footer/footerStays";
import DropDown from "../dropDown/dropDown";
import { CheckBoxArray } from "../../constant/constantData";
import { useContext, useEffect, useState } from "react";
import { myContext } from "../contextApi/usercontextprovider";
import Wishlist from "./wishlist";



function HotelList() {

    let [searchParams] = useSearchParams();
    console.log(searchParams.get("search"));
    const { wishListArr, setWishListArr} = useContext(myContext);
    const [allData, setAllData] = useState([]);

    const [duplicateData, setDuplicateData] = useState([]);

    const [filterationData, setFilterationData] = useState([]);

    let [inputChange, setInputChange] = useState();

    const [checkBoxCheked, setCheckBoxCheked] = useState(CheckBoxArray);

    const [checkBoxValue, setCheckBoxValue] = useState([]);

    const navigate = useNavigate();

    const inputChangeHandler = (data) => {
        setInputChange(data);
    }


    function checkBoxValueHandler(value) {
        if (!checkBoxValue.includes(value)) {
            setCheckBoxValue([...checkBoxValue, value]);
        }

        if (checkBoxValue.includes(value)) {
            const updatedCheckBox = checkBoxValue.filter(item => item != value);
            setCheckBoxValue(updatedCheckBox);
        }

        filterDataHandler();
        console.log("2nd time", checkBoxValue);
    }


    const apiData = async () => {
        try {
            const data = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":${searchParams.get("search")}}`, {
                method: "GET",
                headers: {
                    projectID: "0eebeaycqywr",
                }
            });
            console.log("api ",data);

            const res = await data.json();
            setAllData(res?.data?.hotels);
            setDuplicateData(res?.data?.hotels);
            setFilterationData(res?.data?.hotels);
        }
        catch (error) {
            console.error(error)
        }
    }

    function filterDataHandler() {
        {
            filterationData && filterationData.forEach((val) => {
                let randomNumber = Math.floor(Math.random() * 2) + 1;

                let newArr = [];

                if (randomNumber % 2 === 0) {
                    newArr.push({
                        "Child Allowance": true,
                        "Guest Allowance": false,
                        "Chalets": false,
                        "Vacation Homes": true,
                        "Farm Stays": false,
                        "Homestays": true,
                        "Resort Vilages": false,
                        "Country Houses": true,
                    });
                }

                else {
                    newArr.push({
                        "Child Allowance": false,
                        "Guest Allowance": true,
                        "Chalets": true,
                        "Vacation Homes": false,
                        "Farm Stays": true,
                        "Homestays": false,
                        "Resort Vilages": false,
                        "Country Houses": false
                    });
                }
                val[0] = newArr;

                console.log("hello", filterationData);

            })
        }
    }

    useEffect(() => {
        if (!inputChange) return;

        let newData = [...allData];

        if (inputChange === "Price (lowest first)" || inputChange === "Property rating (Low to High)") {
            newData.sort((a, b) => a.avgCostPerNight - b.avgCostPerNight);
        }

        else if (inputChange === "Property rating (High to low)") {
            newData.sort((a, b) => b.avgCostPerNight - a.avgCostPerNight);
        }

        else if (inputChange === "Homes and apartment first") {
            newData = allData.filter(val => val.childAndExtraBedPolicy && val.childAndExtraBedPolicy.extraBedProvidedForChild === true);
        }

        else if (inputChange === "Top pics for long stays") {
            newData = allData.filter(val => val.childAndExtraBedPolicy && val.childAndExtraBedPolicy.extraBedProvidedForChild === false);
        }


        else if (inputChange === "Best reviwed and lowest price") {
            newData = allData.filter(val => val.childAndExtraBedPolicy && val.childAndExtraBedPolicy.extraBedForAdditionalGuest === true);
        }

        else if (inputChange === "Property rating and price") {
            newData = allData.filter(val => val.childAndExtraBedPolicy && val.childAndExtraBedPolicy.extraBedForAdditionalGuest === false);
        }

        else if (inputChange === "Distance From DownTown") {
            newData = allData.filter(val => val.houseRules && val.houseRules.restrictions.petsAllowed === true);
        }

        else if (inputChange === "Top Reviewed") {
            newData = allData.filter(val => val.houseRules && val.houseRules.restrictions.petsAllowed === false);
        }

        else if (inputChange === "Distance from closest beach") {
            newData = allData.filter(val => val.houseRules && val.houseRules.restrictions.smokingAllowed === false);
        }

        setDuplicateData(newData);

    }, [inputChange])

    useEffect(() => {
        apiData();
        filterDataHandler();
    }, [])

    const seeSingleHotel = (id)=>{
        navigate(`/singlehotal/${id}`);
    }

    function handleHeartClick(data) 
    {
        const loggedIn = localStorage.getItem("token");
        if(loggedIn)
        {
            const isObjectPresent = wishListArr.some(item => item._id === data._id);
            if (!isObjectPresent) 
            {
                const updatedArray = [...wishListArr, data];
                setWishListArr(updatedArray);
                localStorage.setItem('wishList', JSON.stringify(updatedArray));
                // navigate("/FavoriteList");
            }
        }
        else
        {
            navigate("/login");
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="w-8/12 mt-20 m-auto flex gap-2 md:w-[100%] md:text-[7px] lg:w-full mb-4">
                <div>
                    <div className="border-2 p-2 font-bold  w-full rounded-t-lg">Filter by:</div>

                    <div className="w-60 border-2 p-2">
                        <h3 className="font-bold">Your Previous Filters</h3>
                        {
                            checkBoxCheked.map((val, index)=>{
                                return(
                                    <div className="flex mt-2 items-center gap-2">
                                        <input 
                                        id={val.id}     
                                        onChange={()=>checkBoxValueHandler(val.label, index, val.id)} 
                                        type="checkbox"
                                        name="bordered-checkbox" 
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                                        <label for="checkBox">{val.label}</label>
                                    </div>
                                )
                            })
                        }
                    </div>



                    <div className=" w-full border-2 p-2 edebh">
                        <h3 className="font-bold">Popular Filters</h3>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Coffee/Tea maker</p>
                        </div>


                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Refrigerator</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Pet friendly</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Non-smoking rooms</p>
                        </div>


                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Farm Stays</p>
                        </div>


                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Homestays</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Resort Villages</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Country Houses</p>
                        </div>
                    </div>
                </div>

                {/* Properties Section */}
                
                <div className="flex flex-col gap-5 w-[80%]">
                    <DropDown inputChangeHandler={inputChangeHandler} />

                    {
                        duplicateData && duplicateData.length > 0 && duplicateData.map((val) => {
                            
                            let randomNumber = Math.floor(Math.random() * 3 + 1);
                            let difference = 3 - randomNumber;
                            let limitedImages = val.rating;
                            let randomRating = parseFloat(((limitedImages * 10) / 6.0)).toFixed(1);

                            return (
                                <div className="edidjioj">
                                    
                                    <div className="flex gap-5 p-5 rounded-xl border-2 border-solid border-[#cdbcbc]">
                                        <div className="edoiejdio">

                                            <Link to={`/singlehotal/${val._id}`}>
                                          
                                                <img  className="h-[200px] rounded-xl w-[200px]" src={val.images[0]} />
                                            </Link>

                                            <div className="h-[34px] w-[34px] border-2 border-solid border-white relative bottom-[183px] left-[104px] rounded-[50%]
                                             bg-white flex justify-center items-center cursor-pointer sm:left-[75px] sm:bottom-[192px]" onClick={()=>{handleHeartClick(val)}}> 
                                                <span className="eedba9e88a">
                                                    <span class="fcd9eec8fb bf9a32efa5" aria-hidden="true" >
                                                        {wishListArr.some((i)=>{
                                                            return i._id==val._id
                                                        })?
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" height="17px" viewBox="0 0 24 24">
                                                            <path d="M23.3 5.076a6.582 6.582 0 0 0-10.446-1.71L12 4.147l-.827-.753a6.522 6.522 0 0 0-5.688-1.806A6.472 6.472 0 0 0 .7 5.075a6.4 6.4 0 0 0 1.21 7.469l9.373 9.656a1 1 0 0 0 1.434 0l9.36-9.638A6.414 6.414 0 0 0 23.3 5.076z">
                                                        </path>
                                                        </svg>
                                                        :
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-[17px]">
                                                            <path d="M12.541 21.325l-9.588-10a4.923 4.923 0 1 1 6.95-6.976l1.567 1.566a.75.75 0 0 0 1.06 0l1.566-1.566a4.923 4.923 0 0 1 6.963 6.962l-9.6 10.014h1.082zm-1.082 1.038a.75.75 0 0 0 1.082 0l9.59-10.003a6.418 6.418 0 0 0-.012-9.07 6.423 6.423 0 0 0-9.083-.001L11.47 4.854h1.06l-1.566-1.566a6.423 6.423 0 1 0-9.082 9.086l9.577 9.99z">
                                                            </path>
                                                        </svg> 
                                                        }
                                                        {/* stroke='red' , fill="red" */}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="ed3dk3kdk3 w-full flex flex-col ">
                                            <div className="flex justify-between">
                                                <div className="flex">
                                                    <p className="text-[#8a2be2] text-left">{val.name}</p>
                                                    {
                                                        Array.from({ length: limitedImages }, (_, index) => {
                                                            return (
                                                                <img key={index} className="h-5 text-left" src="https://t4.ftcdn.net/jpg/05/70/03/51/240_F_570035178_kjB04e6Myv95x9YukX6ie8ynaaaY7i0L.jpg" />
                                                            )
                                                        })
                                                    }
                                                </div>

                                                <div className="flex gap-2">
                                                    <div>
                                                        <div className="font-bold">
                                                            {randomRating <= 6 && <p>Average</p> || randomRating > 6 && randomRating <= 7 && <p>Good</p> || randomRating > 7 && randomRating <= 8 && <p>Very Good</p> || randomRating > 8 && randomRating <= 10 && <p>Excellent</p>}
                                                        </div>
                                                    </div>
                                                  
                                                    <div className="bg-blue-800 text-white p-[7px] font-semibold rounded-[10px]">
                                                        <p>{randomRating}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-[#8a2be2] text-[12px] underline cursor-pointer mt-1 text-left">{val.location}</h3>

                                            <div className="flex mt-2 justify-between -ml-2">

                                                <div className="flex">
                                                    {
                                                        Array.from({ length: randomNumber }, (_, index) => {
                                                            return (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 50" height={"40px"} width={"28px"} >
                                                                    <path fill={"green"} d="M16.29 19.72c4.22-4.22 8.4-17.56 6.7-19.26S7.95 2.93 3.73 7.16C.67 10.22.62 15.58 3.5 18.98L15.62 6.86c.29-.29.77-.29 1.06 0s.29.77 0 1.06L4.57 20.03l-2.14 2.14c-.29.29-.29.77 0 1.06s.77.29 1.06 0l2.34-2.34c3.34 1.88 7.78 1.51 10.46-1.17Z" />
                                                                </svg>
                                                            )
                                                        })
                                                    }

                                                    {
                                                        Array.from({ length: difference }, (_, index) => {
                                                            return (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 50" height={"40px"} width={"28px"} >
                                                                    <path fill={"black"} d="M16.29 19.72c4.22-4.22 8.4-17.56 6.7-19.26S7.95 2.93 3.73 7.16C.67 10.22.62 15.58 3.5 18.98L15.62 6.86c.29-.29.77-.29 1.06 0s.29.77 0 1.06L4.57 20.03l-2.14 2.14c-.29.29-.29.77 0 1.06s.77.29 1.06 0l2.34-2.34c3.34 1.88 7.78 1.51 10.46-1.17Z" />
                                                                </svg>
                                                            )
                                                        })
                                                    }
                                                   
                                                    <p className="font-normal text-[13px] text-red-700 ms-2 ">Travel Sustainable Level {randomNumber}</p>
                                                </div>
                                                <p className="text-2xl font-semibold">₹ {Math.floor(val.avgCostPerNight)}</p>

                                            </div>

                                            <p className="font-normal text-sm text-left">Located 820 feet from the new Digha sea beach, this OYO hotel is equipped with an in-house restaurant and free breakfast is served to the guests. </p>

                                            <div className="mt-3 flex justify-end">
                                                <Button className="bg-[#006ce4] p-[7px] text-white w-[30%] rounded-md" text="See Availability" onClick={()=>{seeSingleHotel(val._id)}}></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <FooterStays/>
        </div>
    )
}

export default HotelList;
