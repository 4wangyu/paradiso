import { toast } from "react-toastify";
import { AxiosError } from "axios";

export function handleError(err: AxiosError) {
  console.error(err);
  toast.error(err.message);
}
