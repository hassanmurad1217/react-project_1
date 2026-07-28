import { useContext } from "react";
import { BioContext } from "./BioContext";

export const Home = () => {
  const { myName, myAge } = useContext(BioContext);

  return (
    <h1>
      hello {myName} of age {myAge}
    </h1>
  );
};
