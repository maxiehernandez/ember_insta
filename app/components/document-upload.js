import Ember from 'ember';

export default Ember.Component.extend({
  // store: Ember.inject.service("store"),

  actions: {
    upload: function(event) {
      console.log('upload', event.srcElement.files)
      const component = this
      component.set("postFile", event.srcElement.files);
    },

    uploadDocument() {
      const postFile = this.get("postFile")
      $.ajax({
        url: 'localhost:3000/documents',
        method: 'POST',
        data: {file: postFile[0]},
        processData: false,
        contentType: false,
      }).done(function (result) {
        console.log("here ==============");
      });
    }
  }
});
