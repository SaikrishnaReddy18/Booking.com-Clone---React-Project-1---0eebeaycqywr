import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { myContext } from "../contextApi/usercontextprovider";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position:"absolute",right:"16px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position:"absolute",zIndex: "1",left:"-6px"}}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider({arrValue}) {
  const {startDate,endDate,navSelector ,setNavSelector} = useContext(myContext);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const navigate = useNavigate();

  const handleClick = (sourceName,destName)=>{
    console.log(sourceName,destName);
    let updated = {...navSelector,source:sourceName,destination:destName};
    setNavSelector(updated);
    navigate('/flightsearch');
  }
  
  return (
    <div className="mt-4 z-0">
    <Slider {...settings} className="mt-4">
      {
        arrValue.map((i)=>{
          return(<div className="flex flex-col gap-4" onClick={()=>{handleClick(i.source,i.destination)}}>
            <div style={{display:"flex", gap:"20px"}}>
              <img src={i.img} className="rounded w-[300px] h-40 sm:mr-5" style={{ marginRight: "20px" }}/>
            </div>
            <h2 className="text-left ml-1 font-semibold">{i.source} to {i.destination}</h2>
            <p className="text-left ml-1 text-[12px]">{startDate} . One way</p>
          </div>)
        })
      }
      
    </Slider>
    </div>
  );
}