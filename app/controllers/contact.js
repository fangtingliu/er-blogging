import Ember from 'ember';

export default Ember.Controller.extend({
  status: {
    success: false,
    fail: false
  },
  actions: {
    clearStatus() {
      console.log('this in controller: ', this.set)
      this.set('status', {
        success: false,
        fail: false
      });
    }
  }
});
