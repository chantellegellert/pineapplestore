import Vue from "vue";
import { apiService } from "@/services/index";

interface ICustomerReactive {
  customers: ICustomer[];
}

export interface ICustomer {
  id: number;
  createdAt: Date;
  first_name: string;
  street_address: string;
  city: string;
  state: string;
  country: string;
  phone_number: string;
  email: string;
  last_name: string;
}

export class CustomerService {
  private _reactive = Vue.observable<ICustomerReactive>({
    customers: [],
  });

  get customers() {
    return this._reactive.customers;
  }

  async updateCustomers() {
    try {
      const customersRes = await apiService.getCustomers();
      this._reactive.customers = customersRes.data;
    }
    catch(err) {
      console.log("Failed to update customers", err);
    }
  }
}

export const customerService = new CustomerService();
