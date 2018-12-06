<template>
    <field :id="id" :label="label">
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
    </field>
</template>

<script>
    import Field from '../Field';
    import PasswordInput from '../inputs/PasswordInput';

    export default {
        props: ['label', 'id', 'name', 'placeholder', 'value', 'autofocus', 'errors', 'size'],

        components: {
            Field,
            PasswordInput,
        },

        created() {
            this.$on('focus', function() {
                this.$refs.input.$emit('focus');
            })
        }

    }
</script>
