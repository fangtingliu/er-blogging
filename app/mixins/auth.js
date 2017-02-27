import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel:function(route){
    console.log('mixin auth beforemodel');
    const routeName = route.targetName;
    const applicationState = this.get("applicationState");
    var sessionObject = this.get("session");
    const store=this.get("store")
    const redirect_route = `${applicationState.get("devAppUrl")}${routeName}`;

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
  }
});
