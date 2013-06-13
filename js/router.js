// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'vm'
], function ($, _, Backbone, Vm) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages
      'modules': 'modules',
      'optimize': 'optimize',
      'backbone/:section': 'backbone',
      'backbone': 'backbone',
      'issue/:id': 'issue',

      // Default - catch all
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(options){
    console.log("router::");
    console.log(options);
    var appView = options.appView;
    var issuesList = appView.issuesList;
    var router = new AppRouter(options);

    router.on('route:optimize', function () {
      require(['views/optimize/page'], function (OptimizePage) {
        var optimizePage = Vm.create(appView, 'OptimizePage', OptimizePage);
        optimizePage.render();
      });
    });
    router.on('route:defaultAction', function (actions) {
      require(['views/dashboard/page'], function (DashboardPage) {
        var dashboardPage = Vm.create(appView, 'DashboardPage', DashboardPage, {issues: issuesList});
        dashboardPage.render();
      });
    });
    router.on('route:modules', function () {
     require(['views/modules/page'], function (ModulePage) {
        var modulePage = Vm.create(appView, 'ModulesPage', ModulePage);
        modulePage.render();
      });
    });
    router.on('route:backbone', function (section) {
      require(['views/backbone/page'], function (BackbonePage) {
        var backbonePage = Vm.create(appView, 'BackbonePage', BackbonePage, {section: section});
        backbonePage.render();
      });
    });
    router.on('route:issue', function (issueId) {
      require(['views/issue/page'], function (IssuePage) {
        console.log("router::"+ issueId);
        var issuePage = Vm.create(appView, 'IssuePage', IssuePage, {issues: issuesList, issueId: issueId});
        issuePage.render();
      });
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
