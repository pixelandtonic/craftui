<template>
    <div :class="{
        [`${PREFIX}bg-primary-background ${PREFIX}rounded-lg ${PREFIX}shadow-md ${PREFIX}mb-6 ${PREFIX}overflow-hidden`]: true,
        [`${PREFIX}px-6 ${PREFIX}py-5`]: (padded === undefined||padded === true)
    }">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['padded'],
    }
</script>