define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'events',
  'collections/issues',
  'text!templates/layout.html',
  'moment',
  'markdown'
], function($, _, Backbone, Vm, Events, IssuesCollection, layoutTemplate){
  var AppView = Backbone.View.extend({
    el: '.container',
    initialize: function () {
      this.issuesList = new IssuesCollection();
    
      var NestedView2 = Backbone.View.extend({});
      var NestedView1 = Backbone.View.extend({
        initialize: function () {
          var nestedView2 = Vm.create(this, 'Nested View 2', NestedView2);
        }
      });
      var nestedView1 = Vm.create(this, 'Nested View 1', NestedView1);

      _.mixin(underscorePartials);
      _.declarePartial('label', '<span class="label label-info"><%= label.name %></span>');
    },
    render: function () {
      var that = this;
      $(this.el).html(layoutTemplate);
      require(['views/header/menu'], function (HeaderMenuView) {
        var headerMenuView = Vm.create(that, 'HeaderMenuView', HeaderMenuView);
        headerMenuView.render();
      });
      require(['views/footer/footer'], function (FooterView) {
        // Pass the appView down into the footer so we can render the visualisation
        var footerView = Vm.create(that, 'FooterView', FooterView, {appView: that});
        footerView.render();
      });
    
    }
  });
  return AppView;
});
