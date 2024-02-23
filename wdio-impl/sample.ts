
import { $, expect } from '@wdio/globals'
import { render } from '@testing-library/vue'
import HelloWorld from '../../src/components/HelloWorld.vue'

describe('Component Testing', () => {
    it('increments value on click', async () => {
        const { getByText } = render(HelloWorld)
        const btn = getByText('count is 0')

        // transform into WebdriverIO element
        const button = await $(btn)

        // interact with element like a real user
        await button.click()
        await button.click()

        await expect(button).toMatchInlineSnapshot(
            "count is 2"
        )
    })
})