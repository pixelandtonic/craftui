<template>
    <div class="c-spinner" :class="{
        [size]: true
    }">
        <div class="animation"></div>
    </div>
</template>

<script>
    export default {
        props: {
            size: {
                type: String,
                default: 'base',
            },
        },
    }
</script>

<style lang="scss">
    .c-spinner {
        @apply .inline-block;

        & > .animation {
            animation: rotator .7s linear infinite;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 2px solid transparent;
            border-top-color: transparent !important;
            border-left-color: transparent !important;
            border-right-color: #555;
            border-bottom-color: #555;
        }

        &.sm {
            & > .animation {
                width: 16px;
                height: 16px;
            }
        }

        &.lg {
            & > .animation {
                width: 32px;
                height: 32px;
                border-width: 3px;
            }
        }
    }

    @keyframes rotator {
        0% {
            transform: rotate(0)
        }

        to {
            transform: rotate(1turn)
        }
    }
</style>
