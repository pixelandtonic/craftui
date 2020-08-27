const path = require('path');
const fs = require('fs-extra');
const deleteFolderRecursive = require('./utils/delete-folder-recursive')

const root = path.resolve(__dirname, '..');

function builder(prefix, svgsPath, componentsPath) {

    const ComponentsSource = (...p) => path.resolve(root, componentsPath, ...p);

// clean output
    try {
        deleteFolderRecursive(ComponentsSource())
    } catch (e) {
    }

// built SVGs to vue components
    const camelcase = require('camelcase');
    const SVGsSource = (...p) => path.resolve(root, svgsPath, ...p);

    if (!fs.existsSync(ComponentsSource())) {
        fs.mkdirSync(ComponentsSource());
    }

    let index = [];

    fs.readdirSync(SVGsSource())
        .map(p => SVGsSource(p))
        .forEach(file => {
            const basename = camelcase(path.basename(file, 'svg'), {pascalCase: true});
            const fullname = `${prefix}${basename}`;

            const output = name => ComponentsSource(name);

            // write vue component
            fs.writeFileSync(output(fullname + '.vue'), `<template>
${fs.readFileSync(file)}
</template>
      `);

            index.push({
                handle: path.basename(file, '.svg'),
                name: fullname
            });
        });

    // write index file
    fs.writeFileSync(
        ComponentsSource('index.js'),
        'export default {' + "\r\n" +
        index.map(item => `    '${item.handle}': require('./${item.name}.vue'),`)
            .join("\r\n")
        + "\r\n" + "}"
    );
}

builder('Craft', 'src/icons/craft/svg', 'src/icons/craft/vue');
builder('HeroOutline', 'src/icons/heroicons/svg/outline', 'src/icons/heroicons/vue/outline');
builder('HeroSolid', 'src/icons/heroicons/svg/solid', 'src/icons/heroicons/vue/solid');