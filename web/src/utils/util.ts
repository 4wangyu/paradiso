import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useLocation } from "react-router-dom";

export function handleError(err: AxiosError) {
  console.error(err);
  toast.error(err.message);
}

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}
