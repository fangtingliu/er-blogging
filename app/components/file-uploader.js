import Ember from 'ember';

export default Ember.Component.extend({
  uploading: false,
  data: null,
  upload: null,
  actions: {
    deleteFile() {
      this.set('data', null);
      this.set('upload', null);
      this.$('.upload-progress-container').css('display', 'none');
      this.sendAction('fileAction', null);
      this.sendAction('clearStatus');
    }
  },
  didInsertElement: function() {
    const component = this;
    const route = component.get('route');
    const applicationState = component.get("applicationState")
    let url = applicationState.get('devBaseUrl');
    if (route === 'messages') {
      url = `${url}messages`;
    } else if (route === 'newPost') {
      url = `${url}posts`;
    }

    component.$('#fileupload').fileupload({
      url: url,
      method: 'post',
      dropZone: $('#dropzone'),
      replaceFileInput: false,
      fileInput: component.$("input:file"),
      add (e, data) {
        if (data.files && data.files[0]) {
          var reader = new FileReader();
          reader.addEventListener("load", function () {
            component.$('#upload-preview').attr('src', reader.result);
          }, false);
          reader.readAsDataURL(data.files[0]);
        }
        component.set('data', data);
        if (data.files.length) {
          component.$('.upload-progress-container').css('display', 'block');
          component.set('upload', data.files[0]);
          component.sendAction('fileAction', data);
        }
      },
      done (e, data) {
        component.set('status.success', true);
        component.actions.deleteFile.bind(component)();
        component.sendAction('messageSendSucceed');
      },
      fail (e, data) {
        component.set('status.fail', true);
      }
    });
  }
});
