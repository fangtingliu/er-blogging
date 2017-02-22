import Ember from 'ember';

export default Ember.Component.extend({
  reversedComments: function() {
    return this.get('comments').toArray().reverse();
  }.property('model.@each')
});
