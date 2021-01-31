import { shallowMount } from '@vue/test-utils'
import { ICustomer } from '@/services/customer.service';
import CardComponent from '@/components/CardComponent.vue'

const mockCustomerData: ICustomer[] = require("@/assets/json/mockCustomers.json");

describe('CardComponent.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(CardComponent, {
      propsData: { customer: mockCustomerData[0] }
    })
    expect(wrapper.props().customer).toBe(mockCustomerData[0])
  })
})
