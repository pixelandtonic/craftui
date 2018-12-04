<template>
    <div>
        <div class="select">
            <select :value="value" :class="{ 'w-full': fullwidth }" @input="$emit('input', $event)">
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
