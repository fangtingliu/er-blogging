import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitComment() {
      const input = {
        postId: this.get('model.id'),
        name: this.get('name'),
        email: this.get('email'),
        comment: this.get('comment')
      };
      console.log('show Controller input: ', input)
      const comment = this.get('store').createRecord('comment', input);
      comment.save();
    }
  }
});
