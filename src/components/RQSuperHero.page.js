import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const fetchHeroById = async ({ queryKey }) => {
  const heroId = queryKey[1]; // Extract heroId from queryKey
  const response = await axios.get(
    `http://localhost:4000/superheroes/${heroId}`
  );
  return response.data;
};

export const RQSuperHeroPage = () => {
  const { heroId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["hero", heroId],
    queryFn: fetchHeroById,
  });

  return (
    <div>
      <h2>RQ Super Hero Details</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching hero details: {error.message}</p>}
      {data && (
        <div>
          <h3>{data.name}</h3>
          <p>Alter Ego: {data.alterEgo}</p>
          <p>Power: {data.power}</p>
        </div>
      )}
    </div>
  );
};
