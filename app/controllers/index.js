import Ember from 'ember';

export default Ember.Controller.extend({
  assets: [],
  actions:{
    receiveFile: function(file){
      var asset;

      asset = this.store.createRecord('asset', {
        image:  file,
        imageName: file.name,
        title: 'something'
      });

      this.get('assets').pushObject(asset);

      asset.save().then(function(asset){
        console.info(asset.get('imageUrl'));
      }, function(error){
        console.debug('Upload failed', error);
      }, 'file upload');
    },

    uploadProgress: function(progress){
      this.set('assets.lastObject.progress', progress);
    }
  }
});
