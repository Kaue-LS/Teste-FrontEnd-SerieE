import { useState } from "react";

const RatingInput = ({ rate, value, isChecked, onChange }) => {
  return (
    <div className={`star ${isChecked ? "checked" : ""}`}>
      <input
        value={value}
        onChange={() => onChange(value)}
        name="rating"
        type="radio"
        checked={rate === value}
      />
    </div>
  );
};

export const RatingSystem = () => {
  const [rate, setRate] = useState(0);
  const maxRating = 5;

  const handleRatingChange = (value) => {
    setRate(value);
  };

  return (
    <div className="content">
      {Array.from({ length: maxRating }, (_, index) => (
        <RatingInput
          rate={rate}
          key={index + 1}
          value={index + 1}
          isChecked={rate >= index + 1}
          onChange={handleRatingChange}
        />
      ))}
    </div>
  );
};
