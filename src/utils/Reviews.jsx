import StarRating from "./StarRating";

export default function Reviews({ reviews, rating }) {
  return (
    <div>
      {reviews.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex justify-center ">
              <p>{item.username}</p>
              <span>
                <StarRating rating={rating} />
              </span>
            </div>
            <div>{item.description}</div>
          </div>
        );
      })}
    </div>
  );
}
