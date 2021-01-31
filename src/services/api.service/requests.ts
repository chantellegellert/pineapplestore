import { AxiosRequestConfig } from "axios";

// separates building the requests from calling the requests
export function getCustomersRequest(root: string): AxiosRequestConfig {
  return {
    method: "get",
    url: `${root}/v1/customers`
  };
}