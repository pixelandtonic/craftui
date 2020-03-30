<template>
    <div>
        <h1 class="text-3xl font-medium mb-2">Examples</h1>

        <h2 class="text-2xl font-medium mt-6 mb-2">Base</h2>
        <template v-for="base in bases">
            <div :key="'base-' + base" :class="'inline-flex rounded items-center justify-center mr-2 w-24 h-24 text-text-inverse bg-' + base">
                <div>{{base}}</div>
            </div>
        </template>

        <h2 class="text-2xl font-medium mt-6 mb-2">Background</h2>
        <template v-for="background in backgrounds">
            <div :key="'background-' + background" :class="'mb-2 p-8 border border-opaque-separator text-center bg-'+background">{{background}}</div>
        </template>

        <h2 class="text-2xl font-medium mt-6 mb-2">Text</h2>
        <template v-for="text in texts">
            <div :key="'text-' + text" :class="'mb-2 text-' + text">{{text}}</div>
        </template>

        <h2 class="text-2xl font-medium mt-6 mb-2">Separators</h2>
        <template v-for="separator in separators">
            <div :key="'separator-' + separator" :class="'rounded mb-2 p-4 border border-' + separator">{{separator}}</div>
        </template>

        <h2 class="text-2xl font-medium mt-6 mb-2">Interactive</h2>
        <table class="w-full">
            <thead>
            <tr class="border-b">
                <th class="text-left py-2">Default</th>
                <th class="text-left py-2">Hover</th>
                <th class="text-left py-2">Active</th>
                <th class="text-left py-2">Preview</th>
            </tr>
            </thead>
            <template v-for="interactive in interactives">
                <tr :key="'interactive-' + interactive" class="border-b">
                    <td class="py-2">
                        <button :class="'px-4 py-2 rounded bg-interactive-'+interactive+' text-interactive-text-inverse'">{{interactive}}</button>
                    </td>
                    <td class="py-2">
                        <button :class="'px-4 py-2 rounded bg-interactive-'+interactive+'-hover text-interactive-text-inverse'">{{interactive}}</button>
                    </td>
                    <td class="py-2">
                        <button :class="'px-4 py-2 rounded bg-interactive-'+interactive+'-active text-interactive-text-inverse'">{{interactive}}</button>
                    </td>
                    <td class="py-2">
                        <button :class="'px-4 py-2 rounded bg-interactive-'+interactive+' text-interactive-text-inverse hover:bg-interactive-'+interactive+'-hover active:bg-interactive-'+interactive+'-active'">{{interactive}}</button>
                    </td>
                </tr>
            </template>
        </table>

        <h2 class="text-2xl font-medium mt-6 mb-2">Interactive Texts</h2>
        <table class="w-full">
            <thead>
            <tr class="border-b">
                <th class="text-left py-2">Default</th>
                <th class="text-left py-2">Hover</th>
                <th class="text-left py-2">Active</th>
                <th class="text-left py-2">Preview</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="interactive in interactiveTexts">
                <tr :key="'interactive-' + interactive" class="border-b">
                    <td class="py-2">
                        <button :class="'text-interactive-'+interactive+'-text'">{{interactive}}</button>
                    </td>
                    <td class="py-2">
                        <button :class="'text-interactive-'+interactive+'-hover-text border-b-2 border-transparent border-interactive-'+interactive+'-hover-border'">{{interactive}}</button>
                    </td>
                    <td class="py-2">
                        <button :class="'text-interactive-'+interactive+'-active-text border-b-2 border-transparent border-interactive-'+interactive+'-active-border'">{{interactive}}</button>
                    </td>
                    <td class="py-2">
                        <button :class="'text-interactive-'+interactive+'-text hover:text-interactive-'+interactive+'-hover-text active:text-interactive-'+interactive+'-active-text border-b-2 border-transparent hover:border-interactive-'+interactive+'-hover-border active:border-interactive-'+interactive+'-active-border'">{{interactive}}</button>
                    </td>
                </tr>
            </template>

            <tr>
                <td class="py-2">
                    <a href="#" class="text-interactive-link">Link</a>
                </td>
                <td class="py-2">
                    <a href="#" class="text-interactive-link-hover">Link</a>
                </td>
                <td class="py-2">
                    <a href="#" class="text-interactive-link-active">Link</a>
                </td>
                <td class="py-2">
                    <a href="#" class="text-interactive-link hover:text-interactive-link-hover active:text-interactive-link-active">Link</a>
                </td>
            </tr>
            </tbody>
        </table>

        <h2 class="text-2xl font-medium mt-6 mb-2">Disabled</h2>
        <div>
            <template v-for="color in disabled">
                <div :key="'disabled-' + color" :class="'rounded mb-2 p-4 border border-opaque-separator text-text bg-' + color">
                    <div>{{color}}</div>
                </div>
            </template>
        </div>


        <h2 class="text-2xl font-medium mt-6 mb-2">Misc</h2>
        <div>
            <template v-for="color in misc">
                <div :key="'misc-' + color" :class="'rounded mb-2 p-4 border border-opaque-separator text-text bg-' + color">
                    <div>{{color}}</div>
                </div>
            </template>
        </div>

        <h2 class="text-2xl font-medium mt-6 mb-2">UI</h2>
        <template v-for="ui in uis">
            <div :key="'ui-' + ui" :class="'mb-2 p-4 border border-'+ui+'-separator bg-'+ui+'-background text-'+ui+'-text'">{{ui}}</div>
        </template>

        <h2 class="text-2xl font-medium mt-6 mb-2">Fields</h2>
        <div class="mb-2">
            <input type="text" value="Some value in a text input" class="px-3 py-2 rounded bg-field-background border border-field-separator" />
        </div>

        <div class="mb-2">
            <input type="text" value="Some value in a disabled text input" disabled="true" class="px-3 py-2 rounded bg-field-disabled-background border border-field-disabled-separator" />
        </div>


        <div class="mb-2">
            <a href="#" class="text-interactive-link hover:text-interactive-link-hover hover:underline">Link</a>
        </div>

        <h2 class="text-2xl font-medium mt-6 mb-2">Other</h2>

        <div class="mb-2">
            <ul class="border border-separator">
                <li><a href="#" class="block px-4 py-2 text-interactive-nav-text hover:text-interactive-nav-hover-text">Nav Item</a></li>
                <li><a href="#" class="block px-4 py-2 text-interactive-nav-text hover:text-interactive-nav-hover-text bg-interactive-nav-active-background">Active Nav Item</a></li>
                <li><a href="#" class="block px-4 py-2 text-interactive-nav-disabled-text">Disabled Nav Item</a></li>
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
                    'interactive-nav-item-text',
                    'interactive-navbar-item-text',
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
                    'navbar-item',
                ],
                disabled: [
                    'field-disabled-background',
                    'field-disabled-separator',
                    'interactive-nav-item-disabled-text',
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