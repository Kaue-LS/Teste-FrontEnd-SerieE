import md5 from "md5";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import HeroesList from "./heroesList";
import { UseHeroesContext } from "./context/heroesContext";

export default function GetHeroesList() {
  const { data, isLoading } = UseHeroesContext();
  // if (isLoading) return <p>Loading ... </p>;
  // const baseUrl = "https://gateway.marvel.com:443/v1/public/";
  // const privateKey = "7a6334685a561d4aa8b51503059fa5b464dfe62d";
  // const publicKey = "d74ae6bf126c577376e1780c2ce9c79c";
  // const ts = new Date().getTime();
  // const hash = md5(ts + privateKey + publicKey);
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);

  // console.log({ ts });
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get(
  //         `${baseUrl}/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  //       );
  //       // console.log(response.data);
  //       setData(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, [baseUrl, ts, hash]);

  if (isLoading && !data) return <p>Loading .. .</p>;
  return <HeroesList data={data.data.results} />;
}
