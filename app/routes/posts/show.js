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
    createNewComment: function(body) {
      const post = this.controller.get('model');
      const user = this.store.findRecord("user", 1);
      const commentCreation = this.store.createRecord('comment', {
        body: body,
        post: post,
        user: user
      });
      commentCreation.save();
      this.controller.set("body", "");
    },
    cancelComment() {
      this.controller.set("body", "");
   }
 }
});
