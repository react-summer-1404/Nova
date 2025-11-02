import { useQuery } from "@tanstack/react-query";
import { getTechs } from "../servises/api/landing/topCategories";

export default function useTechs() {
  return useQuery({
    queryKey: ["techs"],
    queryFn: getTechs,
    staleTime: 5 * 60 * 1000,
    cacheTime: 5 * 60 * 1000,
  });
}