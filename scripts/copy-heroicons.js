const path = require('path');
const fs = require('fs-extra');
const deleteFolderRecursive = require('./utils/delete-folder-recursive')

const root = path.resolve(__dirname, '..');

function copySvgs(source, dest) {
    const sourcePath = path.resolve(root, source)
    const destPath = path.resolve(root, dest)

    // clean output
    try {
        deleteFolderRecursive(destPath)
    } catch (e) {
        console.error(e)
    }

    // Copy SVG files
    fs.copy(sourcePath, destPath, function(err) {
        if (err) {
            return console.error(err)
        }
        console.log(`Copied "${source}" to "${dest}"`)
    });
}

copySvgs('node_modules/heroicons/solid', 'src/icons/heroicons/svg/solid');
copySvgs('node_modules/heroicons/outline', 'src/icons/heroicons/svg/outline');