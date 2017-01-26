import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', {path: '/'}, function() {
    this.route("new");
  });
  this.route('post', {path: '/post/:post_id'}, function() {
    this.route('edit');
    this.route('comments', function() {
      this.route('new');
    });
  });
});

export default Router;
