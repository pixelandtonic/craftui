<template>
    <input type="submit" :class="cssClass"
           :disabled="disabled"
           :value="value"
           @click="$emit('click')"
    />
</template>

<script>
    import Btn from './Btn.vue'

    export default {

        props: ['value'],

        extends: Btn,
    }
</script>