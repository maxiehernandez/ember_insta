import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log("here");
    return this.store.findAll('document');
  }
});
