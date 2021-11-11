import { shallowMount } from '@vue/test-utils';
import PPInput from '@/components/PPInput.vue';

describe('PPInput.vue', () => {
  it('renders props.msg when passed', () => {
    const label = 'A test label';
    const wrapper = shallowMount(PPInput, {
      propsData: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });
});
