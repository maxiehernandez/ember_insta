import Ember from 'ember';

export function dateFormatter([dateStr]) {
  return moment(dateStr).format('ll');
}

export default Ember.Helper.helper(dateFormatter);
