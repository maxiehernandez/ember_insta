import Ember from 'ember';

export default Ember.Component.extend({
  search: Ember.inject.service("search"),

  query: null,

  valueChanged: Ember.observer('query', function() {
    this.set('search.searchValue', this.get('query'));

    // use the run loop to add a debounce
    Ember.run.debounce(this, function() {
      if (this.get('query').length > 0) {
        this.set('posts', this.get('search.searchResults'));
      }
    }, 200);
  }),
  actions: {
    nextPage: function(next) {
      this.get('nextPage')();
    },
    prevPage: function() {
      this.get('prevPage')();
    }
  }
});
