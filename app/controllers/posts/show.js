import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitComment() {
      const controller = this;
      const input = {
        postId: controller.get('model.id'),
        name: controller.get('name'),
        email: controller.get('email'),
        comment: controller.get('comment')
      };
      console.log('show Controller input: ', input)
      const comment = controller.get('store').createRecord('comment', input);
      comment.save().then(function(){
        console.log('succeed submitComment')
        controller.set('name', '');
        controller.set('email', '');
        controller.set('comment', '');
      });
    }
  }
});
