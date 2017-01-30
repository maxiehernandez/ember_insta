import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service("store"),
  actions: {
    updatePost(image, name, caption) {
      let model = {
        imageUrl: image,
        name: name,
        caption: caption
      };

      this.get('name');
      this.get('imageUrl');
      this.get('caption');

      this.set('name', "");
      this.set('imageUrl', "");
      this.set('caption', "");

      this.sendAction('updatePost', model);
    }
  }
});
