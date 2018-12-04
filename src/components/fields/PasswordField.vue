<template>
    <div class="field">
        <label :id="id" v-if="label">{{ label }}</label>
        <password-input
                ref="input"
                :id="id"
                :name="name"
                class="bg-white border px-2 py-1"
                :class="{'is-invalid': errors }"
                :placeholder="placeholder" :value="value"
                @input="$emit('input', $event)"
                :size="size"
                :autofocus="autofocus" />

        <div class="invalid-feedback" v-for="(error, key) in errors" :key="key">
            {{ error }}
        </div>
    </div>
</template>

<script>
    import PasswordInput from '../inputs/PasswordInput';

    export default {
        props: ['label', 'id', 'name', 'placeholder', 'value', 'autofocus', 'errors', 'size'],

        components: {
            PasswordInput,
        },

        created() {
            this.$on('focus', function() {
                this.$refs.input.$emit('focus');
            })
        }

    }
</script>
