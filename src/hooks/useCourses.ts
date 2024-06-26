import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

interface Course {
  _id: string;
  dept: string;
  code: string;
  cred: number;
  link: string;
  name: string;
  desc: string;
  prer?: string;
  crer?: string;
  preq: string[];
  creq: string[];
}

const useCourses = () =>
  useQuery<Course[], Error>({
    queryKey: ["courses"],
    queryFn: () => apiClient.get<Course[]>("").then((res) => res.data),
    staleTime: 1000 * 60 * 1, // 1 minute
  });

export default useCourses;
