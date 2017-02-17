import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let user = this.store.findRecord("user", 1)
    user.then(function(user){
      return user;
    });
  },
  actions: {
    createNewPost: function(newPost) {
      let user = this.store.peekRecord("user", 1);
      const postCreation = this.store.createRecord('post', {
        imageUrl: newPost.imageUrl,
        fileName: newPost.fileName,
        caption: newPost.caption,
        user: user
      });
      user.get('posts').pushObject(postCreation);
      let route = this;
      postCreation.save().then(function(data) {
        route.transitionTo('posts');
      });
    }
  }
});
