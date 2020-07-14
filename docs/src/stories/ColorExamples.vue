<template>
    <div>
        <h1 :class="`${PREFIX}text-3xl ${PREFIX}font-medium ${PREFIX}mb-2`">Examples</h1>

        <h2 :class="`${PREFIX}text-2xl ${PREFIX}font-medium ${PREFIX}mt-6 ${PREFIX}mb-2`">Base</h2>
        <template v-for="base in bases">
            <div :key="'base-' + base" :class="`${PREFIX}inline-flex ${PREFIX}rounded ${PREFIX}items-center ${PREFIX}justify-center ${PREFIX}mr-2 ${PREFIX}w-24 ${PREFIX}h-24 ${PREFIX}text-text-inverse ${PREFIX}bg-${base}`">
                <div>{{base}}</div>
            </div>
        </template>

        <h2 :class="`${PREFIX}}text-2xl ${PREFIX}font-medium ${PREFIX}mt-6 ${PREFIX}mb-2`">Background</h2>
        <template v-for="background in backgrounds">
            <div :key="'background-' + background" :class="`${PREFIX}mb-2 ${PREFIX}p-8 ${PREFIX}border ${PREFIX}border-opaque-separator ${PREFIX}text-center ${PREFIX}bg-${background}`">{{background}}</div>
        </template>

        <h2 :class="`${PREFIX}}text-2xl ${PREFIX}}font-medium ${PREFIX}mt-6 ${PREFIX}mb-2`">Text</h2>
        <template v-for="text in texts">
            <div :key="'text-' + text" :class="`${PREFIX}mb-2 ${PREFIX}text-${text}`">{{text}}</div>
        </template>

        <h2 :class="`${PREFIX}}text-2xl ${PREFIX}}font-medium ${PREFIX}mt-6 ${PREFIX}mb-2`">Separators</h2>
        <template v-for="separator in separators">
            <div :key="'separator-' + separator" :class="`${PREFIX}rounded ${PREFIX}mb-2 ${PREFIX}p-4 ${PREFIX}border ${PREFIX}border-${separator}`">{{separator}}</div>
        </template>

        <h2 :class="`${PREFIX}}text-2xl ${PREFIX}font-medium ${PREFIX}mt-6 ${PREFIX}mb-2`">Interactive</h2>
        <table :class="`${PREFIX}w-full`">
            <thead>
            <tr :class="`${PREFIX}border-b`">
                <th :class="`${PREFIX}text-left ${PREFIX}py-2`">Default</th>
                <th :class="`${PREFIX}text-left ${PREFIX}py-2`">Hover</th>
                <th :class="`${PREFIX}text-left ${PREFIX}py-2`">Active</th>
                <th :class="`${PREFIX}text-left ${PREFIX}py-2`">Preview</th>
            </tr>
            </thead>
            <template v-for="interactive in interactives">
                <tr :key="'interactive-' + interactive" :class="`${PREFIX}border-b`">
                    <td :class="`${PREFIX}py-2`">
                        <button :class="`${PREFIX}px-4 ${PREFIX}py-2 ${PREFIX}rounded ${PREFIX}bg-interactive-${interactive} ${PREFIX}text-interactive-text-inverse`">{{interactive}}</button>
                    </td>
                    <td :class="`${PREFIX}}py-2`">
                        <button :class="`${PREFIX}px-4 ${PREFIX}py-2 ${PREFIX}rounded ${PREFIX}bg-interactive-${interactive}-hover ${PREFIX}text-interactive-text-inverse`">{{interactive}}</button>
                    </td>
                    <td :class="`${PREFIX}}py-2`">
                        <button :class="`${PREFIX}px-4 ${PREFIX}py-2 ${PREFIX}rounded ${PREFIX}bg-interactive-${interactive}-active ${PREFIX}text-interactive-text-inverse`">{{interactive}}</button>
                    </td>
                    <td :class="`${PREFIX}}py-2`">
                        <button :class="`${PREFIX}px-4 ${PREFIX}py-2 ${PREFIX}rounded ${PREFIX}bg-interactive-${interactive} ${PREFIX}text-interactive-text-inverse hover:${PREFIX}bg-interactive-${interactive}-hover active:bg-interactive-${interactive}-active`">{{interactive}}</button>
                    </td>
                </tr>
            </template>
        </table>

        <h2 :class="`${PREFIX}text-2xl ${PREFIX}font-medium ${PREFIX}mt-6 ${PREFIX}mb-2`">Interactive Texts</h2>
        <table :class="`${PREFIX}w-full`">
            <thead>
            <tr :class="`${PREFIX}border-b`">
                <th :class="`${PREFIX}text-left ${PREFIX}py-2`">Default</th>
                <th :class="`${PREFIX}text-left ${PREFIX}py-2`">Hover</th>
                <th :class="`${PREFIX}text-left ${PREFIX}py-2`">Active</th>
                <th :class="`${PREFIX}text-left ${PREFIX}py-2`">Preview</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="interactive in interactiveTexts">
                <tr :key="'interactive-' + interactive" :class="`${PREFIX}border-b`">
                    <td :class="`${PREFIX}py-2`">
                        <button :class="`${PREFIX}text-interactive-${interactive}-text`">{{interactive}}</button>
                    </td>
                    <td :class="`${PREFIX}py-2`">
                        <button :class="`${PREFIX}text-interactive-${interactive}-hover-text ${PREFIX}border-b-2 ${PREFIX}border-transparent ${PREFIX}border-interactive-${interactive}-hover-border`">{{interactive}}</button>
                    </td>
                    <td :class="`${PREFIX}}py-2`">
                        <button :class="`${PREFIX}text-interactive-${interactive}-active-text ${PREFIX}border-b-2 ${PREFIX}border-transparent ${PREFIX}border-interactive-${interactive}-active-border`">{{interactive}}</button>
                    </td>
                    <td :class="`${PREFIX}py-2`">
                        <button :class="`${PREFIX}text-interactive-${interactive}-text hover:${PREFIX}text-interactive-${interactive}-hover-text active:${PREFIX}text-interactive-${interactive}-active-text ${PREFIX}border-b-2 ${PREFIX}border-transparent hover:${PREFIX}border-interactive-${interactive}-hover-border active:${PREFIX}border-interactive-${interactive}-active-border`">{{interactive}}</button>
                    </td>
                </tr>
            </template>

            <tr>
                <td :class="`${PREFIX}py-2`">
                    <a href="#" :class="`${PREFIX}text-interactive-link`">Link</a>
                </td>
                <td :class="`${PREFIX}py-2`">
                    <a href="#" :class="`${PREFIX}text-interactive-link-hover`">Link</a>
                </td>
                <td :class="`${PREFIX}py-2`">
                    <a href="#" :class="`${PREFIX}text-interactive-link-active`">Link</a>
                </td>
                <td :class="`${PREFIX}py-2`">
                    <a href="#" :class="`${PREFIX}text-interactive-link hover:${PREFIX}text-interactive-link-hover active:${PREFIX}text-interactive-link-active`">Link</a>
                </td>
            </tr>
            </tbody>
        </table>

        <h2 :class="`${PREFIX}text-2xl ${PREFIX}font-medium ${PREFIX}mt-6 ${PREFIX}mb-2`">Disabled</h2>
        <div>
            <template v-for="color in disabled">
                <div :key="'disabled-' + color" :class="`${PREFIX}rounded ${PREFIX}mb-2 ${PREFIX}p-4 ${PREFIX}border ${PREFIX}border-opaque-separator ${PREFIX}text-text ${PREFIX}bg-${color}`">
                    <div>{{color}}</div>
                </div>
            </template>
        </div>


        <h2 :class="`${PREFIX}text-2xl ${PREFIX}font-medium ${PREFIX}mt-6 ${PREFIX}mb-2`">Misc</h2>
        <div>
            <template v-for="color in misc">
                <div :key="'misc-' + color" :class="`${PREFIX}rounded ${PREFIX}mb-2 ${PREFIX}p-4 ${PREFIX}border ${PREFIX}border-opaque-separator ${PREFIX}text-text ${PREFIX}bg-${color}`">
                    <div>{{color}}</div>
                </div>
            </template>
        </div>

        <h2 :class="`${PREFIX}text-2xl ${PREFIX}font-medium ${PREFIX}mt-6 ${PREFIX}mb-2`">UI</h2>
        <template v-for="ui in uis">
            <div :key="'ui-' + ui" :class="`${PREFIX}mb-2 ${PREFIX}p-4 ${PREFIX}border ${PREFIX}border-${ui}-separator ${PREFIX}bg-${ui}-background text-${ui}-text`">{{ui}}</div>
        </template>

        <h2 :class="`${PREFIX}text-2xl ${PREFIX}font-medium ${PREFIX}mt-6 ${PREFIX}mb-2`">Fields</h2>
        <div :class="`${PREFIX}mb-2`">
            <input type="text" value="Some value in a text input" :class="`${PREFIX}px-3 ${PREFIX}py-2 ${PREFIX}rounded ${PREFIX}bg-field-background ${PREFIX}border border-field-separator`" />
        </div>

        <div :class="`${PREFIX}mb-2`">
            <input type="text" value="Some value in a disabled text input" disabled="true" :class="`${PREFIX}px-3 ${PREFIX}py-2 ${PREFIX}rounded ${PREFIX}bg-field-disabled-background ${PREFIX}border ${PREFIX}border-field-disabled-separator`" />
        </div>


        <div :class="`${PREFIX}mb-2`">
            <a href="#" :class="`${PREFIX}text-interactive-link hover:${PREFIX}text-interactive-link-hover hover:${PREFIX}underline`">Link</a>
        </div>

        <h2 :class="`${PREFIX}text-2xl ${PREFIX}font-medium ${PREFIX}mt-6 ${PREFIX}mb-2`">Other</h2>

        <div :class="`${PREFIX}mb-2`">
            <ul :class="`${PREFIX}border ${PREFIX}border-separator`">
                <li><a href="#" :class="`${PREFIX}block ${PREFIX}px-4 ${PREFIX}py-2 ${PREFIX}text-interactive-nav-text hover:${PREFIX}text-interactive-nav-hover-text`">Nav Item</a></li>
                <li><a href="#" :class="`${PREFIX}block ${PREFIX}px-4 ${PREFIX}py-2 ${PREFIX}text-interactive-nav-text hover:${PREFIX}text-interactive-nav-hover-text ${PREFIX}bg-interactive-nav-active-background`">Active Nav Item</a></li>
                <li><a href="#" :class="`${PREFIX}block ${PREFIX}px-4 ${PREFIX}py-2 ${PREFIX}text-interactive-nav-disabled-text`">Disabled Nav Item</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bases: [
                    'danger',
                    'icon',
                    'info',
                    'notice',
                    'success',
                    'warning',
                ],
                backgrounds: [
                    'danger-background',
                    'field-background',
                    'info-background',
                    'notice-background',
                    'primary-background',
                    'secondary-background',
                    'tertiary-background',
                    'success-background',
                    'warning-background',
                    'default-background',
                ],
                texts: [
                    'danger-text',
                    'dark-text',
                    'info-text',
                    'interactive-text',
                    'interactive-text-inverse',
                    'light-text',
                    'notice-text',
                    'success-text',
                    'text',
                    'text-inverse',
                    'warning-text',
                    'default-text',
                ],
                separators: [
                    'danger-separator',
                    'field-separator',
                    'info-separator',
                    'notice-separator',
                    'opaque-separator',
                    'separator',
                    'success-separator',
                    'warning-separator',
                    'default-separator',
                ],
                interactives: [
                    'primary',
                    'secondary',
                    'tertiary',
                    'danger',
                    'success',
                ],
                interactiveTexts: [
                    'nav-item',
                ],
                disabled: [
                    'field-disabled-background',
                    'field-disabled-separator',
                ],
                misc: [
                    'primary-background-gradient-1',
                    'primary-background-gradient-2',
                    'shadow-1',
                    'shadow-2',
                    'shadow-3',
                ],
                uis: [
                    'danger',
                    'info',
                    'notice',
                    'success',
                    'warning',
                ],
            }
        }
    }
</script>