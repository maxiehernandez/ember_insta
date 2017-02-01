import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service("store"),
  actions: {
    newPost(image, name, caption, thumbnail) {
      let model = {
        imageUrl: image,
        name: name,
        caption: caption,
        thumbnailImage: thumbnail
      };
      this.sendAction('newPost', model);
      const file = document.getElementById('file-field').files[0];
      this.set({name: "", imageUrl: "", caption: "", thumbnailImage: file});
    }
  }
});
