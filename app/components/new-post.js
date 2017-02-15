import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service("store"),
  actions: {
    createNewPost() {
      const newPost = {
        imageUrl: this.get('imageUrl'),
        fileName: this.get('fileName'),
        caption: this.get('caption')
      }
      this.sendAction('createNewPost', newPost);
    }
  }
});
