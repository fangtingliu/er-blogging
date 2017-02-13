import Ember from 'ember';

export default Ember.Component.extend({
  uploading: false,
  didInsertElement: function() {
    this.$('#fileupload').fileupload({
      url: '/fakeurl.com',
      method: 'post',
      add (e, data) {
        component.set("uploading",true);
        console.log('data in fileupload: ', data);
      }
    });
  }
});
