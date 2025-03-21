import { FC } from "react";

interface Props {
  rating: number;
  expanded?: boolean;
}

const Rating: FC<Props> = ({ rating, expanded = false}) => {
  const color =
    rating > 4.7
      ? "bg-blue-500"
      : rating > 4
      ? "bg-green-500"
      : rating > 3
      ? "bg-yellow-500"
      : "bg-red-500";

    const text = rating > 4.7
    ? "Çok İyi"
    : rating > 4
    ? "İyi"
    : rating > 3
    ? "Orta"
    : "Kötü";
  return (
    <div>
      <span className={`p-2 rounded-lg font-bold w-fit ${color}`}>
        {rating}
      </span>
      {expanded && <span className="text-lg font-semibold ms-2">{text}</span>}
    </div>
  );
};

export default Rating;
