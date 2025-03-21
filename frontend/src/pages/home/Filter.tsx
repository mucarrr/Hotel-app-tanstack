import { FC } from "react";
import { sortOptions } from "../../utils/constants";
import { usePlaces } from "../../utils/service";
import { useSearchParams } from "react-router-dom";

const Filter: FC = () => {
  const { data } = usePlaces();
  const [searchParams, setSearchParams] = useSearchParams();
  const locations = [...new Set(data?.map((place) => place.location))]; //new Set tekrar eden isimleri iptal eder, bir kere yazdirir // [...new Set] diziye cevirdi

  const handleChange = (name: string, value: string): void => {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };
  return (
    <form className="lg:mt-15 flex flex-col gap-4 lg:gap-10 lg:sticky lg:top-10">
      <div className="field">
        <label htmlFor="">Nereye Gitmek Istiyorsunuz?</label>
        <select
          className="input"
          value={searchParams.get("location") || ""}
          onChange={(e) => handleChange("location", e.target.value)}
        >
          <option value="">Seçiniz</option>
          {locations?.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="">Konaklama yeri adına göre ara</label>
        <input
          type="text"
          className="input"
          placeholder="orn: Seaside Villa"
          value={searchParams.get("name") || ""}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="">Sıralama Ölçütü</label>
        <select
          className="input"
          value={searchParams.get("order") || ""}
          onChange={(e) => handleChange("order", e.target.value)}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end">
        <button
          type="reset"
          onClick={() => setSearchParams({})}
          className="bg-blue-500 p-1 px-4 text-white rounded-md w-fit"
        >
          Filtreleri Temizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
