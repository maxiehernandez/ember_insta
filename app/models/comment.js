import DS from 'ember-data';

export default DS.Model.extend({
  post: DS.belongsTo('post', {async:true}),
  user: DS.belongsTo('user', {async:true}),
  body: DS.attr('string')
});
