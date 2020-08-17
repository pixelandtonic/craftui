<template>
    <div>
        <h1 class="text-3xl font-medium">Icons</h1>

        <div class="mt-2">
            <textbox v-model="q" placeholder="Filter icons"></textbox>
        </div>

        <div v-for="(source, sourceKey) in sources" :key="'source' + sourceKey">
            <div v-for="(set, setKey) in source" :key="'set' + sourceKey + setKey">
                <h2 class="text-2xl font-medium mt-6">{{ sourceKey }}/{{setKey}} ({{filteredIcons(set).length}})</h2>
                <div class="mt-4 grid grid-cols-8 gap-6">
                    <div v-for="(icon, iconKey) in filteredIcons(set)" :key="'icons' + sourceKey + setKey + iconKey">
                        <icon :source="sourceKey" :icon="[setKey, icon]" size="lg"></icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import craftRegular from '../../../../src/icons/craft/regular'
    import craftLight from '../../../../src/icons/craft/light'
    import heroSolid from '../../../../src/icons/heroicons/solid'
    import heroOutline from '../../../../src/icons/heroicons/outline'

    export default {
        data() {
            return {
                q: '',
                sources: {
                    craft: {
                        regular: craftRegular,
                        light: craftLight,
                    },
                    heroicons: {
                        solid: Object.keys(heroSolid),
                        outline: Object.keys(heroOutline),
                    },
                }
            }
        },

        computed: {
            filteredIcons() {
                return (icons) => {
                    return icons.filter(icon => icon.includes(this.q));
                }
            }
        }
/*
        computed: {
            regularIcons() {
                return regularIcons
            },
            lightIcons() {
                return lightIcons
            }
        }*/
    }
</script>