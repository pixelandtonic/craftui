<template>
    <div>
        <h1 class="tw-text-3xl tw-font-medium tw-mb-2">Examples</h1>

        <h2 class="tw-text-2xl tw-font-medium tw-mt-6 tw-mb-2">Base</h2>
        <template v-for="base in bases">
            <div :key="'base-' + base" :class="'tw-inline-flex tw-rounded tw-items-center tw-justify-center tw-mr-2 tw-w-24 tw-h-24 tw-text-text-inverse tw-bg-' + base">
                <div>{{base}}</div>
            </div>
        </template>

        <h2 class="tw-text-2xl tw-font-medium tw-mt-6 tw-mb-2">Background</h2>
        <template v-for="background in backgrounds">
            <div :key="'background-' + background" :class="'tw-mb-2 tw-p-8 tw-border tw-border-opaque-separator tw-text-center tw-bg-'+background">{{background}}</div>
        </template>

        <h2 class="tw-text-2xl tw-font-medium tw-mt-6 tw-mb-2">Text</h2>
        <template v-for="text in texts">
            <div :key="'text-' + text" :class="'tw-mb-2 tw-text-' + text">{{text}}</div>
        </template>

        <h2 class="tw-text-2xl tw-font-medium tw-mt-6 tw-mb-2">Separators</h2>
        <template v-for="separator in separators">
            <div :key="'separator-' + separator" :class="'tw-rounded tw-mb-2 tw-p-4 tw-border tw-border-' + separator">{{separator}}</div>
        </template>

        <h2 class="tw-text-2xl tw-font-medium tw-mt-6 tw-mb-2">Interactive</h2>
        <table class="tw-w-full">
            <thead>
            <tr class="tw-border-b">
                <th class="tw-text-left tw-py-2">Default</th>
                <th class="tw-text-left tw-py-2">Hover</th>
                <th class="tw-text-left tw-py-2">Active</th>
                <th class="tw-text-left tw-py-2">Preview</th>
            </tr>
            </thead>
            <template v-for="interactive in interactives">
                <tr :key="'interactive-' + interactive" class="tw-border-b">
                    <td class="tw-py-2">
                        <button :class="'tw-px-4 tw-py-2 tw-rounded tw-bg-interactive-'+interactive+' tw-text-interactive-text-inverse'">{{interactive}}</button>
                    </td>
                    <td class="tw-py-2">
                        <button :class="'tw-px-4 tw-py-2 tw-rounded tw-bg-interactive-'+interactive+'-hover tw-text-interactive-text-inverse'">{{interactive}}</button>
                    </td>
                    <td class="tw-py-2">
                        <button :class="'tw-px-4 tw-py-2 tw-rounded tw-bg-interactive-'+interactive+'-active tw-text-interactive-text-inverse'">{{interactive}}</button>
                    </td>
                    <td class="tw-py-2">
                        <button :class="'tw-px-4 tw-py-2 tw-rounded tw-bg-interactive-'+interactive+' tw-text-interactive-text-inverse hover:tw-bg-interactive-'+interactive+'-hover active:bg-interactive-'+interactive+'-active'">{{interactive}}</button>
                    </td>
                </tr>
            </template>
        </table>

        <h2 class="tw-text-2xl tw-font-medium tw-mt-6 tw-mb-2">Interactive Texts</h2>
        <table class="tw-w-full">
            <thead>
            <tr class="tw-border-b">
                <th class="tw-text-left tw-py-2">Default</th>
                <th class="tw-text-left tw-py-2">Hover</th>
                <th class="tw-text-left tw-py-2">Active</th>
                <th class="tw-text-left tw-py-2">Preview</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="interactive in interactiveTexts">
                <tr :key="'interactive-' + interactive" class="tw-border-b">
                    <td class="tw-py-2">
                        <button :class="'tw-text-interactive-'+interactive+'-text'">{{interactive}}</button>
                    </td>
                    <td class="tw-py-2">
                        <button :class="'tw-text-interactive-'+interactive+'-hover-text tw-border-b-2 tw-border-transparent tw-border-interactive-'+interactive+'-hover-border'">{{interactive}}</button>
                    </td>
                    <td class="tw-py-2">
                        <button :class="'tw-text-interactive-'+interactive+'-active-text tw-border-b-2 tw-border-transparent tw-border-interactive-'+interactive+'-active-border'">{{interactive}}</button>
                    </td>
                    <td class="tw-py-2">
                        <button :class="'tw-text-interactive-'+interactive+'-text hover:tw-text-interactive-'+interactive+'-hover-text active:tw-text-interactive-'+interactive+'-active-text tw-border-b-2 tw-border-transparent hover:tw-border-interactive-'+interactive+'-hover-border active:tw-border-interactive-'+interactive+'-active-border'">{{interactive}}</button>
                    </td>
                </tr>
            </template>

            <tr>
                <td class="tw-py-2">
                    <a href="#" class="tw-text-interactive-link">Link</a>
                </td>
                <td class="tw-py-2">
                    <a href="#" class="tw-text-interactive-link-hover">Link</a>
                </td>
                <td class="tw-py-2">
                    <a href="#" class="tw-text-interactive-link-active">Link</a>
                </td>
                <td class="tw-py-2">
                    <a href="#" class="tw-text-interactive-link hover:tw-text-interactive-link-hover active:tw-text-interactive-link-active">Link</a>
                </td>
            </tr>
            </tbody>
        </table>

        <h2 class="tw-text-2xl tw-font-medium tw-mt-6 tw-mb-2">Disabled</h2>
        <div>
            <template v-for="color in disabled">
                <div :key="'disabled-' + color" :class="'tw-rounded tw-mb-2 tw-p-4 tw-border tw-border-opaque-separator tw-text-text tw-bg-' + color">
                    <div>{{color}}</div>
                </div>
            </template>
        </div>


        <h2 class="tw-text-2xl tw-font-medium tw-mt-6 tw-mb-2">Misc</h2>
        <div>
            <template v-for="color in misc">
                <div :key="'misc-' + color" :class="'tw-rounded tw-mb-2 tw-p-4 tw-border tw-border-opaque-separator tw-text-text tw-bg-' + color">
                    <div>{{color}}</div>
                </div>
            </template>
        </div>

        <h2 class="tw-text-2xl tw-font-medium tw-mt-6 tw-mb-2">UI</h2>
        <template v-for="ui in uis">
            <div :key="'ui-' + ui" :class="'tw-mb-2 tw-p-4 tw-border tw-border-'+ui+'-separator tw-bg-'+ui+'-background text-'+ui+'-text'">{{ui}}</div>
        </template>

        <h2 class="tw-text-2xl tw-font-medium tw-mt-6 tw-mb-2">Fields</h2>
        <div class="tw-mb-2">
            <input type="text" value="Some value in a text input" class="tw-px-3 tw-py-2 tw-rounded tw-bg-field-background tw-border border-field-separator" />
        </div>

        <div class="tw-mb-2">
            <input type="text" value="Some value in a disabled text input" disabled="true" class="tw-px-3 tw-py-2 tw-rounded tw-bg-field-disabled-background tw-border tw-border-field-disabled-separator" />
        </div>


        <div class="tw-mb-2">
            <a href="#" class="tw-text-interactive-link hover:tw-text-interactive-link-hover hover:tw-underline">Link</a>
        </div>

        <h2 class="tw-text-2xl tw-font-medium tw-mt-6 tw-mb-2">Other</h2>

        <div class="tw-mb-2">
            <ul class="tw-border tw-border-separator">
                <li><a href="#" class="tw-block tw-px-4 tw-py-2 tw-text-interactive-nav-text hover:tw-text-interactive-nav-hover-text">Nav Item</a></li>
                <li><a href="#" class="tw-block tw-px-4 tw-py-2 tw-text-interactive-nav-text hover:tw-text-interactive-nav-hover-text tw-bg-interactive-nav-active-background">Active Nav Item</a></li>
                <li><a href="#" class="tw-block tw-px-4 tw-py-2 tw-text-interactive-nav-disabled-text">Disabled Nav Item</a></li>
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