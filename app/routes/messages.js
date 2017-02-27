import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
  beforeModel:function(){
    var applicationState = this.get("applicationState");
    var sessionObject = this.get("session");
    var store=this.get("store")
    var redirect_route = `${applicationState.get("devAppUrl")}messages`;

    $.ajaxSetup({
      xhrFields: {
        withCredentials: true
      }
    });
    Ember.$.ajax({
      url: `${applicationState.get("devBaseUrl")}users/current.json`,
      method: "GET",
      async: true,
      success: function(data) {
        if(data){
          var currentUser = store.push(store.normalize("user",data.data));
          var current_user = sessionObject.set("currentUser",currentUser);
          sessionObject.notifyPropertyChange("currentUser");
        }
      },
      error: function(error) {
        if (error.responseJSON.errors.indexOf("not_signed_in") !== -1) {
          window.location.href = `${applicationState.get("devBaseUrl")}doorkeeper_in_between?redirect_route=${redirect_route}`;
        } else if (error.responseJSON.errors.indexOf("not_authorized") !== -1) {
          sessionObject.get("notAuthorizedSignOut")();
        } else {
          console.log(error);
        }
      }
    });
  },
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
          message.set('filePath', obj.url)
        });
      }
    }
  }
});
