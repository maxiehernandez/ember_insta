import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service("store"),
  actions: {
    newPost(image, name, caption) {
      let model = {
        imageUrl: image,
        name: name,
        caption: caption
      }
      this.sendAction('newPost', model);

      this.set('name', "");
      this.set('imageUrl', "");
      this.set('caption', "");
    }
  }
});
