<template>
  <div id="app">
    <h1 class="mb-4">Craft Components</h1>

    <checkbox-field label="Checkbox Field" id="checkbox-field" />
    <lightswitch-field label="Lightswitch Field" />
    <password-field label="Password Field" />
    <select-field label="Select Field" :options="[{label: 'Default Option', value: ''}]" />
    <textarea-field label="Textarea Field" />
    <text-field label="Text Field" />
    <url-field label="URL Field" />
  </div>
</template>

<script>
    import './sass/app.scss'
    import CraftComponents from './components/index.js'

    export default {

        name: 'app',

        components: {
            ...CraftComponents
        },

    }
</script>

