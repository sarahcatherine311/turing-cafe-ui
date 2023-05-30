import React from "react";
import './Reservations.css'
import ReservationCard from "../ReservationCard/ReservationCard";

const Reservations = ({ reservations, deleteReservation }) => {
  return(
    <div className="reservations-section">
      {reservations.map(reservation => <ReservationCard key={reservation.id} reservationInfo={reservation} deleteReservation={deleteReservation}/>)}
    </div>
  )
}

export default Reservations;