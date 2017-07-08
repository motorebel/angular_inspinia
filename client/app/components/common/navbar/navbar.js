import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';

let navbarModule = angular.module('navbar', [
  uiRouter
])

// .config(($stateProvider, $urlRouterProvider) => {
//   "ngInject";
//   $stateProvider
//     .state('navbar', {
//       url: '/navbar',
//       component: 'navbar'
//     });
// })

.component('navbar', navbarComponent)

.name;

export default navbarModule;
