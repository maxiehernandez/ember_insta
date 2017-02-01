import Ember from 'ember';
import FormAdapterMixin from 'ember-insta/mixins/form-adapter';
import { module, test } from 'qunit';

module('Unit | Mixin | form adapter');

// Replace this with your real tests.
test('it works', function(assert) {
  let FormAdapterObject = Ember.Object.extend(FormAdapterMixin);
  let subject = FormAdapterObject.create();
  assert.ok(subject);
});
