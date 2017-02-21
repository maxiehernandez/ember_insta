import DS from 'ember-data';

export default DS.Model.extend({
  comments: DS.hasMany('comments', {async:true}),
  user: DS.belongsTo('user', {async:true}),
  caption: DS.attr('string'),
  originalFileName: DS.attr('string'),
  fileName: DS.attr('string'),
  fileContentType: DS.attr('string'),
  fileUpdatedAt: DS.attr('date'),
  file: DS.attr('string'),
  imageUrl: DS.attr('string')
});
