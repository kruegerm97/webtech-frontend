import { shallowMount } from '@vue/test-utils';
import BetterCard from '@/components/BetterCard.vue';

describe('BetterCard.vue', () => {
  it('renders the current song name', () => {
    const currentSongName = 'Test Song';
    const wrapper = shallowMount(BetterCard, {
      props: {
        currentSongName
      }
    });
    expect(wrapper.text()).toContain(currentSongName);
  });

  it('emits an event when the upvote button is clicked', () => {
    const currentSongId = 1;
    const wrapper = shallowMount(BetterCard, {
      props: {
        currentSongId
      }
    });
    wrapper.find('.v-btn--color-success').trigger('click');
    expect(wrapper.emitted('upvote')).toBeTruthy();
    expect(wrapper.emitted('upvote')[0]).toEqual([currentSongId]);
  });

  it('emits an event when the downvote button is clicked', () => {
    const currentSongId = 1;
    const wrapper = shallowMount(BetterCard, {
      props: {
        currentSongId
      }
    });
    wrapper.find('.v-btn--color-error').trigger('click');
    expect(wrapper.emitted('downvote')).toBeTruthy();
    expect(wrapper.emitted('downvote')[0]).toEqual([currentSongId]);
  });

  it('toggles the show property when the expand button is clicked', () => {
    const wrapper = shallowMount(BetterCard);
    const button = wrapper.find('.v-btn--icon');
    button.trigger('click');
    expect(wrapper.vm.show).toBe(true);
    button.trigger('click');
    expect(wrapper.vm.show).toBe(false);
  });
});