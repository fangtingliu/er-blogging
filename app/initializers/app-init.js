export function initialize(application) {
  // application.inject('component', 'applicationState', 'service:application-state');
  application.inject('route', 'applicationState', 'service:application-state');
  // application.inject('controller', 'applicationState', 'service:application-state');
  // application.inject('model', 'applicationState', 'service:application-state');
}

export default {
  name: 'app-init',
  initialize: initialize
};
