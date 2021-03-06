import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service("store"),
  actions: {
    updatePost(model) {
      this.sendAction('updatePost', model);
    }
  }
});
