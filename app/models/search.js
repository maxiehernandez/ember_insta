import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  description: DS.attr('string'),
  title: DS.attr('string'),

  link: Ember.computed('type', function() {
    switch (this.get('type')) {
      case 'Post':
        return `post/${this.get('id')}`;
      case 'Comment':
        return `comment/${this.get('id')}`;
    }
  })
});
