// import md5 from "md5";
// import axios from "axios";
import { useEffect, useState } from "react";
import HeroesList from "../heroesList";
import dataJson from "./application.json";
export default function GetHeroesList() {
  // const baseUrl = "https://gateway.marvel.com:443/v1/public/characters?";
  // const privateKey = "7a6334685a561d4aa8b51503059fa5b464dfe62d";
  // const publicKey = "d74ae6bf126c577376e1780c2ce9c79c";
  // const ts = new Date().getTime();
  // const hash = md5(ts + privateKey + publicKey);
  const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);
  const [data, setData] = useState(dataJson);
  // useEffect(() => {
  //   async function fetchData(limit = 100, offset = 0) {
  //     try {
  //       const response = await axios.get(
  //         `${baseUrl}ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=100&offset=100`
  //       );
  //       // Verificar se a estrutura de dados está correta
  //       if (response.data && response.data.data && response.data.data.results) {
  //         setData(response.data.data.results);
  //       } else {
  //         console.error("Unexpected response structure:", response.data);
  //       }
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, [baseUrl, ts, hash]);
  useEffect(() => {
    if (data.length > 0) setIsLoading(false);
  }, [data]);
  if (isLoading && !data) return <p>Loading ...</p>;
  return <HeroesList data={data.data.results} />;
}
