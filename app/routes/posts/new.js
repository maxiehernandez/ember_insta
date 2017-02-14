import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let user = this.get('store').findRecord("user", 1).then(function(user){
      return user;
    });

    // console.log(user, user.get('username'), "is my user null?");
    // user.get('posts').pushObject(user);
    // user.save();
  },
  actions: {
    createNewPost: function(newPost) {
      this.store.createRecord(newPost, {
        imageUrl: imageUrl,
        fileName: fileName,
        caption: caption,
        originalFileName: originalFileName,
        fileContentType: fileContentType,
        fileUpdatedAt: fileUpdatedAt,
        user: user
      });
      let route = this;
      newPost.save().then(function(data) {
        route.transitionTo('posts');
      });
    }
  }
});
