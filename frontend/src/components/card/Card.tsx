import { FC } from "react";
import { Place } from "../../types/Tpes";
import { Link } from "react-router-dom";
import Status from "./Status";
import Rating from "./Rating";

interface Props {
  place: Place;
}

const Card: FC<Props> = ({ place }) => {
  return (
    <Link
      to={`/place/${place.id}`}
      className="border border-zinc-300 rounded-md p-4 gap-3 grid grid-cols-3 min-h-[300px] hover:shadow-md transition-all duration-300"
    >
      <div className="mr-4">
        <img
          src={place.image_url}
          alt={place.name}
          className="size-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">{place.name}</h1>
            <Status availability={place.availability} />
          </div>
          <p className="text-sm text-zinc-500">{place.location}</p>
          <div className="flex gap-4 mb-2">
            {place.amenities.slice(0, 2).map((i, key) => (
              <span
                key={key}
                className="border py-1 px-2 rounded-md border-zinc-300"
              >
                {i}
              </span>
            ))}
          </div>
          <div>
            <Rating rating={place.rating} />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <span className="text-2xl font-bold">${place.price_per_night}</span>
          <span className="text-xs text-gray-500">
            vergiler ve ücretler dahil
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
