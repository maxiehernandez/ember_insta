import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  size: 6,

  metaData: Ember.computed('model', function(){
    let meta = this.get('model.meta');
    meta['second_last'] = meta.total_pages - 1;
    meta['third_last'] = meta.total_pages - 2;
    var newMeta = {
      currentPage: meta['current-page'],
      nextPage: meta["next-page"],
      prevPage: meta['prev-page'],
      secondLast: meta.total_pages - 1,
      thirdLast: meta.total_pages - 2,
      totalPages: meta['total-pages'],
      totalCount: meta['total-count']
     }
     return newMeta;
  }),

  lastThreePages: Ember.computed('model', function(){
    if (this.get('page') < this.get('metaData.total_pages') - 3) {
      return false;
    } else {
      return true;
    }
  }),

  actions: {
    nextPage() {
      if (this.get('page') < this.get('metaData.total-pages')){
        let page = this.get('page');
        this.set('page', page + 1);
      }
    },

    prevPage() {
      if (this.get('page') > 1) {
        this.set('page', this.get('page') - 1);
      }
    }
  }
});
