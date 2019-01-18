<template>
    <div>
        <font-awesome-icon :icon="icon" :class="cssClass"></font-awesome-icon>
    </div>
</template>

<script>
    export default {
        props: ['icon', 'cssClass'],
    }
</script>