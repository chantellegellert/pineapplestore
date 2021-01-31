import { CustomerService, ICustomer } from "@/services/customer.service";
import { MockAPIService } from "@/services/api.service/api.service.mock";
import { apiService } from "@/services";

const mockCustomerData: ICustomer[] = require("@/assets/json/mockCustomers.json");

let customerService: CustomerService;
describe("CustomerService.ts", () => {
  beforeEach(() => {
    const mockApiServicec = new MockAPIService();
    (apiService as any).createAxiosResponse = (MockAPIService as any).createAxiosResponse;
    customerService = new CustomerService();
  });
  describe("updateCustomers", () => {
    describe("apiService returns valid data", () => {
      it("should return data", () =>
        expect(customerService.updateCustomers()).resolves.toEqual(
          expect.objectContaining(mockCustomerData)
        ));
    });
    describe("apiservice fails", () => {
      it("should throw an error", () =>
        expect(customerService.updateCustomers()).rejects.toThrow());
    });
  });
});
