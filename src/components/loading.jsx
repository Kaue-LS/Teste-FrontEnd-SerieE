import { act, useEffect } from "react";
import { useApiContext } from "./context/apiContext";

export default function LoadingSystem({ active, type }) {
  const { loading, setLoading } = useApiContext();
  useEffect(() => {
    if (active || type)
      setLoading({
        active,
        type,
      });
  }, [active, type, setLoading]);

  const NoFavorite = () => {
    return (
      <div className="loading">
        <div className="content noFavorite">
          <h2>You don't have any favorite hero!</h2>
          <p>Please select a hero</p>
          <button
            onClick={() => {
              setLoading({ active: false });
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  };
  const Loading = () => {
    return (
      <div className="loading">
        <div className="content loading">
          <span className="spin"></span>
          <h3>Loading... please await</h3>
        </div>
      </div>
    );
  };
  const Error = ({ text }) => {
    return (
      <div className="loading">
        <div className="content error">
          <h2>Error!!</h2>
          <h3>{text}</h3>
        </div>
      </div>
    );
  };

  if (loading.active) {
    switch (loading.type) {
      case "loading":
        return <Loading />;
      case "noFavorite":
        return <NoFavorite />;
      case "privateKey":
        return <Error text={"Private Key Not Found!!"} />;
      case "publicKey":
        return <Error text={"Public Key Not Found!!"} />;
      case "error":
        return <Error text={"Something went wrong!!"} />;
      case "dataNot-found":
        return <Error text={"Data not found!!"} />;
      default:
        return (
          <div>
            <div>
              <span>
                {loading.active}
                {loading.type}
              </span>
              <h3>Loading... please await</h3>
            </div>
          </div>
        );
    }
  }
}
