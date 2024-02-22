import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import EditModalVue from '../EditModal.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('Todo card item', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

  it('renders properly', () => {
    const wrapper = mount(EditModalVue)
    expect(wrapper.text()).toContain('Edit')
  })
})