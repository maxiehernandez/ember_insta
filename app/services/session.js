import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),

  isAuthenticated: function() {
    const service = this;
    const store = this.get('store');
    if (this.get("currentUser")) {
      return true;
    } else {
      Ember.$.ajax({
        url: 'http://localhost:3000/users/current',
        method: "GET",
        async:true,
        success: function(data) {
          if (data) {
            // const currentUser = store.push(store.normalize("user", data.data));
            // const current_user = service.set("currentUser", currentsUser);
          }
        },
        error: function(error) {
          if (error) {
            console.log(error);
          }
        }
      });
    }
  }.property('currentUser'),
  currentUser: null
});
