import md5 from "md5";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GetHeroData() {
  const baseUrl = "https://gateway.marvel.com:443/v1/public/characters";
  const privateKey = "7a6334685a561d4aa8b51503059fa5b464dfe62d";
  const publicKey = "d74ae6bf126c577376e1780c2ce9c79c";
  const { heroId } = useParams();
  const ts = new Date().getTime();
  const hash = md5(ts + privateKey + publicKey);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${baseUrl}/${heroId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
        );
        // Verificar se a estrutura de dados está correta
        if (response.data && response.data.data && response.data.data.results) {
          setData(response.data.data.results[0]); // Pegue o primeiro resultado
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
  }, [baseUrl, ts, hash, heroId]);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;
  if (!data) return <p>No data found for heroId: {heroId}</p>;

  console.log(data);
  return (
    <section>
      <div>{/* header */}</div>
      {/* details */}
      <div>
        <div>
          <div>
            <h1>{data.name}</h1>
            {/*Icon  */}
          </div>
          <p>{data.description}</p>
        </div>
        <aside>
          {data.thumbnail && (
            <img
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              alt={data.name}
            />
          )}
        </aside>
      </div>

      {/* lançamentos */}
      <div>
        <h3>Últimos lançamentos</h3>

        <div>
          <div>
            <img src="" alt="capa" />
            <p>Nome</p>
          </div>
        </div>
      </div>
    </section>
  );
}
