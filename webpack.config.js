const path = require('path')
const { mainModule } = require('process')
const { pathToFileURL } = require('url')

module.exports = {
    entry:'./src/index.js',
    output: {filename: 'main.js',
            path: path.resolve(__dirname, 'dist')},
    mode: 'development',
    devtool:'inline-source-map'

}