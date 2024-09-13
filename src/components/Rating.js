import { useState } from "react";
import { FaStar } from "react-icons/fa6";

const stars = [1, 2, 3, 4, 5];

const StarPage = () => {
  const [rating, setRating] = useState(0);
  const handleChangerating = (difRating) => {
    setRating(difRating);
  };
  return (
    <div className="flex mx-auto w-fit">
      {stars.map((star) => {
        return (
          <FaStar
            key={star}
            color={rating >= star ? "#eba834" : "grey"}
            onClick={() => handleChangerating(star)}
            className="w-16 h-16"
          />
        );
      })}
    </div>
  );
};
export default StarPage;
