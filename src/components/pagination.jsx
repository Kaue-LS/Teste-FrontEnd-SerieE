import { useApiContext } from "./context/apiContext";

export default function PaginationDots() {
  const { slicedPage, setPageSelect, pageSelect } = useApiContext();
  return (
    <div className={`pagination `}>
      {slicedPage.map((props, index) => (
        <div className={`content ${pageSelect === index ? "checked" : ""}`}>
          <input
            onChange={(e) => setPageSelect(e.target.value - 1)}
            type="radio"
            name="dots"
            value={props.pageNumber}
          />
          <span>{props.pageNumber}</span>
        </div>
      ))}
    </div>
  );
}
