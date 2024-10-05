// imports
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchAuth, fetchRegister, fetchAuthMe } from "../api/userApi";

// Custom hook for user logging
export const useLogin = () => {
  return useMutation({
    mutationFn: fetchAuth,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
  });
};

// Custom hook for registering a new user
export const useRegistration = () => {
  return useMutation({
    mutationFn: fetchRegister,
  });
};

// Custom hook for checking authentication
export const useCheckAuth = () => {
  return useQuery({
    queryKey: ["authMe"],
    queryFn: fetchAuthMe,
    retry: false,
    onSuccess: (data) => {
      console.log("Auth data fetched successfully:", data); // Добавьте это
    },
    onError: (error) => {
      console.error("Error in useCheckAuth:", error); // Добавьте это
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      localStorage.removeItem("token");

      return Promise.resolve();
    },
    onSuccess: () => {
      // Clear user data cache after exit
      queryClient.setQueryData(["authMe"], null);
    },
  });
};
