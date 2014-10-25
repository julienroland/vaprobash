define(['knockout', 'text!./login.html', 'hasher'], function (ko, templateMarkup, hasher) {

    function Login(params) {
        this.email = ko.observable();
        this.authLogin = function () {
            $.post('/auth/login', $(arguments).serialize(), function (oData) {
                if (oData) {
                    hasher.setHash('');
                }
            });
        }
    }

    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    Login.prototype.dispose = function () {
    };

    return {viewModel: Login, template: templateMarkup};

});
