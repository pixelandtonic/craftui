/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

const icons = ['coffee', 'times', 'th', 'bars', 'plus', 'key', 'plug', 'image', 'user', 'pencil-alt', 'exclamation-triangle', 'bug', 'shopping-cart', 'dollar-sign', 'handshake', 'link', 'check', 'book', 'search', 'copy']
const iconStory = storiesOf('Components|Icon', module)

for (let i = 0; i < icons.length; i++) {
    const icon = icons[i]

    iconStory.add(icon, () => ({
        template: '<icon icon="' + icon + '" size="2xl"></icon>'
    }))
}