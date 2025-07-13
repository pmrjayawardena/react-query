import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

export const RQSuperHeroesPage = () => {
  //we created a custom hook to fetch data using react query
  const { isLoading, error, data, isError, isFetching, refetch } =
    useSuperHeroesData();

  // const { isLoading, error, data, isError, isFetching, refetch } = useQuery({
  //   queryKey: ["super-heroes"],
  //   queryFn: () => {
  //     return axios.get("http://localhost:4000/superheroes");
  //   },
  //   //gcTime: 5000, //you can see in query dev tool this query will get removed after 5 seconds
  //   //staleTime: 30000, //you can see in query dev tool this query will get stale after 30 seconds wait 30 seconds it will tirn into stale state
  //   refetchOnMount: true, //default is true if false data wont be refecth on component mount no network request calls will go
  //   //refetchInterval: 1000, //default is false if true data will be refecth every 1 second
  //   enabled: true, //default is true if false data wont be refecth no network request calls will go
  //   select: (data) => {
  //     const superHeroNames = data?.data.map((hero) => {
  //       return {
  //         id: hero.id,
  //         name: hero.name,
  //       };
  //     });
  //     return superHeroNames;
  //   },
  // });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Super Heroes</button>
      {data.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </div>
  );
};
