import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('display-button-edit-delete', 'DisplayButtonEditDeleteComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
   needs: ['component:inline-editable-text-field', 'component:bs-button']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});
