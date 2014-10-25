define(['knockout', 'text!./programme-grid.html'], function(ko, templateMarkup) {

  function ProgrammeGrid(params) {
    this.message = ko.observable('Hello from the programme-grid component!');
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  ProgrammeGrid.prototype.dispose = function() { };
  
  return { viewModel: ProgrammeGrid, template: templateMarkup };

});
