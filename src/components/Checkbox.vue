<template>
    <div class="c-checkbox relative flex items-start my-2">
        <div class="absolute flex items-center h-5">
            <input type="checkbox"
                   class="form-checkbox h-4 w-4"
                   :id="id"
                   :value="value"
                   :checked="state"
                   :disabled="disabled"
                   @change="onChange"
            />
        </div>

        <div class="pl-7 text-sm leading-5" :class="{'text-danger': invalid}">
            <label class="mb-0" :for="id">
                {{ label }}
            </label>
        </div>
    </div>
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
            id: {
                type: String,
                default: function () {
                    return 'c-checkbox-id-' + this._uid;
                },
            },
            invalid: {
                type: Boolean,
                default: false,
            },
            label: {
                type: String,
                default: null,
            },
            modelValue: {
                default: undefined,
            },
            value: {
                type: String | Boolean,
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
