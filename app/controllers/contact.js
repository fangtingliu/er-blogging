import Ember from 'ember';

export default Ember.Controller.extend({
  status: {
    success: false,
    fail: false
  },
  actions: {
    clearStatus() {
      this.set('status', {
        success: false,
        fail: false
      });
    },
    updateStatus(status) {
      if (status === 'succeed') {
        this.set('status.success', true);
      } else if (status === 'failure'){
        this.set('status.fail', true);
      }
    }
  }
});
