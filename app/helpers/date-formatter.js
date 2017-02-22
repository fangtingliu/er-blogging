import Ember from 'ember';

export function dateFormatter([dateStr]) {
  return moment(dateStr).format('h:mm a, ddd, MM/DD/YYYY');
}

export default Ember.Helper.helper(dateFormatter);
