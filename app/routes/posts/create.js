import Ember from 'ember';
import Auth from '../../mixins/auth';

export default Ember.Route.extend(Auth, {
  file: null,
  model() {
    return this.get('store').createRecord('post');
  },
  actions: {
    postPost(record) {
      const route = this;

      const user = route.get('session').get('currentUser');
      record.set('user', user);

      const file = route.get('file');
      if (file) {
        file.formData = {
          data: JSON.stringify(record.serialize().data)
        };
        file.submit();
      } else {
        record.save().then(() => {
          this.send('messageSendSucceed');
          route.controller.send('updateStatus', 'succeed');
        }, function() {
          console.log('Message failed')
          route.controller.send('updateStatus', 'failure');
        });
      }
    },
    categoryChange(cat){
      this.currentModel.set('category', cat);
    },
    fileAction(file) {
      this.set('file', file);
    },
    messageSendSucceed() {
      this.controller.set('model',  this.get('store').createRecord('message'));
    }
  }
});
