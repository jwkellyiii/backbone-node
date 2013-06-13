define([
    'lodash',
    'backbone'
], function(_, Backbone) {
    var issueModel = Backbone.Model.extend({
        //url: 'https://api.github.com/repos/rails/rails/issues',
        idAttribute: "number",
        initialize: function(){
            console.log("issues:model");
        }

    });
    return issueModel;
});
