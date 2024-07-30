import { useEffect, useState } from "react";
import HeroesList from "../heroesList";
import { useApiContext } from "../context/apiContext";
export default function GetHeroesList() {
  const { filteredData } = useApiContext();
  const data = filteredData;

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (data.length > 0) setIsLoading(false);
  }, [data]);
  if (isLoading && !data) return <p>Loading ...</p>;
  return <HeroesList data={data} />;
}
