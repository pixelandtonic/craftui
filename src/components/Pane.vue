<template>
    <div class="bg-primary-background rounded-lg shadow-md mb-6 overflow-hidden" :class="{'px-6 py-5': (padded === undefined||padded === true)}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['padded'],
    }
</script>