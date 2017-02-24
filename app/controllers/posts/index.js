import Ember from 'ember';

export default Ember.Controller.extend({
  search: '',
  queryParams: ['search'],
  actions: {
    setSearchQuery(query) {
      this.set('search', query);
    }
  }
});
