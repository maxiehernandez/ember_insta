import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('posts', {path: '/'}, function() {
    this.route("new");
  });
  this.resource('post', {path: '/post/:post_id'}, function() {
    this.route('edit');
    this.resource('comments', function() {
      this.route('new');
    });
  });
});
