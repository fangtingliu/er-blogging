import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model(params) {
    console.log('params in model index rpute posts: ', params)
    return this.get('store').query('post', params);
  }
});
