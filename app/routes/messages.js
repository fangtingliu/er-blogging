import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    read: {
      refreshModel: true
    }
  },
  model(params) {
    if (params.read === 'all') {
      return this.get('store').findAll('message');
    } else {
      return this.get('store').query('message', params);
    }
  },
  actions: {
    readMessage(message) {
      const route = this;
      console.log('readMessage message: ', message);
      message.set('read', true);
      message.save().then(function() {
        route.store.unloadRecord(message);
      });
    },
    getMessageWithQuery(read) {
      const controller = this.controller;
      var queryParams = controller.get('queryParams');
      if (read === 'all') {
        controller.set('read', 'all');
      } else {
        controller.set('read', read);
      }
    }
  }
});
