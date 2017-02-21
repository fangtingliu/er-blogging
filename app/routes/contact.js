import Ember from 'ember';

export default Ember.Route.extend({
  file: null,
  model() {
    return this.get('store').createRecord('message');
  },
  actions: {
    postMessage(record) {
      this.controller.send('clearStatus');
      const route = this;
      const file = route.get('file');
      if (file) {
        route.get('file').formData = {
          data: JSON.stringify(record.serialize().data)
        };
        route.get('file').submit();
      } else {
        record.save().then(() => {
          route.controller.set('model',  route.get('store').createRecord('message'));
          route.controller.send('updateStatus', 'succeed');
          }, function() {
            console.log('Message failed')
            route.controller.send('updateStatus', 'failure');
          }
        )
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
