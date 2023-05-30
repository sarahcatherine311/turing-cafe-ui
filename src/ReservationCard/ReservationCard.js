import React from "react";
import "./ReservationCard.css"

const ReservationCard = ({ reservationInfo }) => {
  return(
    <div className="reservation-card">
      <h2>{reservationInfo.name}</h2>
      <p>{reservationInfo.date}</p>
      <p>{reservationInfo.time}</p>
      <p>{reservationInfo.number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default ReservationCard;