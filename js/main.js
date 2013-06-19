// Require.js allows us to configure shortcut alias
// Their usage will become more apparent further along in the tutorial.
requirejs.config({
//  baseUrl: "js",
  paths: {
    // Major libraries
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min', // https://github.com/amdjs
    lodash: 'libs/lodash/lodash', // alternative to underscore
    backbone: 'libs/backbone/backbone-min', // https://github.com/amdjs
    sinon: 'libs/sinon/sinon.js',

    // Require.js plugins
    text: 'libs/require/text',

    // showdown.js plugin
    showdown: 'libs/showdown/showdown',

    // jquery plugins
    moment: 'libs/jquery/moment',

    // Just a short cut so we can put our html outside the js dir
    // When you have HTML/CSS designers this aids in keeping them out of the js directory
    templates: '../templates'
  },
  useStrict: true,
  shim: {
    "jquery": {
        exports: '$'
    },
    "moment": ["jquery"],
    "underscore": {
      exports: '_'
    },
    "backbone": {
      deps: ["underscore", "jquery"],
      exports: 'Backbone'
    }
  }
});

// Let's kick off the application

require([
  'views/app',
  'router',
  'vm'
], function(AppView, Router, Vm){
  var appView = Vm.create({}, 'AppView', AppView);
  appView.render();
  Router.initialize({appView: appView});  // The router now has a copy of all main appview
});

/**
 * Allow underscore use of partials
 */
var underscorePartials = (function(){
    var partialCache = {};

    var mixin = {
        declarePartial: function(name, template) {
            partialCache[name] = _.template(template);
        },
        partial: function(name, data) {
            return partialCache[name](data)
        },
        comment_count: function(comments) {
            return (comments > 0) ? '<i class="icon-comment"></i> ' + comments + ((comments > 1) ? ' comments' : ' comment') : null
        },
        issue_state: function(state) {
            return (state == "open") ? '<a href="#" class="btn btn-success disabled">Open</a>' : '<a href="#" class="btn btn-danger disabled">Closed</a>';
        }
    };

    return mixin;

})();

