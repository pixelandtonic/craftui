<template>
    <div class="cicon">
        <font-awesome-icon :icon="icon" :class="cssClass"></font-awesome-icon>
    </div>
</template>

<script>
    export default {
        props: ['icon', 'cssClass'],
    }
</script>

<style lang="scss">
    .cicon {
        @apply .bg-red;
        width: 100px;
    }
</style>
