import Ember from 'ember';

export default Ember.Route.extend({
  data: null,
  model() {
    return this.get('store').createRecord('message');
  },
  actions: {
    postMessage(record) {
      this.get('data').submit();
      record.save();
    },
    addFile(data) {
      this.set('data', data);
    }
  }
});
