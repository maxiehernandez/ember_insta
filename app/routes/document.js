import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('document');
  },
  tagName: 'input',
  type: 'file',
  originalText: 'Upload Finished Product',
  uploadingText: 'Uploading...'
});
