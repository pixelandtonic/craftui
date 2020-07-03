<template>
    <div :id="'field-' + labelFor" class="c-field mb-4" :class="{
        'sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-items-start': horizontal,
        'sm:tw-border-t sm:tw-border-separator sm:tw-pt-5 mt-6 sm:tw-mt-5': !first
    }">
        <div>
            <label v-if="label" :for="labelFor" :class="{
                'tw-block tw-text-sm tw-font-medium tw-leading-5 tw-text-text sm:tw-mt-px sm:tw-pt-2': horizontal
            }">{{label}}</label>

            <div v-if="instructions" class="instructions tw-mb-4 tw-text-light-text">
                <p>{{ instructions }}</p>
            </div>
        </div>

        <div class="tw-mt-1 sm:tw-mt-0 sm:tw-col-span-2">
            <div class="tw-max-w-xs">
                <slot></slot>

                <template v-if="errors && errors.length > 0">
                    <ul class="invalid-feedback tw-text-danger tw-text-sm tw-mt-2 tw-ml-5 tw-list-disc">
                        <template v-if="errors" v-for="(error, key) in errors">
                            <li :key="key">{{ error }}</li>
                        </template>
                    </ul>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            errors: {
                type: Array | Boolean,
                default: null,
            },
            labelFor: {
                type: String,
                default: function () {
                    return 'c-field-id-' + this._uid;
                },
            },
            instructions: {
                type: String,
                default: null,
            },
            label: {
                type: String,
                default: null,
            },
            horizontal: {
                type: Boolean,
                default: true,
            },
            first: {
                type: Boolean,
                default: false,
            }
        },
    }
</script>
