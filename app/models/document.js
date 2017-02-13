import DS from 'ember-data';

export default DS.Model.extend({
  filename: DS.attr('string'),
  contentType: DS.attr('string'),
  fileContents: DS.attr('string')
});
