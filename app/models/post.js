import DS from 'ember-data';

export default DS.Model.extend({
  comments: DS.hasMany('comments', {async:true}),
  image_url: DS.attr('text'),
  name: DS.attr('string'),
  caption: DS.attr('text')
});
