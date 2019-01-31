<template>
    <input
        :autofocus="autofocus"
        :disabled="disabled"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
        autocomplete="off"
        :class="{'w-full': !size }"
        ref="input"
        v-mask="mask"
        :autocapitalize="autocapitalize"
        :spellcheck="spellcheck"
        :readonly="readonly"
        :size="size"
        type="text"/>
</template>

<script>
    // import Inputmask from 'inputmask'

    export default {

        props: ['id', 'name', 'placeholder', 'value', 'autofocus', 'disabled', 'mask', 'autocapitalize', 'spellcheck', 'readonly', 'size'],

        created() {
            this.$on('focus', function () {
                this.$refs.input.focus()
            })
        },

        directives: {
            mask: {
                bind: function(el, binding) {
                    if(binding.value) {
                        // Inputmask(binding.value).mask(el);
                    }
                }
            }
        }

    }
</script>
