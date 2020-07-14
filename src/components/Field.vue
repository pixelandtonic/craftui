<template>
    <div :id="'field-' + labelFor" class="c-field" :class="{
        [`${PREFIX}mb-4 sm:${PREFIX}border-t sm:${PREFIX}border-separator ${PREFIX}mt-6 sm:${PREFIX}pt-5 sm:${PREFIX}grid sm:${PREFIX}grid-cols-3 sm:${PREFIX}gap-4 sm:${PREFIX}items-start`]: !vertical,
        [`sm:${PREFIX}mt-5`]: !first
    }">
        <div>
            <label v-if="label" :for="labelFor" :class="{
                [`${PREFIX}text-sm ${PREFIX}font-medium ${PREFIX}text-text ${PREFIX}mb-0`] : true,
                [`${PREFIX}block ${PREFIX}leading-5 sm:${PREFIX}mt-px sm:${PREFIX}pt-2`]: !vertical
            }">{{label}}</label>

            <div v-if="instructions" class="instructions" :class="`${PREFIX}text-sm ${PREFIX}text-light-text`">
                <p>{{ instructions }}</p>
            </div>
        </div>

        <div :class="`${PREFIX}mt-1 sm:${PREFIX}col-span-2`">
            <div :class="{
                '${PREFIX}max-w-xs': !vertical,
            }">
                <slot></slot>

                <template v-if="errors && errors.length > 0">
                    <ul :class="`invalid-feedback ${PREFIX}text-danger ${PREFIX}text-sm ${PREFIX}mt-1 ${PREFIX}ms-5 ${PREFIX}list-disc`">
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
