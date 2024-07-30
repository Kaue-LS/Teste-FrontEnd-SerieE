import { useEffect, useState } from "react";
import HeroesList from "../heroesList";
import { useApiContext } from "../context/apiContext";
import Loading from "../loading";
export default function GetHeroesList() {
  const { modifiedData } = useApiContext();
  const data = modifiedData;

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (data.length > 0) setIsLoading(false);
  }, [data]);
  if (isLoading && !data) return <Loading />;
  return <HeroesList data={data} />;
}
