import DS from 'ember-data';

export default DS.Model.extend({
  // comments: DS.hasMany('comments', {async:true}),
  // imageUrl: DS.attr('string'),
  // name: DS.attr('string'),
  // caption: DS.attr('string')
  comments: DS.hasMany('comments', {async:true}),
  // users: DS.hasMany('users', {async:true}),
  caption: DS.attr('string'),
  originalFileName: DS.attr('string'),
  fileName: DS.attr('string'),
  fileContentType: DS.attr('string'),
  fileUpdatedAt: DS.attr('date'),
  imageUrl: DS.attr('string')
});
