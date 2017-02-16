import Ember from 'ember';

export default Ember.Component.extend({
  search: Ember.inject.service(),

  query: null,

  _valueChanged: Ember.observer('query', function() {
    // use the run loop to add a debounce
    Ember.run.debounce(this, function() {
      // check if the query is at least 2 chars
      if (this.get('query').length > 2) {
        this.set('search.searchValue', this.get('query'));
      } else if (this.get('query').length === 0) {
        this.set('search.searchResults', []);
      }
    }, 200);
  }),

});
