import Ember from 'ember';

export default Ember.Controller.extend({
  isAuthenticated: Ember.computed('session', function() {
    return this.get('session.isAuthenticated');
  })
});
