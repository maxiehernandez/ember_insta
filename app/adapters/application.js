import DS from "ember-data";

  var host='http://localhost:3000';


//BY DEFAULT this code is not doing anything.  It will be set up to capture the CSRF token from Devise and attach it to outgoing requests.
export default DS.JSONAPIAdapter.extend({
  host: host,
  ajax: function(url, method, hash) {
    hash = hash || {};
    hash.crossDomain = true;
    hash.xhrFields = {withCredentials: true};
    return this._super(url, method, hash);
  }
});
