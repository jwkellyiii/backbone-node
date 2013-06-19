({
    name: '../js/main',
    baseUrl: '../js',
    out: 'output/js/main.js',
    paths: {
        moment: 'libs/jquery/moment',
        showdown: 'libs/showdown/showdown'
    },
    findNestedDependencies: true,
    mainConfigFile: '../js/main.js'
})
