import { useCallback, useEffect, useState } from "react";
import { useApiContext } from "../context/apiContext";

export default function ApplyModel({ dataJson }) {
  const [filteredData, setFilteredData] = useState([]);

  const ApplyFavoriteRow = useCallback(() => {
    const response = dataJson
      .filter((item) => item.name && item.name.length > 0)
      .map((item) => ({
        ...item,
        favorite: false,
      }));
    setFilteredData(response);
  }, [dataJson]);

  useEffect(() => {
    ApplyFavoriteRow();
  }, [ApplyFavoriteRow]);

  return filteredData;
}
