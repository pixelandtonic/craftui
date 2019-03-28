<template>
    <field :id="id" :errors="errors" class="c-radio">
        <label>
            <input type="radio"
                   :id="id"
                   :value="value"
                   :checked="state"
                   :disabled="disabled"
                   @change="onChange"
            />

            {{ label }}
        </label>
    </field>
</template>

<script>
    export default {
        model: {
            prop: 'modelValue',
            event: 'input'
        },

        props: {
            checked: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            errors: {
                type: Array | Boolean,
                default: null,
            },
            id: {
                type: String,
                default: function () {
                    return 'c-radio-id-' + this._uid;
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
            modelValue: {
                default: undefined,
            },
            value: {
                default: '',
            },
        },

        computed: {
            state() {
                if (this.modelValue === undefined) {
                    return this.checked;
                }

                return this.modelValue === this.value;
            }
        },

        methods: {
            onChange() {
                this.toggle()
            },

            toggle() {
                this.$emit('input', this.state ? '' : this.value);
            }
        },

        watch: {
            checked(newValue) {
                if (newValue !== this.state) {
                    this.toggle();
                }
            }
        },

        mounted() {
            if (this.checked && !this.state) {
                this.toggle();
            }
        },
    }
</script>

<style lang="scss">
    @import "../sass/mixins";

    .c-radio {
        input {
            @include mr(2);
        }

        .instructions {
            @apply .text-grey-dark .text-sm;
        }
    }
</style>