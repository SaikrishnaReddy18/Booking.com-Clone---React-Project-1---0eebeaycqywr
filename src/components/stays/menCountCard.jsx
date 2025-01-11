import { useContext, useEffect, useState } from "react";
import Button from "../button/button";
import { myContext } from "../contextApi/usercontextprovider";

function MenCountCard() {
    const {childrenCount, setChildrenCount, adultCount, setAdultCount,roomCount, setRoomCount} = useContext(myContext);

    const handleChildClick = (val)=>{
        if(val=="Childrenminus")
        {
            if(childrenCount==0)
            setChildrenCount(0);
            else 
            setChildrenCount(childrenCount-1);
        }
        else if(val=="Childrenplus")
        {
            if(childrenCount+adultCount<9)
            setChildrenCount(childrenCount+1);
        }
        else if(val=="RoomCountminus")
        {
            if(roomCount==1)
                setRoomCount(1);   
            else
                setRoomCount(roomCount-1);
        }
        else if(val=="RoomCountplus")
        {
            if(roomCount<30)
            setRoomCount(roomCount+1);
        } 
        else if(val=="Adultminus")
        {
            if(adultCount==1)
            setAdultCount(1);
            else if(adultCount>1)
            setAdultCount(adultCount-1);
        } 
        else if(val=="Adultplus")
        {
            if(adultCount+childrenCount<9)
            setAdultCount(adultCount+1);
        }

    }
    return (
        <div className="ejdej w-[280px] border rounded-xl shadow-xl p-6 flex gap-1 flex-col">
            <div className="flex justify-between">
                <div className="font-semibold">Adult</div>
                <div className="border rounded p-4 py-2 flex gap-x-6 ">
                    <button className="px-2 hover:bg-sky-100" onClick={()=>{handleChildClick("Adultminus")}}>-</button>

                    <button className="font-semibold">{adultCount}</button>
                    <button className="px-2 hover:bg-sky-100" onClick={()=>{handleChildClick("Adultplus")}}>+</button>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="font-semibold">Children</div> 
                <div className="border rounded p-4 py-2 flex gap-x-6">
                    <button onClick={()=>{handleChildClick("Childrenminus")}} className="px-2 hover:bg-sky-100">-</button>
                    <button className="font-semibold">{childrenCount}</button>
                    <button onClick={()=>{handleChildClick("Childrenplus")}} className="px-2 hover:bg-sky-100">+</button>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="font-semibold">Rooms</div>
                <div className="border rounded p-4 py-2 flex gap-x-6">
                    <button className="px-2 hover:bg-sky-100" onClick={()=>{handleChildClick("RoomCountminus")}}>-</button>
                    <button className="font-semibold">{roomCount}</button>
                    <button className="px-2 hover:bg-sky-100" onClick={()=>{handleChildClick("RoomCountplus")}}>+</button>
                </div>
            </div>

            <div className="edndj">
                <Button  text="Done" className="w-[100%] bg-blue-600 text-white cursor-pointer p-2 " />
            </div>
        </div>
    )
}

export default MenCountCard;