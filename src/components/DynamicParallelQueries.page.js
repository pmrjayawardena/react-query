import { useQueries, useQuery } from "@tanstack/react-query";

import axios from "axios";

const fetchHeroes = async (heroId) => {
  const response = await axios.get(
    `http://localhost:4000/superheroes/${heroId}`
  );
  return response.data;
};
export const DynamicParallelQueries = ({ heroIds }) => {
  // This page is intended to demonstrate how to handle dynamic parallel queries
  // using React Query. You can implement your logic here.
  // For example, you might want to fetch multiple resources in parallel
  // based on the provided heroIds and display their results.
  // Placeholder for dynamic parallel queries logic
  // You can use useQuery or any other React Query hooks to fetch data

  const queryResults = useQueries({
    queries: heroIds.map((heroId) => {
      return {
        queryKey: ["super-hero", heroId],
        queryFn: () => fetchHeroes(heroId),
      };
    }),
  });

  console.log({ queryResults });

  return (
    <div>
      <h2>Dynamic Parallel Queries Page</h2>
      <p>
        This page demonstrates how to handle parallel queries using React Query.
      </p>
    </div>
  );
};
