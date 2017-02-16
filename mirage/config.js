export default function() {
  this.namespace = '/api';

  this.get('/posts', function() {
    return {
      data: [{
        type: 'posts',
        id: 1,
        attributes: {
          title: 'First post',
          type: 'coding',
          summary: 'This is my first blog post. I am very excited!',
          'updated-at': '02-11-2017',
          tags: []
        }
      }, {
        type: 'posts',
        id: 2,
        attributes: {
          title: 'Second post',
          type: 'coding',
          summary: 'This is my second blog post. I am very excited!',
          'updated-at': '02-12-2017',
          tags: []
        }
      }, {
        type: 'posts',
        id: 3,
        attributes: {
          title: 'Third post',
          type: 'coding',
          summary: 'This is my third blog post. I am very excited!',
          'updated-at': '02-13-2017',
          tags: []
        }
      }]
    };
  });

  this.post('/messages', function(db, request) {
    const data = JSON.parse(request.requestBody);
    console.log('data in mirage post messages: ', data)
    return data;
  })
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
