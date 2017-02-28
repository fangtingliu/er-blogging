export function initialize(application) {
  application.inject('route', 'applicationState', 'service:application-state');
  application.inject('component', 'applicationState', 'service:application-state');
  application.inject('route', 'session', 'service:session');
}

export default {
  name: 'app-init',
  initialize: initialize
};
