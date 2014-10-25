define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections'], function ($, ko, router) {

    // Components can be packaged as AMD modules, such as the following:
    ko.components.register('admin-nav-bar', {require: 'components/admin/nav-bar/nav-bar'});
    ko.components.register('admin-home-page', {require: 'components/admin/home-page/home'});


    // ... or for template-only components, you can just point to a .html file directly:


    // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

    // Start the application
    ko.applyBindings({route: router.currentRoute});
});
