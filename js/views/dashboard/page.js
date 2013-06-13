define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/dashboard/page.html'
], function($, _, Backbone, dashboardPageTemplate){
  var DashboardPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      var that = this;
      that.getIssues();

      //$(this.el).html(dashboardPageTemplate);
    },
    getIssues: function() {
        console.log("getIssues");
        console.log(this);
        var that = this;
        //var issues = new IssuesCollection();
        var issues = this.options.issues;

        issues.fetch({
            success: function(issues) {
                console.log("success");
                $(that.el).html(_.template(dashboardPageTemplate, {issues: issues.models, _:_}));
            },
            error: function(response) {
                console.log("error");
                console.log(response, "Error retrieving issues from GitHub!");
            }
        });
    }
  });
  return DashboardPage;
});
