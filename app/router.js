import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('posts', {path: '/'}, function() {
    this.route('edit', {path: 'post/:post_id/edit'});
    this.route("new", {path: '/post/new'});
    this.route('show', {path: '/post/:post_id'}, function() {
      this.route('comments', function() {
        this.route('new', {path: '/comment/new'});
      });
    });
  });
  this.route('user');
});

export default Router;
