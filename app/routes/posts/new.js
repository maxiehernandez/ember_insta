import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let user = this.store.findRecord("user", 1);
    user.then(function(user) {
      return user;
    });
  },
  actions: {
    createNewPost: function(newPost) {
      let route = this,
        user = this.store.peekRecord("user", 1);
      const postCreation = this.store.createRecord('post', {
        imageUrl: newPost.imageUrl,
        fileName: newPost.fileName,
        caption: newPost.caption,
        file: newPost.file,
        user: user
      });

      if (newPost.file !== null) {
        newPost.file.formData = {
          data: JSON.stringify(postCreation.serialize().data)
        }
        newPost.file.submit().then(function(objectAfterSave) {
          route.transitionTo('/post/' + objectAfterSave.data.id);
        });
      } else {
        if (/^(ftp|http|https):\/\/[^ "]+$/.test(newPost.imageUrl)) {
          user.get('posts').pushObject(postCreation);
          postCreation.save().then(function(objectAfterSave) {
            route.transitionTo('/post/' + objectAfterSave.id);
          });
        } else {
        alert("Please put in a valid URL.");
        }
      }
    }
  }
});
