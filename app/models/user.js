import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  admin: DS.attr(),
  posts: DS.hasMany('posts')
});
