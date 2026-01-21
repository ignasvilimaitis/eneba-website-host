const API = import.meta.env.VITE_API_URL;

export async function gameLoad(search = "") {
  const url = new URL(`${API}/list`);
  if (search) url.searchParams.set("search", search);

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch games");
  return res.json();
}
