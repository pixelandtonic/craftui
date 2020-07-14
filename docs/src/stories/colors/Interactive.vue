<template>
    <div>
        <h1 :class="`text-3xl font-medium mb-2`">Interactive</h1>

        <template v-for="interactive in interactives">
            <div :key="'interactive-' + interactive" :class="`py-2`">
                <button :class="`px-4 py-2 rounded bg-interactive-${interactive} text-interactive-text-inverse hover:bg-interactive-${interactive}-hover active:bg-interactive-${interactive}-active`">{{interactive}}</button>
            </div>
        </template>

        <div class="py-2">
            <a href="#" :class="`text-interactive-link hover:text-interactive-link-hover active:text-interactive-link-active`">Link</a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                interactives: [
                    'primary',
                    'secondary',
                    'tertiary',
                    'danger',
                    'success',
                ],
            }
        }
    }
</script>