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
  const [modifiedData, setModifiedData] = useState([]);
  const [normalData, setNormalData] = useState([]);
  const [loading, setLoading] = useState({
    active: false,
    type: "",
  });
  const [pageSelect, setPageSelect] = useState(0);
  const [slicedPage, setSlicedPage] = useState([]);

  const ApplyFavoriteRow = useCallback(() => {
    const response = results
      .filter((item) => item.name && item.name.length > 0)
      .map((item) => ({
        ...item,
        favorite: false,
      }));
    setModifiedData(response);
    setNormalData(response);
  }, [results]);

  useEffect(() => {
    ApplyFavoriteRow();
  }, [ApplyFavoriteRow]);

  useEffect(() => {
    if (modifiedData.length === 0) {
      setLoading({
        active: true,
        type: "loading",
      });
    } else {
      setLoading({
        active: false,
        type: "",
      });
    }
  }, [modifiedData, pageSelect]);
  useEffect(() => {
    if (slicedPage.length === 0) {
      const totalPages = Math.ceil(modifiedData.length / 20);
      const newPages = Array.from({ length: totalPages }, (_, index) => {
        const startIndex = index * 20;
        const endIndex = startIndex + 20;
        return {
          pageNumber: index + 1,
          items: modifiedData.slice(startIndex, endIndex),
        };
      });

      setSlicedPage(newPages);
    }
  }, [modifiedData, pageSelect, slicedPage, setSlicedPage]);

  return (
    <apiContext.Provider
      value={{
        modifiedData,
        setModifiedData,
        normalData,
        loading,
        setLoading,
        pageSelect,
        setPageSelect,
        slicedPage,
        setSlicedPage,
      }}
    >
      {children}
    </apiContext.Provider>
  );
}
