import React from "react";
import ReservationCard from "../ReservationCard/ReservationCard";

const Reservations = ({ reservations }) => {
  return(
    <div className="reservations-section">
      {reservations.map(reservation => <ReservationCard key={reservation.id} reservationInfo={reservation}/>)}
    </div>
  )
}

export default Reservations;