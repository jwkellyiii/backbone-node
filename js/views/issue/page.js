define([
    'jquery',
    'lodash',
    'backbone',
    'text!templates/issue/page.html'
], function($, _, Backbone, issuePageTemplate){
    var IssuePage = Backbone.View.extend({
        el: '.page',
        render: function () {
            var that = this;
            var issueId = this.options.issueId;
            that.getIssue(issueId);

            //$(this.el).html(issuePageTemplate);
        },
        getIssue: function(id) {
            console.log("getIssue");
            console.log(id);
            var that = this;
            //var issue = new IssuesCollection();
            console.log(this.options);
            var issues = this.options.issues;
            console.log("issues:: ");
            console.log(issues);
            var issue = issues.get(id);
            //var issue = this.options.collection.get(id);
            console.log("issue:: ");
            console.log(issue);

            issue.fetch({
                success: function(issue) {
                    console.log("success");
                    $(that.el).html(_.template(issuePageTemplate, {issue: issue, _:_}));
                },
                error: function(response) {
                    console.log("error");
                    console.log(response, "Error retrieving issue data!");
                }
            });
        }
    });
    return IssuePage;
});
