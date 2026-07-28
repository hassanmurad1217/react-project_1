import { BioContext } from "./BioContext";

export const BioProvider = ({ children }) => {
  const myName = "Hassan";
  const myAge = "21";

  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};