define(["knockout", "crossroads", "hasher", "filters"], function (ko, crossroads, hasher) {

    return new Router({
        routes: [
            {url: '', params: {page: 'home-page', before: 'auth'}},
            {url: 'about', params: {page: 'about-page', before: 'auth'}},
            {url: 'admin', params: {page: 'admin', before: 'auth'}},
            {url: 'auth/login', params: {page: 'auth/login', before: 'guest'}}
        ]
    });

    function Router(config) {
        var currentRoute = this.currentRoute = ko.observable({});

        ko.utils.arrayForEach(config.routes, function (route) {
            crossroads.addRoute(route.url, function (requestParams) {
                new filters(route.params);
                currentRoute(ko.utils.extend(requestParams, route.params));
            });
        });

        activateCrossroads();
    }


    function beforeFilter(beforeFilter) {
        console.log(beforeFilter);
    }

    function activateCrossroads() {
        function parseHash(newHash, oldHash) {
            crossroads.parse(newHash);
        }

        crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
    }
});
