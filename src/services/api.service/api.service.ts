import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import { ICustomer } from "@/services/customer.service";
import * as Requests from "./requests";

const apiUrl = `${process.env.VUE_APP_API_GATEWAY_URL}/api`

export interface IAPI {
  getCustomers(): Promise<AxiosResponse<ICustomer[]>>;
}

export class APIService {
  private readonly axios: AxiosInstance;

  constructor() {
    this.axios = axios.create();
  }

  private async send<T>(request: AxiosRequestConfig) {
    return this.axios.request<T>(request);
  }

  async getCustomers(): Promise<AxiosResponse<ICustomer[]>> {
    return this.send<ICustomer[]>(Requests.getCustomersRequest(apiUrl));
  }
}
