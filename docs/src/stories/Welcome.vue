<template>
    <div>
        <h1 :class="`${PREFIX}text-xl ${PREFIX}font-medium`">Welcome to Craft UI</h1>

        <p :class="`${PREFIX}mt-4`">Craft UI is a Vue plugin component library.</p>

        <ul class="`${PREFIX}list-disc ${PREFIX}mt-4 ${PREFIX}ml-5`">
            <li><a :class="`${PREFIX}text-interactive-link hover:${PREFIX}text-interactive-link-hover`" href="https://github.com/pixelandtonic/craftui">GitHub</a></li>
            <li><a :class="`${PREFIX}text-interactive-link hover:${PREFIX}text-interactive-link-hover`" href="https://www.npmjs.com/package/@pixelandtonic/craftui">NPM</a></li>
        </ul>
    </div>
</template>
