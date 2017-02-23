import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    read: {
      refreshModel: true
    }
  },
  model(params) {
    console.log('in model: params : ', params)
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
      message.save();
      // TODO: add refreshModel after save
    },
    getMessageWithQuery(read) {
      // TODO: clean code and add tab active func into tabs
      const controller = this.controller;
      var queryParams = controller.get('queryParams');
      console.log('read in getMessageWithQuery: ', read, read === 'all', event)
      const m$ =  $(`#${this.get('elementId')}`);
      console.log('get element: ',m$.find('#all'))
      if (read === 'all') {
        controller.set('read', 'all');
        m$.find('#all').addClass('active');
        console.log('after set read to all: ', queryParams, controller.get('read'))
      } else {
        controller.set('read', read);
      }
      // console.log('read in getMessageWithQuery: ', read, queryParams);
    }
  }
});
