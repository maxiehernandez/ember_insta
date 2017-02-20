import Ember from 'ember';

export default Ember.Component.extend({
  search: Ember.inject.service("search"),

  query: null,

  _valueChanged: Ember.observer('query', function() {
    // FT: this need to happen before debounce, so you have enough time to wait for filter results come back
    // FT: In general, this is a bad practice. Hard-time waiting is always a bad idea since it can cause user experiance issue. Dont use unless it is absolutly necessary
    this.set('search.searchValue', this.get('query'));

    // use the run loop to add a debounce
    Ember.run.debounce(this, function() {
      // check if the query is at least 2 chars
      // FT: should be able to filter one 1 char too
      if (this.get('query').length > 0) {
        this.set('posts', this.get('search.searchResults'));
      }
    }, 200);
  }),
});
