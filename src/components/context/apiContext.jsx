import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import dataJson from "../API/application.json";

const apiContext = createContext();

export function useApiContext() {
  const context = useContext(apiContext);
  if (!context) {
    throw new Error("useApiContext deve ser usado dentro do ApiProvider");
  }
  return context;
}

export function ApiProvider({ children }) {
  const { results } = dataJson.data;
  const [filteredData, setFilteredData] = useState([]);
  const [normalData, setNormalData] = useState([]);
  const ApplyFavoriteRow = useCallback(() => {
    const response = results
      .filter((item) => item.name && item.name.length > 0)
      .map((item) => ({
        ...item,
        favorite: false,
      }));
    setFilteredData(response);
    setNormalData(response);
  }, [results]);

  useEffect(() => {
    ApplyFavoriteRow();
  }, [ApplyFavoriteRow]);

  console.log(filteredData);
  if (filteredData.length === 0) {
    return <p>Loading teste ...</p>;
  }

  return (
    <apiContext.Provider value={{ filteredData, setFilteredData, normalData }}>
      {children}
    </apiContext.Provider>
  );
}
