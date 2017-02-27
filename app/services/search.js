import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  searchValue: null,
  searchResults: [],
  resultsEmpty: false,

  noResults: Ember.computed('resultsEmpty', 'searchValue', function() {
    // ensure there is a search query and the results
    // are empty to prevent "No results for ''".
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
    // exit without making a reqeust if value cast is empty
    if (Ember.isBlank(this.get('searchValue'))) {
      return [];
    }

    this.get('store').query('search', {
      q: this.get('searchValue')
    }).then((results) => {
      // check if the query results are empty
      if (results.get('length') > 0) {
        this.set('resultsEmpty', false);
      } else {
        this.set('resultsEmpty', true);
      }
      this.set('searchResults', results);
    });
  })
});
