<template>
    <div class="c-radio flex items-center my-2">
        <input type="radio"
               class="form-radio h-4 w-4"
               :id="id"
               :name="name"
               :value="value"
               :checked="state"
               :disabled="disabled"
               @change="onChange"
        />

        <label :for="id" class="mb-0 pl-3 ml-0">
            <span class="block text-sm leading-5 font-medium text-text">{{ label }}</span>
        </label>
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
            name: {
                type: String,
                default: null,
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
