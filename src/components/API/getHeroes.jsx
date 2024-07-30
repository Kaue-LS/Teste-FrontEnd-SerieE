// import md5 from "md5";
// import axios from "axios";
import { useEffect, useState } from "react";
import HeroesList from "../heroesList";
// import dataJson from "./application.json";
import ApplyModel from "./applyModel";
export default function GetHeroesList() {
  const filteredData = ApplyModel();

  const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState(dataJson);
  useEffect(() => {
    if (filteredData.length > 0) setIsLoading(false);
  }, [filteredData]);
  if (isLoading && !filteredData) return <p>Loading ...</p>;
  return <HeroesList data={filteredData} />;
}
