import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const posts = this.get('store').findAll('post');
    
    console.log('posts in route posts index: ', posts)
    return posts;
  }
});
