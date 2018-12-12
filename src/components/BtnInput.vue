<template>
    <input type="submit" :class="cssClass"
           :disabled="disabled"
           :value="value"
           @click="$emit('click')"
    />
</template>

<script>
    import Btn from './Btn'

    export default {

        props: ['value'],

        extends: Btn,
    }
</script>