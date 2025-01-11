import dateFormat from 'dateformat';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const myContext = createContext();

const ContextProvider = (props) => {
    // const [dateValue,setDateValue] = useState(dateFormat(new Date(),"ddd dd mmm"));
   
    const navigate = useNavigate();
    const [wishListArr, setWishListArr] = useState([]);
    const [startDate,setStartDate] = useState(dateFormat(new Date()).split(" ").slice(0,3).join(" "));
    const [endDate,setEndDate] = useState(dateFormat(new Date()+7).split(" ").slice(0,3).join(" "));
    const [flexiblePrice,setFlexiblePrice] = useState(true);
    const [childrenCount, setChildrenCount] = useState(0);
    const [roomCount, setRoomCount] = useState(1);
    const [adultCount, setAdultCount] = useState(1);
    const [navSelector, setNavSelector] = useState(
        {
          source:"Mumbai",
          destination:"Delhi"
        }
      );
      const handleChange = (e)=>{
        let updated = {...navSelector};

        updated[e.target.name] = e.target.value;
        
        setNavSelector(updated);
    }
    const [economy,setEconomy] = useState("Economy");
    const economyChange = (e)=>setEconomy(e.target.value);

    const [userDetail,setUserDetail] = useState({
      firstname :"",
      lastname:"",
      gender:"",
      email:"",
      phone:""
  });

  const [stayUserDetail,setStayUserDetail] = useState({
    firstname :"",
    lastname:"",
    email:"",
    phone:""
});

const handleStayInput=(e)=>{
  let updated = {...stayUserDetail};
  updated[e.target.name] = e.target.value;
  console.log(updated);
  setStayUserDetail(updated);
}
  const [searchCity, setSearchCity] = useState("Delhi");

  const handleInput=(e)=>{
      let updated = {...userDetail};
      updated[e.target.name] = e.target.value;
      console.log(updated);
      setUserDetail(updated);
  }


    const [stay,setStay] = useState(0);  // handle style of flight and stay border
    const handleClick = (val)=>{
        setStay(val);
        if(val==1)
            navigate('/flight');
        else
            navigate('/');
    }

    useEffect(()=>{
      const wishListItems = localStorage.getItem('wishList');
      if (wishListItems) 
      {
        setWishListArr(JSON.parse(wishListItems));
      }
    },[])
  return (
    <myContext.Provider value={{startDate,endDate,childrenCount,adultCount, roomCount, stay,flexiblePrice, navSelector,
      economy,userDetail,searchCity, wishListArr,stayUserDetail,
      setNavSelector, economyChange, handleChange, setFlexiblePrice, handleClick, setRoomCount, setAdultCount, setChildrenCount,
      setStartDate,setEndDate, handleInput, setSearchCity, setWishListArr, handleStayInput}}>
      {props.children}
    </myContext.Provider>
  )
}

export { ContextProvider, myContext};
