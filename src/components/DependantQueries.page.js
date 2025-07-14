import { useQueries, useQuery } from "@tanstack/react-query";

import axios from "axios";

const fetchHeroes = async (heroId) => {
  const response = await axios.get(
    `http://localhost:4000/superheroes/${heroId}`
  );
  return response.data;
};
export const DependantQueries = ({ emailId }) => {
  const { data: user } = useQuery({
    queryKey: ["user", emailId],
    queryFn: () => {
      return axios.get(`http://localhost:4000/users/${emailId}`);
    },
  });
  const courseId = user?.data?.courseId;
  useQuery({
    queryKey: ["courses", courseId],
    queryFn: () => {
      return axios.get(`http://localhost:4000/courses/${courseId}`);
    },
    enabled: !!courseId, // Only run this query if courseId is available
  });
  return (
    <div>
      <h2>Dynamic Parallel Queries Page</h2>
      <p>
        This page demonstrates how to handle parallel queries using React Query.
      </p>
    </div>
  );
};
