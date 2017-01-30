import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('post', params.post_id);
  },
  actions: {
    deletePost: function(model) {
      model.destroyRecord();
      model.get('isDeleted');
      model.save().then(this.transitionTo('posts'));
    }
  }
});
