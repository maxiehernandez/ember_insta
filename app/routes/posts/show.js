import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('post', params.post_id);
  },

  setupController: function(controller, model) {
    controller.set('content', model);
    controller.set('body', "");
  },
  actions: {
    deletePost: function(model) {
      model.deleteRecord();
      model.get('isDeleted');
      let route = this;
      model.save().then(function(data) {
        route.transitionTo('posts');
      });
    },
    createNewComment: function(body, createdAt) {
      const route = this;
      const post = this.controller.get('model');
      const user = this.store.findRecord("user", 1).then(function(user){
        const commentCreation = route.store.createRecord('comment', {
          body: body,
          createdAt: createdAt,
          post: post,
          user: user
        });
        commentCreation.save();
        route.controller.set("body", "");
      }).then(function() {
        setTimeout(function() {
          $(".scrolling-comments").scrollTop($(".scrolling-comments")[0].scrollHeight);
        }, 50)
      });
    },
    cancelComment() {
      this.controller.set("body", "");
   }
 }
});
