define([
    'jquery',
    'lodash',
    'backbone',
    'text!templates/issue/page.html',
    'text!templates/comments/page.html',
    'collections/comments'
], function($, _, Backbone, issuePageTemplate, commentsPageTemplate, CommentsCollection){
    var IssuePage = Backbone.View.extend({
        el: '.page',
        render: function () {
            var that = this;
            var issueId = this.options.issueId;

            console.log(this);

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

                    // get the issue comments, if exist
                    if(issue.get("comments") > 0) {
                        that.getComments(id);
                    }
                },
                error: function(response) {
                    console.log("error");
                    console.log(response, "Error retrieving issue data!");
                }
            });
        },
        getComments: function(issueId) {
            console.log("getComments");
            console.log(issueId);
            var comments = new CommentsCollection({issueId: issueId});
            var that = this;

            comments.fetch({
                success: function(comments) {
                    console.log("success");
                    $("#comments").html(_.template(commentsPageTemplate, {comments: comments.models, _:_}));
                },
                error: function(response) {
                    console.log("error");
                    console.log(response, "Error retrieving issue comments!");
                }
            });
        }
    });
    return IssuePage;
});
