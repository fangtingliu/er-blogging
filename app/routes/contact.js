import Ember from 'ember';

export default Ember.Route.extend({
  file: null,
  model() {
    return this.get('store').createRecord('message');
  },
  actions: {
    postMessage(record) {
      const file = this.get('file');
      if (file) {
        this.get('file').formData = {
          data: JSON.stringify(record.serialize().data)
        }
        this.get('file').submit();
      } else {
        record.save();
      }
      this.controller.set('model',  this.get('store').createRecord('message'));
    },
    addFile(file) {
      this.set('file', file);
    }
  }
});
