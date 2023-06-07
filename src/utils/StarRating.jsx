import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function StarRating({ rating }) {
  const hasHalfStar = rating % 1 !== 0 ? 1 : 0;
  const filledStarsCount = Math.ceil(rating) - hasHalfStar;
  const emptyStarsCount = 5 - Math.floor(rating) - hasHalfStar;

  console.log(hasHalfStar)
  console.log(filledStarsCount)
  console.log(emptyStarsCount)
  console.log(typeof rating)
  console.log(rating)

  const stars = [];
  for (let i = 0; i < filledStarsCount; i++) {
    stars.push(<FaStar key={i} />);
  }
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" />);
  }
  for (let i = 0; i < emptyStarsCount; i++) {
    stars.push(<FaRegStar key="reg" />);
  }

  return <div className="flex gap-2">{stars}</div>;
}
