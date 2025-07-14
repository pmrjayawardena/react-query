import { useQuery } from "@tanstack/react-query";

import axios from "axios";

const fetchHeroes = async () => {
  const response = await axios.get("http://localhost:4000/superheroes");
  return response.data;
};
const fetchFriends = async () => {
  const response = await axios.get("http://localhost:4000/friends");
  return response.data;
};
export const ParallelQueriesPage = () => {
  // This page is intended to demonstrate how to handle parallel queries
  // using React Query. You can implement your logic here.

  // For example, you might want to fetch multiple resources in parallel
  // and display their results.

  // Placeholder for parallel queries logic
  // You can use useQuery or any other React Query hooks to fetch data
  // from multiple endpoints simultaneously.
  // Example:
  const { data: heroesData } = useQuery({
    queryKey: ["super-heroes"],
    queryFn: fetchHeroes,
  });
  const { data: friendsData } = useQuery({
    queryKey: ["friends"],
    queryFn: fetchFriends,
  });

  return (
    <div>
      <h2>Parallel Queries Page</h2>
      <p>
        This page demonstrates how to handle parallel queries using React Query.
      </p>
    </div>
  );
};
