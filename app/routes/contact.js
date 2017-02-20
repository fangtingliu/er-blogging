import Ember from 'ember';

export default Ember.Route.extend({
  file: null,
  model() {
    return this.get('store').createRecord('message');
  },
  actions: {
    postMessage(record) {
      // this.controller.actions.clearStatus();
      const route = this;
      const file = route.get('file');
      if (file) {
        route.get('file').formData = {
          data: JSON.stringify(record.serialize().data)
        }
        route.get('file').submit();
      } else {
        record.save();
        this.controller.set('model',  this.get('store').createRecord('message'));
      }
    },
    fileAction(file) {
      this.set('file', file);
    },
    messageSendSucceed() {
      this.controller.set('model',  this.get('store').createRecord('message'));
    }
  }
});
