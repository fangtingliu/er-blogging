import Ember from 'ember';

export default Ember.Component.extend({
  uploading: false,
  data: null,
  upload: null,
  actions: {
    deleteFile() {
      this.set('data', null);
      this.set('upload', null);
      this.$('.upload-progress-container').css('visibility', 'hidden');
    }
  },
  didInsertElement: function() {
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('#upload-preview').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }

    $("#fileupload").change(function () {
      console.log('listener fileupload')
      readURL(this);
    });

    const component = this;
    this.$('#fileupload').fileupload({
      url: '/fakeurl.com',
      method: 'post',
      add (e, data) {
        component.set('data', data);
        if (data.files.length) {
          component.$('.upload-progress-container').css('visibility', 'visible');
          component.set('upload', data.files[0]);
          component.sendAction('addFile', data);
        }
      },
      done (e, data) {
        console.log('done in fileupload: ', data)
      }
    });
  }
});
