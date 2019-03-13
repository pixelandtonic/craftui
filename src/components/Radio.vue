<template>
    <field :id="id" :errors="errors" class="c-radio">
        <label>
            <input type="radio"
                    :id="id"
                    :value="value"
                    :checked="state"
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
            errors: {
                type: Array,
                default: null,
            },
            id: {
                type: String,
                default: null,
            },
            label: {
                type: String,
                default: null,
            },
            checked: {
                type: Boolean,
                default: false,
            },
            value: {
                default: '',
            },
            instructions: {
                type: String,
                default: null,
            },
            modelValue: {
                default: undefined,
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