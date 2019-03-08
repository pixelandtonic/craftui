<template>
    <field :id="id" :errors="errors">
        <label>
            <!--Must be @change, not @input (Safari issue)-->
            <input :id="id" type="checkbox" :value="value" :checked="value" @change="$emit('input', $event.target.checked)">
            {{ label }}
        </label>
    </field>
</template>

<script>
    export default {
        props: ['errors', 'id', 'label', 'value', 'instructions'],
    }
</script>

<style lang="scss" scoped>
    .field {
        input {
            @apply .mr-2;
        }

        .instructions {
            @apply .text-grey-dark .text-sm;
        }
    }
</style>