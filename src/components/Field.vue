<template>
    <div :id="'field-' + labelFor" class="c-field" :class="{
        'mb-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start': !vertical,
        'mt-6 sm:pt-5 sm:border-t sm:border-separator': !vertical && !first,
        'sm:mt-5': !first && vertical,
    }">
        <div>
            <label v-if="label" :for="labelFor" :class="{
                'text-sm font-medium text-text mb-0': true,
                'block leading-5 sm:mt-px sm:pt-2': !vertical
            }">{{label}}</label>

            <div v-if="instructions" class="instructions text-sm text-light-text">
                <p>{{ instructions }}</p>
            </div>
        </div>

        <div class="mt-1 sm:col-span-2">
            <div :class="{
                'max-w-xs': !vertical,
            }">
                <slot></slot>

                <template v-if="errors && errors.length > 0">
                    <ul class="invalid-feedback text-danger text-sm mt-1 ms-5 list-disc">
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
