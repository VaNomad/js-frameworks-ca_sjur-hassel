import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function StarRating({ rating }) {
  const hasHalfStar = rating % 1 !== 0 ? 1 : 0;
  const filledStarsCount = Math.ceil(rating) - hasHalfStar;
  const emptyStarsCount = 5 - Math.floor(rating) - hasHalfStar;
  const stars = [];

  for (let i = 0; i < filledStarsCount; i++) {
    stars.push(<FaStar key={i} />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" />);
  }

  for (let i = 0; i < emptyStarsCount; i++) {
    stars.push(<FaRegStar key={i} />);
  }

  return <div className="flex gap-2">{stars}</div>;
}
