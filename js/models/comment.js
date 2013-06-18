define([
    'lodash',
    'backbone'
], function(_, Backbone) {
    var commentModel = Backbone.Model.extend({
        defaults: {
            // custom properties not related to json response
        },
        initialize: function(){
            console.log("comment:model");
        }

    });
    return commentModel;
});
