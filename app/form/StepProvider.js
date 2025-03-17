import { createContext, useState } from "react";

export const StepContext = createContext({});

export const StepProvider = ({ children }) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    date: "",
    profileImage: "",
  });

  return (
    <StepContext.Provider value={{ values, setValues }}>
      {children}
    </StepContext.Provider>
  );
};
