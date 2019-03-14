<template>
    <field :id="id" :errors="errors" class="c-checkbox">
        <label>
            <input type="checkbox"
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
                type: Array,
                default: null,
            },
            id: {
                type: String,
                default: function () {
                    return 'c-checkbox-id-' + this._uid;
                },
            },
            label: {
                type: String,
                default: null,
            },
            modelValue: {
                default: undefined,
            },
            value: {
                type: String,
                default: null,
            },
        },

        computed: {
            state() {
                if (this.modelValue === undefined) {
                    return this.checked;
                }
                if (Array.isArray(this.modelValue)) {
                    return this.modelValue.indexOf(this.value) > -1;
                }
                return !!this.modelValue;
            }
        },

        methods: {
            onChange() {
                this.toggle();
            },
            toggle() {
                let value;
                if (Array.isArray(this.modelValue)) {
                    value = this.modelValue.slice(0);
                    if (this.state) {
                        value.splice(value.indexOf(this.value), 1);
                    } else {
                        value.push(this.value);
                    }
                } else {
                    value = !this.state;
                }
                this.$emit('input', value);
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

    .c-checkbox {
        input {
            @include mr(2);
        }
    }
</style>