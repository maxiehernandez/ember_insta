import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('post', params.post_id);
  },
  actions: {
    updatePost: function(model) {
      let route = this;
      model.save().then(function(data) {
        route.transitionTo('/post/' + data.id);
      });
    }
  }
});
