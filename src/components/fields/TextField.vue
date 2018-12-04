<template>
    <div class="field">
        <label :id="id" v-if="label">{{ label }}</label>

        <div v-if="instructions" class="instructions">
            <p>{{ instructions }}</p>
        </div>

        <text-input
            :autofocus="autofocus"
            :class="{'is-invalid': errors }"
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
            :size="size"
            ref="input"/>

        <div class="invalid-feedback" v-for="(error, key) in errors" :key="key">
            {{ error }}
        </div>
    </div>
</template>

<script>
    import TextInput from '../inputs/TextInput';

    export default {

        props: ['label', 'id', 'name', 'placeholder', 'value', 'autofocus', 'errors', 'disabled', 'instructions', 'mask', 'autocapitalize', 'spellcheck', 'readonly', 'size'],

        components: {
            TextInput,
        },

        created() {
            this.$on('focus', function() {
                this.$refs.input.$emit('focus');
            })
        }

    }
</script>
