import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('message');
  },
  actions: {
    readMessage(message) {
      const route = this;
      console.log('readMessage message: ', message);
      message.set('read', true);
      message.save();
      // route.controller.get('model').reload().then(function(model) {
      //   console.log('in message Route reload cb: ', model)
      // });
      // route.modelFor('message').reload();
      // const model = route.controller.get('model');
      // console.log('readMessage model: ', model);
      // model.set({'read': true});
    }
  }
});
