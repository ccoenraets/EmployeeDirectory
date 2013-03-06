var MemoryStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var employees = this.employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, employees);
    }

    this.findByManager = function(managerId, callback) {
        var employees = this.employees.filter(function(element) {
            return element.managerId === managerId;
        });
        callLater(callback, employees);
    }

    this.findById = function(id, callback) {
        var employees = this.employees;
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        callLater(callback, employee);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    this.employees = [
            {"id": 1, "firstName": "Ryan", "lastName": "Howard", "title":"Vice President, North East", "managerId": 0, "city":"New York, NY", "cellPhone":"212-999-8888", "officePhone":"212-999-8887", "email":"ryan@dundermifflin.com", "reports" : 2},
            {"id": 2, "firstName": "Michael", "lastName": "Scott", "title":"Regional Manager", "managerId": 1, "managerName": "Ryan Howard", "city":"Scranton, PA", "cellPhone":"570-865-2536", "officePhone":"570-123-4567", "email":"michael@dundermifflin.com", "reports" : 7},
            {"id": 3, "firstName": "Dwight", "lastName": "Schrute", "title":"Assistant Regional Manager", "managerId": 2, "managerName": "Michael Scott", "city":"Scranton, PA", "cellPhone":"570-865-1158", "officePhone":"570-843-8963", "email":"dwight@dundermifflin.com", "reports" : 0},
            {"id": 4, "firstName": "Jim", "lastName": "Halpert", "title":"Assistant Regional Manager", "managerId": 2, "managerName": "Michael Scott", "city":"Scranton, PA", "cellPhone":"570-865-8989", "officePhone":"570-968-5741", "email":"dwight@dundermifflin.com", "reports" : 1},
            {"id": 5, "firstName": "Pamela", "lastName": "Beesly", "title":"Receptionist", "managerId": 2, "managerName": "Michael Scott", "city":"Scranton, PA", "cellPhone":"570-999-5555", "officePhone":"570-999-7474", "email":"pam@dundermifflin.com", "reports" : 0},
            {"id": 6, "firstName": "Angela", "lastName": "Martin", "title":"Senior Accountant", "managerId": 2, "managerName": "Michael Scott", "city":"Scranton, PA", "cellPhone":"570-555-9696", "officePhone":"570-999-3232", "email":"angela@dundermifflin.com", "reports" : 2},
            {"id": 7, "firstName": "Kevin", "lastName": "Malone", "title":"Accountant", "managerId": 6, "managerName": "Angela Martin", "city":"Scranton, PA", "cellPhone":"570-777-9696", "officePhone":"570-111-2525", "email":"kmalone@dundermifflin.com", "reports" : 0},
            {"id": 8, "firstName": "Oscar", "lastName": "Martinez", "title":"Accountant", "managerId": 6, "managerName": "Angela Martin", "city":"Scranton, PA", "cellPhone":"570-321-9999", "officePhone":"570-585-3333", "email":"oscar@dundermifflin.com", "reports" : 0},
            {"id": 9, "firstName": "Creed", "lastName": "Bratton", "title":"Quality Assurance", "managerId": 2, "managerName": "Michael Scott", "city":"Scranton, PA", "cellPhone":"570-222-6666", "officePhone":"570-333-8585", "email":"creed@dundermifflin.com", "reports" : 0},
            {"id": 10, "firstName": "Andy", "lastName": "Bernard", "title":"Sales Director", "managerId": 4, "managerName": "Jim Halpert", "city":"Scranton, PA", "cellPhone":"570-555-0000", "officePhone":"570-646-9999", "email":"andy@dundermifflin.com", "reports" : 2},
            {"id": 11, "firstName": "Phyllis", "lastName": "Lapin", "title":"Sales Representative", "managerId": 10, "managerName": "Andy Bernard", "city":"Scranton, PA", "cellPhone":"570-241-8585", "officePhone":"570-632-1919", "email":"phyllis@dundermifflin.com", "reports" : 0},
            {"id": 12, "firstName": "Stanley", "lastName": "Hudson", "title":"Sales Representative", "managerId": 10, "managerName": "Andy Bernard", "city":"Scranton, PA", "cellPhone":"570-700-6464", "officePhone":"570-787-9393", "email":"shudson@dundermifflin.com", "reports" : 0},
            {"id": 13, "firstName": "Meredith", "lastName": "Palmer", "title":"Supplier Relations", "managerId": 2, "managerName": "Michael Scott", "city":"Scranton, PA", "cellPhone":"570-588-6567", "officePhone":"570-981-6167", "email":"meredith@dundermifflin.com", "reports" : 0},
            {"id": 14, "firstName": "Kelly", "lastName": "Kapoor", "title":"Customer Service Rep.", "managerId": 2, "managerName": "Michael Scott", "city":"Scranton, PA", "cellPhone":"570-123-9654", "officePhone":"570-125-3666", "email":"kelly@dundermifflin.com", "reports" : 0},
            {"id": 15, "firstName": "Toby", "lastName": "Flenderson", "title":"Human Resources", "managerId": 1, "managerName": "Ryan Howard", "city":"Scranton, PA", "cellPhone":"570-485-8554", "officePhone":"570-699-5577", "email":"toby@dundermifflin.com", "reports" : 0}
        ];

    callLater(successCallback);

}