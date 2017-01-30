import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('post', params.post_id);
  },
  actions: {
    updatePost: function(model) {
      let post = this.get('store').createRecord("post", {
        name: model.name,
        imageUrl: model.imageUrl,
        caption: model.caption
      });
      post.save();
      this.transitionTo('posts');
    }
  }
});
