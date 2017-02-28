import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('post', params.post_id);
  },
  emptyTextArea: Ember.on('activate', function(){
    setTimeout(function(){
      $(".ember-text-area").val("").focus();
    },10)
  }),
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
      let post = this.controller.get('model');
      let user = this.store.findRecord("user", 1);
      const commentCreation = this.store.createRecord('comment', {
        body: body,
        post: post,
        user: user
      });
      commentCreation.save();
      $(".ember-text-area").val("").focus();
    },
    cancelComment(body) {
     this.transitionTo('posts');
   }
 }
});
