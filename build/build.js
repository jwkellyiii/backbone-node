({
    name: '../js/main',
    baseUrl: '../js',
    out: 'output/js/main.js',
    paths: {
        moment: 'libs/jquery/moment',
        markdown: 'libs/markdown/markdown'
    },
    findNestedDependencies: true,
    mainConfigFile: '../js/main.js'
})
