// import md5 from "md5";
// import axios from "axios";
import { useEffect, useState } from "react";
import HeroesList from "../heroesList";
import dataJson from "./application.json";
export default function GetHeroesList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(dataJson);
  useEffect(() => {
    if (data.length > 0) setIsLoading(false);
  }, [data]);
  if (isLoading && !data) return <p>Loading ...</p>;
  return <HeroesList data={data.data.results} />;
}
