import { mount } from "@vue/test-utils"
import { createPinia, setActivePinia } from "pinia"
import { beforeEach, describe, expect, test } from "vitest"
import DropDownItemVue from "../DropDownItem.vue"
import EditModalVue from "../EditModal.vue"
import { createI18n } from "vue-i18n"
import en from '../../locales/en.json'
import fr from '../../locales/fr.json'

describe('Components test', () => {
    let i18n;
    beforeEach(() => {
      setActivePinia(createPinia())

      i18n = createI18n({
        messages: {
           en,
           fr
        }
     });

    })
  
    test('test drop down item', async () => {
        const wrapper = mount(DropDownItemVue)
        expect(wrapper.text()).toMatchSnapshot()
    })

    test('test editing modal', async () => {
        const wrapper = mount(EditModalVue, {
            global: {
               plugins: [i18n]
            }
         })
        expect(wrapper.text()).toMatchSnapshot()
    })
})