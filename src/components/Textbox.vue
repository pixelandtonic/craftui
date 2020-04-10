<template>
    <div class="c-textbox">
        <div class="c-textbox-wrapper">
            <component
                    class="form-input block full sm:text-sm sm:leading-5 border rounded"
                    :is="computedComponent"
                    :autocapitalize="autocapitalize"
                    :autocomplete="autocomplete"
                    :autofocus="autofocus"
                    :class="{
                        'w-full': !size && type !== 'number',
                        'w-16': type === 'number',
                        'is-invalid border-danger': invalid,
                        'border-field-separator': !invalid && !disabled,
                        'text-red-600': max && max < this.value.length,
                        'bg-field-disabled-background border-field-disabled-separator': disabled,
                        'bg-field-background': !disabled
                    }"
                    :cols="computedCols"
                    :disabled="disabled"
                    :id="id"
                    :mask="mask"
                    :max="max"
                    :min="min"
                    :name="name"
                    :pattern="pattern"
                    :placeholder="placeholder"
                    :readonly="readonly"
                    :rows="computedRows"
                    :size="size"
                    :spellcheck="spellcheck"
                    :step="step"
                    :type="computedType"
                    :value="value"
                    ref="input"
                    v-mask="mask"
                    @blur="$emit('blur', $event)"
                    @focus="$emit('focus', $event.target.value)"
                    @change="$emit('change', $event)"
                    @input="$emit('input', $event.target.value)"
                    @keydown="$emit('keydown', $event)"
                    @keypress="$emit('keypress', $event)"
                    @keyup="$emit('keyup', $event)"
            ><template v-if="type === 'textarea'">{{value}}</template></component>

            <p v-if="max"
               class="max"
               :class="{
                    'text-light-text': remainingChars >= 20,
                    'text-warning': remainingChars < 20 && remainingChars >= 0,
                    'text-danger': remainingChars < 0
                }"><small>{{ (max - remainingChars) }}/{{max}}</small></p>
        </div>
    </div>
</template>

<script>
    import mask from 'vue-the-mask/src/directive'

    export default {
        directives: {
            mask: {
                bind(el, binding, vnode) {
                    if (vnode.context.mask) {
                        return mask(el, binding)
                    }
                }
            }
        },

        props: {
            autocapitalize: {
                type: Boolean,
                default: false
            },
            autocomplete: {
                type: String,
                default: 'on'
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            cols: {
                type: Number,
                default: null,
            },
            disabled: {
                type: Boolean,
                default: false
            },
            invalid: {
                type: Boolean,
                default: false
            },
            id: {
                type: String,
                default: function () {
                    return 'c-textbox-id-' + this._uid;
                },
            },
            mask: {
                type: String | Object,
                default: ''
            },
            max: {
                type: Number | String,
                default: null
            },
            min: {
                type: Number | String,
                default: null
            },
            name: {
                type: String,
                default: null
            },
            pattern: {
                type: String,
                default: null
            },
            placeholder: {
                type: String,
                default: null
            },
            readonly: {
                type: Boolean,
                default: false
            },
            rows: {
                type: Number | String,
                default: null,
            },
            size: {
                type: Number | String,
                default: null
            },
            spellcheck: {
                type: Boolean,
                default: false
            },
            step: {
                type: Number | String,
                default: null
            },
            type: {
                type: String,
                default: 'text'
            },
            value: {
                type: String | Number,
                default: ''
            },
        },

        computed: {
            remainingChars() {
                if (this.max) {
                    return this.max - this.value.length
                }
            },

            computedComponent() {
                if (this.type === 'textarea') {
                    return 'textarea'
                }

                return 'input'
            },

            computedType() {
                if (this.type === 'textarea') {
                    return null
                }

                return this.type
            },

            computedCols() {
                if (this.type !== 'textarea') {
                    return null
                }

                return this.cols
            },

            computedRows() {
                if (this.type !== 'textarea') {
                    return null
                }

                return this.rows ? this.rows : 4
            }
        },

        created() {
            this.$on('focus', function() {
                this.$refs.input.focus()
            })
        },
    }
</script>

