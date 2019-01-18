module.exports = {
    filenameHashing: false,
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },
    resolve: {
        symlinks: false
    }
}
