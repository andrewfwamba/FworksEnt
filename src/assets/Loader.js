import { ClipLoader, BounceLoader } from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const listLoader = (
  <BounceLoader
    color={"#000000"}
    cssOverride={override}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
);
export { listLoader };
