import DS from "ember-data";

// let underscore = Ember.String.underscore;
var host='http://localhost:3000';


//BY DEFAULT this code is not doing anything.  It will be set up to capture the CSRF token from Devise and attach it to outgoing requests.
export default DS.JSONAPIAdapter.extend({
  // keyForAttribute: function(attr) {
  //   return underscore(attr);
  // },
  //
  // keyForRelationship: function(rawKey) {
  //   return underscore(rawKey);
  // },
  host: host,
  ajax: function(url, method, hash) {
    hash = hash || {};
    hash.crossDomain = true;
    hash.xhrFields = {withCredentials: true};
    // check if hash.data.data is not undefined and if it has a image-url attribture
      // - if true
    if (hash.data.data != undefined && hash.data.data.attributes["image-url"]) {
      var new_key = "image_url",
          old_key = "image-url",
          old_hash = hash.data.data.attributes;
      // get the hash and replace the old key with the new key, to send to the server as 'image_url'
      Object.defineProperty(old_hash, new_key, Object.getOwnPropertyDescriptor(old_hash, old_key));
      delete old_hash[old_key];

    }
    return this._super(url, method, hash);
  }
});
