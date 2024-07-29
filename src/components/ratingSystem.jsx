import { useState } from "react";
import StarInactive from "../assets/icons/starInactive";

const RatingInput = ({ rate, value, setRate, isChecked, onChange }) => {
  return (
    <div>
      <input
        value={value}
        onChange={() => onChange(value)}
        className={isChecked ? "checked" : ""}
        name="rating"
        type="radio"
        checked={isChecked}
      />
      <StarInactive />
    </div>
  );
};

export const RatingSystem = () => {
  const [rate, setRate] = useState(0);
  const maxRating = 5; // Máximo de estrelas para a classificação

  const handleRatingChange = (value) => {
    setRate(value);
  };

  return (
    <div>
      {Array.from({ length: maxRating }, (_, index) => (
        <RatingInput
          key={index + 1}
          value={index + 1}
          isChecked={rate >= index + 1}
          onChange={handleRatingChange}
        />
      ))}
    </div>
  );
};
