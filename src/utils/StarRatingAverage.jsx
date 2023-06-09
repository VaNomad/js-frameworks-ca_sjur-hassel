import StarRating from "./StarRating";

export default function StarRatingAverage({ ratings }) {
  const calculateAverageRating = () => {
    if (ratings.length === 0) {
      return 0;
    }

    const sum = ratings.reduce((total, rating) => total + rating, 0);
    const average = sum / ratings.length;
    return average;
  };

  const averageRating = calculateAverageRating();

  return (
    <div>
      <StarRating rating={averageRating} />
    </div>
  );
}
