import Ember from 'ember';
import Auth from '../../mixins/auth';

export default Ember.Route.extend(Auth, {
  image: null,
  model() {
    return this.get('store').createRecord('post');
  },
  actions: {
    postPost(record) {
      // this.controller.send('clearStatus');
      const route = this;
      const file = route.get('image');
      if (image) {
        route.get('image').formData = {
          data: JSON.stringify(record.serialize().data)
        };
        route.get('image').submit();
      } else {
        record.save().then(() => {
          route.controller.set('model',  route.get('store').createRecord('post'));
          route.controller.send('updateStatus', 'succeed');
          }, function() {
            console.log('Message failed')
            route.controller.send('updateStatus', 'failure');
          }
        )
      }
    },
    fileAction(file) {
      this.set('image', file);
    },
    messageSendSucceed() {
      this.controller.set('model',  this.get('store').createRecord('message'));
    }
  }
});
