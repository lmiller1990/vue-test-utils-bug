import { expect } from 'chai';
import { mount } from '@vue/test-utils';

import ParentComponent from '@/components/ParentComponent.vue';
import ChildComponent from '@/components/ChildComponent.vue';

import ClassComponentParent from "@/components/ClassComponentParent.vue"
import ClassComponentChild from "@/components/ClassComponentChild.vue"


describe('ParentComponent.vue', () => {
  it('should create a child which emits events', () => {
    const wrapper = mount(ParentComponent, {
      propsData: { count: 0 },
    });
    const childWrapper = wrapper.find(ChildComponent);
    childWrapper.find('button').trigger('click');
    console.log('emit for ts', childWrapper.emitted())
    expect(childWrapper.emitted()).to.not.be.undefined;
  });
});

describe("ClassComponentParent", () => {
  it("emits", () => {
    const wrapper = mount(ClassComponentParent)

    const childWrapper = wrapper.find(ClassComponentChild)
    childWrapper.find("button").trigger("click")

    expect(childWrapper.emitted()).to.not.be.undefined;
  })
})
