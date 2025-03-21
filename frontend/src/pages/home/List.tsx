import { FC } from "react";
import { usePlaces } from "../../utils/service";
import Loader from "../../components/loader/Loader";
import Error from "../../components/error/Error";
import Card from "../../components/card/Card";
import { useSearchParams } from "react-router-dom";

const List: FC = () => {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  const { data, isLoading, error, refetch } = usePlaces(params);

  if (isLoading) return <Loader />;
  if (error) return <Error message={error.message} onRetry={() => refetch()} />; //refetch de tanstack query den geliyor refetch ile tekrar api istegi atilir

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">Yakınınızdaki Lokasyonlar</h1>
      <div className="grid gap-5 mt-5">
        {data?.map((place) => (
          <Card key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default List;
