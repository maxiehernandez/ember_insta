import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('post', { page: {
        number: params.page,
        size: params.size
      }
    });
  }
  // model() {
  //   return this.store.findAll('post');
  // }
});
