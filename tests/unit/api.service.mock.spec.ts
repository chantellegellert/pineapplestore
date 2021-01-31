import { MockAPIService } from "@/services/api.service/api.service.mock";
import { ICustomer } from "@/services/customer.service";

const mockCustomerData: ICustomer[] = require("@/assets/json/mockCustomers.json");

let apiService: MockAPIService;
describe("MockAPIService", () => {
  beforeEach(() => {
    apiService = new MockAPIService();
  });

  describe("getCustomers()", () => {
    describe("the request succeeds", () => {
      it("should resolve with the Customer data", async () => {
        await expect(apiService.getCustomers()).resolves.toEqual(
          expect.objectContaining({
            data: expect.arrayContaining(mockCustomerData),
          })
        );
      });
    });
  });
});
