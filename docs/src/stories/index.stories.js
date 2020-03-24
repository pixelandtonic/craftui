import { linkTo } from '@storybook/addon-links'
import WelcomeApp from './Welcome';

export default {
    title: 'Welcome',
}

export const Welcome = () => ({
    render: h => h(WelcomeApp, { props: { goToButton: linkTo('Button') } }),
})

