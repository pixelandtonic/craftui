<template>
    <div class="field">
        <label :id="id" v-if="label">{{ label }}</label>

        <div v-if="instructions" class="instructions">
            <p>{{ instructions }}</p>
        </div>

        <div class="relative" :class="{'mt-4': max}">
            <div v-if="max"
                 class="text-xs text-right pr-1 absolute" style="right: 0; top: -1rem;"
                 :class="{
                    'text-grey': remainingChars >= 10,
                    'text-orange': remainingChars < 10 && remainingChars >= 0,
                    'text-red': remainingChars < 0
                }">{{ remainingChars }}</div>

            <text-input
                    :autofocus="autofocus"
                    :class="{
                        'is-invalid': errors,
                        'text-red-dark': max && max < this.value.length
                    }"
                    :disabled="disabled"
                    :id="id"
                    :name="name"
                    :placeholder="placeholder"
                    :value="value"
                    :mask="mask"
                    @input="$emit('input', $event)"
                    :autocapitalize="autocapitalize"
                    :spellcheck="spellcheck"
                    :readonly="readonly"
                    ref="input"/>
        </div>

        <div class="invalid-feedback" v-for="(error, key) in errors" :key="key">
            {{ error }}
        </div>
    </div>
</template>

<script>
    import TextInput from '../inputs/TextInput';

    export default {

        props: ['label', 'id', 'name', 'placeholder', 'value', 'autofocus', 'errors', 'disabled', 'instructions', 'mask', 'autocapitalize', 'spellcheck', 'readonly', 'size', 'max'],

        components: {
            TextInput,
        },

        computed: {
            remainingChars() {
                if (this.max) {
                    return this.max - this.value.length
                }
            }
        },

        created() {
            this.$on('focus', function() {
                this.$refs.input.$emit('focus');
            })
        }

    }
</script>
