import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const RQSuperHeroesPage = () => {
  const { isPending, error, data, isError } = useQuery({
    queryKey: ["super-heroes"],
    queryFn: () => {
      return axios.get("http://localhost:4000/superheroes");
    },
  });
  if (isPending) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.map((hero) => {
        return <div>{hero.name}</div>;
      })}
    </div>
  );
};
