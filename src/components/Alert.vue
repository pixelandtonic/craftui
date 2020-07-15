<template>
    <div :class="`rounded-md p-4 bg-${kind}-background`">
        <div class="flex">
            <div class="flex-shrink-0 flex">
                <icon :icon="icon" :class="`h-5 w-5 text-${kind}-separator`"></icon>
            </div>
            <div class="ml-3 flex-1 md:flex md:justify-between">
                <p :class="`text-sm leading-5 text-${kind}-text`">
                    <slot></slot>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            kind: {
                type: String,
                default: 'info',
            },
            icon: {
                type: String,
                default: 'info-circle',
            }
        }
    }
</script>