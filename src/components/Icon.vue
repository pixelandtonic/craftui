<template>
    <font-awesome-icon :icon="icon" :class="cssClass"></font-awesome-icon>
</template>

<script>
    export default {
        props: ['icon', 'cssClass'],
    }
</script>