<template>
    <div>
        <h1 :class="`text-3xl font-medium`">Badges</h1>

        <h2 :class="`text-2xl font-medium mt-6 mb-2`">Regular</h2>
        <div class="mt-6 border p-12 max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
            <badge v-for="badgeType in badgeTypes" :type="badgeType">{{badgeType}}</badge>
        </div>

        <h2 :class="`text-2xl font-medium mt-6 mb-2`">Large</h2>
        <div class="mt-6 border p-12 max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
            <badge v-for="badgeType in badgeTypes" :type="badgeType" large>{{badgeType}}</badge>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                badgeTypes: [
                    'default',
                    'info',
                    'success',
                    'warning',
                    'danger',
                ]
            }
        }
    }
</script>