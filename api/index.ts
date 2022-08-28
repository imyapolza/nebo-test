import axios from "axios";
import { ResponseSearch } from "./types";

const instance = axios.create({
  baseURL: "https://swapi.dev/api/",
});

export const CharacterApi = {
  async search(searchTerm: string): Promise<ResponseSearch> {
    const { data } = await instance.get<string, { data: ResponseSearch }>(
      `/people?search=${searchTerm}`
    );
    return data;
  },
  async page(activePage: string): Promise<ResponseSearch> {
    const { data } = await instance.get<number, { data: ResponseSearch }>(
      `/people?page=${activePage}`
    );
    return data;
  },
};
