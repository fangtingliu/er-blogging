import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  message: DS.attr(),
  file: DS.attr(),
  createdAt: DS.attr()
});
