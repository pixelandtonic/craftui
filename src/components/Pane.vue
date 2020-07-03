<template>
    <div class="tw-bg-primary-background tw-rounded-lg tw-shadow-md tw-mb-6 tw-overflow-hidden" :class="{'tw-px-6 tw-py-5': (padded === undefined||padded === true)}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['padded'],
    }
</script>