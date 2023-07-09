import { shallowMount } from '@vue/test-utils';
import MyComponent from '@/components/disHeading.vue';


describe('MyComponent', () => {
  it('renders props.title and props.message when passed', () => {
    const title = 'Test Title';
    const message = 'Test Message';
    const wrapper = shallowMount(MyComponent, {
      propsData: { title, message },
    });
    expect(wrapper.text()).toMatch(title);
    expect(wrapper.text()).toMatch(message);
  });
});