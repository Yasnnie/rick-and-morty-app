import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const api = axios.create({
  baseURL: BASE_URL,
});

export async function getCharacters(page: number) {
  return await api.get(`/character?page=${page}`);
}
