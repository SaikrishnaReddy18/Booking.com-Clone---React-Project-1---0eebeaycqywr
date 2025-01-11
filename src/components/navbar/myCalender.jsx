import React, { useContext, useEffect } from 'react'
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { myContext } from '../contextApi/usercontextprovider';
import dateFormat from 'dateformat';

function MyCalender() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection"
    }
  ]);

  const {setStartDate,setEndDate} = useContext(myContext);
//   const { setStartWeekDay } = useContext(UserContext);

//   const { setStartDate} = useContext(UserContext);

//   const {setEndDate} = useContext(UserContext);

//   const {setEndWeekDay} = useContext(UserContext);

//   const {setStartYear} = useContext(UserContext);

//   const {setEndYear} = useContext(UserContext);
    const [startWeekDay, setStartWeekDay] = useState("Day");

    const [endWeekDay, setEndWeekDay] = useState("Day"); 

    // const [startDate, setStartDate] = useState("Check-in Date");

    // const [endDate, setEndDate] = useState("Check-out-Date");

    const [startYear, setStartYear] = useState("Year");

    const [endYear, setEndYear] = useState("Year");


  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];


    

  useEffect(()=>{
    
  state.forEach(dateObj => {
      let startDate = new Date(dateObj.startDate);
      let endDate = new Date(dateObj.endDate);
      
      var diffDays = startDate.getDate() - endDate.getDate(); 
      console.log(diffDays);
      
    const startDay = startDate.getDate();
    const startMonth = startDate.getMonth();
    const startWeek = startDate.getDay();
    const startYear = startDate.getFullYear();

    const endDay = endDate.getDate();
    const endMonth = endDate.getMonth();
    const endWeek = endDate.getDay();
    const endYear = startDate.getFullYear();
    // console.log(startDate+" "+startMonth+" "+startYear);
    // console.log(endDate+" "+endMonth+" "+endYear);
    setStartDate(dateFormat(startDate, "ddd dd mmm"));
    setEndDate(dateFormat(endDate, "ddd dd mmm"));

    setStartWeekDay(`${daysOfWeek[startWeek]}`);
    setEndWeekDay(`${daysOfWeek[endWeek]}`);
    setStartDate(`${startDay} ${month[startMonth]}`);
    setEndDate(`${endDay} ${month[endMonth]}`);
    setStartYear(startYear);
    setEndYear(endYear);
  });
  },[state]);


  return (
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
  );
}


export default MyCalender;