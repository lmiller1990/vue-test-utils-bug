import { expect } from 'chai';
import { mount } from '@vue/test-utils';

import ParentComponent from '@/components/ParentComponent.vue';
import ChildComponent from '@/components/ChildComponent.vue';

describe('ParentComponent.vue', () => {
  it('should create a child which emits events', () => {
    const wrapper = mount(ParentComponent, {
      propsData: { count: 0 },
    });
    const childWrapper = wrapper.find(ChildComponent);
    childWrapper.find('button').trigger('click');
    expect(childWrapper.emitted()).to.not.be.undefined;
  });
});
