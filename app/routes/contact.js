import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('message');
  },
  actions: {
    postMessage(record) {
      record.save()
    }
  }
});
