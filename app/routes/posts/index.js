import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model(params) {
    return this.get('store').query('post', params);
  },
  resetController: function (controller) {
    var queryParams = controller.get('queryParams');
    queryParams.forEach(function (param) {
      controller.set(param, '');
    });
  }
});
