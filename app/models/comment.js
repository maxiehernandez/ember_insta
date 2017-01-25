import DS from 'ember-data';

export default DS.Model.extend({
  post: DS.belongsTo('post', {async:true}),
  body: DS.attr('text'),
  post_id: DS.attr('integer')
});
