import DS from "ember-data";

// let underscore = Ember.String.underscore;
var host='http://localhost:3000';


//BY DEFAULT this code is not doing anything.  It will be set up to capture the CSRF token from Devise and attach it to outgoing requests.
export default DS.JSONAPIAdapter.extend({
  headers: {
    "X-CSRF-Token": "*"
  },
  host: host,
  ajax: function(url, method, hash) {
    hash = hash || {};
    hash.crossDomain = true;
    hash.xhrFields = {withCredentials: true};
    // hash.dataType = "jsonp";
    // hash.setRequestHeader("Content-Type", "jsonp");

    return this._super(url, method, hash);
  },
  handleResponse:function(status, headers, payload, requestData){
    console.log("====================return", requestData, headers);
    return this._super(...arguments);
 }
});
