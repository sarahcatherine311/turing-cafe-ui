import React from "react";
import "./ReservationCard.css"

const ReservationCard = ({ reservationInfo }) => {
  return(
    <div className="reservation-card">
      <h2 className="reservation-name">{reservationInfo.name}</h2>
      <p className="reservation-date">{reservationInfo.date}</p>
      <p className="reservation-time">{reservationInfo.time}</p>
      <p className="reservation-number">{reservationInfo.number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default ReservationCard;