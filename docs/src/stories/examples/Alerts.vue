<template>
    <div>
        <h1 :class="`text-3xl font-medium mb-2`">Alerts</h1>

        <div v-for="alert in alerts" :class="`rounded-md p-4 mb-4 bg-${alert}-background border border-${alert}-separator`">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg :class="`h-5 w-5 text-${alert}-separator`" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3 flex-1 md:flex md:justify-between">
                    <p :class="`text-sm leading-5 text-${alert}-text`">
                        A new software update is available. See what’s new in version 2.0.4.
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                alerts: [
                    'info',
                    'success',
                    'warning',
                    'danger',
                ],
            }
        }
    }
</script>