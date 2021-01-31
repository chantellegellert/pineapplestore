import { shallowMount } from "@vue/test-utils";
import { ICustomer } from "@/services/customer.service";
import GridComponent from "@/components/GridComponent.vue";

const mockCustomerData: ICustomer[] = require("@/assets/json/mockCustomers.json");

describe("GridComponent.vue", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(GridComponent, {
      propsData: { rowdata: mockCustomerData },
    });
  });

  it("wrapper should create", () => {
    expect(wrapper).toBeTruthy();
  });

  it("renders props.msg when passed", () => {
    expect(wrapper.props().rowdata).toBe(mockCustomerData);
  });

  describe("deselection", () => {
    beforeEach(() => {
      wrapper.vm.gridOptions.api = {
        getSelectedRows: jest
          .fn()
          .mockImplementation(() => [Object.values(mockCustomerData)[0]]),
        deselectAll: jest.fn(),
      };
      wrapper.vm.gridOptions.api.getSelectedRows = jest
        .fn()
        .mockImplementation(() => undefined);
      wrapper.vm.close();
    });
    it("should have called deselect all", () => {
      expect(wrapper.vm.gridOptions.api.deselectAll).toHaveBeenCalled();
    });
  });
});
