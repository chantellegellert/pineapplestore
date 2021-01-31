import { AxiosResponse } from "axios";
import { ICustomer } from "@/services/customer.service";
import { APIService } from "@/services/api.service/api.service";
import * as Requests from "@/services/api.service/requests";

const mockCustomerData: ICustomer[] = require("@/assets/json/mockCustomers.json");

const baseAxiosResponse: AxiosResponse<any> = {
  status: 200,
  statusText: "OK",
  headers: {},
  config: {},
  data: {},
};

let apiService: APIService;

describe("APIService", () => {
  beforeEach(() => {
    apiService = new APIService();
  });

  describe("getcustomers", () => {
    describe("the request succeeds", () => {
      beforeEach(() => {
        jest.spyOn(apiService as any, "send").mockImplementation(() => ({
          ...baseAxiosResponse,
          data: mockCustomerData,
        }));
      });

      it("should resolve with the Customer data", async () => {
        await expect(apiService.getCustomers()).resolves.toEqual(
          expect.objectContaining({
            data: expect.arrayContaining(mockCustomerData),
          })
        );
      });

      describe("the request fails", () => {
        beforeEach(() => {
          jest.spyOn(apiService as any, "send").mockImplementation(() => {
            throw new Error();
          });
        });

        it("should reject", async () => {
          await expect(apiService.getCustomers()).rejects.toThrowError();
        });
      });
    });
  });
});
