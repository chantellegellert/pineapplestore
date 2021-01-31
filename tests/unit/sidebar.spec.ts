import { shallowMount } from '@vue/test-utils'
import { ThisTypedShallowMountOptions } from '@vue/test-utils';
import SideBar from '@/components/navigation/Sidebar.vue';
import Vuetify from 'vuetify';

const defaultMountOptions: ThisTypedShallowMountOptions<any> = {
    vuetify: new Vuetify({})
}

describe('sidebar.vue', () => {
    let wrapper: any;

    beforeEach(() => {
        wrapper = shallowMount(SideBar, defaultMountOptions);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('wrapper should create', () => {
        expect(wrapper).toBeTruthy();
    })
});