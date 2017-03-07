import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: null,

  init() {
    const service = this;
    Ember.$.ajax({
      url: 'http://localhost:3000/users/current',
      method: "GET",
      success: function(data) {
        if (data) {
          let currentUser = data.data;
          service.set("currentUser", currentUser);
        }
      },
      error: function(error) {
        if (error) {
          console.log(error);
        }
      }
    })
  }
});
