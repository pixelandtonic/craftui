<template>
    <svg viewBox="0 0 18 18" width="18" height="18" role="presentation" class="c-icon">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#' + icon"></use>
    </svg>
</template>

<script>
    export default {
        props: ['icon', 'cssClass'],
    }
</script>

<style lang="scss">
    .c-icon {
        @apply .inline-block .align-bottom;
        width: 18px;
        height: 18px;

        color: green;

        &.sm {
            width: 12px;
            height: 12px;
        }

        &.base {
            width: 18px;
            height: 18px;
        }

        &.lg {
            width: 24px;
            height: 24px;
        }

        &.xl {
            width: 32px;
            height: 32px;
        }
    }
</style>