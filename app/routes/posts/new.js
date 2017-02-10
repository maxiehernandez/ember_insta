import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get('store').createRecord("post", {
      name: null,
      imageUrl: null,
      caption: null
    });
  },
  actions: {
    createNewPost: function(newPost) {
      let route = this;
      newPost.save().then(function(data) {
        console.log("here============", data);
        route.transitionTo('posts');
      });
    }
  }
});
