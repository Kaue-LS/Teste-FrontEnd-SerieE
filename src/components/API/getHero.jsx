import md5 from "md5";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroInfo from "../heroInfo";

export default function GetHeroData() {
  const baseUrl = "https://gateway.marvel.com:443/v1/public/characters";
  const privateKey = process.env.REACT_APP_PRIVATE_KEY;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const { heroId } = useParams();
  const ts = new Date().getTime();
  const hash = md5(ts + privateKey + publicKey);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isLoading && privateKey && publicKey) {
      async function fetchData() {
        try {
          const response = await axios.get(
            `${baseUrl}/${heroId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
          );

          if (
            response.data &&
            response.data.data &&
            response.data.data.results
          ) {
            setData(response.data.data.results[0]);
          } else {
            console.error("Unexpected response structure:", response.data);
          }
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setError(error);
          setIsLoading(false);
        }
      }

      fetchData();
    }
  }, [baseUrl, ts, hash, heroId, isLoading, privateKey, publicKey]);
  if (!privateKey) {
    return <h1>ERROR Cant Find Private Key</h1>;
  }
  if (!publicKey) {
    return <h1>ERROR Cant Find Public Key</h1>;
  }

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;
  if (!data) return <p>No data found for heroId: {heroId}</p>;

  return <HeroInfo data={data} />;
}
