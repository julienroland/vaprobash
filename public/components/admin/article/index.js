define(["knockout", "text!./index.html", "tweenlite",], function (ko, indexTemplate) {
    function indexViewModel(route) {
        this.saveEdit = ko.observable(true);
        this.tabs = ko.observable(0);
        this.titleTypeAction = ko.observable();
        this.message = ko.observable('Welcome to Knockoutjs!');
        this.createNewArticle = function () {
            console.log('create');
            //ko.components.defaultLoader.loadTemplate('article-tab');
            this.tabs(this.tabs() + 1);
            this.titleTypeAction('Créer un nouvel article');
            this.saveEdit(true);
            console.log(TweenLite.to('#saveEdit', 2, {backgroundColor: "#ff0000"}));

        }
    }


    return {viewModel: indexViewModel, template: indexTemplate};

});
