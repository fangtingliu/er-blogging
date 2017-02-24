import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
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
    },
    getMessageImage(message) {
      const route = this;
      console.log("getMessageImage: ", message);
      const id = message.id;
      const file = message.get('file');
      if (file && !/http/.test(file)) {
        route.get('ajax').request(`${route.get('applicationState').devBaseUrl}messages/image`, {
          method: 'GET',
          data: {
            id: id,
            image: true
          }
        }).then(function(obj){
          console.log('then obj: ', obj)
          message.set('file', obj.url)
        });
      }
    }
  }
});
