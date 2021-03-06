import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service("store"),
  actions: {
    deletePost(model) {
      this.sendAction('deletePost', model);
    }
  }
});
