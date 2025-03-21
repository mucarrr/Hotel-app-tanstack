import { FC } from "react";
import { useParams } from "react-router-dom";
import { usePlace } from "../../utils/service";
import Loader from "../../components/loader/Loader";
import Error from "../../components/error/Error";
import Images from "./images";
import Info from "./Info";
import Overview from "./Overview";
import Button from "./Button";
import Container from "./Container";

const Details: FC = () => {
  const { id } = useParams();
  const { isLoading, error, data, refetch } = usePlace(id as string);
  if (isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    );
  if (error)
    return (
      <Container>
        <Error message="Bir hata oluştu" onRetry={refetch} />
      </Container>
    );
  if (!data)
    return (
      <Container>
        <Error message="Konaklama noktası bulunamadı" onRetry={refetch} />
      </Container>
    );

  return (
    <Container>
      <Images image={data.place.image_url} />
      <Info place={data.place} />
      <Overview place={data.place} />
      <Button id={data.place.id} />
    </Container>
  );
};

export default Details;
