import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let user = this.get('store').peekRecord("user", 1);
    return this.get('store').createRecord("post", {
      user: user,
      fileName: null,
      imageUrl: null,
      caption: null
    });
  },
  actions: {
    createNewPost: function(newPost) {
      let route = this;
      newPost.save().then(function(data) {
        route.transitionTo('posts');
      });
    }
  }
});
