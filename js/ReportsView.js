var ReportsView = function(store, employee) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(ReportsView.template(employee));
        store.findByManager(employee.id, function(employees) {
            $('.list').html(ReportsView.liTemplate(employees));
        });
        return this;
    };

    this.initialize();

}

ReportsView.template = Handlebars.compile($("#reports-tpl").html());
ReportsView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());