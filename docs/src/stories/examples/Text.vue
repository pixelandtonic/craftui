<template>
    <div>
        <h1 class="text-3xl font-medium">Text</h1>

        <div class="mt-6">
            <template v-for="text in texts">
                <div :key="'text-' + text" :class="`mb-2 text-${text}`">{{text}}</div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                texts: [
                    'dark-text',
                    'interactive-text',
                    'interactive-text-inverse',
                    'light-text',
                    'text',
                    'text-inverse',
                    'info',
                    'success',
                    'warning',
                    'danger',
                    'info-text',
                    'success-text',
                    'warning-text',
                    'danger-text',
                ],
            }
        }
    }
</script>