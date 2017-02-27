import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({
  screenWidth:screen.width,
  screenHeight:screen.height,
  boxAccessToken:null,
  boxRefreshToken:null,
  isDevelopment:function(){
    if(ENV.environment==="production"){
      return false
    }
    else{
      return true
    }
  }.property(""),
  notAuthorizedSignOut:function(){
    if(ENV.environment==="production"){
      window.location.href="https://toolbelt.kaufmanrossin.com/apps?flash=not_authorized";
    }else{
      window.location.href="http://localhost:4000/apps?flash=not_authorized";
    }
  },
  isAuthenticated: function() {
    var sessionObject=this;
    var store = this.get("store");
    var applicationState = this.get("applicationState")
    if(this.get("currentUser")){
      console.log("yes")
      return true;
    }
  }.property('currentUser'),
  currentUser:null,
  boxAccessObserver:function(){
    var applicationState = this.get("applicationState")
    if(this.get("boxAccessToken")){

    }else{
      //window.location.href=applicationState.get("baseUrl")+"authenticate_with_box"
    }
  }.observes("currentUser"),
  actions:{

  }
});
