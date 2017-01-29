import DS from 'ember-data';

export default DS.Model.extend({
  comments: DS.hasMany('comments', {async:true}),
  imageUrl: DS.attr('string'),
  name: DS.attr('string'),
  caption: DS.attr('string')
});
