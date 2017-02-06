import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service("store"),
  // didInsertElement: function() {
  //   var self = this;
  //   this.$('#'+this.get('inputId')).fileupload({
  //       dataType: 'jsonp',
  //       url: this.get('uploadUrl'),
  //       formData: function() {
  //           return [{name: self.get('hiddenName'), value: self.get('hiddenValue')}];
  //       },
  //       done: function(e, data) {
  //           self.sendAction('uploaded', data.result);
  //           self.markCompleted(data.result.filenames);
  //       },
  //       fail: function (e, data) {
  //           self.sendAction('failed', data.result);
  //       },
  //       add: function(e, data) {
  //           data.process().done(function () {
  //               data.submit();
  //           });
  //       },
  //   });
  // },
  actions: {
    uploadDocument() {
      $('#fileupload').fileupload({
        method: 'POST',
        url: 'localhost:3000/documents'
      });

      // // Enable iframe cross-domain access via redirect option:
      // $('#fileupload').fileupload(
      // 'option',
      // 'redirect',
      // window.location.href.replace(
      //   /\/[^\/]*$/,
      //   '/cors/result.html?%s'
      // )
      // );
      //
      // if (window.location.hostname === 'blueimp.github.io') {
      // // Demo settings:
      // $('#fileupload').fileupload('option', {
      //   url: '//jquery-file-upload.appspot.com/',
      //   // Enable image resizing, except for Android and Opera,
      //   // which actually support image resizing, but fail to
      //   // send Blob objects via XHR requests:
      //   disableImageResize: /Android(?!.*Chrome)|Opera/
      //   .test(window.navigator.userAgent),
      //   maxFileSize: 999000,
      //   acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
      // });
      // // Upload server status check for browsers with CORS support:
      // if ($.support.cors) {
      //   $.ajax({
      //     url: '//jquery-file-upload.appspot.com/',
      //     type: 'HEAD'
      //   }).fail(function () {
      //     $('<div class="alert alert-danger"/>')
      //     .text('Upload server currently unavailable - ' +
      //     new Date())
      //     .appendTo('#fileupload');
      //   });
      // }
      // } else {
      // Load existing files:
      console.log("here ==============");
      $('#fileupload').addClass('fileupload-processing');

      $.ajax({
        url: $('#fileupload').fileupload('option', 'url'),
        data: {file: 'file goes here'},
        dataType: 'jsonp',
        context: $('#fileupload')[0],
      }).always(function () {
        $(this).removeClass('fileupload-processing');
      }).done(function (result) {
        $(this).fileupload('option', 'done')
        .call(this, $.Event('done'), {result: result});
      });
      // }
    }
  }
});
