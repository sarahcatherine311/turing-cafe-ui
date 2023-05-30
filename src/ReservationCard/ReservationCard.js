import React from "react";

const ReservationCard = ({ reservationInfo }) => {
  return(
    <div className="reservation-card">
      <h1>{reservationInfo.name}</h1>
      <p>{reservationInfo.date}</p>
      <p>{reservationInfo.time}</p>
      <p>{reservationInfo.numGuests}</p>
    </div>
  )
}

export default ReservationCard;