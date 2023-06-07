import StarRating from "../utils/StarRating"

export default function Reviews({ reviews, rating }) {
  return (
    <div>
      {reviews.map((item, i) => {
        return (
          <div key={i}>
            <div className="flex flex-col justify-center miniCard">
              <div className="flex justify-start gap-3 border-b py-1">
                <p className="font-semibold">{ item.username }</p>
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
