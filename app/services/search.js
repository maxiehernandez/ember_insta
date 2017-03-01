import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  searchValue: null,
  searchResults: [],
  resultsEmpty: false,

  noResults: Ember.computed('resultsEmpty', 'searchValue', function() {
    if (this.get('resultsEmpty') && Ember.isPresent(this.get('searchValue')) && this.get('searchValue').length > 0) {
      return true;
    } else {
      return false;
    }
  }),

  results: Ember.computed('searchResults.[]', function() {
    return this.get('searchResults');
  }),

  fetchSearchResults: Ember.observer('searchValue', function() {
    if (Ember.isBlank(this.get('searchValue'))) {
      return [];
    }

    this.get('store').query('search', {
      q: this.get('searchValue')
    }).then((results) => {
      if (results.get('length') > 0) {
        this.set('resultsEmpty', false);
      } else {
        this.set('resultsEmpty', true);
      }
      this.set('searchResults', results);
    });
  })
});
