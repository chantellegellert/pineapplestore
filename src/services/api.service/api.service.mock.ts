import { AxiosResponse, AxiosInstance } from 'axios';
import { ICustomer } from '../customer.service';
import { IAPI } from './api.service';

const mockCustomerData: ICustomer[] = require("@/assets/json/mockCustomers.json");

// mock service object to allow decoupling development of UI from external API
export class MockAPIService implements IAPI {
  private createAxiosResponse<T>(data: T | void): AxiosResponse<T> {
    return {
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
      data: data as T
    }
  }
   
  async getCustomers(): Promise<AxiosResponse<ICustomer[]>> {
    return Promise.resolve(this.createAxiosResponse(mockCustomerData));
  }
}