import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  category: DS.attr(),
  author: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
  tags: DS.attr('array'),
  updatedAt: DS.attr(),
  comments: DS.hasMany('comment', {async: true}),
  user: DS.belongsTo('user')
});
