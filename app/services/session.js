import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: null,
  const sessionService = this;

  init() {
    Ember.$.ajax({
        url: 'http://localhost:3000/users/current',
        method: "GET",
        success: function(data) {
          if (data) {
            var currentUser = store.push(store.normalize("user", data.data));
            var current_user = sessionService.set("currentUser", currentUser);
            sessionService.notifyPropertyChange("currentUser");
          }
        }
      }
    }
});
