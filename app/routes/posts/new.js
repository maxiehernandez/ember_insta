import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('post');
  },
  actions: {
    newPost: function(model) {
      let post = this.get('store').createRecord("post", {
        name: model.name,
        imageUrl: model.imageUrl,
        caption: model.caption
      });
      post.save();
      this.transitionTo('posts')
    }
  }
});
