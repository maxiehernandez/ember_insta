import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let user = this.store.findRecord("user", 1)
    user.then(function(user){
      return user;
    });
  },
  actions: {
    createNewPost: function(newPost) {
      let user = this.store.peekRecord("user", 1);
      const postCreation = this.store.createRecord('post', {
        imageUrl: newPost.imageUrl,
        fileName: newPost.fileName,
        caption: newPost.caption,
        user: user
      });

      if (newPost.file !== null) {
        newPost.file.formData = {
          data: JSON.stringify(postCreation.serialize().data)
        }
        newPost.file.submit().then(function(data){
          console.log(data);
        });
      }else {
        user.get('posts').pushObject(postCreation);
        postCreation.save().then(function(data) {
          console.log(data);
        });
      }
      this.transitionTo('posts');
    }
  }
});
