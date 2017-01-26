import { moduleForModel, test } from 'ember-qunit';

moduleForModel('posts/show', 'Unit | Model | posts/show', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
