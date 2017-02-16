import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    shortenContent(content) {
      return content.slice(0, 100).split(' ').slice(0, -1).join(' ');
    }
  }
});
