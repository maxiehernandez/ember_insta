import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  actions: {
    newPost() {
      if (this.get('name'), this.get('imageUrl'), this.get('caption')) {
        this.get('store').createRecord("post", {
          name: this.get('name'),
          image_url: this.get('imageUrl'),
          caption: this.get('caption'),
        });
        this.transitionToRoute('posts');
      }
      this.set('name', "");
      this.set('imageUrl', "");
      this.set('caption', "");
    }
  }
});
