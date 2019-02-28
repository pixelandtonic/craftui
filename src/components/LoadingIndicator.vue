<template>
    <div class="loading-indicator">
        <div class="animation"></div>
    </div>
</template>

<style lang="scss">
    .loading-indicator {
        & > .animation {
            animation: rotator .7s linear infinite;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            border: 2px solid transparent;
            border-right-color: #555;
            border-bottom-color: #555;
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