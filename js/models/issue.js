define([
    'lodash',
    'backbone'
], function(_, Backbone) {
    var issueModel = Backbone.Model.extend({
        defaults: {
            // custom properties not related to json response
            issue_summary: "No description given."
        },
        //url: 'https://api.github.com/repos/rails/rails/issues',
        idAttribute: "number",
        initialize: function(){
            console.log("issues:model");

            var body_text = this.get("body");
            this.set("issue_summary", (body_text.length > 140) ? (body_text.trim().substring(0, body_text.lastIndexOf(' ', 140)) + '...') : ((body_text.length == 0) ? null : body_text));
        }

    });
    return issueModel;
});
