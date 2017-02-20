import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service("store"),
  file: null,
  didInsertElement: function(){
    const component = this;
    $('#fileupload').fileupload({
      url: 'http://localhost:3000/posts',
      method: 'POST',
      add(error, data){
        component.set('file', data);
        console.log("new post file upload at", data);
      }
    });
  },
  actions: {
    createNewPost() {
      console.log(this.get("file"), "file object in createNewPost");
      const newPost = {
        imageUrl: this.get('imageUrl'),
        fileName: this.get('fileName'),
        caption: this.get('caption'),
        file: this.get('file')
      }
      this.sendAction('createNewPost', newPost);
    }
  }
});
