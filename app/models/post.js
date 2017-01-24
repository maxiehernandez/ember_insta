import DS from 'ember-data';

export default DS.Model.extend({
  comments: DS.hasMany('comment', {async:true}),
  image_url: DS.attr('text'),
  name: DS.attr('string'),
  text: DS.attr('caption')
});
