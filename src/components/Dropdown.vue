<template>
    <field :id="id + '-label'" :label="label" :instructions="instructions" :errors="errors" class="c-dropdown">
        <div class="c-dropdown-input" :class="{'is-invalid': (errors && errors.length > 0)}">
            <div class="select">
                <select :disabled="disabled" :value="value" :class="{ 'w-full': fullwidth }" @change="$emit('input', $event.target.value)">
                    <option v-for="(option, key) in options" :value="option.value" :key="key">{{ option.label }}</option>
                </select>
            </div>
        </div>
    </field>
</template>


<script>
    import Field from './Field.vue';

    export default {
        props: {
            disabled: {
                type: Boolean,
                default: false,
            },
            errors: {
                type: Array | Boolean,
                default: null,
            },
            fullwidth: {
                type: Boolean,
                default: false,
            },
            id: {
                type: String,
                default: function () {
                    return 'c-dropdown-id-' + this._uid;
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
            options: {
                type: Array,
                default: null,
            },
            value: {
                type: String | Number,
                default: null,
            },
        },

        components: {
            Field,
        },
    }
</script>

<style lang="scss">
    .c-dropdown {
        .c-dropdown-input {
            select {
                &.w-full {
                    @apply .w-full;
                }
            }
        }

        .is-invalid {
            select {
                @apply .border-red;
            }
        }
    }
</style>
