import StarRating from "./StarRating";

export default function StarRatingAverage({ratings}) {
  function calculateAverage() {
    if (ratings.length === 0) {
      return 0;
    }

    const sum = ratings.reduce((total, rating) => total + rating, 0);
    const average = sum / ratings.length;
    return average;
  }
  const averageRating = calculateAverage();

  return (
    <div>
      <StarRating rating={ averageRating } />
      <div>
        <p>Average Rating: {averageRating.toFixed(2)}</p>
      </div>
    </div>
  )
}