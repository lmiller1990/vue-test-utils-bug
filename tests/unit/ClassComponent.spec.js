import { mount } from "@vue/test-utils"

import ClassComponentParent from "@/components/ClassComponentParent.vue"
import ClassComponentChild from "@/components/ClassComponentChild.vue"

describe("ClassComponentParent", () => {
  it("emits", () => {
    const wrapper = mount(ClassComponentParent)

    const childWrapper = wrapper.find(ClassComponentParent)
    childWrapper.find("button").trigger("click")
    console.log(childWrapper.emitted())
  })
})
