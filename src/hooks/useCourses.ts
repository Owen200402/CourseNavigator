import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

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

const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<Course[]>("", { signal: controller.signal })
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

      return () => controller.abort();
  }, []);

  return { courses, setCourses, error, isLoading }; 
};

export default useCourses;
