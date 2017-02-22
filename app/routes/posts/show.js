import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('post', params.post_id);
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
      let post = this.controller.get('model');
      let id = post.get('id');
      console.log(id, "is this a post id?");
      console.log(post, "controller getting model... should be body => ", body)
      let user = this.store.peekRecord("user", 1);
      const commentCreation = this.store.createRecord('comment', {
        body: body,
        post: post,
        user: user
      });
      user.get('comments').pushObject(commentCreation);
      post.get('comments').pushObject(commentCreation);
      commentCreation.save().then(() => {
        this.transitionTo('post', post);
      });
    }
  }
});
