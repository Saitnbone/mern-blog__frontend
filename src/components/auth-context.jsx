import React, { createContext, useContext } from "react";
import { useCheckAuth } from "../utils/hooks/useUser";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { data: user, isLoading } = useCheckAuth(); // Получаем пользователя и статус загрузки
  const userId = user && user.user._id ? user.user._id : null;
 
  const value = {
    user, 
    userId, 
    isAuth: !!user, 
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook 
export const useAuth = () => {
  return useContext(AuthContext);
};
