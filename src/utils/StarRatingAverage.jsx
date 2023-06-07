import StarRating from "./StarRating";

const StarRatingAverage = ({ ratings = [] }) => {
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
    <div className="px-2 py-1">
      <StarRating rating={averageRating} />
    </div>
  );
};

export default StarRatingAverage;
