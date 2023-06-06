import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export default function StarRating ({ rating }) {
  const stars = [];
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} />);
    } else if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key={ i } />) * 1;
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return <div className="star-rating">{stars}</div>;
}
