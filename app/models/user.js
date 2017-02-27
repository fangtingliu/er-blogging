import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  //userClients:DS.hasMany("userClient",{async:true}),
  admin: DS.attr()
});
