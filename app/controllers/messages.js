import Ember from 'ember';

export default Ember.Controller.extend({
  read: 'false',
  queryParams: ['read'],
  active: Ember.computed('read', function() {
    const read = this.get('read');
    if (read === 'false') {
      return 'unread';
    } else if (read === 'true') {
      return 'read';
    } else if (read === 'all') {
      return 'all';
    }
  })
});
