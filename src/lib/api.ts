import { useQuery } from "@tanstack/react-query";

const CMS_URL = import.meta.env.VITE_CMS_URL || "http://localhost:3000";
const API_URL = `${CMS_URL}/api`;
export async function fetchGlobal(slug: string) {
  const res = await fetch(`${API_URL}/globals/${slug}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch global: ${slug}`);
  }
  return res.json();
}

export async function fetchCollection(collection: string, queryParams: string = "") {
  const res = await fetch(`${API_URL}/${collection}${queryParams ? `?${queryParams}` : ""}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch collection: ${collection}`);
  }
  return res.json();
}

export function useGlobal(slug: string) {
  return useQuery({
    queryKey: ["global", slug],
    queryFn: () => fetchGlobal(slug),
  });
}

export function useCollection(collection: string, queryParams: string = "") {
  return useQuery({
    queryKey: ["collection", collection, queryParams],
    queryFn: () => fetchCollection(collection, queryParams),
  });
}
