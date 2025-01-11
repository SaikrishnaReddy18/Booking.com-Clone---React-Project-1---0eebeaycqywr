import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Flightsearch from "./view/flightSearch/flightsearch";
import FlightHome from "./view/flightHome/flightHome";
import TicketType from "./view/travelerDetails/ticketType";
import Flying from "./view/travelerDetails/flying";
import Checkout from "./view/travelerDetails/checkout";
import Payment from "./view/travelerDetails/payment";
import FormDetails from "./stays/formDetails/formDetails";
import StayHome from "./stays/stayHome/stayHome";
import HotelList from "./hotel/hotelList";
import SingleHotelInfo from "./stays/singleHotelInfo/singleHotelInfo";
import HotelPayment from "./stays/hotelPayment/hotelPayment";
import { ContextProvider } from "./contextApi/usercontextprovider";
import FlightBooking from "./view/travelerDetails/flightBooking";
import Wishlist from "./hotel/wishlist";
import Register from "./register login/register";
import Login from "./register login/login";
import OrderHistory from "./history/orderHistory";
import OrderSucces from "./stays/hotelPayment/orderSucces";

function App() {
  return <div className="App">
    <ContextProvider>
      <Routes>
        <Route path="/" element={<StayHome/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="/formDetails/:id" element={<FormDetails/>}/>
        <Route path="/flight" element={<FlightHome/>}/>
        <Route path="/singlehotal/:id" element={<SingleHotelInfo/>}/>
        <Route path="/hotalList" element={<HotelList/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/history" element={<OrderHistory/>}/>
        <Route path="/ordersuccess" element={<OrderSucces/>}/>

        <Route path="/flightsearch" element={<Flightsearch/>}/>
        <Route path="/hotelPayment" element={<HotelPayment/>}/>
        <Route path="/ticketType" element={<TicketType/>}/>
        <Route path="/flying" element={<Flying/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/flightBooking" element={<FlightBooking/>}/>
      </Routes>
    </ContextProvider>
  </div>;
}

export default App;
