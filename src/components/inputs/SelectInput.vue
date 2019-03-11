<template>
    <div class="c-select-input">
        <div class="select">
            <select :value="value" :class="{ 'w-full': fullwidth }" @input="$emit('input', $event.target[$event.target.selectedIndex].value)">
                <option v-for="(option, key) in options" :value="option.value" :key="key">{{ option.label }}</option>
            </select>
        </div>
    </div>
</template>


<script>
    export default {

        props: ['fullwidth', 'options', 'value'],

    }
</script>

<style lang="scss">
    .c-select-input {
        select {
            &.w-full {
                @apply .w-full;
            }
        }
    }
</style>
