import "./Rating.css";
import gray from "../image/stars.png";
import yellow from "../image/star.png";

const memberRating = [1, 2, 3, 4, 5];

export default function ratingMembers({ rating }) {
  return (
    <div className="rating">
      {memberRating.map((count) => (
        <img className="starRating" src={count <= rating ? yellow : gray} alt="star rating" />
      ))}
    </div>
  );
}
