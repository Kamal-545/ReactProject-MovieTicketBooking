import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomeComponent/HomePage";
import MovieDetailsPage from "./Components/MoviesComponents/MovieDetailsPage";
import MovieShowtimes from "./Components/ThreatresComponent/TheatresDetails";
import Seats1 from "./Components/SeatsComponent/Seats1";
import Seats2 from "./Components/SeatsComponent/Seats2";
import BookingSummary from "./Components/BookingSummary/BookingSummary";
import TicketPage from "./Components/TicketGeneration/TicketGeneration";
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/movie/:title" element={<MovieDetailsPage/>}/>
      <Route path="/TheatreDetails" element={<MovieShowtimes/>}/>
      <Route path="/Seats1" element={<Seats1/>}/>
      <Route path="/Seats2" element={<Seats2/>}/>
      <Route path="/booking-summary" element={<BookingSummary/>}/>
      <Route path="/TicketPage" element={<TicketPage/>}/>

     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
