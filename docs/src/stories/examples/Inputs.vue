<template>
    <div>
        <h1 :class="`text-3xl font-medium`">Fields</h1>

        <h2 class="text-2xl font-medium mt-6">Checkbox</h2>
        <checkbox class="mt-4"></checkbox>
        <checkbox class="mt-4" :disabled="true"></checkbox>
        <checkbox class="mt-4" :checked="true"></checkbox>
        <checkbox class="mt-4" :checked="true" :disabled="true"></checkbox>

        <h2 class="text-2xl font-medium mt-6">Dropdown</h2>
        
        <div>
            <dropdown class="mt-5" :options="[{label: 'One', value: 'one'}, {label: 'Two', value: 'two'}]"></dropdown>
        </div>
        <div>
            <dropdown class="mt-5" :options="[{label: 'One', value: 'one'}, {label: 'Two', value: 'two'}]" :disabled="true"></dropdown>
        </div>

        <h2 class="text-2xl font-medium mt-6">Lightswitch</h2>
        <lightswitch class="mt-4"></lightswitch>
        <lightswitch class="mt-4" :disabled="true"></lightswitch>
        <lightswitch class="mt-4" :checked="true"></lightswitch>
        <lightswitch class="mt-4" :checked="true" :disabled="true"></lightswitch>

        <h2 class="text-2xl font-medium mt-6">Radio</h2>
        <radio class="mt-4" value="value-1"></radio>
        <radio class="mt-4" value="value-2" :disabled="true"></radio>
        <radio class="mt-4" :checked="true"></radio>
        <radio class="mt-4" :checked="true" :disabled="true"></radio>

        <h2 class="text-2xl font-medium mt-6">Textbox</h2>
        <textbox class="mt-5" value="Text input"></textbox>
        <textbox class="mt-5" value="Text input disabled" :disabled="true"></textbox>
    </div>
</template>
