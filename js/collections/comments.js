define([
    'jquery',
    'lodash',
    'backbone',
    'models/comment'
], function($, _, Backbone, commentModel){
    var commentsCollection = Backbone.Collection.extend({
        model: commentModel,
        url: function() {
            return 'https://api.github.com/repos/rails/rails/issues/' + this.issueId + '/comments';
        },
                //url: 'http://localhost:1337/issues',
                //url: function() {
                //    console.log("url");
                //    return 'https://api.github.com/repos/rails/rails';
                //}
        initialize: function(issue){
            console.log("comments:collection");
            this.issueId = issue.issueId
        }
    });

    return commentsCollection;
});
