<template>
    <field :id="id" :errors="errors" class="c-checkbox-field">
        <label>
            <!--Must be @change, not @input (Safari issue)-->
            <input :id="id" type="checkbox" :value="value" :checked="value" @change="$emit('input', $event.target.checked)">
            {{ label }}
        </label>
    </field>
</template>

<script>
    export default {
        props: {
            errors: {
                type: Array,
                default: null,
            },
            id: {
                type: String,
                default: null,
            },
            label: {
                type: String,
                default: null,
            },
            value: {
                type: String,
                default: null,
            },
            instructions: {
                type: String,
                default: null,
            },
        },
    }
</script>

<style lang="scss">
    @import "../sass/mixins";

    .c-checkbox-field {
        input {
            @include mr(2);
        }

        .instructions {
            @apply .text-grey-dark .text-sm;
        }
    }
</style>