import { useMutation } from "@tanstack/react-query";

export const usePostData = ( apiFunction, option = {} ) => {
  return useMutation({
    mutationFn: apiFunction,
    onSuccess: option.onSuccess,
  });
};
