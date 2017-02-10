import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service("store"),
  actions: {
    upload: function(event) {
      console.log('upload', event.srcElement.files);
      const component = this;
      component.set("postFile", event.srcElement.files);
    },

    uploadDocument() {
      const postFile = this.get("postFile");
      console.log(postFile);
      var formData = new FormData();
      formData.append("username", "Groucho");
      formData.append("accountnum", 123456);
      formData.append("userfile", postFile[0]);

      $.ajax({
        url: 'http://localhost:3000/documents',
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
      }).done(function (result) {
        console.log("here ==============");
      });
    }
  }
});
