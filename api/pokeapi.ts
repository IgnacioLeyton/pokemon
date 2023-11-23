import axios from "axios";

const pokeapi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

pokeapi.get("/pokemon?limit=151")

export default pokeapi;