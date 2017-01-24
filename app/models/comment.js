import DS from 'ember-data';

export default DS.Model.extend({
  post: DS.belongsTo('blog-post', {async:true}),
  body: DS.attr('text'),
  post_id: DS.attr('integer')
});
