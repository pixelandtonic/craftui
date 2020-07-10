<template>
    <div :id="'field-' + labelFor" class="c-field mb-4" :class="{
        'sm:tw-border-t sm:tw-border-separator sm:tw-pt-5 mt-6 sm:tw-mt-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-items-start': !vertical,
        'mt-6 sm:tw-mt-5': !first
    }">
        <div>
            <label v-if="label" :for="labelFor" class="tw-text-sm tw-font-medium tw-text-text tw-mb-0" :class="{
                'tw-block tw-leading-5 sm:tw-mt-px sm:tw-pt-2': !vertical
            }">{{label}}</label>

            <div v-if="instructions" class="instructions tw-text-sm tw-text-light-text">
                <p>{{ instructions }}</p>
            </div>
        </div>

        <div class="tw-mt-1 sm:tw-col-span-2">
            <div :class="{
                'tw-max-w-xs': !vertical,
            }">
                <slot></slot>

                <template v-if="errors && errors.length > 0">
                    <ul class="invalid-feedback tw-text-danger tw-text-sm tw-mt-1 tw-ms-5 tw-list-disc">
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
            vertical: {
                type: Boolean,
                default: false,
            },
            first: {
                type: Boolean,
                default: false,
            }
        },
    }
</script>
