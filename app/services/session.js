import Ember from 'ember';

export default Ember.Service.extend({

  isAuthenticated: function() {
    const service = this;
    const store = this.get("store");
    if (this.get("currentUser")) {
      console.log('currentUser', "im in the if statement");
      return true;
    } else {
      console.log('currentUser', "im in the else statement");
      Ember.$.ajax({
        url: 'http://localhost:3000/users/current',
        method: "GET",
        async:true,
        success: function(data) {
          if (data) {
            const currentUser = store.push(store.normalize("user",data.data));
            service.set("currentUser", currentUser);
            service.notifyPropertyChange("currentUser");
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
