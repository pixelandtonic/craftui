<template>
    <div class="field">
        <label :id="id" v-if="label">{{ label }}</label>

        <div v-if="instructions" class="instructions">
            <p>{{ instructions }}</p>
        </div>

        <url-input
            :autofocus="autofocus"
            :class="{'is-invalid': errors }"
            :disabled="disabled"
            :id="id"
            :placeholder="placeholder" :value="value"
            @input="$emit('input', $event)"
            :size="size"
            ref="input"/>

        <div class="invalid-feedback" v-for="(error, key) in errors" :key="key">
            {{ error }}
        </div>
    </div>
</template>

<script>
    import UrlInput from '../inputs/UrlInput';

    export default {

        props: ['label', 'id', 'placeholder', 'value', 'autofocus', 'errors', 'disabled', 'instructions', 'size'],

        components: {
            UrlInput,
        },

        created() {
            this.$on('focus', function() {
                this.$refs.input.$emit('focus');
            })
        }

    }
</script>
