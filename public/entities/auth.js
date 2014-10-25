function Auth() {

    this.check = function (callback) {
        return $.ajax({
            url: '/auth/login/check',
            async: false,
            type: "POST",
            data: $(arguments).serialize(),
            success:callback
        });
    }
}
