<template>
    <div>
        <h1 :class="`text-3xl font-medium`">Alerts</h1>

        <div class="mt-6">
            <alert v-for="alert in alerts" :kind="alert">
                A new software update is available. See what’s new in version 3.5.
            </alert>
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