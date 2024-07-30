import { useCallback, useEffect, useState } from "react";
import APIJson from "./application.json";
export default function ApplyModel() {
  const dataJson = APIJson;
  const [filteredData, setFilteredData] = useState([]);
  const ApplyFavoriteRow = useCallback(async () => {
    const response = dataJson.data.results
      .filter((item) => item.name && item.name.length > 0)
      .map((item) => ({
        ...item,
        favorite: false,
      }));
    setFilteredData(response);
  }, [dataJson.data.results]);

  useEffect(() => {
    ApplyFavoriteRow();
  }, [ApplyFavoriteRow]);
  return filteredData;
}
