import DS from 'ember-data';

export default DS.Model.extend({
  email:attr(),
  //userClients:DS.hasMany("userClient",{async:true}),
  admin:attr()
});
