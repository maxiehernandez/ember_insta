import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('document');
  }
  // actions: {
  //   uploadDocument() {
  //     $('#fileupload').fileupload({
  //       type: 'POST',
  //       url: 'localhost:3000/documents'
  //     });
  //   }
  // }
  // tagName: 'input',
  // type: 'file',
  // originalText: 'Upload Finished Product',
  // uploadingText: 'Uploading...'
});
