<template>
    <div :id="'field-' + labelFor" class="c-field" :class="{
        'sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start': horizontal,
        'sm:border-t sm:border-separator sm:pt-5 mt-6 sm:mt-5': !first
    }">
        <div>
            <label v-if="label" :for="labelFor" :class="{
                'block text-sm font-medium leading-5 text-text sm:mt-px sm:pt-2': horizontal
            }">{{label}}</label>

            <div v-if="instructions" class="instructions">
                <p>{{ instructions }}</p>
            </div>
        </div>

        <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-xs">
                <slot></slot>

                <template v-if="errors && errors.length > 0">
                    <ul class="invalid-feedback">
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

<style lang="scss">
    .c-field {
        margin-bottom: 1rem;

        .instructions {
            @apply .mb-4;
            color: #8f98a3;
        }

        .invalid-feedback {
            @apply .text-red-500 .text-sm mt-2 ml-5 list-disc;
        }

        &.mono input,
        &.mono textarea {
            @apply .font-mono;
        }
    }
</style>