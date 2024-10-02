// imports
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchAuth, fetchRegister, fetchAuthMe } from "../api/userApi";

// Custom hook for user logging
export const useLogin = () => {
  return useMutation(fetchAuth, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
  });
};

// Custom hook for registering a new user
export const useRegistration = () => {
  return useMutation(fetchRegister);
};

// Custom hook for checking authentication
export const useCheckAuth = () => {
  return useQuery(["authMe"], fetchAuthMe, {
    retry: false,
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation(() => {
    localStorage.removeItem("token");

    return Promise.resolve();
  }, 
{
  onSuccess: () => { 
    // Clear user data cache after exit
    queryClient.setQueryData(['authMe'], null)
  }
});
};
