import StarRating from "../utils/StarRating"

export default function Reviews({ reviews, rating, }) {
  return (
    <div>
      {reviews.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex flex-col justify-center ">
              <div className="flex justify-start gap-3">
                <p>{item.username}</p>
                <StarRating rating={rating} />
              </div>
              <div>{item.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
