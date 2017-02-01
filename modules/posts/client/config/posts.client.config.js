(function () {
  'use strict';

  angular
    .module('posts')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {

    // -------------- Set top bar menu items ------------//

    // -------------- Latest Posts menu ------------//
    menuService.addMenuItem('topbar', {
      title: 'Latest Posts',
      state: 'posts.list',
      roles: ['*']
    });
      // -------------- Create Posts menu ------------//
    menuService.addMenuItem('topbar', {
      title: 'Create Posts',
      state: 'posts.create',
      roles: ['user']
    });
  }
}());
