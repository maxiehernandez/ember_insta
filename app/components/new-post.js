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
      console.log(newPost, "this is my new post Component");
      this.sendAction('createNewPost', newPost);
    }
  }
});
