import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service("store"),
  actions: {
    createNewPost() {
      let newPost = this.get('newPost');
      this.sendAction('createNewPost', newPost);
    }
  }
});
