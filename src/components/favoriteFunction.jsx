// import { useApiContext } from "./context/apiContext";

// export function UseApplyFavorite() {
//   const { filteredData, setFilteredData } = useApiContext();

//   const applyFavorite = (itemId) => {
//     const updatedData = filteredData.map((item) => {
//       if (item.id === itemId) {
//         return {
//           ...item,
//           favorite: true,
//         };
//       }
//       return item;
//     });
//     setFilteredData(updatedData);
//   };

//   return applyFavorite;
// }

// export function UseRemoveFavorite() {
//   const { filteredData, setFilteredData } = useApiContext();

//   const removeFavorite = (itemId) => {
//     const updatedData = filteredData.map((item) => {
//       if (item.id === itemId) {
//         return {
//           ...item,
//           favorite: false,
//         };
//       }
//       return item;
//     });
//     setFilteredData(updatedData);
//   };

//   return removeFavorite;
// }
