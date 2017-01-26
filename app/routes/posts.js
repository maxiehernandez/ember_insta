import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log("hello world")
    return this.store.findAll('post');
  }
});
