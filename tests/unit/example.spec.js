import { shallowMount } from '@vue/test-utils'
import Locator from '@/components/Locator.vue'

describe('Locator.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Home'
    const wrapper = shallowMount(Locator, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
