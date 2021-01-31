import { shallowMount } from "@vue/test-utils";
import { ICustomer } from "@/services/customer.service";
import CardView from "@/views/CardView.vue";

const mockCustomerData: ICustomer[] = require("@/assets/json/mockCustomers.json");

describe("CardView.vue", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(CardView);
  });
  describe("get customers data", () => {
    beforeEach(async () => {
      await wrapper.vm.updateCustomers();
    });

    it("wrapper should create", () => {
      expect(wrapper).toBeTruthy();
    });

    it("should have customer data", () => {
      expect(wrapper.vm.customers).toEqual(mockCustomerData);
    });
  });

  describe("filter customers data", () => {
    beforeEach(() => {
      wrapper.vm.updateCustomers();
      wrapper.vm.filterText = mockCustomerData[0].first_name;
    });
    it("should have customer data", () => {
      expect(wrapper.vm.customerViewList[0]).toEqual(mockCustomerData[0]);
    });
  });
});
