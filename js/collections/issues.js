define([
    'jquery',
    'lodash',
    'backbone',
    'models/issue'
], function($, _, Backbone, issueModel){
    var issuesCollection = Backbone.Collection.extend({
        model: issueModel,
        url: 'https://api.github.com/repos/rails/rails/issues',
        //url: 'http://localhost:1337/issues',
        //url: function() {
        //    console.log("url");
        //    return 'https://api.github.com/repos/rails/rails';
        //}
        initialize: function(){
            console.log("issues:collection");
        }
    });

    return issuesCollection;
});
