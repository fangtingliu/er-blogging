import Ember from 'ember';

import ENV from '../config/environment';

export default Ember.Service.extend({
  rootURL: ENV.rootURL,
  devBaseUrl: ENV.devBaseUrl,
  devAppUrl: ENV.devAppUrl
});
