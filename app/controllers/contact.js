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
      const controller = this;
      if (status === 'succeed') {
        controller.set('status.success', true);
      } else if (status === 'failure'){
        controller.set('status.fail', true);
      }
      setTimeout(() => controller.get('actions.clearStatus').bind(controller)(), 5000)
    }
  }
});
