<template>
    <div>
        <h1 :class="`text-3xl font-medium`">Fields</h1>
        <div :class="`mt-6 mb-2`">
            <input type="text" value="Some value in a text input" :class="`w-full max-w-md px-3 py-2 rounded bg-field-background border border-field-separator`" />
        </div>

        <div :class="`mt-6 mb-2`">
            <input type="text" value="Some value in a disabled text input" disabled="true" :class="`w-full max-w-md px-3 py-2 rounded bg-field-disabled-background border border-field-disabled-separator`" />
        </div>
    </div>
</template>
