import useSWR, { mutate } from "swr";

export function useTodos(): { data?: any | undefined; } {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  return useSWR("/api/todos", fetcher);
}

export function refreshTodos() {
  mutate("/api/todos");
}