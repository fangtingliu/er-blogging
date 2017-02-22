import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  comment: DS.attr(),
  postId: DS.attr(),
  createdAt: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
